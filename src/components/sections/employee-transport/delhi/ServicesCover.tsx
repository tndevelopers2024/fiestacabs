import React from 'react';
import Image from 'next/image';

const ServicesCover = () => {
    return (
        <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transport/shuttle.jpg"
                                alt="Delhi Employee Transportation Services Coverage"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            What Delhi Employee Transportation Services Cover
                        </h2>
                        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                            Fiesta&apos;s Delhi employee transportation services cover home-to-office and office-to-home routes across Gurgaon, Noida, Faridabad, and Ghaziabad. The scope goes beyond standard commutes. Employee transportation services across the NCT extend to airport transfers for business travel, last-mile shuttle connectivity from metro stations, and logistics support for goods movement when clients require it.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            For businesses in sectors such as manufacturing, warehousing, and FMCG where packers, movers, and goods logistics overlap with employee transport Fiesta can integrate both requirements under a single fleet contract. Packers Delhi operations with large workforces benefit from the same GPS-tracked, rostered transport programme as IT and corporate office clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCover;
