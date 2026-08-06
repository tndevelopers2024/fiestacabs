import React from 'react';
import Image from 'next/image';

const WhyStruggle = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-12">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Why Struggle With Cabs and Taxis?
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            Relying on ad hoc cabs, taxis, or personal vehicles for daily staff commutes creates unpredictable costs and coordination overhead for growing organisations. Fiesta removes this burden with a fixed, centrally managed shuttle programme that gives your business consistent, reliable transport every day.
                        </p>

                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            A True Long-Term Partner
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Fiesta works as a long-term transport partner, with dedicated account support as your organisation&apos;s shuttle programme scales.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[350px] md:h-[400px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-7-2.jpg"
                            alt="Traffic in Hyderabad"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyStruggle;
