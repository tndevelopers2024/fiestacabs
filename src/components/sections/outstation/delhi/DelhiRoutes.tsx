"use client";

import React from "react";

const DelhiRoutes = () => {
    const routes = [
        { destination: "Agra", distance: "~230 km", travelTime: "3.5 hrs" },
        { destination: "Jaipur", distance: "~280 km", travelTime: "5 hrs" },
        { destination: "Chandigarh", distance: "~250 km", travelTime: "4.5 hrs" },
        { destination: "Shimla", distance: "~360 km", travelTime: "7 hrs" },
        { destination: "Manali", distance: "~540 km", travelTime: "11 hrs" },
        { destination: "Dehradun", distance: "~300 km", travelTime: "5.5 hrs" },
        { destination: "Haridwar", distance: "~220 km", travelTime: "4 hrs" },
        { destination: "Amritsar", distance: "~450 km", travelTime: "7.5 hrs" },
        { destination: "Lucknow", distance: "~555 km", travelTime: "8 hrs" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Popular Outstation Cab Routes from Delhi
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Delhi outstation cabs connect New Delhi to popular destinations across North India. Below are the most commonly booked outstation routes from Delhi with distances and indicative one-way sedan fares.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 mb-12 bg-white">
                    <table className="w-full text-left min-w-[650px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Destination</th>
                                <th className="py-5 px-6 font-bold">Distance</th>
                                <th className="py-5 px-6 font-bold">Travel Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {routes.map((route, index) => (
                                <tr key={index} className="hover:bg-red-50/40 transition-colors duration-200">
                                    <td className="py-5 px-6 text-gray-800 font-medium text-lg">{route.destination}</td>
                                    <td className="py-5 px-6 text-gray-600">{route.distance}</td>
                                    <td className="py-5 px-6 text-gray-600">{route.travelTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        One-way fares are fixed flat packages. Round trip fares apply a minimum daily billing of 250 km per day. Toll taxes, state border taxes, and driver batta are additional and stated before booking confirmation. Advance booking up to 7 days ahead is recommended for hill station routes like Shimla and Manali during peak season, and bookings can also be made as close as 2 hours before the trip for flexible travel plans.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DelhiRoutes;
