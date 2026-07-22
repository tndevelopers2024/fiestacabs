import Image from "next/image";

const ChauffeursSupport = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-16 md:space-y-24">

                {/* Professional Chauffeurs (Text Left, Image Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Professional Chauffeurs and Safety Standards
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Professional chauffeurs and professional drivers are trained on both safe driving and passenger-facing conduct, since an airport transfer is often a traveler's first or last impression of a city. Safety measures include verified drivers, well maintained vehicles and route tracking, giving passengers a reliable, worry-free ride between the airport and their destination.
                            </p>
                        </div>
                    </div>
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/airport-transportation-services/professional-chauffeurs.png"
                            alt="Professional Chauffeurs and Safety Standards"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Additional Text Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Booking and Real Time Support</h3>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Airport transportation can be booked up to 7 days in advance, which suits travelers who prefer to lock in a pickup as soon as flight details are confirmed rather than booking at the last minute. Free cancellation is available on select bookings, so plans can change without a penalty if a flight is rescheduled. Real-time tracking is provided for the transfer itself, and dedicated help desks are available to assist with transportation queries at the airport, covering the kind of last-minute details and preferences that come up around travel. This removes many of the usual hassles of arranging a ride after a long flight.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Transfers Made Stress Free and Hassle Free</h3>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            The aim of a good airport transfer is a stress free start or end to a trip, with timely pickups, punctuality and a comfortable ride rather than an extra thing to plan around a flight, helping travelers save time on both ends. Fiesta works to ensure timely pickups and clear communication, the details that separate a smooth transfer from a hassle free one on paper alone.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Fiesta for Airport Transportation Services</h3>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta focuses on reliability and punctuality across every airport transfer, backed by 28 years in the industry and a 4.8 rating across 729 reviews that reflects an unmatched travel experience and consistent customer support. Clients booking through the website or by phone get transparent pricing upfront, with no surprises added after the ride, and a support team reachable around the clock rather than through an app alone.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChauffeursSupport;
