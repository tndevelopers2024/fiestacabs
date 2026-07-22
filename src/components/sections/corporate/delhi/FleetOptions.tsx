import Image from "next/image";

const FleetOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-delhi/car-rentals-across-delhi-ncr.png"
                            alt="Car Rentals Across Delhi NCR"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Car Rentals Across Delhi NCR
                        </h2>
                        <div className="space-y-6 text-[#555555] text-[15px] leading-[1.7]">
                            <p>Delhi NCR spans a wide geography, and services that only know the city core tend to struggle once a trip crosses into Gurgaon, Noida or Faridabad. Fiesta&apos;s drivers know the routes connecting all four, which keeps travel time predictable regardless of where a meeting falls.</p>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Car Options</h3>
                                <p>A corporate car booking can range from one sedan for a client visit to a full fleet for a larger event, and well maintained vehicles are inspected on a fixed schedule so every car is ready for a comfortable journey.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Cab Services</h3>
                                <p>Corporate cab services cover everything from a daily office run to a one-off pickup, customized for short term or long term needs based on rental requirements rather than a generic package.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Fleet and Premium Vehicles</h3>
                                <p>Corporate rentals typically include luxury sedans, SUVs and coach buses, and Fiesta&apos;s fleet mirrors that range so the right vehicle is available for the right trip.</p>
                            </div>
                        </div>
                    </div>
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
                                <td className="p-4">Comfortable fleet</td>
                                <td className="p-4">Local trips within Delhi</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Sedan</td>
                                <td className="p-4">Premium fleet</td>
                                <td className="p-4">Business meetings, airport pickups</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Luxury Sedan (Mercedes E220, BMW 5 Series)</td>
                                <td className="p-4">Luxury cars</td>
                                <td className="p-4">Executive travel, VIP guests</td>
                                <td className="p-4">1 to 4</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">SUV (Innova Crysta, Fortuner)</td>
                                <td className="p-4">Large fleet</td>
                                <td className="p-4">Outstation trips, group travel</td>
                                <td className="p-4">1 to 7</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Tempo Traveller / Kia Carnival</td>
                                <td className="p-4">Large fleet</td>
                                <td className="p-4">Events, conferences, large teams</td>
                                <td className="p-4">1 to 15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 text-sm">Every vehicle goes through a maintenance check before assignment, keeping the fleet reliable for both short trips and longer journeys.</p>
            </div>
        </section>
    );
};

export default FleetOptions;
