"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonHyderabad = () => {
    const comparisons = [
        { feature: "Hidden Charges", fiesta: "None. All costs disclosed at booking", agg: "Tolls, batta, permits added post-trip" },
        { feature: "Surge Pricing", fiesta: "Not applied on any booking", agg: "Common on weekends and peak periods" },
        { feature: "Transparent Pricing", fiesta: "Full itemised quote before confirmation", agg: "Charges often visible only at billing" },
        { feature: "Driver Quality", fiesta: "Verified, professional, friendly drivers", agg: "Variable; inconsistent on long routes" },
        { feature: "Vehicle Condition", fiesta: "Well-maintained, recent cars", agg: "Not guaranteed; substitutions common" },
        { feature: "Airport Transfers", fiesta: "Yes, combined with outstation booking", agg: "Separate booking often required" },
        { feature: "Customer Support", fiesta: "24x7 phone and email", agg: "App-based; limited for outstation issues" },
        { feature: "GST Invoice", fiesta: "Yes, every trip", agg: "Inconsistent for outstation cab services" },
        { feature: "Affordable Prices", fiesta: "Lowest fares with no compromise on quality", agg: "Low base fare with hidden additions" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Fiesta vs. Other Outstation Cab Services in Hyderabad
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        When comparing outstation cab services in Hyderabad, the differentiators that matter most are fare transparency, driver quality, and support reliability. A hassle-free experience on an outstation trip requires all three to work together.
                    </p>
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
                                            <span>{item.agg}</span>
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

export default ComparisonHyderabad;
