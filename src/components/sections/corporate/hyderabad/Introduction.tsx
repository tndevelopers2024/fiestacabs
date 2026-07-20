import Image from "next/image";
import BookNowButton from "../../../common/BookNowButton";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-16 md:space-y-24">

                {/* Top Section - Text Only */}
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        Corporate Car Rental in Hyderabad
                    </h2>
                    <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                        <p>Corporate car rental in Hyderabad covers everything from a single airport pickup to a full fleet for a week-long conference, and the right partner needs to understand the city&apos;s business corridors as well as the vehicles.</p>
                        <p>Businesses across HITEC City, Gachibowli and the Financial District look for a car rental company that can offer car rental services with customized solutions, not a rigid one size fits all package, since corporate needs shift from week to week.</p>
                        <p>Fiesta Smart Mobility is one of the leading companies offering corporate car rental services in Hyderabad, with a wide car rental inventory, transparent pricing and 28 years of experience behind every corporate car rental package.</p>
                        <p>A 4.8 rating across 729 reviews reflects the exceptional service clients expect, whether the requirement is a single luxury sedan for a leadership visit or full support for group travel.</p>
                    </div>
                </div>

                {/* Bottom Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-hyderabad/why-choose.png"
                            alt="Who Uses Corporate Car Rental in Hyderabad"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                            Who Uses Corporate Car Rental in Hyderabad
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>Corporate clients across HITEC City, Gachibowli, Madhapur and the Financial District rely on corporate car rental in Hyderabad daily, for everything from routine business travel to one-off client visits.</p>
                            <p>Large and small organizations use it differently: a large IT company may need corporate transportation moving staff between corporate offices and other corporate offices, while a smaller consulting firm may need one car for a visit to a client&apos;s place traveling to a meeting.</p>
                            <p>HR and admin teams also rely on Fiesta for transportation services covering employees onsite business visit needs, from a single site inspection to a full day of client-facing work.</p>
                            <p>Pharmaceutical firms near Genome Valley, along with banking and consulting firms around Banjara Hills and Jubilee Hills, expect the same standard: professional drivers, a well maintained vehicle and rental services in Hyderabad that understand specific business requirements rather than offering a generic package.</p>
                        </div>
                        <div className="pt-6">
                            <BookNowButton className="inline-block bg-[#E31E24] hover:bg-black text-white px-8 py-3 rounded text-lg font-medium transition-colors duration-300">
                                Get A Free Quote
                            </BookNowButton>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Introduction;
