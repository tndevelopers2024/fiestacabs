"use client";

import React from "react";

const VehicleSelectionPune = () => {
    const vehicles = [
        { type: "Hatchback", bestFor: "Solo travelers, couples, budget trips", capacity: "1 to 3 passengers", ac: "Yes" },
        { type: "Sedan", bestFor: "Small families, comfortable sedans for corporate travel", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "SUV (Innova Crysta)", bestFor: "Larger groups, extra luggage, family road trips", capacity: "1 to 7 passengers", ac: "Yes" },
        { type: "Luxury Car (Camry)", bestFor: "Executive travel, chauffeur driven cab for client visits", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "Tempo Traveller", bestFor: "Groups of 8 to 12, pilgrimage and group outings", capacity: "8 to 12 passengers", ac: "Yes" },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Vehicle Options for Outstation Cabs from Pune
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Outstation travel from Pune offers a variety of vehicle options including AC hatchbacks, comfortable sedans, SUVs, luxury cars, and Tempo Travellers, catering to different group sizes, travel needs, and budgets. Common vehicle types cover budget trips, comfortable rides, and larger group or family outstation journeys.
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

                <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#EC2028] shadow-sm">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        AC hatchbacks are ideal for budget trips and solo travelers or couples on shorter outstation rides. AC sedans provide an enjoyable, comfortable ride for small families or corporate travelers. AC SUVs are perfect for larger groups or extra luggage. For larger groups, Tempo Travellers accommodate up to 12 passengers, making them ideal for family trips or group outings. Luxury cars are available for premium outstation travel and executive hire.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default VehicleSelectionPune;
