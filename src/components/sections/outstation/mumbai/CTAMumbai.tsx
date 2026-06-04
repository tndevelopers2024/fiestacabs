"use client";

import React from "react";
import BookNowButton from "../../../common/BookNowButton";

const CTAMumbai = () => {
    return (
        <section
            className="py-16 md:py-28 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/outstation-cabs-in-mumbai/closeup-progressive-businesswoman-using-tablet-ev-charging-station.avif")' }}
        >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/75 md:bg-black/70"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
                        Book an Outstation Cab from Mumbai
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-12 leading-relaxed font-light">
                        If you are planning a road trip from Mumbai to Pune, Lonavala, Nashik, Shirdi, or any other destination, Fiesta assigns a verified driver on a confirmed vehicle at a fixed fare. Share your travel date, route, and vehicle preference to receive a quote with all charges disclosed upfront.
                    </p>

                    <div className="mt-8">
                        <BookNowButton className="inline-block bg-[#EC2028] hover:bg-[#d41c22] text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-[0_10px_30px_rgba(236,32,40,0.4)] hover:shadow-[0_15px_40px_rgba(236,32,40,0.6)] hover:-translate-y-1 active:scale-95">
                            Book Your Ride Now
                        </BookNowButton>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTAMumbai;
