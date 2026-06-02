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
                            Outstation Cabs Mumbai: Transparent Fares, Verified Drivers, No Surge Pricing
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Mumbai is India&apos;s financial capital. Its roads are some of the most congested in the country, and its outstation travel demand is consistently high. Travelers heading out of Mumbai to Pune, Lonavala, Nashik, Shirdi, or Alibaug need a cab service that does not inflate fares at checkout, does not switch vehicles at the last minute, and can produce a proper GST invoice.
                            </p>
                            <p>
                                Fiesta Smart Mobility has been running intercity cab services across India since 1998. For outstation rides from Mumbai, Fiesta offers fixed per-km fares, professionally trained drivers, and billing that works for both individual travelers and corporate accounts.
                            </p>
                            <p>
                                This page covers everything you need to plan an outstation trip from Mumbai: routes, fares, vehicle options, how booking works, and what separates a reliable cab service from an app-based aggregator.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/services-offered/premium-car-rentals/outstation-rides/local-and-oustation-trips.jpeg"
                            alt="Outstation Cabs in Mumbai"
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
