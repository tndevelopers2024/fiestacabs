"use client";

import React from "react";

const BangaloreRoutes = () => {
    const routes = [
        { destination: "Mysore", distance: "~143 km", time: "3.5 hrs" },
        { destination: "Coorg", distance: "~237 km", time: "5.5 hrs" },
        { destination: "Ooty", distance: "~270 km", time: "6 hrs" },
        { destination: "Tirupati", distance: "~250 km", time: "6 hrs" },
        { destination: "Wayanad", distance: "~277 km", time: "6.5 hrs" },
        { destination: "Chennai", distance: "~350 km", time: "6.5 hrs" },
        { destination: "Nandi Hills", distance: "~60 km", time: "1.5 hrs" },
        { destination: "Pondicherry", distance: "~310 km", time: "6 hrs" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Popular Outstation Routes from Bangalore
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Bangalore outstation cabs cover all major destinations across South India. Below are the most commonly booked outstation routes with distances, travel times, and indicative one-way sedan fares.
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

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                    <p>
                        Mysore is approximately 143 km from Bangalore and takes about 3 hours 30 minutes by road. Coorg is around 237 km with an estimated travel time of 5 hours 30 minutes. Ooty is about 270 km and typically requires 6 hours. Tirupati is approximately 250 km, with a travel time of about 6 hours. To reach Tirupati by road from Bangalore, the route crosses into Andhra Pradesh, which means state permit and check post charges apply. Wayanad is 277 km from Bangalore with a journey of around 6 hours 30 minutes.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        One-way fares are fixed flat packages. Round trip fares are per km with a minimum daily billing of 250 to 300 km. <span className="font-semibold text-gray-900">Tolls, check post charges, state permit taxes, and driver batta</span> are additional and communicated before confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BangaloreRoutes;
