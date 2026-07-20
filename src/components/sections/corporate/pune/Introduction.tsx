import Image from "next/image";
import BookNowButton from "../../../common/BookNowButton";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-pune/who-uses.png"
                            alt="Corporate Car Rental in Pune"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Car Rental in Pune: Premium Fleet, Verified Chauffeurs, Zero Hidden Costs
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>Corporate car rental in Pune covers a wide range of business needs: airport transfers, client meetings, executive commutes, and multi-day outstation trips.</p>
                                <p>Modern businesses need a car rental service that delivers a hassle-free experience every time no last-minute vehicle swaps, no hidden costs, and no unverified drivers.</p>
                                <p>Fiesta Smart Mobility provides corporate car rental services in Pune built for exactly that standard: premium vehicles, professional chauffeurs, and transparent billing for every booking.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Who Uses Corporate Car Rental in Pune
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>Corporate clients across IT, manufacturing, finance, and consulting rely on car rental in Pune for different reasons.</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Business travelers</strong> need reliable transport from the airport straight to meetings without delay.</li>
                                    <li><strong>HR and admin teams</strong> need a dependable car rental company for corporate events, conferences, and client visits.</li>
                                    <li><strong>Companies hosting a special event</strong> or special occasion a product launch, an offsite, or a leadership visit need a premium experience that reflects on the brand.</li>
                                </ul>
                                <p>Fiesta&apos;s corporate mobility programme is built to serve all of these use cases under one contract.</p>
                            </div>
                            <div className="pt-4">
                                <BookNowButton className="inline-block bg-[#E31E24] hover:bg-black text-white px-8 py-3 rounded text-lg font-medium transition-colors duration-300">
                                    Get A Free Quote
                                </BookNowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
