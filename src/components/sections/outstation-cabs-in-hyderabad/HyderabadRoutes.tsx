"use client";

import React from "react";

const HyderabadRoutes = () => {
    const routes = [
        { destination: "Tirupati", distance: "~570 km", time: "9 hrs" },
        { destination: "Vijayawada", distance: "~275 km", time: "5 hrs" },
        { destination: "Warangal", distance: "~145 km", time: "2.5 hrs" },
        { destination: "Srisailam", distance: "~215 km", time: "4 hrs" },
        { destination: "Bangalore", distance: "~570 km", time: "9 hrs" },
        { destination: "Mumbai", distance: "~710 km", time: "12 hrs" },
        { destination: "Nashik", distance: "~580 km", time: "10 hrs" },
        { destination: "Aurangabad", distance: "~490 km", time: "8 hrs" },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Popular Outstation Cab Routes from Hyderabad
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Hyderabad offers strong road connectivity to major destinations across Telangana, Andhra Pradesh, Karnataka, and Maharashtra. Below are the most popular outstation cab routes from Hyderabad and Secunderabad with distances and indicative one-way sedan fares.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 mb-12 bg-white">
                    <table className="w-full text-left min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Destination</th>
                                <th className="py-5 px-6 font-bold">Distance</th>
                                <th className="py-5 px-6 font-bold">Travel Time</th>
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
                                    <td className="py-5 px-6 text-gray-600">{route.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028] shadow-sm">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Outstation cab fares from Hyderabad can be 5 to 10 percent lower than comparable options available through aggregators, particularly on one-way routes where return-leg billing does not apply. One-way fares are fixed flat packages. Round trip fares are calculated per km with a minimum daily billing of 250 to 300 km. <span className="font-semibold text-gray-900">Driver allowances of Rs. 300 to Rs. 400 per day, state entry permits, and tolls</span> are additional and communicated before booking confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HyderabadRoutes;
