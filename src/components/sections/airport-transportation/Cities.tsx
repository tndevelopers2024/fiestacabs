"use client";

import React from "react";
import Link from "next/link";
import { FaBuilding, FaArchway, FaMonument, FaBuildingColumns } from "react-icons/fa6";

const Cities = () => {
    const cities = [
        {
            name: "Airport Transportation in Pune",
            desc: "Reliable airport transfers to and from Pune International Airport with an on-time guarantee.",
            icon: <FaBuilding />,
            link: "/airport-transportation-in-pune"
        },
        {
            name: "Airport Transportation in Delhi",
            desc: "Seamless airport pickups and drops at Indira Gandhi International Airport (DEL) at transparent rates.",
            icon: <FaArchway />,
            link: "/airport-transportation-in-delhi"
        },
        {
            name: "Airport Transportation in Hyderabad",
            desc: "Dependable airport pickups and drops at Rajiv Gandhi International Airport (HYD) with professional flight tracking.",
            icon: <FaMonument />,
            link: "/airport-transportation-in-hyderabad"
        },
        {
            name: "Airport Transportation in Chennai",
            desc: "Verified chauffeurs and on-time pickups at Chennai International Airport (MAA) from Fiesta's home headquarters since 1998.",
            icon: <FaBuildingColumns />,
            link: "/airport-transportation-in-chennai"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cities.map((city, index) => (
                        <Link
                            key={index}
                            href={city.link}
                            className="bg-red-50 p-7 rounded-2xl shadow-sm border-b-4 border-red-500 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center min-h-[300px]"
                        >
                            <div className="bg-white text-gray-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {city.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-gray-900">{city.name}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{city.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
