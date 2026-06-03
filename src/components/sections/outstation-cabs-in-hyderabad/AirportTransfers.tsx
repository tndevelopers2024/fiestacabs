"use client";

import React from "react";
import Image from "next/image";

const AirportTransfers = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-10">
                    <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                        AIRPORT TRANSFERS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Hyderabad Airport Transfers and Outstation Cab Bookings
                    </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Fiesta handles Rajiv Gandhi International Airport pickups as the starting leg of any outstation journey from Hyderabad. Travelers arriving at Hyderabad airport for a business trip or family trip who need to continue to an outstation destination can combine the airport transfer and the intercity cab into a single booking.
                    </p>
                    <p>
                        Airport transfers to and from Hyderabad airport are also available as standalone services for corporate travel and business trips. On-time pickup at Rajiv Gandhi International Airport is confirmed at the time of booking. The driver tracks flight arrival status and adjusts the pickup time accordingly.
                    </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl mt-12">
                    <Image
                        src="/images/outstation-cabs-in-hyderabad/curly-haired-hindu-hurries-meeting.avif"
                        alt="Hyderabad Airport Transfers and Outstation Cab Bookings"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default AirportTransfers;
