"use client";

import React from "react";
import Image from "next/image";
import { FaRegMoneyBillAlt, FaUserTie, FaShieldAlt, FaTags, FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";

const WhyChooseUsBangalore = () => {
    const reasons = [
        {
            icon: <FaRegMoneyBillAlt className="text-2xl text-[#EC2028]" />,
            title: "No Hidden Charges",
            description: "Fare quoted at booking is fare billed at drop. Check post charges, tolls, and batta are disclosed upfront. No fuel surcharges, no route adjustment fees, and no charges added after the outstation journey that were not part of the original quote. Transparent pricing is a standard requirement for any outstation cab service, but not all operators deliver it consistently."
        },
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Highway-Experienced, Verified Drivers",
            description: "Fiesta assigns experienced drivers who are familiar with outstation routes from Bangalore. Every driver has completed background verification and is trained for long-distance outstation taxi service. A driver who regularly runs the Bangalore to Ooty or Bangalore to Tirupati route handles traffic, ghat sections, and border crossings with a confidence that city-only drivers do not have. That difference is material on a 6-hour outstation trip."
        },
        {
            icon: <FaShieldAlt className="text-2xl text-[#EC2028]" />,
            title: "Comfortable Ride in Well-Maintained Vehicles",
            description: "Regular maintenance and cleanliness checks apply across the fleet before every outstation trip. A comfortable ride over 250 to 350 km depends on vehicle condition as much as driver quality. Fiesta's maintenance standards exist to ensure the cab assigned to your outstation journey performs reliably from Bangalore to the destination and back."
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "Affordable Price Across All Vehicle Types",
            description: "Outstation cab service from Bangalore is available at affordable prices across all vehicle types. Affordable rates extend across sedans, SUVs, and Tempo Travellers. Pricing is competitive with other outstation taxi services in Bangalore without compromising vehicle standards or driver quality."
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "GST-Compliant Invoicing",
            description: "Every outstation trip produces a GST invoice. Corporate customers on account contracts receive consolidated monthly invoices. This is essential for companies managing outstation cab bookings for employees traveling between Bengaluru and other cities."
        },
        {
            icon: <FaHeadset className="text-2xl text-[#EC2028]" />,
            title: "24x7 Support for All Outstation Queries",
            description: "Customer queries before departure, issues during the outstation journey, and billing questions after drop are handled 24x7 via phone and email. Outstation cab services must be reachable when something goes wrong at midnight on a highway between Bangalore and Coorg, not just during office hours."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Image - Left */}
                    <div className="w-full lg:w-5/12 relative h-[800px] rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-24">
                        <Image
                            src="/images/services-offered/premium-car-rentals/outstation-rides/why-choose-us.jpg"
                            alt="Why Customers Hire Outstation Cabs from Fiesta in Bangalore"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-7/12">
                        <div className="text-[#EC2028] font-bold text-sm tracking-widest uppercase mb-4">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
                            Why Customers Hire Outstation Cabs from Fiesta in Bangalore
                        </h2>

                        {/* List */}
                        <div className="space-y-8">
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
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsBangalore;
