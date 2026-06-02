"use client";

import React from "react";
import Image from "next/image";
import { FaRegMoneyBillAlt, FaUserTie, FaShieldAlt, FaTags, FaMapMarkedAlt, FaFileInvoiceDollar } from "react-icons/fa";

const WhyChooseUsPune = () => {
    const reasons = [
        {
            icon: <FaRegMoneyBillAlt className="text-2xl text-[#EC2028]" />,
            title: "No Surge Pricing",
            description: "The fare quoted at booking does not change based on demand, time, or traffic conditions. Travelers who hire outstation cabs through aggregators during long weekends routinely encounter fares 30 to 50 percent above the base quote. Fiesta does not operate that way. The fare confirmed before departure is the fare billed at drop."
        },
        {
            icon: <FaUserTie className="text-2xl text-[#EC2028]" />,
            title: "Verified, Punctual Chauffeurs",
            description: "All Fiesta chauffeurs complete background verification before joining the network. Drivers assigned to outstation trips from Pune are trained for long-distance intercity travel, familiar with routes to major cities and nearby destinations, and expected to maintain punctual, courteous conduct. Experienced drivers reduce the stress and inconvenience of outstation travel significantly — particularly on longer routes where driver quality directly affects the comfort and safety of the ride."
        },
        {
            icon: <FaShieldAlt className="text-2xl text-[#EC2028]" />,
            title: "Well-Maintained, Reliable Fleet",
            description: "Every vehicle in the Fiesta fleet goes through regular maintenance and cleanliness checks. A reliable, well-maintained cab is not negotiable on outstation trips. A breakdown on the Mumbai-Pune Expressway or in a ghat section near Mahabaleshwar is a serious safety issue. Fiesta's fleet maintenance standards exist to prevent that and to deliver an enjoyable, trouble-free outstation ride every time."
        },
        {
            icon: <FaTags className="text-2xl text-[#EC2028]" />,
            title: "Transparent, Affordable Rates",
            description: "Fiesta's per-km rates are competitive and clearly structured by vehicle category to suit different travel needs and budgets. There are no hidden charges added at billing. Affordable rates are achievable without compromising vehicle quality or driver standards. App-based aggregators allow easy comparison of vehicle types and pricing, but comparing quotes should also factor in the hidden additions that appear post-trip."
        },
        {
            icon: <FaMapMarkedAlt className="text-2xl text-[#EC2028]" />,
            title: "Safety: GPS Tracking and Emergency SOS",
            description: "Ride tracking systems are active on all Fiesta outstation cabs for passenger safety during travel. Emergency SOS features are available to provide immediate assistance in case of emergencies. Corporate accounts have fleet dashboard access. Individual travelers receive a tracking link on booking confirmation. Safety on outstation journeys is built into the service, not offered as an optional add-on."
        },
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-[#EC2028]" />,
            title: "GST-Compliant Invoicing",
            description: "Every outstation trip from Pune produces a GST invoice. Corporate customers on account contracts receive consolidated monthly invoices. This is essential for companies managing employee outstation travel or executive cab hire from Pune."
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
                            alt="Why Travelers Hire Outstation Cabs from Fiesta in Pune"
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
                            Why Travelers Hire Outstation Cabs from Fiesta in Pune
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

export default WhyChooseUsPune;
