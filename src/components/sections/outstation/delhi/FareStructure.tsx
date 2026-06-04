"use client";

import React from "react";
import { FaCalendarCheck, FaMoon, FaRoad, FaRoute, FaTags } from "react-icons/fa";

const FareStructure = () => {
    const blocks = [
        {
            icon: <FaRoute className="text-2xl text-[#EC2028]" />,
            title: "Per-Kilometre and Fixed-Route Pricing",
            description: "Outstation cab fares from Delhi are structured as per-km rates for round trips and fixed-route flat fares for one-way drops. Per-km rates for outstation taxi service from Delhi start at Rs. 10 to 12 for hatchbacks and scale by vehicle type. Fixed flat fares for one-way outstation drops cover the full distance to the drop location without any return-leg markup.",
        },
        {
            icon: <FaRoad className="text-2xl text-[#EC2028]" />,
            title: "Toll Taxes and State Border Charges",
            description: "Toll taxes and state border taxes are billed on actual expenditure during the outstation trip and are not included in the base fare. These are communicated before booking confirmation so travelers can plan their total trip cost accurately. Routes from Delhi to Rajasthan, Himachal Pradesh, Uttarakhand, and Uttar Pradesh each carry different state entry requirements.",
        },
        {
            icon: <FaMoon className="text-2xl text-[#EC2028]" />,
            title: "Driver Batta and Night Allowances",
            description: "Driver batta covers the driver's meals during the outstation journey and is charged at a fixed daily rate. Night allowances apply when the journey extends between 10:00 PM and 6:00 AM. Both are disclosed at the time of outstation cab booking and are not added as extra charges at the end of the trip.",
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "No Peak Hours Surge",
            description: "Fiesta does not apply peak hours or peak season surge pricing on outstation cabs from Delhi. Outstation taxi rates quoted at the time of booking are fixed. Travelers planning a weekend getaway to Shimla or a family trip to Jaipur during a long weekend do not face last-minute fare increases.",
        },
        {
            icon: <FaCalendarCheck className="text-2xl text-[#EC2028]" />,
            title: "Save Money with Advance Booking",
            description: "Booking an outstation cab from Delhi in advance can lead to lower fares and better deals compared to last-minute bookings. Advance booking up to 7 days ahead locks in current rates and secures the preferred vehicle type. Many Fiesta routes also offer free cancellation on advance bookings, providing flexibility if travel plans change.",
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        Outstation Cab Fare Structure from Delhi
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
