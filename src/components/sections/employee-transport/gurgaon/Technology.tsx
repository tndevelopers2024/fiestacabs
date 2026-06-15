import React from 'react';
import Image from 'next/image';

const Technology = () => {
    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transportation-services-in-gurgaon/etsg3.jpg"
                                alt="Technology Behind Fiesta's Transportation Services"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Technology Behind Fiesta&apos;s Transportation Services
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Employee transportation services incorporate advanced technologies to enhance safety and ensure timely arrivals. Fiesta&apos;s transport management platform is built around GPS tracking, AI-driven routing, and automated rostering.
                        </p>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>
                                <strong className="text-gray-900">AI-driven routing:</strong> Automated algorithms efficiently group employees by location, minimising empty seats and reducing route overlap. This keeps daily commutes efficient and cost-effective across Gurgaon&apos;s road network.
                            </p>
                            <p>
                                <strong className="text-gray-900">Real-time GPS tracking:</strong> Live fleet visibility gives operations teams and employees accurate arrival times. Well-maintained fleet tracking also supports compliance and accountability on every route.
                            </p>
                            <p>
                                <strong className="text-gray-900">Hybrid work schedule adaptation:</strong> Advanced transport systems adapt to hybrid work schedules, matching vehicle deployment to office occupancy fluctuations no more fixed fleets running at half capacity on low-attendance days.
                            </p>
                            <p>
                                <strong className="text-gray-900">Online booking and reporting:</strong> Businesses get direct access to an online booking platform with trip logs, expense tracking, and usage reports. Streamlined management tools reduce administration cost and improve budget control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
