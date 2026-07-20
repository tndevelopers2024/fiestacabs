import Image from "next/image";

const FleetOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                        Fleet Options for Corporate Car Rental in Pune
                    </h2>
                    <p className="text-[#555555] text-[15px] leading-[1.7] max-w-4xl">
                        A diverse fleet is essential to match the right vehicle to the right business need from a single executive pickup to a multi-vehicle conference booking.
                    </p>
                </div>

                <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mb-8">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#EC2028] text-white">
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Vehicle</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Best For</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Capacity</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[15px] text-gray-700">
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Hyundai Aura</td>
                                <td className="p-4">City commutes, budget corporate travel</td>
                                <td className="p-4">1 to 4</td>
                                <td className="p-4">Compact, fuel-efficient</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Premium Sedan</td>
                                <td className="p-4">Business meetings, client visits</td>
                                <td className="p-4">1 to 4</td>
                                <td className="p-4">Comfortable, professional</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Toyota Innova Crysta</td>
                                <td className="p-4">Group travel, airport transfers</td>
                                <td className="p-4">1 to 7</td>
                                <td className="p-4">Class-leading comfort</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Spacious SUVs (Fortuner)</td>
                                <td className="p-4">Executive travel, outstation trips</td>
                                <td className="p-4">1 to 7</td>
                                <td className="p-4">Full-size, performance-oriented</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Luxury Sedans (Mercedes E220, BMW 5 Series)</td>
                                <td className="p-4">Premium corporate events, VIP travel</td>
                                <td className="p-4">1 to 4</td>
                                <td className="p-4">Superior luxury experience</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Kia Carnival</td>
                                <td className="p-4">Large group executive travel</td>
                                <td className="p-4">1 to 7</td>
                                <td className="p-4">Unmatched space and seating</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-[#555555] text-[15px] leading-[1.7] border border-gray-100">
                    <p className="mb-2">All vehicles in the fleet are well-maintained and inspected before every corporate booking.</p>
                    <p>Fiesta&apos;s premium cars are serviced regularly to ensure a safe and comfortable journey on every trip.</p>
                </div>
            </div>
        </section>
    );
};

export default FleetOptions;
