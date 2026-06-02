"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonBangalore = () => {
    const comparisons = [
        { feature: "Hidden Charges", fiesta: "None. All costs disclosed before booking", agg: "Check post, batta often added post-trip" },
        { feature: "Fare Transparency", fiesta: "Fixed quote with itemised additional costs", agg: "Surge pricing and extras common" },
        { feature: "GST Invoice", fiesta: "Yes, every outstation trip", agg: "Inconsistent; often unavailable" },
        { feature: "Driver Verification", fiesta: "Background-checked, highway-experienced", agg: "Variable; city drivers on outstation routes" },
        { feature: "Vehicle Consistency", fiesta: "Confirmed type guaranteed", agg: "Substitutions common on short notice" },
        { feature: "Advance Booking", fiesta: "Up to 2 weeks ahead", agg: "Limited on peak weekends" },
        { feature: "Check Post Charges", fiesta: "Disclosed before confirmation", agg: "Often undisclosed until border crossing" },
        { feature: "Customer Support", fiesta: "24x7 phone and email for all queries", agg: "App-based; limited at night" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Fiesta Outstation Cabs vs. Other Taxi Services in Bangalore
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        When booking outstation cabs in Bangalore, customers typically compare Fiesta against aggregator platforms and dedicated outstation taxi services such as Deepam Cabs, Savaari, and others. The key differentiators are fare transparency, driver standards, and billing consistency.
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

export default ComparisonBangalore;
