"use client";

import React from "react";

const PuneRoutes = () => {
    const routes = [
        { destination: "Mumbai", distance: "~150 km" },
        { destination: "Mahabaleshwar", distance: "~120 km" },
        { destination: "Shirdi", distance: "~185 km" },
        { destination: "Nashik", distance: "~210 km" },
        { destination: "Aurangabad", distance: "~235 km" },
        { destination: "Goa", distance: "~460 km" },
        { destination: "Hyderabad", distance: "~560 km" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Popular Outstation Routes from Pune
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Cabs from Pune connect travelers to popular destinations across Maharashtra, Goa, and beyond. Below are the most commonly booked outstation routes with distances and trip types. Contact Fiesta for a fare quote on your specific route and vehicle preference.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 mb-12 bg-white">
                    <table className="w-full text-left min-w-[500px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Destination</th>
                                <th className="py-5 px-6 font-bold">Distance (approx.)</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        One-way fares are fixed flat packages — the most convenient and cost-effective option for travelers who do not need a return cab. Round trip packages are calculated per km with a minimum daily billing of 250 to 300 km. Outstation round trip rates and one-way fares both vary by vehicle type and total distance. <span className="font-semibold text-gray-900">Driver batta, tolls, and state border taxes</span> are additional and communicated before confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PuneRoutes;
