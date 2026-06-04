"use client";

import React from "react";
import { FaEye, FaRoute, FaSyncAlt, FaUserClock, FaBan } from "react-icons/fa";

const FareStructure = () => {
    const blocks = [
        {
            icon: <FaEye className="text-2xl text-[#EC2028]" />,
            title: "Transparent Pricing: What Is Included",
            description: "Transparent pricing for outstation cabs in Hyderabad means all applicable charges are visible during the booking process. Fiesta's fare quote covers the base per-km fare and lists all conditional fees: state permits, driver night charges, and tolls. Parking fees at the destination and hotel stays for the driver on multi-day trips are billed on actual usage and communicated before the itinerary is confirmed.",
        },
        {
            icon: <FaRoute className="text-2xl text-[#EC2028]" />,
            title: "One-Way Fares",
            description: "One-way outstation cab fares from Hyderabad are priced as fixed flat packages. Travelers pay for the distance to the destination only. This is the most cost-effective option for passengers who do not need a return cab, and Fiesta's one-way fares are structured to reflect actual distance without inflating for the return leg.",
        },
        {
            icon: <FaSyncAlt className="text-2xl text-[#EC2028]" />,
            title: "Round Trip Fares",
            description: "Round trip fares are calculated on a per-km basis with a minimum daily billing of 250 to 300 km. For multi-day round trips such as Hyderabad to Tirupati or Hyderabad to Bangalore, the billing cycle runs per calendar day. Customers planning their itinerary in advance should confirm the day-calculation metric to understand total trip cost before departure.",
        },
        {
            icon: <FaUserClock className="text-2xl text-[#EC2028]" />,
            title: "Driver Allowances and Night Charges",
            description: "Driver allowances for outstation rides range from Rs. 300 to Rs. 400 per day. Night driving fees apply for trips extending between 10:00 PM and 6:00 AM. State entry permits are billed on actual usage at the border. All of these are disclosed at the time of outstation cab booking, not added at drop.",
        },
        {
            icon: <FaBan className="text-2xl text-[#EC2028]" />,
            title: "No Surge Pricing",
            description: "Fiesta does not apply surge pricing on any outstation cab booking from Hyderabad. The fare quoted at booking is the fare billed at trip completion. Travelers booking a cab from Hyderabad for a weekend getaway or a business trip do not face last-minute fare increases based on demand.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Outstation Cab Fare Structure from Hyderabad
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className={`flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${index === blocks.length - 1 ? "md:col-span-2" : ""}`}
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
