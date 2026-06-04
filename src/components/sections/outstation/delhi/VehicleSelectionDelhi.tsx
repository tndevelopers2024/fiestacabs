"use client";

import React from "react";

const VehicleSelectionDelhi = () => {
    const vehicles = [
        { type: "Hatchback", bestFor: "Budget-conscious travelers, solo rides", capacity: "1 to 3 passengers", ac: "Yes" },
        { type: "Sedan", bestFor: "Corporate travel, small families, comfortable sedans", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "SUV (Innova Crysta)", bestFor: "Families, larger groups, hill station trips", capacity: "1 to 7 passengers", ac: "Yes" },
        { type: "Luxury Cars (Camry)", bestFor: "Executive travel, premium outstation tours", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "Tempo Traveller", bestFor: "Group outstation tours, 8 to 12 passengers", capacity: "8 to 12 passengers", ac: "Yes" },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Vehicle Options for Outstation Cabs from Delhi
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Outstation travel from Delhi offers vehicle options across hatchbacks, sedans, SUVs, and luxury cars to match different group sizes and travel needs. Every vehicle in the Fiesta fleet is a good car: well-maintained, air-conditioned, and inspected before outstation trips.
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
                                <tr key={index} className="hover:bg-red-50/40 transition-colors duration-200">
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
                        Hatchbacks are compact and fuel-efficient, ideal for budget-conscious travelers on shorter outstation trips. Sedans provide a spacious, comfortable interior for longer journeys. SUVs are robust and roomy, suited for larger groups or challenging terrain on hill station routes. Luxury cars are available for premium outstation tours and executive city travel needs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VehicleSelectionDelhi;
