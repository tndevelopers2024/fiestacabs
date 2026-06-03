"use client";

import React from "react";

const HourlyRentals = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Hourly Rentals and Full Day Cab Options from Mumbai
                    </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        For travelers who need a cab for local sightseeing within Mumbai before an outstation trip, or who need a full day cab for meetings across the city, Fiesta offers hourly rental and full day options. These can be combined with an outstation booking as a single engagement rather than two separate arrangements.
                    </p>
                    <p>
                        Full day rates cover a fixed duration and km allowance within the city. Additional hours and kilometers are billed at a fixed rate. Child seats are available on request for family bookings.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HourlyRentals;
