"use client";

import React from "react";
import Image from "next/image";

const AboutOutstation = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            ABOUT OUR SERVICE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Outstation Cabs in Hyderabad: Transparent Pricing, Professional Drivers, No Hidden Charges
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Outstation cabs in Hyderabad serve one of India&apos;s largest and fastest-growing metro areas. The twin cities of Hyderabad and Secunderabad generate consistent demand for intercity travel to Tirupati, Vijayawada, Warangal, Srisailam, Bangalore, and beyond. Corporate travelers need reliable cab services for business trips and client visits. Families plan weekend getaways. Pilgrims travel regularly to Tirupati and Srisailam. Each group has different travel needs, but the same core requirement: a cab service in Hyderabad that does what it says it will do.
                            </p>
                            <p>
                                The most common complaints against outstation taxi services in Hyderabad are hidden charges added after the trip, surge pricing applied without notice, and drivers who are late or unfamiliar with intercity routes. A pleasant travel experience on a 6-hour outstation ride depends on three things: a well-maintained car, a punctual and professional driver, and a fare that does not change between booking and billing.
                            </p>
                            <p>
                                Fiesta Smart Mobility offers outstation cabs in Hyderabad on fixed fares, with verified professional drivers, GPS tracking, and GST-compliant invoicing. All charges including tolls, state permits, and driver allowances are disclosed at the time of booking. No hidden charges. No surge pricing.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/outstation-cabs-in-hyderabad/stylish-indian-businessman-formal-wear-standing-against-black-business-car-street-city.avif"
                            alt="Outstation Cabs in Hyderabad"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOutstation;
