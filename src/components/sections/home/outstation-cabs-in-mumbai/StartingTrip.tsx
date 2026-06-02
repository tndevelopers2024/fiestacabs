"use client";

import React from "react";

const StartingTrip = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-10">
                    <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                        PICKUP POINTS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Starting Your Outstation Trip from Mumbai
                    </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Fiesta picks up from any location in Mumbai. Common pickup points for outstation trips include South Mumbai near the Gateway of India and Taj Mahal Palace hotel for corporate travelers, Bandra and Andheri for travelers in the western suburbs, and Thane and Navi Mumbai for those heading east toward Nashik or Aurangabad.
                    </p>
                    <p>
                        For travelers arriving from outside the city, Fiesta also handles Mumbai airport transfers as the starting leg of a longer outstation trip. A cab booked from the airport can continue directly to an outstation destination without requiring a separate booking.
                    </p>
                    <p>
                        Pickup from locations near Marine Drive, Siddhivinayak Temple, Haji Ali Dargah, Hanging Garden, and other parts of the city is standard. The driver navigates the city&apos;s roads to reach you and then proceeds on the outstation route.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StartingTrip;
