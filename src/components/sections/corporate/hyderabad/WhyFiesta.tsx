import Image from "next/image";

const WhyFiesta = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                            Why Fiesta Is the Best Corporate Car Rental in Hyderabad
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>Fiesta Smart Mobility holds a top notch position among car rental services in Hyderabad, and aims to offer best in class support across thousands of corporate bookings.</p>
                            <p>A 4.8 rating across 729 reviews reflects exceptional service maintained over 28 years, and leading companies across Hyderabad choose Fiesta for its diverse fleet, well maintained vehicles and transparent pricing.</p>
                            <p>Corporate car rental services in Hyderabad are tailored to meet the specific needs of businesses, and Fiesta focuses on reliability, professionalism and punctuality, which is why clients consistently call it the best corporate car rental partner for their specific business.</p>
                        </div>
                    </div>
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-hyderabad/why-fiesta.png"
                            alt="Why Fiesta Is the Best Corporate Car Rental in Hyderabad"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Fiesta vs Other Car Rental Companies in Hyderabad
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-100 text-gray-900">
                                    <th className="p-4 border-b border-gray-200 font-bold uppercase tracking-wider text-sm">Feature</th>
                                    <th className="p-4 border-b border-gray-200 font-bold uppercase tracking-wider text-sm text-[#EC2028]">Fiesta Smart Mobility</th>
                                    <th className="p-4 border-b border-gray-200 font-bold uppercase tracking-wider text-sm text-gray-600">Other Car Rental Companies</th>
                                </tr>
                            </thead>
                            <tbody className="text-[15px]">
                                <tr className="hover:bg-gray-50/50">
                                    <td className="p-4 border-b border-gray-100 font-semibold text-gray-900">Driver Verification</td>
                                    <td className="p-4 border-b border-gray-100 text-[#555555]">Professional trained chauffeurs, background verified</td>
                                    <td className="p-4 border-b border-gray-100 text-gray-500">Variable, inconsistent standards</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 bg-gray-50/30">
                                    <td className="p-4 border-b border-gray-100 font-semibold text-gray-900">Fleet Quality</td>
                                    <td className="p-4 border-b border-gray-100 text-[#555555]">Diverse fleet, well maintained vehicle</td>
                                    <td className="p-4 border-b border-gray-100 text-gray-500">Condition not always guaranteed</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50">
                                    <td className="p-4 border-b border-gray-100 font-semibold text-gray-900">Pricing</td>
                                    <td className="p-4 border-b border-gray-100 text-[#555555]">Transparent pricing, no hidden riding cost</td>
                                    <td className="p-4 border-b border-gray-100 text-gray-500">Charges may appear post-trip</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 bg-gray-50/30">
                                    <td className="p-4 border-b border-gray-100 font-semibold text-gray-900">Billing</td>
                                    <td className="p-4 border-b border-gray-100 text-[#555555]">Centralised corporate billing, GST invoicing</td>
                                    <td className="p-4 border-b border-gray-100 text-gray-500">Often per-trip only</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50">
                                    <td className="p-4 border-b border-gray-100 font-semibold text-gray-900">Safety</td>
                                    <td className="p-4 border-b border-gray-100 text-[#555555]">GPS tracking, real time monitoring</td>
                                    <td className="p-4 border-b border-gray-100 text-gray-500">Varies by provider</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 bg-gray-50/30">
                                    <td className="p-4 font-semibold text-gray-900 border-b-none">Support</td>
                                    <td className="p-4 text-[#555555]">Support team directly reachable</td>
                                    <td className="p-4 text-gray-500">App-based, slower response</td>
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
