import Image from "next/image";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-16 md:space-y-24">

                {/* Section 1: You Can Count On (Image Left, Text Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/airport-transportation-services/you-can-count-on.png"
                            alt="Airport Transportation Services You Can Count On"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Airport Transportation Services You Can Count On
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Airport transportation options include public transit, ride-sharing apps, taxis and private transfers, and the right choice usually comes down to group size, luggage, budget and schedule rather than one option working for everyone. A solo traveler catching an early flight has very different needs from a business team landing with equipment and ample luggage space to manage.
                            </p>
                            <p>
                                Fiesta Smart Mobility focuses on the private, pre-booked end of that spectrum: airport transportation services built around a comfortable ride, professional drivers and transparent pricing, so travelers arriving at a hotel, office or home don't have to worry about arranging transport on arrival.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Comparing Options (Text Left, Image Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Comparing Your Airport Transportation Options
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Public transit is usually the cheapest way to reach or leave an airport, and in a large city an airport express train or metro line often provides the quickest journey during heavy traffic. App-based cabs such as Ola and Uber are widely available for airport transfers, and taxis and rideshares are often the most reliable choice for late-night or early-morning flights, when other options run less frequently.
                            </p>
                            <p>
                                Shared shuttle services can significantly cut individual costs compared to private rides, which suits solo travelers or small groups on a budget, while rental cars offer flexibility for exploring a destination but can add parking and fuel costs to the trip. A private van or SUV transfer tends to work better for large groups or significant luggage, and a private, pre-booked car provides immediate door-to-door service without surge pricing, which is where Fiesta's airport transportation services fit in.
                            </p>
                        </div>
                    </div>
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/airport-transportation-services/comparing.png"
                            alt="Comparing Your Airport Transportation Options"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Introduction;
