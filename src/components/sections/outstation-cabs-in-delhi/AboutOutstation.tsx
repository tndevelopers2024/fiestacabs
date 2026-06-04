"use client";

import React from "react";
import Image from "next/image";

const AboutOutstation = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            ABOUT OUR SERVICE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Outstation Cabs Delhi: Transparent Pricing, Experienced Drivers, No Hidden Fees
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Outstation cabs from Delhi cover one of the widest intercity travel networks in India. New Delhi and Delhi NCR sit at the centre of a road network that connects hill stations in Himachal Pradesh and Uttarakhand, heritage cities like Agra and Jaipur, and major metros like Lucknow, Chandigarh, and Amritsar. Office people planning business travel, families exploring popular destinations, and friends organising weekend outstation tours all rely on Delhi taxi service to get out of the city.
                            </p>
                            <p>
                                The challenge with outstation cab booking from Delhi is pricing. Extra charges for toll taxes, state border taxes, and driver allowances that are not disclosed upfront turn an affordable-looking fare into an expensive bill at the drop location. Transparent pricing is the baseline requirement for any outstation cab service, yet it remains inconsistently delivered across Delhi taxi options.
                            </p>
                            <p>
                                Fiesta Smart Mobility offers outstation cabs from Delhi on fixed per-km fares and flat one-way packages. All charges including toll taxes, state permits, and driver batta are disclosed at the time of booking. No hidden fees. No fare changes at drop. Experienced drivers, good cars, and 24x7 customer support across all routes from New Delhi and Delhi NCR.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed.jpg"
                            alt="Outstation Cabs in Delhi"
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
