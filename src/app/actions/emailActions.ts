"use server";

import nodemailer from "nodemailer";

interface EmailData {
    name: string;
    email: string;
    phone: string;
    location: string;
    company: string;
    message?: string;
    formSource: string;
    captchaToken?: string | null;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;

const normalizeField = (value: string | undefined, maxLength: number) =>
    (value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function sendEmailAction(data: EmailData) {
    "use server";

    const name = normalizeField(data.name, 80);
    const company = normalizeField(data.company, 80);
    const email = normalizeField(data.email, 120);
    const phone = normalizeField(data.phone, 20);
    const location = normalizeField(data.location, 150);
    const message = normalizeField(data.message, 180);
    const formSource = normalizeField(data.formSource, 120);
    const captchaToken = data.captchaToken;

    if (!name || !email || !phone || !location || !company || !formSource) {
        return { success: false, message: "Please fill in all required fields." };
    }

    // Verify Captcha
    if (process.env.NODE_ENV !== "development") {
        if (!captchaToken) {
            return { success: false, message: "Please complete the CAPTCHA." };
        }

        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
        if (!recaptchaSecret && !process.env.RECAPTCHA_SECRET_KEY) {
            console.error("RECAPTCHA_SECRET_KEY is missing in environment variables.");
        } else {
            try {
                const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${captchaToken}`, {
                    method: "POST",
                });
                const result = await response.json();
                if (!result.success) {
                    return { success: false, message: "CAPTCHA verification failed. Please try again." };
                }
            } catch (error) {
                console.error("CAPTCHA verification error:", error);
                // Fallback: allow submission if service is down, but log error
            }
        }
    }

    if (!EMAIL_REGEX.test(email)) {
        return { success: false, message: "Please enter a valid email address." };
    }

    if (!PHONE_REGEX.test(phone)) {
        return { success: false, message: "Please enter a valid phone number." };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmailTo = process.env.CONTACT_EMAIL_TO;
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Fiesta Smart Mobility";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !contactEmailTo) {
        console.error("Missing required email environment variables.");
        return { success: false, message: "Email service is not configured. Please try again later." };
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message || "No message provided.");
    const safeFormSource = escapeHtml(formSource);

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${siteName} - Form" <${smtpUser}>`,
            to: contactEmailTo,
            replyTo: email,
            subject: `New Lead from ${formSource}: ${safeName} - ${safeCompany}`,
            text: `
                Name: ${safeName}
                Company: ${safeCompany}
                Email: ${safeEmail}
                Phone: ${safePhone}
                Location: ${safeLocation}
                Source Form: ${safeFormSource}
                
                Message:
                ${safeMessage}
            `,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 1px solid #eee;">
                    <!-- Header -->
                    <div style="background-color: #EC2028; padding: 30px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                            New Lead Captured
                        </h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">
                            From ${safeFormSource}
                        </p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 30px 40px;">
                        <div style="margin-bottom: 25px;">
                            <h3 style="color: #333; border-bottom: 2px solid #EC2028; padding-bottom: 8px; margin-bottom: 15px; font-size: 18px;">
                                Prospect Details
                            </h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #666; width: 140px; font-weight: 600;">Name:</td>
                                    <td style="padding: 8px 0; color: #333;">${safeName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Company:</td>
                                    <td style="padding: 8px 0; color: #333;">${safeCompany}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Email:</td>
                                    <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #EC2028; text-decoration: none;">${safeEmail}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Phone:</td>
                                    <td style="padding: 8px 0;"><a href="tel:${safePhone}" style="color: #EC2028; text-decoration: none;">${safePhone}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Location:</td>
                                    <td style="padding: 8px 0; color: #333;">${safeLocation}</td>
                                </tr>
                            </table>
                        </div>

                        <div style="margin-top: 30px; background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #EC2028;">
                            <h3 style="color: #333; margin-top: 0; font-size: 16px; margin-bottom: 10px;">Message:</h3>
                            <p style="color: #444; margin: 0; line-height: 1.6; font-style: italic;">
                                "${safeMessage}"
                            </p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #f4f4f4; padding: 20px; text-align: center; color: #888; font-size: 12px;">
                        <p style="margin: 0;">This inquiry was sent from the <strong>${siteName}</strong> website.</p>
                        <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${siteName}. All rights reserved.</p>
                    </div>
                </div>
            `,
        });

        // Store in Google Sheets if URL is provided
        const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
        if (googleScriptUrl) {
            try {
                // Map data precisely to the user's specific Google Sheet columns
                const sheetData = {
                    "name-1": safeName,        // First Name
                    "phone-1": safePhone,          // phone
                    "name-2": safeCompany,         // name
                    "email-1": safeEmail,          // email
                    "address-1-street_address": safeLocation, 
                    "address-1-city": "",      
                    "address-1-state": "",     
                    
                    "timestamp": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                    "source": safeFormSource,
                    "message": safeMessage
                };

                const formBody = new URLSearchParams(sheetData);

                const response = await fetch(googleScriptUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formBody.toString(),
                });
                
                const responseText = await response.text();
                console.log(`Google Sheets integration status: ${response.status} ${response.statusText}`);
                console.log(`Google Sheets response body: ${responseText.substring(0, 200)}`);
                
                if (!response.ok) {
                    console.error("Failed to send data to Google Sheets (non-200 response)");
                } else {
                    console.log("Form data successfully sent to Google Sheets.");
                }
            } catch (sheetError) {
                console.error("Error storing data in Google Sheets:", sheetError);
            }
        } else {
            console.warn("GOOGLE_SCRIPT_URL is not configured. Form data was not stored in Google Sheets.");
        }

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { success: false, message: "Error sending email. Please try again." };
    }
}

export interface CareerApplicationData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    position: string;
    experience: string;
    currentCompany: string;
    resumeFileName?: string;
    resumeBase64?: string;
}

export async function sendCareerApplicationAction(data: CareerApplicationData) {
    "use server";

    const fullName = normalizeField(data.fullName, 80);
    const email = normalizeField(data.email, 120);
    const phone = normalizeField(data.phone, 20);
    const location = normalizeField(data.location, 150);
    const position = normalizeField(data.position, 100);
    const experience = normalizeField(data.experience, 80);
    const currentCompany = normalizeField(data.currentCompany, 120);
    const resumeFileName = data.resumeFileName ? normalizeField(data.resumeFileName, 120) : "Not uploaded";

    if (!fullName || !email || !phone || !location || !position || !experience || !currentCompany) {
        return { success: false, message: "Please fill in all required fields." };
    }

    if (!EMAIL_REGEX.test(email)) {
        return { success: false, message: "Please enter a valid email address." };
    }

    if (!PHONE_REGEX.test(phone)) {
        return { success: false, message: "Please enter a valid phone number." };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const targetEmail = "hr_executive@fiestaindia.net";
    const backupEmail = process.env.CONTACT_EMAIL_TO;
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Fiesta Smart Mobility";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
        console.warn("SMTP credentials not fully configured. Falling back to success for mailto client.");
        return { success: true, message: "Application details prepared." };
    }

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safePosition = escapeHtml(position);
    const safeExperience = escapeHtml(experience);
    const safeCompany = escapeHtml(currentCompany);
    const safeResumeName = escapeHtml(resumeFileName);

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    });

    const attachments: any[] = [];
    if (data.resumeBase64 && data.resumeFileName) {
        attachments.push({
            filename: data.resumeFileName,
            content: data.resumeBase64.split("base64,")[1] || data.resumeBase64,
            encoding: "base64",
        });
    }

    try {
        await transporter.sendMail({
            from: `"${siteName} Careers" <${smtpUser}>`,
            to: targetEmail,
            cc: backupEmail ? [backupEmail] : undefined,
            replyTo: email,
            subject: `New Job Application: ${safePosition} - ${safeName}`,
            text: `
                Job Application Received
                -----------------------------------
                Position: ${safePosition}
                Full Name: ${safeName}
                Email: ${safeEmail}
                Phone: ${safePhone}
                Location: ${safeLocation}
                Total Experience: ${safeExperience}
                Current Company / Designation: ${safeCompany}
                Resume File: ${safeResumeName}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 20px auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
                    <div style="background-color: #EC2028; padding: 24px; text-align: center; color: #ffffff;">
                        <h2 style="margin: 0; font-size: 22px;">New Career Application</h2>
                        <p style="margin: 6px 0 0; opacity: 0.9; font-size: 14px;">Fiesta Smart Mobility Hiring Portal</p>
                    </div>
                    <div style="padding: 28px;">
                        <div style="background: #f9fafb; border-left: 4px solid #EC2028; padding: 12px 16px; margin-bottom: 20px;">
                            <strong style="color: #111827; font-size: 16px;">Position Applied: ${safePosition}</strong>
                        </div>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr><td style="padding: 8px 0; color: #6b7280; width: 180px; font-weight: 600;">Full Name:</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${safeName}</td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #EC2028;">${safeEmail}</a></td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${safePhone}" style="color: #EC2028;">${safePhone}</a></td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Current City / Location:</td><td style="padding: 8px 0; color: #111827;">${safeLocation}</td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Total Years of Experience:</td><td style="padding: 8px 0; color: #111827;">${safeExperience}</td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Current Company / Designation:</td><td style="padding: 8px 0; color: #111827;">${safeCompany}</td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Attached Resume:</td><td style="padding: 8px 0; color: #111827;">${safeResumeName}</td></tr>
                        </table>
                    </div>
                    <div style="background: #f3f4f6; padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
                        Application sent to hr_executive@fiestaindia.net via Fiesta Smart Mobility Careers.
                    </div>
                </div>
            `,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        return { success: true, message: "Application submitted successfully!" };
    } catch (error) {
        console.error("Career email error:", error);
        // Return success true so client can still trigger mailto link fallback smoothly
        return { success: true, message: "Application registered." };
    }
}

