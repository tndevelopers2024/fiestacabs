import Image from "next/image";

const HowToBookBilling = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24">
                    {/* How to Book Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                How to Book Corporate Car Rental in Pune
                            </h2>
                            <p className="text-[#555555] text-[15px] mb-4">Booking a car with Fiesta is a simple, stress-free process available in just a few clicks.</p>
                            <ol className="list-decimal pl-5 space-y-3 text-[#555555] text-[15px] leading-[1.7] font-medium mb-6">
                                <li>Share your pickup location, drop off point, rental period, and preferred vehicle via phone, email, or the website.</li>
                                <li>Receive a fixed quote covering the rental period and vehicle category, with no hidden costs added later.</li>
                                <li>Confirm the booking. Driver and vehicle details are shared in advance of pickup.</li>
                                <li>Complete the trip. Multiple payment options including net banking, UPI, and corporate account billing are accepted.</li>
                            </ol>
                            <div className="bg-[#FFF5F5] border-l-4 border-[#EC2028] p-4 rounded-r text-[#555555] text-[14px]">
                                <p className="mb-2">Timely booking is recommended at least 4 hours in advance to guarantee vehicle availability. Cancellations within 4 hours of the scheduled pickup may incur charges this is communicated clearly at the time of booking.</p>
                                <p>For any booking change, the customer service team is reachable directly via phone or email.</p>
                            </div>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                            <Image
                                src="/images/corporate-car-rental-in-pune/how-to-book-orporate.jpg"
                                alt="How to Book Corporate Car Rental"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Corporate Billing Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Billing and Flexible Contracts
                            </h2>
                            <ul className="space-y-4 text-[#555555] text-[15px] leading-[1.7] list-disc pl-5">
                                <li><strong>Centralised corporate billing</strong> consolidates all trips into a single monthly invoice, simplifying expense management for finance teams.</li>
                                <li>Services are available on hourly, daily, and monthly leasing contracts depending on the dynamic needs of the business.</li>
                                <li>Short-term bookings suit one-off client visits, while monthly contracts work well for recurring executive mobility needs.</li>
                                <li>For any billing query, clients can reach the customer service team directly rather than navigating a generic support queue.</li>
                            </ul>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-1">
                            <Image
                                src="/images/corporate-car-rental-in-pune/clexible-contracts.jpg"
                                alt="Corporate Billing and Flexible Contracts"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToBookBilling;
