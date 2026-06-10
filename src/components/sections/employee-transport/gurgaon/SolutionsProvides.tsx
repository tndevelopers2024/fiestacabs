import React from 'react';
import { FaMapMarkerAlt, FaBusAlt, FaBuilding, FaHandshake } from "react-icons/fa";

const SolutionsProvides = () => {
    const features = [
        {
            title: "Point-to-Point Home Pickups",
            description: "Point-to-point home pickups deploy cabs or premium hatchbacks to collect employees directly from their homes. This is the top priority service for companies with senior staff, late-night shifts, or employees located at dispersed key locations across Delhi NCR and various cities in the region.",
            icon: <FaMapMarkerAlt className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Nodal Shuttle Services",
            description: "Nodal shuttles and minibuses transport employees from centralised nodal points to corporate offices and business hubs in Gurgaon. This model is efficient for high-volume daily commutes where consolidating staff into shared vehicles reduces per-seat cost while maintaining reliable schedules.",
            icon: <FaBusAlt className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Inter-Office Shuttle Services",
            description: "Inter-office shuttles provide continuous loop services connecting different office campuses across Gurgaon. For companies with multiple locations in Cyber City or DLF, inter-office shuttles run on fixed routes throughout the day, giving employees flexible access between buildings without relying on individual cabs.",
            icon: <FaBuilding className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Corporate Event and Client Visit Transport",
            description: "Beyond daily commutes, Fiesta handles transport for corporate events, client visits, and off-site meetings. Luxury cars and premium sedans are available for client-facing travel, ensuring a professional standard of service that reflects the company's commitment to excellence.",
            icon: <FaHandshake className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Employee Transportation Solutions Fiesta Provides in Gurgaon
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center">
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

export default SolutionsProvides;
