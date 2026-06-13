import React from 'react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Corporate Employee Transport Services in Delhi GPS-Tracked Fleets, Verified Drivers
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Businesses managing daily employee commutes across the Delhi NCR corridor face a consistent set of problems: unpredictable costs, driver no-shows, and zero visibility into fleet movement. Corporate employee transport services in Delhi, when managed professionally, solve all three and do it at a lower cost per trip than unmanaged ride-hailing.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Fiesta Smart Mobility handles the full commute operation for businesses in Delhi, from route planning and driver assignment to live GPS tracking and consolidated billing. Customers get reliable, on-time pickups. HR and admin teams get a transport programme that runs without daily intervention.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/employee-transportation-services-in-delhi/ets1.jpg"
                                alt="Corporate Employee Transport Services in Delhi"
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

export default Introduction;
