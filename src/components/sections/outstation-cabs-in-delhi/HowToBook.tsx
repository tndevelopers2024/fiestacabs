"use client";

import React from "react";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const HowToBook = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    <div className="w-full lg:w-5/12 relative h-[280px] sm:h-[400px] lg:h-[760px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-3-7.jpg"
                            alt="How to Book Outstation Cabs from Delhi"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            BOOKING PROCESS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            How to Book Outstation Cabs from Delhi
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg mb-10 leading-relaxed">
                            <p>
                                Booking outstation cabs from Delhi with Fiesta is available via phone, email, or the website. No app download is required. Bookings can be made up to 7 days in advance or as close as 2 hours before the trip.
                            </p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {[
                                "Share your pickup point in New Delhi or Delhi NCR, drop location, travel date, return date for round trips, and preferred vehicle type.",
                                "Receive a fixed fare quote with all charges listed: base fare, toll taxes, state permits, driver batta, and GST. No hidden fees are added later.",
                                "Confirm the outstation cab booking. Driver name, vehicle number, and contact details are sent via SMS or email.",
                                "Driver arrives at your pickup point on time. Live tracking is active from the start of the outstation journey.",
                                "Complete the trip. Payment by cash, UPI, or corporate account. GST invoice issued on completion.",
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

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Fiesta also handles Delhi airport pickup and drop for outstation journeys. Travelers arriving at Indira Gandhi International Airport who need to continue to an outstation destination can combine the Delhi airport pickup with the full intercity cab booking in a single arrangement.
                        </p>

                        <BookNowButton className="bg-[#EC2028] text-white px-8 py-3 rounded text-lg font-medium shadow-lg hover:-translate-y-1 transition-transform duration-300 inline-block">
                            Book Your Ride Now
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToBook;
