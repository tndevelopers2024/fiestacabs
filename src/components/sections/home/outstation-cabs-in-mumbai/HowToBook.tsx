"use client";

import React from "react";
import Image from "next/image";
import BookNowButton from "../../../common/BookNowButton";

const HowToBook = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image - Left */}
                    <div className="w-full lg:w-5/12 relative h-[700px] lg:h-[800px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                        <Image
                            src="/images/services-offered/premium-car-rentals/outstation-rides/easy-3-step-booking.jpg"
                            alt="How to Book Outstation Cabs from Mumbai"
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
                            How to Book an Outstation Cab from Mumbai with Fiesta
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg mb-10 leading-relaxed">
                            <p>
                                Booking an outstation cab from Mumbai does not require an app or advance account creation. The process is direct.
                            </p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {[
                                "Share your trip details: pickup location in Mumbai, destination, travel date, time, and preferred vehicle type. You can do this via phone, WhatsApp message, email, or the Fiesta website.",
                                "Receive a fixed fare quote that includes the base fare and communicates additional charges such as tolls, batta, and GST clearly.",
                                "Confirm the booking. Fiesta sends a booking confirmation with driver name, vehicle number, and contact details.",
                                "Driver arrives at your doorstep at the confirmed pickup time. GPS tracking is active from the moment the trip begins.",
                                "Complete the journey. Payment can be made by cash, UPI, or corporate account transfer. A GST invoice is issued on completion."
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
                                Pre-booking for outstation trips is recommended, particularly for early morning departures from Mumbai, trips during long weekends, and routes to popular destinations like Lonavala or Shirdi where demand spikes.
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
