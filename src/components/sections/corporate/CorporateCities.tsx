import React from "react";
import Link from "next/link";

const cities = [
    {
        name: "Corporate Car Rental in Chennai",
        href: "/best-car-rental-in-chennai",
        description:
            "Offering premium cars, trained chauffeurs, and timely service for client meetings, airport transfers, corporate events, and everyday business travel across Chennai's top IT and commercial zones.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Temple icon */}
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
    },
    {
        name: "Corporate Car Rental in Mumbai",
        href: "/corporate-car-rental-in-mumbai",
        description:
            "Supporting Mumbai's fast-paced corporate ecosystem with well-maintained vehicles, flexible rentals, on-time pickups, and seamless travel across major business districts.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Gateway arch icon */}
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
    },
    {
        name: "Corporate Car Rental in Bangalore",
        href: "/corporate-car-rental-in-bangalore",
        description:
            "Ensuring smooth business travel across Whitefield, Electronic City, Outer Ring Road, and major IT hubs with premium fleets, disciplined drivers, and reliable corporate travel management.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Palace/Fort icon */}
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
    },
    {
        name: "Corporate Car Rental in Pune",
        href: "/corporate-car-rental-in-pune",
        description:
            "Providing reliable corporate car rental in Pune for IT parks, manufacturing hubs, and executive travel with premium cars, trained chauffeurs, and transparent billing.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Modern building/IT park icon to represent Pune */}
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
    },
    {
        name: "Corporate Car Rental in Hyderabad",
        href: "/corporate-car-rental-in-hyderabad",
        description:
            "Delivering tailored corporate mobility solutions across HITEC City and Gachibowli with a wide inventory, well-maintained vehicles, and verified chauffeurs.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Charminar-inspired icon to represent Hyderabad */}
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
    },
    {
        name: "Corporate Car Rental in Delhi",
        href: "/corporate-car-rental-in-delhi",
        description:
            "Seamless corporate car rental in Delhi spanning Connaught Place to Cyber City. Offering diverse fleets, executive transfers, and reliable airport pickups.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* India Gate-inspired icon to represent Delhi */}
                <rect x="16" y="24" width="10" height="32" />
                <rect x="38" y="24" width="10" height="32" />
                <path d="M12 24 L52 24 L52 16 L12 16 Z" />
                <path d="M16 16 L24 8 L40 8 L48 16 Z" />
                <path d="M26 24 L26 40 Q32 32 38 40 L38 24 Z" />
                <line x1="8" y1="56" x2="56" y2="56" />
            </svg>
        ),
    },
];

const CorporateCities = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        Corporate Car Rental Services Across Major Cities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
                        Fiesta delivers reliable and professional corporate car rental solutions across India&apos;s key business hubs. With premium fleets, trained chauffeurs, flexible rental plans, and punctual service, we ensure smooth and stress-free business travel for corporate teams nationwide.
                    </p>
                </div>

                {/* City Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cities.map((city) => (
                        <Link
                            href={city.href || "#"}
                            key={city.name}
                            className="bg-rose-50 rounded-2xl p-8 flex flex-col items-center text-center border-b-4 border-[#EC2028] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon circle */}
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-gray-700 group-hover:scale-110 transition-transform duration-300">
                                {city.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#EC2028] transition-colors">{city.name}</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">{city.description}</p>
                            <span className="mt-6 text-[#EC2028] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateCities;
