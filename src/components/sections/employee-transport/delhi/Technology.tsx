import React from 'react';
import Image from 'next/image';

const Technology = () => {
    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transport-services-in-delhi/ets3.jpg"
                                alt="Transport Management Technology"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Transport Management Technology
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            AI-optimised routes reduce idle time and vehicle overlap. Automated rostering eliminates manual coordination. An online booking platform gives authorised users direct access to live fleet tracking, trip logs, and expense data. Streamlined management tools allow businesses to monitor bookings and usage without raising support requests for routine queries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
