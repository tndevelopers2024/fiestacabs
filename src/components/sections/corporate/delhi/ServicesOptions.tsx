import Image from "next/image";

const ServicesOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Corporate Car Rental Services in Delhi
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7] mb-6">
                            Corporate car rental options in Delhi include employee shuttles, executive transfers and airport transfer, with each package built around the business requirement rather than a single fixed plan.
                        </p>

                        <div className="space-y-6 text-[#555555] text-[15px] leading-[1.7]">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Airport Transfer</h3>
                                <p>Airport transfer is the most requested service, with drivers tracking flight timing directly so business travelers are never left waiting. Chauffeur-driven cars also provide a professional image, which matters for client pickups straight off a flight.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Travel and Employee Shuttles</h3>
                                <p>Executive travel across Connaught Place and Cyber City uses luxury cars and premium fleet options, with trained chauffeurs briefed on corporate etiquette to keep meetings across multiple locations on schedule. Employee transport for shift-based teams runs on long term rentals with the same vehicle and driver assigned, a model that suits both corporate and occasional leisure rental needs spanning months, as well as shorter term projects.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Events and Tour Packages</h3>
                                <p>Corporate events use tour packages that combine multiple vehicles for a single itinerary, with one point of contact managing the group booking, whether it covers ten employees or a full team.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[500px] h-full w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-delhi/corporate-car.png"
                            alt="Corporate Car Rental Services in Delhi"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOptions;
