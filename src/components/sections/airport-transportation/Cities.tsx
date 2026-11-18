"use client";

import React from "react";
import Link from "next/link";

const Cities = () => {
    const cities = [
        {
            name: "Airport Transportation in Chennai",
            desc: "Verified chauffeurs and on-time pickups at Chennai International Airport (MAA) from Fiesta's home headquarters since 1998.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Temple / Gopuram icon */}
                    <path d="M32 8 L36 16 L28 16 Z" />
                    <rect x="28" y="16" width="8" height="4" />
                    <path d="M24 20 L40 20 L42 24 L22 24 Z" />
                    <rect x="22" y="24" width="20" height="4" />
                    <path d="M18 28 L46 28 L48 32 L16 32 Z" />
                    <rect x="16" y="32" width="32" height="16" />
                    <rect x="27" y="36" width="10" height="12" />
                    <line x1="16" y1="48" x2="48" y2="48" />
                </svg>
            ),
            link: "/airport-transportation-in-chennai"
        },
        {
            name: "Airport Transportation in Hyderabad",
            desc: "Dependable airport pickups and drops at Rajiv Gandhi International Airport (HYD) with professional flight tracking.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Charminar icon */}
                    <rect x="16" y="32" width="8" height="24" />
                    <rect x="40" y="32" width="8" height="24" />
                    <path d="M16 16 L24 16 L24 32 L16 32 Z" />
                    <path d="M40 16 L48 16 L48 32 L40 32 Z" />
                    <path d="M12 16 L28 16" />
                    <path d="M36 16 L52 16" />
                    <path d="M24 32 Q32 20 40 32" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                </svg>
            ),
            link: "/airport-transportation-in-hyderabad"
        },
        {
            name: "Airport Transportation in Bangalore",
            desc: "Punctual transfers to and from Kempegowda International Airport (BLR) with flight tracking & zero surge.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Palace / Vidhana Soudha icon */}
                    <rect x="8" y="36" width="48" height="20" />
                    <rect x="14" y="24" width="36" height="12" />
                    <path d="M20 24 Q32 10 44 24" />
                    <rect x="8" y="32" width="8" height="4" />
                    <rect x="24" y="32" width="8" height="4" />
                    <rect x="40" y="32" width="8" height="4" />
                    <rect x="28" y="44" width="8" height="12" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                    <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
                </svg>
            ),
            link: "/airport-transportation-in-bangalore"
        },
        {
            name: "Airport Transportation in Mumbai",
            desc: "Punctual transfers to and from Chhatrapati Shivaji Maharaj International Airport (BOM) with flight tracking & zero surge.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Gateway of India arch icon */}
                    <rect x="10" y="40" width="10" height="16" />
                    <rect x="44" y="40" width="10" height="16" />
                    <path d="M20 40 Q32 14 44 40" />
                    <path d="M24 40 Q32 22 40 40" />
                    <rect x="8" y="36" width="48" height="4" />
                    <rect x="12" y="32" width="8" height="4" />
                    <rect x="44" y="32" width="8" height="4" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                </svg>
            ),
            link: "/airport-transportation-in-mumbai"
        },
        {
            name: "Airport Transportation in Pune",
            desc: "Reliable airport transfers to and from Pune International Airport with an on-time guarantee.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Pune IT Park / Modern Hub icon */}
                    <rect x="16" y="24" width="12" height="32" />
                    <rect x="36" y="16" width="16" height="40" />
                    <rect x="20" y="28" width="4" height="4" />
                    <rect x="20" y="36" width="4" height="4" />
                    <rect x="20" y="44" width="4" height="4" />
                    <rect x="40" y="20" width="8" height="4" />
                    <rect x="40" y="28" width="8" height="4" />
                    <rect x="40" y="36" width="8" height="4" />
                    <rect x="40" y="44" width="8" height="4" />
                    <line x1="8" y1="56" x2="60" y2="56" />
                </svg>
            ),
            link: "/airport-transportation-in-pune"
        },
        {
            name: "Airport Transportation in Delhi",
            desc: "Seamless airport pickups and drops at Indira Gandhi International Airport (DEL) at transparent rates.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-11 h-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* India Gate icon */}
                    <rect x="12" y="44" width="40" height="12" />
                    <rect x="16" y="16" width="32" height="28" />
                    <rect x="24" y="28" width="16" height="16" />
                    <path d="M24 28 Q32 20 40 28" />
                    <rect x="14" y="12" width="36" height="4" />
                    <line x1="12" y1="56" x2="52" y2="56" />
                </svg>
            ),
            link: "/airport-transportation-in-delhi"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Book Your Airport Transfers Across Major Cities
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Experience hassle-free and timely airport transportation services tailored for corporate and individual travelers. Enjoy premium vehicles and professional chauffeurs.
                    </p>
                </div>

                {/* 3 cards per row layout (2 rows of 3) matching Employee Transport theme */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cities.map((city, index) => (
                        <Link
                            key={index}
                            href={city.link}
                            className="bg-red-50/70 hover:bg-white p-8 rounded-3xl shadow-sm border border-red-100/60 border-b-4 border-b-[#EC2028] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center justify-between min-h-[300px]"
                        >
                            <div className="bg-white text-gray-700 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-[#EC2028]">
                                {city.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#EC2028] transition-colors">
                                {city.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {city.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;