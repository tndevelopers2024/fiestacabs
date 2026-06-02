"use client";

import React from "react";
import { FaRoute, FaSyncAlt, FaUserClock, FaRoad, FaFileInvoiceDollar } from "react-icons/fa";

const FareCalculation = () => {
    const blocks = [
        {
            icon: <FaRoute className="text-2xl text-[#EC2028]" />,
            title: "One-Way Trips",
            description: "One-way cab fares from Mumbai are priced as flat inclusive packages. The fare covers the distance from your pickup point to the destination. You pay for the trip you take, not for the driver's return journey. This makes one-way drops significantly more affordable than round-trip aggregators charging both legs.",
        },
        {
            icon: <FaSyncAlt className="text-2xl text-[#EC2028]" />,
            title: "Round Trips",
            description: "Round trip fares are charged on a per-km basis, with a minimum billing of 250 to 300 km per day depending on the operator. If your actual driven distance is less than the daily minimum, the minimum still applies. This is standard practice across the outstation cab industry in India.",
        },
        {
            icon: <FaUserClock className="text-2xl text-[#EC2028]" />,
            title: "Driver Batta",
            description: "Driver batta is a mandatory daily allowance ranging from a fixed daily allowance for daytime trips. For trips extending between 10:00 PM and 6:00 AM, a driver night allowance applies. This covers the driver's lodging and meals and is not negotiable.",
        },
        {
            icon: <FaRoad className="text-2xl text-[#EC2028]" />,
            title: "Tolls and State Taxes",
            description: "Tolls and state entry permits are almost always excluded from the base fare. These are paid by the passenger at toll booths or border checkpoints during the journey. Fiesta informs customers of expected toll costs on major routes before confirmation.",
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "GST",
            description: "GST at the applicable rate is included in Fiesta's invoiced fare. Corporate customers receive GST-compliant invoices that can be submitted for reimbursement or TDS claims.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        How Outstation Cab Fares Are Calculated
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Fare calculation for outstation cabs follows a clear structure. Understanding it prevents surprises at billing.
                    </p>
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

export default FareCalculation;
