import React from 'react';
import FAQAccordion, { FAQItem } from '../../../common/FAQAccordion';

const faqs: FAQItem[] = [
    {
        id: "1",
        question: "1. What employee transportation services does Fiesta provide in Kolkata?",
        answer: "Fiesta provides fixed-route shuttles, dedicated corporate cabs, and tech-enabled demand-responsive fleets for businesses in Kolkata. Services include daily home-to-office and office-to-home commutes, drop services for night shifts, airport pickup and airport transfers for business travel, and outstation trips when required. All services run on GPS-tracked, well-maintained vehicles with verified drivers."
    },
    {
        id: "2",
        question: "2. Which businesses use employee transportation services in Kolkata?",
        answer: "Employee transportation services in Kolkata are used by IT, BPO, KPO, manufacturing, retail, and FMCG companies. The service is a top priority for firms with 24x7 operations, late-night shifts, female employees requiring secure transport, and large workforces spread across multiple locations in and around Kolkata."
    },
    {
        id: "3",
        question: "3. Can Fiesta handle employee transport for businesses with multiple locations in Kolkata?",
        answer: "Yes. Fiesta's diverse fleet and dynamic routing system cover key locations across Kolkata including Salt Lake, Rajarhat, Park Street, and the CBD, as well as residential zones across the city. Multi-location transport contracts are managed under a single programme with consolidated billing."
    },
    {
        id: "4",
        question: "4. Are premium employee transportation services available for senior staff?",
        answer: "Yes. Premium employee transportation services including chauffeur-driven sedans and spacious SUVs are available for senior staff, executive commutes, and client-facing travel. These provide door-to-door drop services with enhanced safety and a comfortable commute standard that reflects the company's focus on employee well-being."
    },
    {
        id: "5",
        question: "5. How does Fiesta ensure a hassle-free travel experience for night-shift employees in Kolkata?",
        answer: "Night-shift employee transportation in Kolkata runs under dedicated safety protocols: background-verified drivers, real-time GPS tracking, panic buttons, CCTV, and female employee safety compliance. Operations teams are available 24x7 to ensure timely pickups and manage any mid-route issues without the business needing to intervene."
    },
    {
        id: "6",
        question: "6. How do businesses contact Fiesta and send an enquiry for employee transport in Kolkata?",
        answer: "Businesses can contact Fiesta via phone, email, or the website to send an enquiry. Share your employee count, key pickup locations, shift timings, and preferred service model. Fiesta will design a transport programme and provide transparent pricing for your workforce requirements in Kolkata."
    }
];

const FAQ = () => {
    return (
        <section className="relative w-full py-20 px-4 md:py-12 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        ASSISTANCE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Frequently Asked <span className="text-[#EC2028]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. Find answers to common questions about our corporate mobility solutions in Kolkata.
                    </p>
                </div>

                <div className="mb-10">
                    <FAQAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
