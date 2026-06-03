"use client";

import React from "react";
import { FaTachometerAlt, FaRoute, FaSyncAlt, FaRegCalendarAlt, FaPassport, FaUserClock } from "react-icons/fa";

const FareStructure = () => {
    const blocks = [
        {
            icon: <FaTachometerAlt className="text-2xl text-[#EC2028]" />,
            title: "Per-Kilometre Pricing",
            description: "Outstation fares from Bangalore are calculated on a per-km basis. Competitive pricing for outstation cab services in Bangalore scales by vehicle category. Affordable rates are available across all vehicle types without compromising on driver quality or vehicle condition.",
        },
        {
            icon: <FaRoute className="text-2xl text-[#EC2028]" />,
            title: "One-Way Trip Fares",
            description: "One-way outstation cab fares from Bangalore are priced as fixed flat packages. Travelers pay only for the distance covered in one direction, making one-way trips considerably cheaper than round-trip billing. For tourists visiting Coorg for two or three days or families heading to Mysore for a weekend, a one-way trip fare is the most cost-effective option.",
        },
        {
            icon: <FaSyncAlt className="text-2xl text-[#EC2028]" />,
            title: "Outstation Round Trip Fares",
            description: "Outstation round trip fares apply a minimum daily billing of 250 to 300 km per day. The billing cycle for vehicle usage on multi-day trips is calculated per calendar day, not per 24-hour period. Booking an outstation round trip from Thursday to Saturday (Th Fr Sa) means three days of billing regardless of actual travel hours each day. Verify the day-calculation metric before confirming any multi-day booking.",
        },
        {
            icon: <FaRegCalendarAlt className="text-2xl text-[#EC2028]" />,
            title: "Weekend and Peak Period Pricing",
            description: "Outstation cab services in Bangalore do not apply surge pricing under the Fiesta model. However, vehicle availability on popular weekend routes such as Bangalore to Coorg and Bangalore to Ooty tightens significantly on Fridays and Saturdays. Booking outstation cabs at least 7 days in advance for weekend travel avoids both availability issues and last-minute fare increases from other operators.",
        },
        {
            icon: <FaPassport className="text-2xl text-[#EC2028]" />,
            title: "Check Post and State Permit Charges",
            description: "Trips crossing state borders incur state permit taxes and check post charges paid at the border. These costs are billed on actual expenditure during the trip and are communicated before booking confirmation. Routes requiring check post payment include Bangalore to Tirupati, Ooty, and Wayanad.",
        },
        {
            icon: <FaUserClock className="text-2xl text-[#EC2028]" />,
            title: "Driver Batta",
            description: "Driver allowance (bata) fees are a fixed daily amount. Night allowances apply for journeys extending between 10:00 PM and 6:00 AM. Both are stated at the time of outstation cab booking, not added after the trip.",
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Outstation Cab Fare Structure from Bangalore
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
