"use client";

import React from "react";

const MumbaiRoutes = () => {
    const routes = [
        { destination: "Pune", distance: "~150 km", type: "One-way / Round trip" },
        { destination: "Lonavala", distance: "~83 km", type: "One-way / Round trip" },
        { destination: "Nashik", distance: "~170 km", type: "One-way / Round trip" },
        { destination: "Shirdi", distance: "~240 km", type: "One-way / Round trip" },
        { destination: "Alibaug", distance: "~95 km", type: "One-way / Round trip" },
        { destination: "Mahabaleshwar", distance: "~260 km", type: "One-way / Round trip" },
        { destination: "Aurangabad", distance: "~335 km", type: "One-way / Round trip" },
        { destination: "Goa", distance: "~590 km", type: "One-way / Round trip" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Popular Outstation Routes from Mumbai
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Fiesta covers all major outstation routes from Mumbai. Below are the most commonly booked destinations, approximate distances, and indicative one-way fares for a sedan.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 mb-12 bg-white">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Destination</th>
                                <th className="py-5 px-6 font-bold">Distance (approx.)</th>
                                <th className="py-5 px-6 font-bold">Trip Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {routes.map((route, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-red-50/40 transition-colors duration-200"
                                >
                                    <td className="py-5 px-6 text-gray-800 font-medium text-lg">{route.destination}</td>
                                    <td className="py-5 px-6 text-gray-600">{route.distance}</td>
                                    <td className="py-5 px-6 text-gray-600">{route.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        One-way fares use fixed inclusive pricing. Round trips are calculated on a per-km basis with a minimum daily billing of 250 to 300 km. <span className="font-semibold text-gray-900">Tolls, state entry permits, and driver batta</span> are additional and communicated before booking confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MumbaiRoutes;
