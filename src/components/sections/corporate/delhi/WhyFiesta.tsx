const WhyFiesta = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className=" mx-auto mb-12 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                        Why Choose Fiesta for Corporate Car Rental
                    </h2>
                    <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                        <p>Reducing commute stress lifts employee productivity, a key reason businesses increasingly book corporate car rental rather than leaving staff to manage their own commute.</p>
                        <p>A 4.8 rating across 729 reviews and 28 years of experience reflect the consistency Fiesta maintains across every trip, and clients comparing car rental services in Delhi cite convenience and reliable drivers as the main reasons they stay.</p>
                    </div>
                </div>

                <div className="flex flex-col mt-12 bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-6 md:p-10 mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Fiesta vs Other Car Rental Companies in Delhi
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-[#EC2028] text-white">
                                    <th className="p-4 font-semibold uppercase tracking-wider text-sm">Feature</th>
                                    <th className="p-4 font-semibold uppercase tracking-wider text-sm">Fiesta Smart Mobility</th>
                                    <th className="p-4 font-semibold uppercase tracking-wider text-sm">Other Car Rental Companies</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[15px] text-gray-700">
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 font-bold text-gray-900">Fleet</td>
                                    <td className="p-4 text-[#555555]">Diverse fleet, well maintained vehicles</td>
                                    <td className="p-4 text-gray-500">Condition not always guaranteed</td>
                                </tr>
                                <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                    <td className="p-4 font-bold text-gray-900">Drivers</td>
                                    <td className="p-4 text-[#555555]">Trained chauffeurs, background verified</td>
                                    <td className="p-4 text-gray-500">Variable standards</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 font-bold text-gray-900">Tracking</td>
                                    <td className="p-4 text-[#555555]">Real time tracking, live tracking</td>
                                    <td className="p-4 text-gray-500">Not always available</td>
                                </tr>
                                <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                    <td className="p-4 font-bold text-gray-900">Billing</td>
                                    <td className="p-4 text-[#555555]">Flexible rental plans, GST invoicing</td>
                                    <td className="p-4 text-gray-500">Often per-trip only</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 font-bold text-gray-900">Support</td>
                                    <td className="p-4 text-[#555555]">Team reachable directly, 24/7</td>
                                    <td className="p-4 text-gray-500">App-based, slower response</td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-gray-50/30">
                                    <td className="p-4 font-bold text-gray-900">Booking</td>
                                    <td className="p-4 text-[#555555]">Easily book online or by phone</td>
                                    <td className="p-4 text-gray-500">Limited booking channels</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFiesta;
