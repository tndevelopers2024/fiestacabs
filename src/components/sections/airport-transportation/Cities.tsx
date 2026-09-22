"use client";

import React from "react";
import Link from "next/link";
import { FaBuilding, FaArchway } from "react-icons/fa6";

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

                <div className="flex flex-wrap justify-center gap-6">
                    {cities.map((city, index) => (
                        <Link
                            key={index}
                            href={city.link}
                            className="bg-red-50 p-8 rounded-2xl shadow-sm border-b-4 border-red-500 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center w-full md:w-[calc(33.333%-16px)] lg:w-[calc(30%-16px)] min-h-[300px]"
                        >
                            <div className="bg-white text-gray-700 w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {city.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900">{city.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{city.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
