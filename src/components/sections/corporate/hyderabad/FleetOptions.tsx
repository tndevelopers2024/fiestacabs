const FleetOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                        Diverse Fleet for Corporate Car Rental in Hyderabad
                    </h2>
                    <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7] max-w-4xl">
                        <p>A diverse fleet, with cars ranging from compact hatchbacks to premium luxury cars, is what allows Fiesta to match the right vehicle to the right business need.</p>
                        <p>Reputable corporate car rental services in Hyderabad focus on reliability by maintaining vehicles to a high standard, and Fiesta&apos;s maintained cars are properly serviced on a fixed schedule so the well maintained fleet is ready for a stress free travel experience on every trip.</p>
                        <p>Many corporate car rental services in Hyderabad, Fiesta included, equip vehicles with modern amenities such as air conditioning and onboard refreshments to keep the journey comfortable from pickup to drop.</p>
                    </div>
                </div>

                <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mb-8">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#EC2028] text-white">
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Vehicle Categories</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Type</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Best For</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Capacity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[15px] text-gray-700">
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Hatchback</td>
                                <td className="p-4">Non AC / AC</td>
                                <td className="p-4">Local city travel, budget corporate trips</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Sedan</td>
                                <td className="p-4">AC</td>
                                <td className="p-4">Business meetings, airport transfers</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Premium Sedan</td>
                                <td className="p-4">Luxury</td>
                                <td className="p-4">Executive travel, corporate meetings</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Executive Cars / Luxury Sedans (Mercedes E220, BMW 5 Series)</td>
                                <td className="p-4">Luxury car rentals</td>
                                <td className="p-4">VIP travel, premium comfort</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">SUV (Innova Crysta, Fortuner)</td>
                                <td className="p-4">AC</td>
                                <td className="p-4">Outstation trips, group travel</td>
                                <td className="p-4">1 to 7</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Mini Bus / Kia Carnival</td>
                                <td className="p-4">AC</td>
                                <td className="p-4">Event logistics, large teams</td>
                                <td className="p-4">1 to 7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FleetOptions;
