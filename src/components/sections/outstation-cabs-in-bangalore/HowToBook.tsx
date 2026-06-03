"use client";

import React from "react";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const HowToBook = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Image - Left */}
                    <div className="w-full lg:w-5/12 relative h-[280px] sm:h-[400px] lg:h-[800px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                        <Image
                            src="/images/outstation-cabs-in-bangalore/close-up-electric-car-france.avif"
                            alt="How to Book Outstation Cabs from Bangalore"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            BOOKING PROCESS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            How to Book Outstation Cabs from Bangalore
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg mb-10 leading-relaxed">
                            <p>
                                Booking outstation cabs with Fiesta does not require an app download. Customers can avail the cab service via phone, email, or the website. Outstation cab booking is open 24x7.
                            </p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {[
                                "Share your pickup location in Bangalore or Bengaluru, destination, travel date, departure time, and preferred vehicle type via phone, email, or the Fiesta website.",
                                "Receive a fixed fare quote. The quote covers the base fare and lists all additional charges: check post fees, tolls, batta, and GST. Compare this with other taxi services before confirming.",
                                "Confirm the outstation cab booking. You receive driver name, vehicle number, and contact details via SMS or email.",
                                "Driver arrives at your pickup location at the confirmed time. GPS tracking is active throughout the outstation journey.",
                                "Complete the trip. Payment by cash, UPI, or corporate account. GST invoice issued immediately on completion."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-5 items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-[#EC2028]/30 hover:shadow-md transition-all duration-300">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#EC2028]/10 flex items-center justify-center text-[#EC2028] font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1.5 text-base md:text-lg">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-xl border-l-4 border-[#EC2028] shadow-sm mb-10">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                For outstation travel on weekends or to high-demand destinations, advance booking of at least 7 days is strongly recommended. This secures your preferred vehicle type and locks in current rates before any weekend demand increases from competing taxi services in Bangalore.
                            </p>
                        </div>

                        <div className="pt-2">
                            <BookNowButton className="bg-[#EC2028] text-white px-8 py-3 rounded text-lg font-medium shadow-lg hover:-translate-y-1 transition-transform duration-300 inline-block">
                                Book Your Ride Now
                            </BookNowButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowToBook;
