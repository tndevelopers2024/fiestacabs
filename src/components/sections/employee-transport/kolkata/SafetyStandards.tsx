import React from 'react';
import { MdOutlineVerifiedUser, MdOutlineNotListedLocation, MdOutlineVideoCameraFront, MdOutlineSecurity, MdOutlinePolicy } from 'react-icons/md';

const SafetyStandards = () => {
    const features = [
        {
            title: "Background-verified drivers",
            description: "Every professional driver is police-verified and trained for corporate commute operations before assignment.",
            icon: <MdOutlineVerifiedUser className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Real-time GPS tracking",
            description: "Live fleet visibility ensures timely pickups and confirms drop offs across all Kolkata routes.",
            icon: <MdOutlineNotListedLocation className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Panic buttons",
            description: "In-vehicle panic buttons give employees immediate access to emergency support during commutes.",
            icon: <MdOutlinePolicy className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "CCTV monitoring",
            description: "Vehicles on fixed corporate routes carry CCTV for accountability and passenger well-being.",
            icon: <MdOutlineVideoCameraFront className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Women's safety compliance",
            description: "Night-shift transport for female employees follows dedicated protocols including route monitoring and escalation procedures to ensure secure travel.",
            icon: <MdOutlineSecurity className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Safety and Compliance on Every Route
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        Employee transportation services prioritise safety through thorough background checks on drivers, emergency training, and real-time GPS tracking. Fiesta&apos;s commitment to employee safety covers every touchpoint of the commute.
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

export default SafetyStandards;
