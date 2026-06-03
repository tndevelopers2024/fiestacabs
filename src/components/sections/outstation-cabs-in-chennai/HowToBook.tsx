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
                            src="/images/outstation-cabs-in-chennai/happy-young-woman-using-mobile-phone-while-standing-by-car-city.avif"
                            alt="How to Book Outstation Cabs"
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
                            How to Book Outstation Cabs from Chennai
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg mb-10 leading-relaxed">
                            <p>
                                Booking an outstation cab from Chennai with Fiesta takes a few clicks on the website or a single phone call. There are multiple ways to book: via the Fiesta website, by phone, or by email. No app download is required.
                            </p>
                            <p>
                                Customers can pre-book outstation cabs in advance to ensure timely pickup at the desired location in the city. Whether the outstation trip is a one-way drop to Pondicherry or a multi-day round trip with a planned itinerary, the booking process is the same.
                            </p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {[
                                "Share your trip details: origin, destination, travel date, and vehicle preference via phone, email, or the website.",
                                "Receive a fixed fare quote based on your route and vehicle type. No hidden charges are added later.",
                                "Confirm the booking. Fiesta assigns a verified, friendly driver to your outstation trip.",
                                "Driver arrives at your doorstep at the confirmed time. Real-time GPS tracking is active throughout the journey.",
                                "On completion, a GST invoice is issued. Corporate users and customers on account contracts receive consolidated monthly billing."
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
