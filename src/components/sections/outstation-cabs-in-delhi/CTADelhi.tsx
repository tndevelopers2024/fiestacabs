"use client";

import React from "react";
import BookNowButton from "../../common/BookNowButton";

const CTADelhi = () => {
    return (
        <section
            className="py-16 md:py-28 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/shuttle-service-in-delhi/unnamed-5-5.jpg")' }}
        >
            <div className="absolute inset-0 bg-black/75 md:bg-black/70"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
                        Book Outstation Cabs from Delhi with Fiesta
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-12 leading-relaxed font-light">
                        If you are planning an outstation trip from New Delhi or Delhi NCR to Agra, Jaipur, Shimla, Manali, or any other destination, Fiesta Smart Mobility provides a verified driver, a confirmed vehicle, and a fixed fare with no hidden fees. Share your pickup point, drop location, travel date, and vehicle preference to receive a transparent quote before you book.
                    </p>

                    <BookNowButton className="inline-block bg-[#EC2028] hover:bg-[#d41c22] text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-[0_10px_30px_rgba(236,32,40,0.4)] hover:shadow-[0_15px_40px_rgba(236,32,40,0.6)] hover:-translate-y-1 active:scale-95">
                        Book Your Ride Now
                    </BookNowButton>
                </div>
            </div>
        </section>
    );
};

export default CTADelhi;
