import React from 'react';
import { FaChartLine, FaUserTie, FaMoneyBillWave, FaLeaf, FaParking } from "react-icons/fa";

const Benefits = () => {
    const features = [
        {
            title: "Productivity",
            description: "Employees arrive work-refreshed and focused. Reliable, stress-free commutes remove the fatigue and frustration of navigating Gurgaon's traffic independently.",
            icon: <FaChartLine className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Retention",
            description: "Employee transportation services improve workforce retention by ensuring on-time arrivals and promoting safety, particularly during late-night shifts.",
            icon: <FaUserTie className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Cost efficiency",
            description: "Consolidating shuttles reduces the need for expensive commercial parking spaces and cuts individual reimbursement costs. Shifting to structured fleet solutions reduces corporate travel budgets by decreasing fuel and administration costs.",
            icon: <FaMoneyBillWave className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Sustainability",
            description: "Shared corporate shuttles reduce private car use. EV fleet options help companies operate toward their carbon reduction commitments.",
            icon: <FaLeaf className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Parking cost reduction",
            description: "High-occupancy vehicles reduce the number of cars that need to arrive and park at the office, directly reducing the house and commercial parking cost burden for companies operating in Gurgaon.",
            icon: <FaParking className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Benefits of Managed Employee Transportation in Gurgaon
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        The importance of structured employee transportation goes beyond operational convenience. Managed transport delivers measurable benefits across HR, finance, and operations.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
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

export default Benefits;
