"use client";

import React from "react";
import { FaRupeeSign, FaUserShield, FaCarSide, FaStar, FaRegCalendarAlt } from "react-icons/fa";

const ChoosingService = () => {
    const criteria = [
        {
            icon: <FaRupeeSign className="text-2xl text-[#EC2028]" />,
            title: "Fare transparency",
            description: "Does the quote include tolls, check post charges, and driver batta, or will these appear at billing? The best cab service for outstation travel discloses all costs upfront.",
        },
        {
            icon: <FaUserShield className="text-2xl text-[#EC2028]" />,
            title: "Driver verification",
            description: "Ensure the operator provides a highway-experienced, verified driver. A city cab driver handling their first long outstation journey is not the same as a driver with regular experience on the Bangalore to Mysore or Bangalore to Ooty route.",
        },
        {
            icon: <FaCarSide className="text-2xl text-[#EC2028]" />,
            title: "Vehicle condition",
            description: "Confirm vehicle conditions before booking outstation cabs. Cabs must be well-maintained and air-conditioned. Specialized local services often offer better-maintained vehicles and more professional drivers for long routes compared to regular city cabs.",
        },
        {
            icon: <FaStar className="text-2xl text-[#EC2028]" />,
            title: "Reviews",
            description: "Verify online reviews to confirm the reliability of the outstation cab service. A 4.8 rating across 729 reviews reflects consistent service, not a promotional claim.",
        },
        {
            icon: <FaRegCalendarAlt className="text-2xl text-[#EC2028]" />,
            title: "Billing cycle",
            description: "Verify the day-calculation metric to understand how the operator bills for vehicle usage on multi-day round trips. Minimum daily km thresholds vary between 250 and 300 km depending on the operator.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        How to Choose the Best Cab Service for Outstation Travel from Bangalore
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        The outstation taxi service market in Bangalore includes aggregator platforms, dedicated intercity networks, and local operators. Services commonly cited for outstation rides include Deepam Cabs, Savaari, and Gozo Cabs alongside larger aggregators. When comparing options, verify the following before booking outstation cabs:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {criteria.map((item, index) => (
                        <div
                            key={index}
                            className={`flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${index === criteria.length - 1 ? "md:col-span-2" : ""}`}
                        >
                            <div className="shrink-0 w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ChoosingService;
