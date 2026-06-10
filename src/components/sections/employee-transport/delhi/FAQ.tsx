import React from 'react';
import FAQAccordion, { FAQItem } from '../../../common/FAQAccordion';

const faqs: FAQItem[] = [
    {
        id: "1",
        question: "1. What does corporate employee transport in Delhi include?",
        answer: "The programme covers daily home-to-office and office-to-home commutes, last-mile metro connectivity, airport transfers, and goods or executive logistics where required. All trips run on GPS-tracked vehicles with verified drivers and produce GST invoices."
    },
    {
        id: "2",
        question: "2. How does Fiesta handle Delhi employee transportation services for large workforces?",
        answer: "Fiesta scales employee transportation services across Delhi NCT from small teams to workforces of 1,000 or more. Route optimisation, automated rostering, and a flexible fleet ensure the programme expands or contracts without operational disruption. Customers get a dedicated account manager and 24x7 Command Center access."
    },
    {
        id: "3",
        question: "3. Can Fiesta cover packers, movers, and goods logistics alongside employee transport?",
        answer: "Yes. For businesses in manufacturing, warehousing, or distribution where packers and movers operate alongside office staff, Fiesta can structure a combined fleet contract. Packers Delhi operations with shift-based workforces are a natural fit for the same rostered, GPS-tracked transport model used for corporate office commutes."
    },
    {
        id: "4",
        question: "4. How do businesses access the transport management platform?",
        answer: "Authorised users receive login credentials to Fiesta's online platform. The platform provides access to live fleet tracking, trip history, booking management, and expense reports. The 24x7 Mobility Command Center handles any operational queries that fall outside the platform."
    },
    {
        id: "5",
        question: "5. Are Electric Vehicles available for corporate transport in Delhi?",
        answer: "Yes. EV fleet options are available for businesses committed to reducing commute-related emissions. EV deployment works best on high-frequency fixed routes and can be scaled based on the company's sustainability targets and NCR route coverage."
    },
    {
        id: "6",
        question: "6. What makes Fiesta different from other corporate transport providers in Delhi?",
        answer: "Fiesta combines 28 years of operational excellence with technology-driven fleet management. Unlike aggregators, Fiesta provides a dedicated corporate transport programme with fixed pricing, driver verification, GST invoicing, and a 24x7 operations team. Customers get a single point of contact for all transport requirements daily commutes, executive travel, airport runs, and goods movement."
    }
];

const FAQ = () => {
    return (
        <section className="relative w-full py-20 px-4 md:py-12 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        ASSISTANCE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Frequently Asked <span className="text-[#EC2028]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. Find answers to common questions about our corporate mobility solutions in Delhi.
                    </p>
                </div>

                {/* FAQ Component */}
                <div className="mb-10">
                    <FAQAccordion items={faqs} />
                </div>

            </div>
        </section>
    );
};

export default FAQ;
