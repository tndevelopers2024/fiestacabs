"use client";

import React from "react";
import BookNowButton from "../../../common/BookNowButton";

const CTAChennai = () => {
    return (
        <section
            className="py-16 md:py-28 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/outstation-cabs-in-chennai/closeup-progressive-businesswoman-with-coffee-recharge-ev-car.avif")' }}
        >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/75 md:bg-black/70"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
                        Book an Outstation Cab from Chennai
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-12 leading-relaxed font-light">
                        If you are planning a trip from Chennai to Pondicherry, Tirupati, Bangalore, or any other destination in the city&apos;s outstation network, Fiesta assigns a verified, friendly driver on a confirmed vehicle at a fixed fare. Reach out via phone, email, or the website to find a quote with no hidden charges and no surprises.
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

export default CTAChennai;
