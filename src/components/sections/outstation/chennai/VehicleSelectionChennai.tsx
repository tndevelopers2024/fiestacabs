"use client";

import React from "react";

const VehicleSelectionChennai = () => {
    const vehicles = [
        { type: "Sedan", models: "Toyota Corolla, Dzire", capacity: "1 to 4 passengers", rate: "On request" },
        { type: "SUV", models: "Toyota Innova Crysta", capacity: "1 to 7 passengers", rate: "On request" },
        { type: "Premium Sedan", models: "Toyota Camry", capacity: "1 to 4 passengers", rate: "On request" },
        { type: "Tempo Traveller", models: "Force Traveller", capacity: "8 to 12 passengers", rate: "On request" },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Choose the Right Vehicle for Your Outstation Trip
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Vehicle selection for an outstation trip depends on the number of travelers and the journey distance. Fiesta assigns only the confirmed vehicle type, without substitutions. All vehicles are air-conditioned, well-maintained, and inspected before every outstation journey.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-200 text-gray-900 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Vehicle</th>
                                <th className="py-5 px-6 font-bold">Models</th>
                                <th className="py-5 px-6 font-bold">Capacity</th>
                                <th className="py-5 px-6 font-bold">Rate (per km)</th>
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
                                    <td className="py-5 px-6 text-gray-600">{vehicle.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default VehicleSelectionChennai;
