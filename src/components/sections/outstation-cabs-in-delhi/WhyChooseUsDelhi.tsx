"use client";

import React from "react";
import { FaCar, FaHeadset, FaRegMoneyBillAlt, FaTags, FaUserTie } from "react-icons/fa";

const WhyChooseUsDelhi = () => {
    const reasons = [
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Experienced, Knowledgeable Drivers",
            description: "Every Fiesta driver assigned to outstation trips from Delhi has completed background verification and is trained for long-distance intercity travel. A knowledgeable driver familiar with North India's highway network, hill station routes, and state border crossings handles the outstation trip with a reliability that city-only drivers cannot match. Experienced drivers also navigate Delhi NCR traffic efficiently at the start and end of every outstation journey.",
        },
        {
            icon: <FaRegMoneyBillAlt className="text-2xl text-[#EC2028]" />,
            title: "Transparent Pricing, No Extra Charges",
            description: "Fiesta's outstation taxi rates are fully disclosed before booking. No extra charges appear at the drop location. Toll taxes, state permits, and driver batta are listed in the fare quote. This is what transparent pricing means in practice for a Delhi taxi service handling outstation routes.",
        },
        {
            icon: <FaCar className="text-2xl text-[#EC2028]" />,
            title: "Good Cars, Well Maintained",
            description: "Every vehicle in the Fiesta fleet is a good car: regularly maintained, air-conditioned, and inspected before departure. For outstation tours to hill stations like Shimla or Manali, vehicle reliability is not optional. A breakdown on a mountain road is a safety issue, not just a delay.",
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "Best Deals on Outstation Taxi Rates",
            description: "Fiesta's per-km outstation taxi rates are competitive across all vehicle categories. Advance booking and one-way drop pricing give Delhi travelers the best deals available without compromising on vehicle quality or driver standards. Corporate accounts on monthly contracts benefit from consolidated billing and volume pricing.",
        },
        {
            icon: <FaHeadset className="text-2xl text-[#EC2028]" />,
            title: "24x7 Support for All Travel Needs",
            description: "Customer support for outstation cab bookings from Delhi is available 24x7 via phone and email. Queries about travel plans, booking changes, mid-trip issues, and post-trip billing are handled directly, not through an automated queue. For office people managing corporate outstation travel or families coordinating a multi-day trip, responsive support is part of what makes a cab service reliable.",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mb-14">
                    <div className="text-[#EC2028] font-bold text-sm tracking-widest uppercase mb-4">
                        WHY CHOOSE US
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Why Choose Fiesta for Outstation Cabs from Delhi
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex gap-5 items-start bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                                {reason.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">
                                    {reason.title}
                                </h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsDelhi;
