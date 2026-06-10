import React from 'react';
import { FaUserShield, FaHeadset, FaFileInvoiceDollar, FaAward } from "react-icons/fa";

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Single point of contact",
            description: "One account manager handles all transport requirements daily routes, special corporate events, client visits, and executive travel.",
            icon: <FaUserShield className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "24x7 customer support",
            description: "A dedicated operations team provides around-the-clock support for live transport queries, route changes, and driver escalations.",
            icon: <FaHeadset className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "GST-compliant billing",
            description: "Every shift produces a GST invoice. Monthly consolidated billing covers all vehicle categories and routes, simplifying expense management for corporate finance teams.",
            icon: <FaFileInvoiceDollar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Pride in maintaining standards",
            description: "Fiesta takes pride in maintaining well-maintained vehicles, verified drivers, and route schedules that reflect the professionalism our corporate clients expect.",
            icon: <FaAward className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Gurgaon Companies Choose Fiesta
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        Fiesta Smart Mobility has been operating employee transportation services across Delhi NCR, including services in Delhi, Gurgaon, Noida, and Faridabad, for 28 years. Our commitment to reliability, driver quality, and technology-backed operations has built a 4.8-rated track record across thousands of corporate commutes.
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
