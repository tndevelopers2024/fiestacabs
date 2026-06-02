"use client";

import React from "react";
import { FaRoute, FaSyncAlt, FaUserClock, FaRoad } from "react-icons/fa";

const FareStructure = () => {
    const blocks = [
        {
            icon: <FaRoute className="text-2xl text-[#EC2028]" />,
            title: "One-Way Trips",
            description: "One-way cab fares from Pune to any desired destination are priced as flat inclusive packages. You pay for the trip you take. The driver returns independently and that cost is not passed on. One-way outstation rides from Pune are significantly more affordable than round-trip aggregators charging both legs of the journey.",
        },
        {
            icon: <FaSyncAlt className="text-2xl text-[#EC2028]" />,
            title: "Round Trips",
            description: "Outstation round trip fares are calculated per km with a minimum billing of 250 to 300 km per day, even if actual distance is less. For multi-day round trips, the billing cycle runs per calendar day. This is standard practice for outstation cab services across India and is disclosed before booking.",
        },
        {
            icon: <FaUserClock className="text-2xl text-[#EC2028]" />,
            title: "Driver Batta and Night Allowance",
            description: "Driver batta covers the driver's meals during the outstation journey and applies as a fixed daily allowance. For trips extending between 10:00 PM and 6:00 AM, a night allowance applies to cover lodging. Both are stated before the outstation cab booking is confirmed, not added at billing.",
        },
        {
            icon: <FaRoad className="text-2xl text-[#EC2028]" />,
            title: "Tolls and State Border Taxes",
            description: "Tolls and state border taxes are paid at checkpoints during the journey and are billed on actual expenditure. Fiesta communicates expected toll costs on major routes before confirmation so travelers can plan their total budget accurately before departure.",
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        How Outstation Cab Fares Are Structured from Pune
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className="flex gap-5 items-start bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="shrink-0 w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                                {block.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">{block.title}</h4>
                                <p className="text-gray-600 text-base leading-relaxed">{block.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FareStructure;
