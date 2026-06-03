"use client";

import React from "react";
import { FaUserTie, FaRegMoneyBillAlt, FaShieldAlt, FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";

const WhyChooseUsChennai = () => {
    const reasons = [
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Friendly, courteous drivers.",
            description: "Professional and quality drivers contribute significantly to the overall quality of cab services, enhancing passenger comfort and safety. Every Fiesta driver is background-checked, trained for long-distance outstation travel, and expected to maintain friendly, punctual, courteous conduct on every journey. A smooth ride is the result of the driver's efforts as much as the vehicle condition."
        },
        {
            icon: <FaRegMoneyBillAlt className="text-2xl text-[#EC2028]" />,
            title: "No surge pricing.",
            description: "The fare quoted at the time of booking does not change based on demand, time of day, or traffic in the city. What is quoted is what is billed. Customers who find cheaper quotes elsewhere should verify whether surge pricing, hidden charges, or unmarked batta apply before they book."
        },
        {
            icon: <FaShieldAlt className="text-2xl text-[#EC2028]" />,
            title: "Well-maintained, safe vehicles.",
            description: "Regular maintenance and cleanliness of cabs are crucial for a reliable and enjoyable travel experience. Safety checks are conducted before outstation trips. A pleasant travel experience on a 5 to 6 hour journey depends on vehicle condition, not just driver quality."
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "Transparent, GST-compliant billing.",
            description: "Outstation cab services should offer transparent pricing that includes all fares such as tolls and parking fees. Fiesta's invoicing meets this standard on every trip. Corporate customers receive monthly consolidated GST invoices."
        },
        {
            icon: <FaHeadset className="text-2xl text-[#EC2028]" />,
            title: "24x7 customer support.",
            description: "Multiple channels for customer support are available: phone, email, and online booking systems. Queries about booking, trip planning, or issues during the journey are handled 24x7 not through a chatbot or a ticket queue."
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Why Travelers Choose Fiesta Outstation Cabs in Chennai
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        There are several ways to book outstation cabs in Chennai — aggregator platforms, dedicated intercity networks, and local fleet operators. Fiesta sits in the dedicated intercity network category: fixed pricing, professional drivers, and full billing transparency. Here is what that means for customers planning an outstation trip from the city.
                    </p>
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

export default WhyChooseUsChennai;
