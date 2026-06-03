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
                            Outstation Cabs Pune: Transparent Fares, Verified Chauffeurs, No Surge Pricing
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Pune is well connected to major cities across India by road. Mumbai, Nashik, Aurangabad, Mahabaleshwar, Shirdi, Goa, and Hyderabad are all reachable by highway without a flight. Outstation cab service in Pune is one of the most active intercity travel segments in Maharashtra, with demand spanning corporate travelers, families, and pilgrimage groups.
                            </p>
                            <p>
                                Finding a reliable outstation taxi service in Pune is straightforward. Getting one that delivers a hassle-free experience — where the fare quoted matches the fare billed and the driver shows up on time — is where most aggregators fall short. Surge pricing, undisclosed driver batta, and last-minute vehicle substitutions are routine issues on outstation rides booked through app-based platforms.
                            </p>
                            <p>
                                Fiesta Smart Mobility offers outstation cabs from Pune on fixed per-km fares with verified chauffeur-driven cabs, GST-compliant billing, and 24x7 customer support. All additional charges including tolls, state taxes, and driver batta are disclosed before booking confirmation. No hidden charges. No surprises.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/outstation-cabs-in-pune/indian-businessman-goes-home-dinner.avif"
                            alt="Outstation Cabs in Pune"
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
