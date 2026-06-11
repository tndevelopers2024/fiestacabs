import React from 'react';

const FleetOptions = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Fleet Options for Employee Transportation in Kolkata
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        A diverse fleet of well-maintained vehicles is essential for employee transportation, catering to varying team sizes and specific needs. Fiesta maintains premium vehicles across all categories, from compact cars for smaller groups to larger vehicles for high-volume routes.
                    </p>
                </div>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
                        <thead className="bg-[#E31E24] text-white">
                            <tr>
                                <th className="p-4 text-left font-semibold">Vehicle Type</th>
                                <th className="p-4 text-left font-semibold">Best For</th>
                                <th className="p-4 text-left font-semibold">Capacity</th>
                                <th className="p-4 text-left font-semibold">Key Features</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Sedan / Hatchback</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Dedicated corporate cabs, small teams</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">1 to 4 employees</td>
                                <td className="p-4 text-gray-600">Door-to-door, AC, GPS</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Spacious SUVs</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Premium employee transport, client visits</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">1 to 7 employees</td>
                                <td className="p-4 text-gray-600">Comfortable ride, AC, GPS</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Tempo Traveller</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Fixed-route shuttles, mid-size teams</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">8 to 12 employees</td>
                                <td className="p-4 text-gray-600">AC, GPS, panic button</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Full-Size Bus / Minibus</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">High-volume fixed routes, large workforce</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Up to 40 employees</td>
                                <td className="p-4 text-gray-600">AC, GPS, CCTV</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Eco-Friendly / Hybrid</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Sustainability-aligned fleets</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Varies by model</td>
                                <td className="p-4 text-gray-600">Low-emission, AC, GPS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-gray-700 text-lg leading-relaxed">
                    <p>
                        All vehicles are air-conditioned, equipped with GPS tracking, and go through thorough maintenance and cleaning before every shift. Many employee transportation vehicles also carry panic buttons to enhance safety and provide immediate assistance in emergencies. Eco-friendly vehicle options including hybrid and low-emission models are available for businesses aligning with corporate sustainability goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FleetOptions;
