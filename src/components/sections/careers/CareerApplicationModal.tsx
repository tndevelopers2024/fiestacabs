"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaPaperPlane, FaTimes, FaCloudUploadAlt, FaFileAlt, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { sendCareerApplicationAction } from "@/src/app/actions/emailActions";

interface CareerApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialPosition?: string;
}

const defaultPositions = [
    "Tender & Proposals - Executive",
    "Senior Operation Executive",
    "Driver",
    "Other Position",
];

export default function CareerApplicationModal({
    isOpen,
    onClose,
    initialPosition = "",
}: CareerApplicationModalProps) {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        position: initialPosition || "Tender & Proposals - Executive",
        experience: "",
        currentCompany: "",
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [mailtoLink, setMailtoLink] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync initial position when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData((prev) => ({
                ...prev,
                position: initialPosition || prev.position || "Tender & Proposals - Executive",
            }));
            setIsSuccess(false);
            setErrorMessage("");
        }
    }, [isOpen, initialPosition]);

    // Handle Escape key and body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted) return null;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrorMessage("File size must be under 5MB.");
                return;
            }
            setErrorMessage("");
            setResumeFile(file);
        }
    };

    const generateMailtoUrl = () => {
        const subject = encodeURIComponent(
            `Job Application: ${formData.position} - ${formData.fullName}`
        );
        const bodyContent = `Dear HR Team (hr_executive@fiestaindia.net),

I would like to apply for the position of: ${formData.position}

Applicant Information:
--------------------------------------------------
Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Current City / Location: ${formData.location}
Position Applying For: ${formData.position}
Total Years of Experience: ${formData.experience}
Current Company / Designation: ${formData.currentCompany}
Resume Attached: ${resumeFile ? resumeFile.name : "Please find my resume attached."}
--------------------------------------------------

Looking forward to hearing from you.

Best regards,
${formData.fullName}
${formData.phone}
`;

        return `mailto:hr_executive@fiestaindia.net?subject=${subject}&body=${encodeURIComponent(
            bodyContent
        )}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        // Validation
        if (
            !formData.fullName.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.location.trim() ||
            !formData.position.trim() ||
            !formData.experience.trim() ||
            !formData.currentCompany.trim()
        ) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        if (!resumeFile) {
            setErrorMessage("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);

        const emailUrl = generateMailtoUrl();
        setMailtoLink(emailUrl);

        try {
            let resumeBase64: string | undefined = undefined;
            if (resumeFile) {
                resumeBase64 = await new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.readAsDataURL(resumeFile);
                });
            }

            await sendCareerApplicationAction({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                position: formData.position,
                experience: formData.experience,
                currentCompany: formData.currentCompany,
                resumeFileName: resumeFile.name,
                resumeBase64: resumeBase64,
            });
        } catch (err) {
            console.error("Submission error:", err);
        }

        window.location.href = emailUrl;

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <div
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] border border-gray-100"
                style={{ opacity: 1, transform: "none" }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white px-6 sm:px-8 py-5 shrink-0 flex items-center justify-between border-b border-gray-800">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028] inline-block animate-ping" />
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#EC2028]">
                                Fiesta Smart Mobility
                            </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {formData.position.toLowerCase().includes("driver")
                                ? "Register as a Driver"
                                : "Submit Job Application"}
                        </h3>
                        <p className="text-xs text-gray-300 mt-0.5 flex items-center gap-1.5">
                            <FaEnvelope className="text-[#EC2028]" /> To:{" "}
                            <span className="font-semibold text-white">hr_executive@fiestaindia.net</span>
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-10 h-10 bg-white/10 hover:bg-[#EC2028] text-white rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ml-4 shadow-sm"
                        aria-label="Close modal"
                    >
                        <FaTimes className="text-base" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                    {isSuccess ? (
                        <div className="py-8 text-center space-y-5">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <FaCheckCircle className="text-3xl" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Ready!</h4>
                                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                                    We have generated your application addressed to{" "}
                                    <strong className="text-gray-900">hr_executive@fiestaindia.net</strong>.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs text-amber-900 space-y-1">
                                <p className="font-bold flex items-center gap-1 text-amber-800">
                                    <span>⚠️</span> Reminder:
                                </p>
                                <p>
                                    Please ensure your resume file (
                                    <strong>{resumeFile?.name || "Resume document"}</strong>) is attached
                                    in your email before clicking send.
                                </p>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href={mailtoLink}
                                    className="inline-flex items-center justify-center gap-2 bg-[#EC2028] hover:bg-black text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all"
                                >
                                    <FaPaperPlane /> Open Email (hr_executive@fiestaindia.net)
                                </a>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm transition-all cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {errorMessage && (
                                <div className="p-3 bg-red-50 border border-red-200 text-[#EC2028] text-sm rounded-xl font-medium">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Full Name <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Rahul Sharma"
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Email Address <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="rahul@example.com"
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Phone Number <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91 98765 43210"
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    />
                                </div>

                                {/* Current City / Location */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Current City / Location <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Chennai, Gurgaon, Pune"
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    />
                                </div>

                                {/* Position Applying For */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Position Applying For <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    >
                                        {defaultPositions.map((pos) => (
                                            <option key={pos} value={pos}>
                                                {pos}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Total Years of Experience */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                        Total Years of Experience <span className="text-[#EC2028]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        placeholder="e.g. 2+ Years / Fresher"
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Current Company / Designation */}
                            <div>
                                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                    Current Company / Designation <span className="text-[#EC2028]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="currentCompany"
                                    value={formData.currentCompany}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Operations Executive at XYZ / Freelance Driver"
                                    required
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm focus:bg-white focus:border-[#EC2028] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                                    Resume Upload <span className="text-[#EC2028]">*</span>
                                </label>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                                        resumeFile
                                            ? "border-green-500 bg-green-50/50"
                                            : "border-gray-300 hover:border-[#EC2028] bg-gray-50 hover:bg-red-50/20"
                                    }`}
                                >
                                    {resumeFile ? (
                                        <div className="flex items-center justify-center gap-3 text-sm text-green-700 font-semibold">
                                            <FaFileAlt className="text-xl text-green-600" />
                                            <span>{resumeFile.name}</span>
                                            <span className="text-xs text-gray-500">
                                                ({(resumeFile.size / 1024).toFixed(0)} KB)
                                            </span>
                                            <span className="text-xs underline text-gray-600 hover:text-black ml-2">
                                                Change
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            <FaCloudUploadAlt className="mx-auto text-3xl text-gray-400" />
                                            <p className="text-sm font-semibold text-gray-700">
                                                Click to upload your resume
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                PDF, DOC, DOCX up to 5MB
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#EC2028] hover:bg-black text-white py-4 px-6 rounded-full font-bold text-base shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.99] cursor-pointer disabled:opacity-60"
                                >
                                    <FaPaperPlane className="text-sm" />
                                    <span>
                                        {isSubmitting
                                            ? "Submitting..."
                                            : "Submit Application (hr_executive@fiestaindia.net)"}
                                    </span>
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-2">
                                    Direct link to HR:{" "}
                                    <a
                                        href="mailto:hr_executive@fiestaindia.net"
                                        className="text-[#EC2028] font-bold hover:underline"
                                    >
                                        hr_executive@fiestaindia.net
                                    </a>
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
