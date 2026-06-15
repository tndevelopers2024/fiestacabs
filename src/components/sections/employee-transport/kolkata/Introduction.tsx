import React from 'react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-[100%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Best Employee Transportation Services in Kolkata for Safe &amp; Timely Commutes
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Employee transportation services in Kolkata are designed to ease daily commutes, improve employee satisfaction, and optimise operational efficiency for businesses of all sizes. Kolkata&apos;s road network presents real challenges: traffic congestion across key corridors, dispersed residential clusters, and BPO and IT operations running 24x7 shift patterns. A stress-free commute is not incidental &mdash; it directly affects how employees arrive at work and how productive they are during the day.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Fiesta Smart Mobility provides reliable employee transportation services in Kolkata across all service models: fixed-route shuttles, dedicated corporate cabs, and tech-enabled demand-responsive fleets. Every solution is built on real-time GPS tracking, background-verified professional drivers, and well-maintained vehicles.
                        </p>
                    </div>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transportation-services-in-kolkata/etsk1.png"
                                alt="Employee Transportation Services in Kolkata"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Employee Transportation Service Models in Kolkata
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Employee transportation services in Kolkata primarily offer three distinct models. Fiesta deploys all three, selecting the right model based on workforce size, shift structure, and route geography.
                        </p> */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Best Employee Transportation Services in Kolkata for Safe &amp; Timely Commutes
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Employee transportation services in Kolkata are designed to ease daily commutes, improve employee satisfaction, and optimise operational efficiency for businesses of all sizes. Kolkata&apos;s road network presents real challenges: traffic congestion across key corridors, dispersed residential clusters, and BPO and IT operations running 24x7 shift patterns. A stress-free commute is not incidental &mdash; it directly affects how employees arrive at work and how productive they are during the day.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Fiesta Smart Mobility provides reliable employee transportation services in Kolkata across all service models: fixed-route shuttles, dedicated corporate cabs, and tech-enabled demand-responsive fleets. Every solution is built on real-time GPS tracking, background-verified professional drivers, and well-maintained vehicles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
