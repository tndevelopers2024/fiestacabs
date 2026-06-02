"use client";

import React from "react";
import Image from "next/image";

const AboutOutstation = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            ABOUT OUR SERVICE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Outstation Cabs Bangalore: Fixed Fares, Highway-Verified Drivers, No Hidden Charges
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Booking outstation cabs in Bangalore is straightforward in theory. In practice, travelers regularly discover that the taxi service in Bangalore they booked quotes one fare and bills another. Check post charges appear without warning, driver batta is added at drop, and the cab that showed up is not the vehicle confirmed at booking.
                            </p>
                            <p>
                                Outstation travel from Bengaluru is high volume. Tourists heading to Coorg and Ooty, families visiting Mysore on weekends, corporate travelers making day trips to Chennai, and pilgrims looking to reach Tirupati all need reliable outstation cab service. For many of these routes, a cab is the only practical option. Flights do not serve short-haul destinations like Nandi Hills or Wayanad. Bus services exist but do not offer the door-to-door flexibility and comfort that a hired outstation taxi service provides.
                            </p>
                            <p>
                                Fiesta Smart Mobility offers outstation cabs in Bangalore on fixed per-km fares, with highway-experienced verified drivers, GST-compliant billing, and 24x7 customer support. All additional charges including tolls, check post charges, and driver batta are disclosed before booking confirmation. No hidden charges, no adjustments at drop.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/services-offered/premium-car-rentals/outstation-rides/local-and-oustation-trips.jpeg"
                            alt="Outstation Cabs in Bangalore"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOutstation;
