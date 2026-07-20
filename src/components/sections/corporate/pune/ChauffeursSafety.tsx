import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const ChauffeursSafety = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24">
                    {/* Professional Chauffeurs Section - Content Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Professional Chauffeurs for Corporate Travel
                            </h2>
                            <ul className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-[#EC2028] mt-1 flex-shrink-0 text-xl" />
                                    <span>Every chauffeur assigned to a Fiesta corporate booking is a verified driver who has cleared a background check.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-[#EC2028] mt-1 flex-shrink-0 text-xl" />
                                    <span>Trained chauffeurs complete safety workshops and behaviour assessments before being cleared for corporate routes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-[#EC2028] mt-1 flex-shrink-0 text-xl" />
                                    <span>English speaking drivers are available for international clients and visiting executives who need clear communication during the journey.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-[#EC2028] mt-1 flex-shrink-0 text-xl" />
                                    <span>Professional drivers are trained in corporate etiquette: punctuality, appropriate conduct, and passenger safety throughout the trip.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
                            <Image
                                src="/images/corporate-car-rental-in-pune/corporate-travel.png"
                                alt="Professional Chauffeurs for Corporate Travel"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Safety Standards Section - Image Left, Content Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Safety Standards on Every Corporate Booking
                            </h2>
                            <ul className="space-y-3 text-[#555555] text-[15px] leading-[1.7] list-disc pl-5">
                                <li><strong>GPS tracking:</strong> Real-time ride monitoring on every vehicle ensures accountability and accurate ETAs.</li>
                                <li><strong>Insurance coverage:</strong> All vehicles carry full insurance coverage for passenger protection during corporate travel.</li>
                                <li><strong>Panic buttons and women&apos;s safety measures:</strong> In-cab panic buttons and woman-only trip tracking are available for female employees and travellers.</li>
                                <li><strong>Roadside assistance:</strong> 24x7 roadside assistance covers any mechanical issue during a trip, minimising disruption to business schedules.</li>
                            </ul>
                            <p className="mt-4 text-[#555555] text-[15px]">Together, these measures are designed to deliver a safe and comfortable journey on every corporate car rental booking in Pune.</p>
                        </div>
                        <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl shadow-lg order-1 md:order-1">
                            <Image
                                src="/images/corporate-car-rental-in-pune/corporate-booking.jpg"
                                alt="Safety Standards on Every Corporate Booking"
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

export default ChauffeursSafety;
