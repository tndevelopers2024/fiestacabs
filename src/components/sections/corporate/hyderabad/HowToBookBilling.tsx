import Image from "next/image";

const HowToBookBilling = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24">
                    {/* Booking Process Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Booking Process
                            </h2>
                            <ol className="list-decimal pl-5 space-y-4 text-[#555555] text-[15px] leading-[1.7] font-medium mb-6">
                                <li>Share your corporate requirements, pickup location and preferred vehicle with our support team by phone, email or the website.</li>
                                <li>Receive a fixed quote for the rental period and vehicle category, with no riding cost added later.</li>
                                <li>Confirm the booking and receive chauffeur and vehicle details ahead of pickup.</li>
                                <li>Complete the trip and receive a GST invoice; multiple payment options including net banking, UPI and corporate account billing are accepted.</li>
                            </ol>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Punctuality and 24x7 customer support are key factors businesses look for when choosing a corporate car rental service, and timely booking at least four hours in advance keeps the booking process hassle free.
                            </p>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                            <Image
                                src="/images/corporate-car-rental-in-hyderabad/booking-process.jpg"
                                alt="Booking Process"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Corporate Billing Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Transparent Pricing and Corporate Billing
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>Corporate car rental services in Hyderabad typically offer flexible pricing plans, including hourly, daily and monthly rental options to accommodate different business needs, and Fiesta&apos;s corporate car rental packages follow the same structure as monthly rentals or long term car rentals at competitive rates.</p>
                                <p>Many corporate car rental providers in Hyderabad emphasise transparent pricing and versatile leasing terms, which help companies manage transportation budgets effectively, and Fiesta&apos;s centralised corporate billing consolidates all trips into a single invoice for finance teams handling corporate requirements across multiple corporate offices.</p>
                            </div>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-1">
                            <Image
                                src="/images/corporate-car-rental-in-hyderabad/transparent-pricing-and-corporate-billing.png"
                                alt="Transparent Pricing and Corporate Billing"
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
