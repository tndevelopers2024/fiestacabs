"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonDelhi = () => {
    const comparisons = [
        { feature: "Hidden Fees", fiesta: "None. All charges disclosed at booking", other: "Toll taxes, batta added post-trip" },
        { feature: "Transparent Pricing", fiesta: "Full itemised quote before confirmation", other: "Fare adjustments common at billing" },
        { feature: "Peak Hours Surge", fiesta: "Not applied on any outstation booking", other: "Common during weekends and holidays" },
        { feature: "Driver Quality", fiesta: "Verified, experienced, knowledgeable", other: "Variable; inconsistent on long routes" },
        { feature: "Vehicle Condition", fiesta: "Well-maintained, good cars guaranteed", other: "Substitutions and condition issues reported" },
        { feature: "Advance Booking", fiesta: "Up to 7 days, free cancellation options", other: "Limited on popular routes and peak dates" },
        { feature: "Airport Pickup", fiesta: "Yes, Indira Gandhi International Airport", other: "Available but often separate booking" },
        { feature: "GST Invoice", fiesta: "Yes, every outstation trip", other: "Inconsistent for outstation cab service" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Fiesta Outstation Cabs vs. Other Delhi Taxi Services
                    </h2>
                </div>

                <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200 bg-white">
                    <table className="w-full text-left min-w-[750px] border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-100 text-base md:text-lg">
                                <th className="py-6 px-6 font-bold text-gray-800 w-1/3 bg-white">Feature</th>
                                <th className="py-6 px-6 font-bold text-[#EC2028] bg-red-50 text-center border-x border-red-100 w-1/3">
                                    Fiesta Smart Mobility
                                </th>
                                <th className="py-6 px-6 font-bold text-gray-600 bg-gray-100 text-center w-1/3">
                                    Aggregators / Other Operators
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {comparisons.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors duration-200">
                                    <td className="py-5 px-6 text-gray-800 font-medium text-lg bg-white relative z-10 shadow-[1px_0_0_0_#f3f4f6]">
                                        {item.feature}
                                    </td>
                                    <td className="py-5 px-6 text-gray-900 font-semibold text-center bg-red-50/40 border-x border-red-50 relative">
                                        <div className="flex items-center justify-center gap-3">
                                            <FaCheckCircle className="text-[#EC2028] shrink-0" />
                                            <span>{item.fiesta}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-6 text-gray-500 text-center bg-gray-50/30">
                                        <div className="flex items-center justify-center gap-3">
                                            <FaTimesCircle className="text-gray-400 shrink-0 opacity-50" />
                                            <span>{item.other}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonDelhi;
