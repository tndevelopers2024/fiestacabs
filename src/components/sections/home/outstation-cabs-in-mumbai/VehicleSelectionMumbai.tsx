"use client";

import React from "react";

const VehicleSelectionMumbai = () => {
    const vehicles = [
        { type: "Sedan", models: "Toyota Corolla, Dzire", capacity: "1 to 4 passengers", bestFor: "Couples, small groups, corporate travel" },
        { type: "SUV", models: "Toyota Innova Crysta", capacity: "1 to 7 passengers", bestFor: "Families, group outstation trips" },
        { type: "Premium Sedan", models: "Toyota Camry", capacity: "1 to 4 passengers", bestFor: "Executive travel, client visits" },
        { type: "Luxury Cars", models: "On request", capacity: "1 to 4 passengers", bestFor: "High-end corporate and leisure travel" },
        { type: "Tempo Traveller", models: "Force Traveller", capacity: "8 to 14 passengers", bestFor: "Large groups, pilgrimage trips" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Outstation Cab Vehicle Options from Mumbai
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Vehicle selection affects both comfort and cost on long-distance trips. Fiesta offers a range of vehicle types for outstation rides from Mumbai. The vehicle confirmed at booking is the vehicle dispatched.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white mb-10">
                    <table className="w-full text-left min-w-[750px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-200 text-gray-900 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Vehicle Type</th>
                                <th className="py-5 px-6 font-bold">Models</th>
                                <th className="py-5 px-6 font-bold">Capacity</th>
                                <th className="py-5 px-6 font-bold">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vehicles.map((vehicle, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-red-50/40 transition-colors duration-200"
                                >
                                    <td className="py-5 px-6 text-gray-800 font-medium text-lg">{vehicle.type}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.models}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.capacity}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.bestFor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        All vehicles in the Fiesta fleet are regularly maintained and cleaned before outstation trips. Well-maintained cars are not optional for long-distance journeys. Breakdowns and vehicle condition issues are the most common complaints against aggregator-assigned cabs on outstation routes.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default VehicleSelectionMumbai;
