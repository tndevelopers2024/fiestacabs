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
                            Outstation Cabs Chennai: Friendly Drivers, No Hidden Charges
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Outstation cabs in Chennai serve one of India&apos;s most active intercity travel corridors. Corporate travelers, families, and tourists from across the world visiting the city rely on a reliable outstation taxi service to reach destinations beyond Chennai by road.
                            </p>
                            <p>
                                The problem most travelers encounter is not a lack of options—it is the gap between what is quoted and what is billed. Hidden charges for tolls, driver batta added at drop, and fare revisions at checkout are routine complaints against unstructured outstation taxi operators in the city.
                            </p>
                            <p>
                                Fiesta Smart Mobility has been running outstation cabs from Chennai since 1998. Friendly drivers, well-maintained vehicles, fixed per-km fares, and GST-compliant billing have built a <strong>4.8 rating across 729 reviews over 28 years of service</strong>.
                            </p>
                            <p>
                                A pleasant travel experience on a long outstation trip depends on the cab service getting three things right: the driver, the vehicle, and the fare. Fiesta delivers all three consistently.
                            </p>
                        </div>

                        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                            <div className="flex flex-col">
                                <h4 className="text-[#EC2028] font-bold text-4xl mb-1">1998</h4>
                                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Established</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#EC2028] font-bold text-4xl mb-1">4.8/5</h4>
                                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Rating</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#EC2028] font-bold text-4xl mb-1">28+</h4>
                                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Years Exp.</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/services-offered/premium-car-rentals/outstation-rides/local-and-oustation-trips.jpeg"
                            alt="Outstation Cabs in Chennai"
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
