import React from 'react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-[100%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Employee Transportation Services in Gurgaon Reliable, GPS-Tracked, Shift-Ready
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Gurgaon is a bustling city and the corporate hub of Delhi NCR, home to hundreds of IT, BPO, and multinational corporate offices concentrated in Cyber City and the surrounding sectors. Employee transportation services in Gurgaon are not a convenience they are an operational necessity. Daily commutes in Gurgaon involve intense traffic congestion, long travel distances, and complex shift patterns that standard cab aggregators cannot handle at scale.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            When employees arrive on time and work refreshed, productivity improves and retention strengthens. Fiesta Smart Mobility provides employee transportation services in Gurgaon built for the city&apos;s workforce reality: AI-optimised routes, GPS-tracked well-maintained fleet, professional chauffeurs, and billing structures that work for corporate finance teams.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transport/fiesta-commutes.avif"
                                alt="Why Employee Transportation Services Matter in Gurgaon"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Employee Transportation Services Matter in Gurgaon
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Employee transportation services in Gurgaon are driven by the city&apos;s vast IT, BPO, and multinational workforce. Corporate offices in Cyber City, DLF phases, and Udyog Vihar operate across multiple shifts, with employees commuting from across Delhi NCR and various cities in the region. Managing these employee commutes without a structured transportation solution leads to tardiness, absenteeism, and avoidable cost.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Outsourcing employee commutes to a managed staff transportation service reduces tardiness and enhances overall productivity. Utilising employee transport services alleviates the daily stress of commuting, contributing to better work-life balance and stronger employee satisfaction. When employees arrive stress-free and on time, focus and performance follow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
