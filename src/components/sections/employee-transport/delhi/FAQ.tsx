'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: "1. What does corporate employee transport in Delhi include?",
        answer: "The programme covers daily home-to-office and office-to-home commutes, last-mile metro connectivity, airport transfers, and goods or executive logistics where required. All trips run on GPS-tracked vehicles with verified drivers and produce GST invoices."
    },
    {
        question: "2. How does Fiesta handle Delhi employee transportation services for large workforces?",
        answer: "Fiesta scales employee transportation services across Delhi NCT from small teams to workforces of 1,000 or more. Route optimisation, automated rostering, and a flexible fleet ensure the programme expands or contracts without operational disruption. Customers get a dedicated account manager and 24x7 Command Center access."
    },
    {
        question: "3. Can Fiesta cover packers, movers, and goods logistics alongside employee transport?",
        answer: "Yes. For businesses in manufacturing, warehousing, or distribution where packers and movers operate alongside office staff, Fiesta can structure a combined fleet contract. Packers Delhi operations with shift-based workforces are a natural fit for the same rostered, GPS-tracked transport model used for corporate office commutes."
    },
    {
        question: "4. How do businesses access the transport management platform?",
        answer: "Authorised users receive login credentials to Fiesta's online platform. The platform provides access to live fleet tracking, trip history, booking management, and expense reports. The 24x7 Mobility Command Center handles any operational queries that fall outside the platform."
    },
    {
        question: "5. Are Electric Vehicles available for corporate transport in Delhi?",
        answer: "Yes. EV fleet options are available for businesses committed to reducing commute-related emissions. EV deployment works best on high-frequency fixed routes and can be scaled based on the company's sustainability targets and NCR route coverage."
    },
    {
        question: "6. What makes Fiesta different from other corporate transport providers in Delhi?",
        answer: "Fiesta combines 28 years of operational excellence with technology-driven fleet management. Unlike aggregators, Fiesta provides a dedicated corporate transport programme with fixed pricing, driver verification, GST invoicing, and a 24x7 operations team. Customers get a single point of contact for all transport requirements daily commutes, executive travel, airport runs, and goods movement."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors bg-white shadow-sm"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className={`font-semibold text-lg md:text-xl pr-8 ${openIndex === index ? 'text-[#E31E24]' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#E31E24]' : 'text-gray-400'}`}>
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
