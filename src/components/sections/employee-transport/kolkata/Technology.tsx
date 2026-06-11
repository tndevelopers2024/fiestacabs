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
                                src="/images/employee-transport/integrated.jpg"
                                alt="Technology-Driven Transportation Solutions in Kolkata"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Technology-Driven Transportation Solutions
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Efficient transportation solutions for Kolkata businesses rely on technology to manage routes, attendance, and costs. Fiesta&apos;s platform provides customised transportation solutions with real-time tracking, automated rostering, and online booking tools.
                        </p>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>
                                <strong className="text-gray-900">Dynamic routing:</strong> Routes change based on actual employee attendance, reducing empty vehicle miles and cutting costs.
                            </p>
                            <p>
                                <strong className="text-gray-900">Automated rostering:</strong> Shift-based scheduling adapts to variable attendance without manual coordination from HR teams.
                            </p>
                            <p>
                                <strong className="text-gray-900">Online booking and reporting:</strong> Businesses get direct access to trip logs, expense tracking, and usage reports. Send enquiry through the platform or contact the operations team 24x7 for any route or billing query.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
