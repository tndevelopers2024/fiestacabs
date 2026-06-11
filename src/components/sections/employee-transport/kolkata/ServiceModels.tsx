import React from 'react';
import { FaBusAlt, FaCar, FaMobileAlt } from 'react-icons/fa';

const ServiceModels = () => {
    const models = [
        {
            title: "Fixed-Route Shuttles",
            description: "High-capacity vehicles on fixed-route shuttles pick up employees at designated points and transport them to major business hubs across Kolkata including Salt Lake Sector V, Rajarhat, Park Street, and the CBD. Fixed-route shuttles deliver the lowest per-capita cost for mass commuting and reduce parking space requirements at corporate offices. These are best for large companies with predictable shift patterns and concentrated residential clusters.",
            icon: <FaBusAlt className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Dedicated Corporate Cabs",
            description: "Dedicated corporate cabs offer tailored, direct travel for individuals or small teams. Chauffeur-driven sedans or spacious SUVs pick up employees from their locations and deliver door-to-door drop services with heightened safety features. This model is heavily utilised by BPO, KPO, and IT firms running 24x7 shift patterns that require strict compliance and timely pickups. Drop offs are confirmed, tracked, and logged for every trip.",
            icon: <FaCar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Tech-Enabled Demand-Responsive Fleets",
            description: "Tech-enabled smart shuttles adjust routes dynamically based on real-time employee bookings. The system uses automated algorithms to group employees by location, minimising empty seats and adapting to hybrid work schedules where office occupancy fluctuates day to day. This model provides flexibility and shared-ride economics that sit between fixed shuttles and dedicated cabs — a preferred choice for businesses with variable attendance patterns.",
            icon: <FaMobileAlt className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Employee Transportation Service Models in Kolkata
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        Employee transportation services in Kolkata primarily offer three distinct models. Fiesta deploys all three, selecting the right model based on workforce size, shift structure, and route geography.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {models.map((model, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-red-50 rounded-full">
                                    {model.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceModels;
