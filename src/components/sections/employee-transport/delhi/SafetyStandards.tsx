import React from 'react';
import { MdOutlineVerifiedUser, MdOutlineNotListedLocation, MdOutlineVideoCameraFront, MdOutlineSecurity } from "react-icons/md";

const SafetyStandards = () => {
    const features = [
        {
            title: "Verified drivers",
            description: "Background-checked and trained before assignment to any corporate route.",
            icon: <MdOutlineVerifiedUser className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "GPS and panic buttons",
            description: "Real-time tracking with in-cab emergency access for every passenger.",
            icon: <MdOutlineNotListedLocation className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "CCTV monitoring",
            description: "Cameras fitted in vehicles on fixed corporate routes for accountability.",
            icon: <MdOutlineVideoCameraFront className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Women's safety compliance",
            description: "Dedicated night-shift protocols and escalation procedures for female employees.",
            icon: <MdOutlineSecurity className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Safety Standards on Every Route
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
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

export default SafetyStandards;
