import Image from "next/image";
import BookNowButton from "../../../common/BookNowButton";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-16 md:space-y-24">

                {/* Top Section - Text Only */}
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        Corporate Car Rental in Delhi, Built for the Way You Actually Travel
                    </h2>
                    <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                        <p>Corporate car rental in Delhi spans several hubs, from Connaught Place in the city core to Cyber City in Gurgaon, and a Gurgaon-to-airport pickup moves very differently from a trip within the city center. Route knowledge matters as much as the vehicle itself across Delhi NCR.</p>
                        <p>Fiesta Smart Mobility offers corporate car rental services in Delhi with a diverse fleet and customized solutions built around the actual trip, backed by 28 years in the industry across India and a 4.8 rating across 729 reviews that keeps the focus on customer satisfaction.</p>
                    </div>
                </div>

                {/* Bottom Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-delhi/who-relies.png"
                            alt="Who Relies on Corporate Cab Services in Delhi"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                            Who Relies on Corporate Cab Services in Delhi
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>Business travelers and visiting clients rely on corporate cab services suited to their corporate travel needs, and Fiesta handles both routine employee transport and one-off trips, catering to guests and leadership alike.</p>
                            <p>HR teams also send an enquiry when planning events, since unique requirements around timing and headcount often differ from daily bookings.</p>
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
