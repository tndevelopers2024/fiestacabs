import React from 'react';

const FleetOptions = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Fleet Options for Employee Transportation in Gurgaon
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        A diverse range of vehicles is essential for employee transportation, covering different team sizes, shift requirements, and comfort needs. Fiesta maintains a well-maintained fleet of recently serviced, clean vehicles across all categories.
                    </p>
                </div>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
                        <thead className="bg-[#E31E24] text-white">
                            <tr>
                                <th className="p-4 text-left font-semibold">Vehicle Type</th>
                                <th className="p-4 text-left font-semibold">Best For</th>
                                <th className="p-4 text-left font-semibold">Capacity</th>
                                <th className="p-4 text-left font-semibold">AC</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Hatchback / Sedan</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Point-to-point pickups, small teams</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">1 to 4 employees</td>
                                <td className="p-4 text-gray-600">Yes</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Toyota Innova Crysta</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Group commutes, comfortable rides</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Up to 7 employees</td>
                                <td className="p-4 text-gray-600">Yes</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Minibus / Tempo Traveller</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Nodal shuttles, high-volume routes</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Up to 12 employees</td>
                                <td className="p-4 text-gray-600">Yes</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Luxury Cars</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Executive travel, client visits</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">1 to 4 employees</td>
                                <td className="p-4 text-gray-600">Yes</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-gray-800 font-medium border-r border-gray-100">Electric Vehicles (EV)</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Sustainable fleet option, fixed routes</td>
                                <td className="p-4 text-gray-600 border-r border-gray-100">Varies by model</td>
                                <td className="p-4 text-gray-600">Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-gray-700 text-lg leading-relaxed">
                    <p>
                        All vehicles are well-maintained and go through regular cleaning and maintenance before every shift. Electric vehicles are increasingly incorporated into Fiesta&apos;s employee transportation fleet as part of a commitment to sustainable, eco-friendly commuting. Consolidating staff into shared corporate shuttles also supports environmental sustainability goals by reducing private car use on Gurgaon&apos;s roads.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FleetOptions;
