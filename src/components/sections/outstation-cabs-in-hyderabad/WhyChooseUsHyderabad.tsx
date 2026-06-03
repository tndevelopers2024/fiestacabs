"use client";

import React from "react";
import { FaUserTie, FaShieldAlt, FaTags, FaMapMarkedAlt, FaHeadset, FaFileInvoiceDollar } from "react-icons/fa";

const WhyChooseUsHyderabad = () => {
    const reasons = [
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Professional, Friendly Drivers",
            description: "Quality drivers who are well-behaved and friendly make the difference on a long outstation trip. Fiesta assigns professional drivers who have completed background verification and are trained for intercity routes. Drivers are punctual, courteous, and familiar with the roads from Hyderabad to popular outstation destinations. A pleasant travel experience over 5 to 9 hours depends significantly on the driver."
        },
        {
            icon: <FaShieldAlt className="text-2xl text-[#EC2028]" />,
            title: "Well-Maintained, Recent Cars",
            description: "Regular vehicle maintenance and sanitation protocols apply across the Fiesta fleet before every outstation ride. Recent cars with functioning AC, clean interiors, and reliable mechanical condition are assigned to every booking. Fiesta does not dispatch poorly maintained vehicles on outstation journeys regardless of demand."
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "Transparent Pricing, Lowest Fares",
            description: "Fiesta's outstation cab fares from Hyderabad are structured to be among the lowest fares available for the service quality offered. Transparent pricing means customers see all applicable charges during the cab booking process. There are no hidden charges at drop. The fare confirmed at booking is the fare paid."
        },
        {
            icon: <FaMapMarkedAlt className="text-2xl text-[#EC2028]" />,
            title: "GPS Tracking and Safety",
            description: "GPS navigation and tracking systems are active on all Fiesta vehicles throughout outstation journeys. SOS emergency support features are available for passenger safety. Corporate customers with fleet requirements have dashboard access to real-time vehicle locations."
        },
        {
            icon: <FaHeadset className="text-2xl text-[#EC2028]" />,
            title: "Class Customer Support",
            description: "24x7 customer support is available via phone and email for all outstation cab bookings from Hyderabad. Class customer support means queries before departure, issues mid-journey, and billing questions after drop are all handled without routing customers through a chatbot or a support ticket queue."
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "GST-Compliant Invoicing for Corporate Travel",
            description: "Every outstation trip from Hyderabad produces a GST invoice. Corporate travel and business trips booked through Fiesta are fully documented for reimbursement and TDS compliance. Monthly consolidated invoices are available for companies managing regular outstation cab services for employees."
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
                        Why Fiesta Is the Best Outstation Cab Service in Hyderabad
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

export default WhyChooseUsHyderabad;
