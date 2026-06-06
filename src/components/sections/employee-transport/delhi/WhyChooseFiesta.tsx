import React from 'react';
import { MdOutlineSavings, MdOutlineElectricCar } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FaFileInvoiceDollar, FaAward } from "react-icons/fa";

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Cost savings",
            description: "15 to 25 percent reduction in commute spend versus unmanaged ride-hailing, through route optimisation and fixed contract pricing.",
            icon: <MdOutlineSavings className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Fleet range",
            description: "Economy vehicles for high-volume daily commutes through to luxury sedans for executive travel matched to the job.",
            icon: <AiOutlineCar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "GST billing",
            description: "Every trip is invoiced with GST. Monthly consolidated billing covers all routes and vehicle categories.",
            icon: <FaFileInvoiceDollar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "EV options",
            description: "Electric vehicles available for businesses with sustainability targets, deployed on high-frequency fixed routes.",
            icon: <MdOutlineElectricCar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "28 years of excellence",
            description: "Fiesta takes pride in a track record of delivering reliable, driver-verified transport across India for nearly three decades.",
            icon: <FaAward className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Businesses Choose Fiesta
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white border border-red-500 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
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
