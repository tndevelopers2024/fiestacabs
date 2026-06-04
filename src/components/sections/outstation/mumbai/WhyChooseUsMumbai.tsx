"use client";

import React from "react";
import { FaRegMoneyBillAlt, FaUserTie, FaShieldAlt, FaTags, FaFileInvoiceDollar, FaHeadset, FaStar } from "react-icons/fa";

const WhyChooseUsMumbai = () => {
    const reasons = [
        {
            icon: <FaRegMoneyBillAlt className="text-2xl text-[#EC2028]" />,
            title: "No Hidden Charges",
            description: "The fare quoted before booking is the fare billed after the trip. Tolls and batta are communicated upfront, not added silently at the end. There are no extra charges for luggage, fuel, or route adjustments within the agreed itinerary."
        },
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Verified and Professional Drivers",
            description: "Every driver on the Fiesta network has completed a background check. Drivers assigned to outstation trips are trained for long-distance journeys, familiar with intercity highway routes, and expected to maintain professional, courteous conduct. Experienced drivers who know the city's roads and the highways beyond them make a material difference on a 5- to 6-hour outstation trip."
        },
        {
            icon: <FaShieldAlt className="text-2xl text-[#EC2028]" />,
            title: "Well-Maintained Cars",
            description: "Regular maintenance and cleanliness checks are mandatory across the Fiesta fleet. A cab that breaks down outside Khopoli at 11 PM is not an acceptable outcome. Fiesta's fleet upkeep standards exist precisely to prevent that."
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "Transparent Pricing",
            description: "Fiesta does not apply surge pricing at any point in the booking or during the trip. Affordable pricing is not achieved by hiding costs and revealing them later. The fare structure is explained before confirmation. Customers who have compared Fiesta to aggregators consistently cite the absence of surprise charges as the primary reason they return."
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "GST-Compliant Invoicing",
            description: "Every outstation trip produces a GST invoice. Corporate customers receive consolidated monthly invoices for all trips. This is non-negotiable for any company using Fiesta for employee travel or client logistics."
        },
        {
            icon: <FaHeadset className="text-2xl text-[#EC2028]" />,
            title: "24x7 Customer Support",
            description: "Outstation trips do not follow office hours. Queries before departure, mid-trip issues, and post-trip billing questions are handled 24x7 via phone and email. Customers are not routed through a chatbot."
        },
        {
            icon: <FaStar className="text-2xl text-[#EC2028]" />,
            title: "4.8 Rating, 729 Reviews",
            description: "Consistent service over 28 years of operation is reflected in how customers rate individual trips. A 4.8 rating across 729 reviews is not a marketing claim. It is an average of what travelers have reported after outstation rides."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mb-14">
                    <div className="text-[#EC2028] font-bold text-sm tracking-widest uppercase mb-4">
                        WHY CHOOSE US
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Why Choose Fiesta for Outstation Cabs from Mumbai
                    </h2>
                </div>

                {/* Horizontal Cards */}
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

export default WhyChooseUsMumbai;
