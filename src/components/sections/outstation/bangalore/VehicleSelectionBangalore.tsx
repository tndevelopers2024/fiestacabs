"use client";

import React from "react";

const VehicleSelectionBangalore = () => {
    const vehicles = [
        { type: "Hatchback", bestFor: "Solo travelers, couples, budget road trips", capacity: "1 to 3 passengers", ac: "Yes" },
        { type: "Sedan", bestFor: "Small families, corporate outstation travel", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "SUV (Innova Crysta)", bestFor: "Families, larger groups, extra luggage", capacity: "1 to 7 passengers", ac: "Yes" },
        { type: "Premium Sedan (Camry)", bestFor: "Executive travel, client visits", capacity: "1 to 4 passengers", ac: "Yes" },
        { type: "Tempo Traveller", bestFor: "Groups up to 12, family and pilgrimage trips", capacity: "8 to 12 passengers", ac: "Yes" },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Vehicle Options for Outstation Cabs in Bangalore
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                        Outstation cabs in Bangalore from Fiesta cover a range of vehicle types to match different group sizes, distances, and budgets. The vehicle confirmed at booking is the vehicle dispatched.
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
                        All vehicles are air-conditioned and go through regular maintenance before outstation trips. Hatchbacks are the cheaper option for solo travelers or couples on short road trips. Sedans offer a comfortable ride for small families. SUVs handle larger groups and heavier luggage. The Tempo Traveller is the right fleet choice for group outstation travel of 8 to 12 passengers.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default VehicleSelectionBangalore;
