"use client";

import React from "react";

const ChennaiRoutes = () => {
    const routes = [
        { destination: "Pondicherry", distance: "~160 km", fare: "On request", type: "One-way / Round trip" },
        { destination: "Tirupati", distance: "~145 km", fare: "On request", type: "One-way / Round trip" },
        { destination: "Bangalore", distance: "~350 km", fare: "On request", type: "One-way / Round trip" },
        { destination: "Vellore", distance: "~140 km", fare: "On request", type: "One-way / Round trip" },
        { destination: "Coimbatore", distance: "~500 km", fare: "On request", type: "One-way / Round trip" },
        { destination: "Madurai", distance: "~460 km", fare: "On request", type: "One-way / Round trip" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Outstation Cab Routes from Chennai
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Outstation cab services from Chennai cater to popular inter-city routes across Tamil Nadu and beyond. Travelers choose Fiesta for one-way drops and round trips to the following destinations.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 mb-12 bg-white">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Destination</th>
                                <th className="py-5 px-6 font-bold">Approx. Distance</th>
                                <th className="py-5 px-6 font-bold">One-Way Fare (Sedan)</th>
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
                                    <td className="py-5 px-6 text-gray-600">{route.fare}</td>
                                    <td className="py-5 px-6 text-gray-600">{route.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Fares run on a per-km basis for round trips. One-way outstation trips carry fixed, inclusive pricing — a dedicated one-way drop is significantly cheaper than round-trip aggregators billing both legs. <span className="font-semibold text-gray-900">Driver batta</span> is a mandatory daily allowance that applies on all outstation trips and is communicated before confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ChennaiRoutes;
