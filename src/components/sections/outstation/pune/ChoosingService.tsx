"use client";

import React from "react";
import { FaRupeeSign, FaCarSide, FaUserShield, FaRegCalendarCheck } from "react-icons/fa";

const ChoosingService = () => {
    const criteria = [
        {
            icon: <FaRupeeSign className="text-2xl text-[#EC2028]" />,
            title: "Fare transparency",
            description: "Does the quote from the Pune taxi service include all charges upfront? Tolls, state border taxes, and driver night allowances should all be disclosed during the outstation cab booking process, not added at the end.",
        },
        {
            icon: <FaCarSide className="text-2xl text-[#EC2028]" />,
            title: "Vehicle availability",
            description: "Does the cab service in Pune confirm the specific vehicle type at booking? Fiesta's extensive network covers hatchbacks, sedans, SUVs, luxury cars, and Tempo Travellers. The confirmed cab option is the cab dispatched.",
        },
        {
            icon: <FaUserShield className="text-2xl text-[#EC2028]" />,
            title: "Driver verification",
            description: "Are the chauffeurs background-checked and experienced on outstation routes? Experienced drivers familiar with intercity routes from Pune deliver a materially better outstation ride than unverified city drivers.",
        },
        {
            icon: <FaRegCalendarCheck className="text-2xl text-[#EC2028]" />,
            title: "Advance booking",
            description: "Pre-booking 24 to 48 hours in advance helps secure better rates and preferred vehicle selection. Securing your outstation cab in advance guarantees availability, especially during peak travel periods.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        How to Choose the Best Outstation Cab Service in Pune
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        The best outstation cab service in Pune for any traveler depends on the route, group size, and budget. Pune to outstation destinations like Shirdi, Goa, or Hyderabad requires different planning than a short one-hour drive to Mahabaleshwar. When comparing cab options and booking outstation cab services, check the following before confirming:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {criteria.map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
