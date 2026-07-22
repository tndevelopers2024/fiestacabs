const FleetOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                <div className="max-w-4xl mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">
                        Car Rental Services and Fleet Options
                    </h2>
                    <p className="text-[#555555] text-[15px] leading-[1.7]">
                        Airport taxi and car rental services typically include options like sedans, SUVs and hatchbacks, and the right vehicle usually depends on passenger count and luggage rather than preference alone. Fiesta's diverse fleet is built around exactly this range, so a solo business traveler and a family with several bags aren't offered the same car by default.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#EC2028] text-white">
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Vehicle</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Category</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Best For</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Capacity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[15px] text-gray-700">
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Hatchback</td>
                                <td className="p-4">Comfortable ride</td>
                                <td className="p-4">Solo travelers, light luggage</td>
                                <td className="p-4 text-center border-l border-gray-100">1 to 3</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Sedan</td>
                                <td className="p-4">Premium cars</td>
                                <td className="p-4">Business travel, ample luggage space</td>
                                <td className="p-4 text-center border-l border-gray-100">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Luxury Sedan (BMW, Mercedes)</td>
                                <td className="p-4">Luxury cars</td>
                                <td className="p-4">Executive and VIP transfers</td>
                                <td className="p-4 text-center border-l border-gray-100">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">SUV</td>
                                <td className="p-4">Well maintained fleet</td>
                                <td className="p-4">Families, groups with more luggage</td>
                                <td className="p-4 text-center border-l border-gray-100">1 to 6</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Tempo Traveller</td>
                                <td className="p-4">Large group transfers</td>
                                <td className="p-4">Teams, events, large luggage loads</td>
                                <td className="p-4 text-center border-l border-gray-100">1 to 12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 text-sm">Every vehicle in the fleet is checked and cleaned between trips, so the car that arrives at the terminal is ready for the journey ahead, whatever the destination in the city.</p>

            </div>
        </section>
    );
};

export default FleetOptions;
