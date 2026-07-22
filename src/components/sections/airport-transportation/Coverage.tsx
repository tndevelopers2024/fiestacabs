import Image from "next/image";

const Coverage = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/airport-transportation-services/airports-in-india.png"
                            alt="Coverage Across Major Airports in India"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Coverage Across Major Airports in India
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Airport transfer services operate 24/7 across major Indian cities, and airport cab coverage now extends to over 60 airports in India, from large international hubs to smaller regional ones. Multiple transport options are available at busy airports such as Hyderabad, including Pushpak buses running from various city locations, though these come with fixed schedules rather than the door-to-door convenience of a booked car.
                            </p>
                            <p>
                                Fiesta's own coverage focuses on major cities including Delhi, where flight schedules, traffic patterns and terminal layouts are tracked closely enough to keep pickups reliable regardless of the time of day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
