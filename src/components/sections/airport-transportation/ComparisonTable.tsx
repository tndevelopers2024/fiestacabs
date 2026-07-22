const ComparisonTable = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                <div className=" mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                        Fiesta vs Other Airport Transportation Options
                    </h2>
                </div>

                <div className=" mx-auto overflow-x-auto shadow-sm rounded-lg border border-gray-200 bg-white">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#EC2028] text-white">
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider w-1/4">Feature</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider border-l border-white/20 w-3/8">Fiesta Smart Mobility</th>
                                <th className="p-4 font-semibold uppercase text-sm tracking-wider border-l border-white/20 w-3/8">App-Based Cabs / Public Transit</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[15px] text-gray-700">
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Booking</td>
                                <td className="p-4 border-l border-gray-100">Book up to 7 days in advance, fixed driver</td>
                                <td className="p-4 border-l border-gray-100 text-gray-500">On-demand, driver assigned at pickup</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Pricing</td>
                                <td className="p-4 border-l border-gray-100">Transparent pricing, no surge</td>
                                <td className="p-4 border-l border-gray-100 text-gray-500">Prices can rise with demand</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Vehicle</td>
                                <td className="p-4 border-l border-gray-100">Diverse fleet, luxury cars available</td>
                                <td className="p-4 border-l border-gray-100 text-gray-500">Standard hatchbacks and sedans</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Comfort</td>
                                <td className="p-4 border-l border-gray-100">Premium cars, ample luggage space</td>
                                <td className="p-4 border-l border-gray-100 text-gray-500">Limited by vehicle assigned</td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 font-bold text-gray-900">Support</td>
                                <td className="p-4 border-l border-gray-100">Dedicated help desk, real-time tracking</td>
                                <td className="p-4 border-l border-gray-100 text-gray-500">App-based support only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
