import Image from "next/image";

const ChauffeursSafety = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24">
                    {/* Professional Chauffeurs Section - Content Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Professionally Trained Chauffeurs
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>All our chauffeurs are professional drivers and professionally trained chauffeurs who have cleared a background check before being assigned to a corporate car rental in Hyderabad booking.</p>
                                <p>Chauffeur-driven services in Hyderabad are designed to provide reliable and comfortable transportation for corporate clients, focusing on punctuality and professionalism at every stage of the trip.</p>
                                <p>Professional trained chauffeurs complete safety workshops, and courteous drivers are trained to represent your company well at the client&apos;s place traveling for a meeting, working hard to maintain extreme level courtesy on every trip and make the ride extremely comfortable from start to finish.</p>
                                <p>Chauffeur services are particularly beneficial for corporate travel because they eliminate the stress of navigating Hyderabad&apos;s traffic and finding parking near office parks, so clients can focus on work instead of the road, with every ride made extremely comfortable in the process.</p>
                            </div>
                        </div>
                        <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                            <Image
                                src="/images/corporate-car-rental-in-hyderabad/professionally-trained-chauffeurs.png"
                                alt="Professionally Trained Chauffeurs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Safety Standards Section - Text Only */}
                    <div className="max-w-[1400px]">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Safety Standards and Real Time Monitoring
                        </h2>
                        <ul className="space-y-4 text-[#555555] text-[15px] leading-[1.7] list-disc pl-5">
                            <li><strong>GPS Tracking:</strong> Real time monitoring on every vehicle gives corporate clients accurate ETAs and full visibility of each trip, particularly useful on outstation routes toward Warangal or Srisailam.</li>
                            <li><strong>Insurance Coverage:</strong> Every well maintained vehicle carries valid insurance and a current fitness certificate for passenger protection.</li>
                            <li><strong>Verified Drivers:</strong> Corporate car rental services in Hyderabad prioritise safety by employing trained chauffeurs who are well versed in safe driving practices and customer service, and every driver is background checked before being cleared for corporate routes.</li>
                            <li><strong>Roadside Assistance:</strong> 24x7 roadside assistance keeps hassle free operations running smoothly, covering any mechanical issue during a trip and ensuring hassle free rides on both city and highway routes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeursSafety;
