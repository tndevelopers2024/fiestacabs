"use client";

import React from "react";

const VehicleSelectionHyderabad = () => {
    const vehicles = [
        { type: "Hatchback", bestFor: "Solo travelers, budget outstation rides", capacity: "1 to 3 passengers", ac: "Yes" },
        { type: "Sedan", bestFor: "Corporate travel, small families, sedans for comfortable rides", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "SUV (Innova Crysta)", bestFor: "Family trips, larger groups, extra luggage", capacity: "1 to 7 passengers", ac: "Yes" },
        { type: "Premium Sedan (Camry)", bestFor: "Business trips, executive travel", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "Tempo Traveller", bestFor: "Group travel, pilgrimage trips", capacity: "8 to 12 passengers", ac: "Yes" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Vehicle Options for Outstation Cabs in Hyderabad
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Fiesta offers a range of well-maintained, recent cars for outstation rides from Hyderabad. Vehicle selection covers different group sizes and travel purposes, from solo corporate travel to family trips and group outstation journeys.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white mb-10">
                    <table className="w-full text-left min-w-[750px]">
                        <thead>
                            <tr className="bg-white border-b border-gray-200 text-gray-900 text-base md:text-lg">
                                <th className="py-5 px-6 font-bold">Vehicle Type</th>
                                <th className="py-5 px-6 font-bold">Best For</th>
                                <th className="py-5 px-6 font-bold">Capacity</th>
                                <th className="py-5 px-6 font-bold">AC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vehicles.map((vehicle, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-red-50/40 transition-colors duration-200"
                                >
                                    <td className="py-5 px-6 text-gray-800 font-medium text-lg">{vehicle.type}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.bestFor}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.capacity}</td>
                                    <td className="py-5 px-6 text-gray-600">{vehicle.ac}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028]">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        All vehicles undergo regular maintenance and sanitation before outstation trips. Well-maintained cars are a basic requirement for outstation cab services, not a premium feature. GPS navigation and tracking systems are active on all Fiesta vehicles throughout the outstation journey.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default VehicleSelectionHyderabad;
