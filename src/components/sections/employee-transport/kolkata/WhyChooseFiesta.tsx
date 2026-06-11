import React from 'react';
import { FaMapMarkedAlt, FaClock, FaFileInvoiceDollar, FaStar } from 'react-icons/fa';

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Pan India presence",
            description: "Operations across Kolkata, Delhi NCR, Mumbai, Bangalore, and other major cities mean Fiesta can serve businesses with multi-location workforces under a single contract.",
            icon: <FaMapMarkedAlt className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Consistent delivery",
            description: "Employees arrive on time, every shift. Reliable employee transportation services reduce commute-related fatigue and support better employee retention.",
            icon: <FaClock className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Cost-effective",
            description: "Managed transport consistently delivers lower per-trip costs than unmanaged ride-hailing, with GST-compliant billing for finance teams.",
            icon: <FaFileInvoiceDollar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Customer satisfaction",
            description: "A 4.8 rating across 729 reviews reflects the quality of service Fiesta delivers to employees and corporate clients across its network.",
            icon: <FaStar className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Kolkata Businesses Choose Fiesta
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        Fiesta Smart Mobility is a trusted partner for employee transportation across various industries in Kolkata and pan India. Two businesses rarely have identical transport requirements &mdash; Fiesta structures each programme around the company&apos;s specific workforce size, shift pattern, and route geography.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-red-500 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-red-50 rounded-full">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
