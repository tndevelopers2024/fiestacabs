import Image from "next/image";

const ChauffeursSafety = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24">
                    {/* Professional Drivers Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Professional Drivers and Trained Chauffeurs
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>Professional image matters in corporate rentals, so Fiesta invests in premium vehicles and trained chauffeurs who ensure timely arrival for corporate needs and maintain client-facing conduct throughout.</p>
                                <p>Drivers are background verified and trained as transport professionals, ready to assist with luggage and last-minute changes when plans shift.</p>
                            </div>
                        </div>
                        <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                            <Image
                                src="/images/corporate-car-rental-in-delhi/professional-drivers.png"
                                alt="Professional Drivers and Trained Chauffeurs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Advanced Technology Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-1">
                            <Image
                                src="/images/corporate-car-rental-in-delhi/advanced-technology.jpg"
                                alt="Advanced Technology and Real Time Tracking"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center order-2 md:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Advanced Technology and Real Time Tracking
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>Real time tracking and live tracking give customers full visibility into a trip from pickup to drop, which helps with both safety and coordinating multiple vehicles during an event.</p>
                                <p>Advanced technology also supports route planning and fuel management for better route efficiency across NCR, and every vehicle carries valid insurance with drivers verified for a safe, secure ride.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeursSafety;
