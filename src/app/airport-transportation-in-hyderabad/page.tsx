import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroForm from "../../components/common/HeroForm";
import BookNowButton from "../../components/common/BookNowButton";
import FAQ from "../../components/sections/home/FAQ";
import { 
    FaPlaneDeparture, 
    FaArrowRight, 
    FaPlaneArrival, 
    FaHandshake, 
    FaReceipt, 
    FaShieldHalved, 
    FaAward, 
    FaClock,
    FaTaxi,
    FaVanShuttle,
    FaCarSide,
    FaSuitcaseRolling,
    FaRoute,
    FaMapLocationDot,
    FaUserTie,
    FaHeadset,
    FaUsers,
    FaCar,
    FaCity,
    FaBuildingColumns
} from "react-icons/fa6";

export const metadata = getMetadata("/airport-transportation-in-hyderabad");

const hyderabadAirportFaqs = [
    {
        id: "1",
        question: "How do I book an airport taxi in Hyderabad?",
        answer: "A cab can be booked through Fiesta's website or by phone, with pickup location, flight details, and a mobile number for driver coordination."
    },
    {
        id: "2",
        question: "How far in advance can I pre-book a cab?",
        answer: "Bookings can be made up to seven days ahead of travel, which helps guarantee vehicle availability during busy periods."
    },
    {
        id: "3",
        question: "Does Fiesta charge surge pricing?",
        answer: "No. Fares are agreed at the time of booking, with transparent pricing and no surge charges added later."
    },
    {
        id: "4",
        question: "What vehicles are available for airport transfers?",
        answer: "The fleet includes hatchbacks and sedans for everyday trips, SUVs for families and groups, Tempo Travellers for larger parties, and luxury sedans such as BMW and Mercedes models for executive transfers."
    },
    {
        id: "5",
        question: "Can I book an outstation cab from Hyderabad airport?",
        answer: "Yes, outstation cabs can be arranged directly from the airport for onward travel to nearby cities and towns such as Warangal, Vijayawada, Vishakhapatnam, Tirupati, and Bengaluru."
    },
    {
        id: "6",
        question: "Is customer support available round the clock?",
        answer: "Yes, support is available 24/7 by phone for booking queries, last-minute changes, and general assistance."
    }
];

export default function AirportTransportationHyderabadPage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Form */}
            <HeroForm
                title="Hyderabad Airport Cabs by Fiesta Smart Mobility"
                subtitle="Comfortable, on-time airport taxi rides with a professional chauffeur at Rajiv Gandhi International Airport. Backed by 28 years of trusted service."
                imageSrc="/images/airport-transportation-in-hyderabad/hyderabad-airport-hero.png"
                ctaText="Get A Free Quote"
            />
            
            {/* Section 1: Intro - Your Trusted Hyderabad Airport Taxi Service */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <span className="text-xs uppercase font-bold tracking-widest text-[#EC2028] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                Rajiv Gandhi International Airport (HYD)
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Your Trusted Hyderabad Airport Taxi Service
                            </h1>
                            <p>
                                Landing at Rajiv Gandhi International Airport and need a dependable ride into the city? Fiesta Smart Mobility&apos;s Hyderabad airport cabs are built around one simple idea: a comfortable, on-time ride with a professional driver, so travellers don&apos;t have to worry about arranging transport the moment they step out of arrivals. With 28 years of experience running employee transport and premium car rental services across India, Fiesta brings the same standards of safety, punctuality and transparent pricing to every airport pickup and drop in Hyderabad.
                            </p>
                            <p>
                                Whether it&apos;s a solo business flight, a family holiday, or a late-night landing, a Hyderabad airport taxi should be one less thing to plan around a flight. Fiesta&apos;s airport taxi services are designed for exactly this: a pre-booked cab, a driver who tracks the flight, and a fare that&apos;s agreed upfront with no surprises added later.
                            </p>
                        </div>
                        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-hyderabad/hyderabad-airport-intro.png"
                                alt="Hyderabad Airport Cabs by Fiesta Smart Mobility at Rajiv Gandhi International Airport"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Reliable Airport Taxi Services at Rajiv Gandhi International Airport */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Reliable Airport Taxi Services at Rajiv Gandhi International Airport
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Rajiv Gandhi International Airport is one of the busier hubs on Fiesta&apos;s network, which now extends to more than 60 airports across India. That scale means the same booking process, the same verified drivers, and the same fixed pricing apply whether the trip starts in Hyderabad or any other major city Fiesta covers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaMapLocationDot className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                60+ Airport Network
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Seamless scale and uniform quality standards whether starting from Hyderabad or connecting to any other major Indian airport.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaClock className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Live Flight Tracking
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Drivers track actual landings rather than clock time, so delayed flights never result in missed rides or extra cancellation stress.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaHandshake className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Meet & Greet Arrivals
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Chauffeur waits at terminal arrivals with identification, making vehicle spotting effortless and assisting with heavy luggage.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaReceipt className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Upfront Fixed Pricing
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Agreed fare upfront with zero surge pricing, no hidden tolls, and transparent GST invoices for corporate reimbursements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: What Our Hyderabad Airport Cab Service Covers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Complete Service Scope</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            What Our Hyderabad Airport Cab Service Covers
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Whether landing, departing, or heading to any district of the twin cities, our dedicated airport routes provide complete door-to-terminal certainty.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaPlaneArrival className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Airport Pickup
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Airport pickup bookings are matched to the flight schedule, not a rigid time slot. This is especially useful for red-eye arrivals or flights prone to delays, where the driver is already tracking the landing and waiting when the passenger reaches arrivals.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaPlaneDeparture className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Airport Drop-Off
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Drop-off works the same way in reverse. A cab is booked ahead of a departure with enough buffer for city traffic, turning what can be a stressful drop off into a calm, on-time trip to the terminal.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaCity className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Taxi From Hyderabad Airport To The City
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                A taxi from Hyderabad airport to any part of the city runs on the same transparent pricing and professional driver standard, whether the destination is a home, a hotel, or an office address.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Popular Destinations We Serve Across Hyderabad */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">City Connectivity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Popular Destinations We Serve Across Hyderabad
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We provide seamless airport pickups and drops to all prominent residential, commercial, and tech hubs across the greater Hyderabad region.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#EC2028] flex items-center justify-center font-bold mb-4">
                                <FaBuildingColumns />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Hitech City</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                One of the most frequent airport drop-off points for business travellers heading to Hyderabad&apos;s IT corridor. A pre-booked cab avoids the uncertainty of finding a ride during peak office hours.
                            </p>
                            <span className="inline-block mt-4 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                ~33 km from RGIA
                            </span>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#EC2028] flex items-center justify-center font-bold mb-4">
                                <FaCity />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Jubilee Hills</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A popular residential and hospitality address, common for both airport pickups and everyday city travel bookings with premium sedans and SUVs.
                            </p>
                            <span className="inline-block mt-4 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                ~35 km from RGIA
                            </span>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#EC2028] flex items-center justify-center font-bold mb-4">
                                <FaSuitcaseRolling />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Banjara Hills</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sees continuous demand, particularly for guests staying at luxury hotels in the area or visiting for business meetings, conferences and social occasions.
                            </p>
                            <span className="inline-block mt-4 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                ~30 km from RGIA
                            </span>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#EC2028] flex items-center justify-center font-bold mb-4">
                                <FaRoute />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Other City Locations</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Beyond these popular hubs, Fiesta covers Gachibowli, Financial District, Secunderabad, Begumpet, and any residential suburb without distance limits.
                            </p>
                            <span className="inline-block mt-4 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                Pan-Hyderabad Coverage
                            </span>
                        </div>
                    </div>

                    {/* Table of Routes */}
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/70 border-b border-gray-200">
                                    <th className="p-5 font-bold text-gray-900 text-sm">Destination from RGIA</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Approx. Distance</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Ideal Vehicles</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Fare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Hitech City / Madhapur IT Corridor</td>
                                    <td className="p-5 text-gray-600">33 km (via ORR)</td>
                                    <td className="p-5 text-gray-600">Sedan, SUV, Luxury</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Gachibowli & Financial District</td>
                                    <td className="p-5 text-gray-600">30 km (via ORR)</td>
                                    <td className="p-5 text-gray-600">Sedan, SUV, Innova</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Banjara Hills & Jubilee Hills</td>
                                    <td className="p-5 text-gray-600">30 - 35 km</td>
                                    <td className="p-5 text-gray-600">Sedan, Luxury Car, SUV</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Secunderabad Railway Station</td>
                                    <td className="p-5 text-gray-600">38 km</td>
                                    <td className="p-5 text-gray-600">Sedan, SUV, Tempo Traveller</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Begumpet / Somajiguda</td>
                                    <td className="p-5 text-gray-600">32 km</td>
                                    <td className="p-5 text-gray-600">Hatchback, Sedan</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 5: A Diverse Fleet for Every Kind of Trip */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Premium Fleet</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            A Diverse Fleet for Every Kind of Trip
                        </h2>
                        <p className="text-gray-600 text-lg">
                            A diverse fleet means the vehicle offered actually matches the trip, rather than one default option for every passenger. Every car is thoroughly checked and cleaned between trips.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaCarSide />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Hatchbacks & Sedans</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Hatchbacks and sedans suit solo travellers and small groups with light luggage, making them a practical, affordable choice for routine city travel and everyday airport rides.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Dzire, Etios, Amaze
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaCar />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">SUVs for Families</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Families and small groups travelling with extra bags are better served by an SUV, which offers more boot space and seating without losing comfort on the drive.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Innova Crysta, Ertiga, Hycross
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaAward />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Luxury Cars</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    For executive pickups, VIP transfers, or special occasions where a first impression matters, Fiesta&apos;s luxury sedans, including BMW and Mercedes models, are maintained to higher standards.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Mercedes E-Class, BMW 5 Series
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaVanShuttle />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Tempo Travellers</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Corporate teams, wedding parties, and larger families can book a Tempo Traveller, built for groups with more passengers and more luggage than a standard sedan can carry.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Capacity: 9 to 26 Seater Options
                            </div>
                        </div>
                    </div>

                    {/* Fleet Table */}
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Vehicle Category</th>
                                    <th className="p-6 font-bold text-gray-900">Ideal For</th>
                                    <th className="p-6 font-bold text-gray-900">Luggage & Comfort</th>
                                    <th className="p-6 font-bold text-gray-900">Fare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Hatchback</td>
                                    <td className="p-6 text-gray-600">1 to 2 passengers, solo business travellers</td>
                                    <td className="p-6 text-gray-600">1-2 compact bags, AC city transit</td>
                                    <td className="p-6 text-gray-900 font-semibold">Transparent Fixed Quote</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Sedan (Dzire, Etios)</td>
                                    <td className="p-6 text-gray-600">Up to 3 passengers, corporate executives</td>
                                    <td className="p-6 text-gray-600">2 medium suitcases + cabin bags</td>
                                    <td className="p-6 text-gray-900 font-semibold">Transparent Fixed Quote</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">SUV (Innova Crysta)</td>
                                    <td className="p-6 text-gray-600">Families, 4-6 passengers with luggage</td>
                                    <td className="p-6 text-gray-600">Spacious boot, captain seats</td>
                                    <td className="p-6 text-gray-900 font-semibold">Transparent Fixed Quote</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Tempo Traveller</td>
                                    <td className="p-6 text-gray-600">Large groups, wedding guests, delegations</td>
                                    <td className="p-6 text-gray-600">Dedicated luggage rack & ample legroom</td>
                                    <td className="p-6 text-gray-900 font-semibold">Custom Group Quote</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Luxury (BMW / Mercedes)</td>
                                    <td className="p-6 text-gray-600">VIP transfers, delegations, milestone events</td>
                                    <td className="p-6 text-gray-600">Ultra-quiet cabin, premium chauffeur</td>
                                    <td className="p-6 text-gray-900 font-semibold">Executive Package Quote</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 6: How to Book Airport Taxi in Minutes - Image LEFT, Steps RIGHT */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-hyderabad/hyderabad-airport-booking.jpg"
                                alt="Book Airport Taxi in Minutes in Hyderabad"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Hassle-Free Reservations</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                                Book Airport Taxi in Minutes
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Fiesta allows travellers to pre book airport taxi services up to seven days in advance, skipping the long queues at arrivals. Free cancellation is available on select bookings too.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">1</div>
                                    <p className="text-gray-700 pt-1 font-medium">Share your pickup location, destination, and flight information.</p>
                                </li>
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">2</div>
                                    <p className="text-gray-700 pt-1 font-medium">Select your preferred vehicle type from city sedans to spacious SUVs and luxury cars.</p>
                                </li>
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">3</div>
                                    <p className="text-gray-700 pt-1 font-medium">Receive an agreed, transparent upfront fare with zero hidden surge fees.</p>
                                </li>
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">4</div>
                                    <p className="text-gray-700 pt-1 font-medium">Your chauffeur tracks your flight, arrives early, and assists with luggage at RGIA.</p>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-600 leading-relaxed bg-red-50/70 p-4 rounded-xl border-l-4 border-[#EC2028] text-sm">
                                <strong>Pre-Book &amp; Skip the Wait:</strong> Pre-booking guarantees a vehicle waiting for you even during peak midnight flight landings or severe weather conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Outstation Cabs From Hyderabad Airport */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Regional Highway Connectivity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Outstation Cabs From Hyderabad Airport
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Not every trip out of Rajiv Gandhi International Airport ends within city limits. Fiesta also offers outstation cabs booked directly from the airport, useful for travellers connecting onward to nearby towns rather than staying in Hyderabad itself.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:bg-red-50/30 transition-all">
                            <FaRoute className="text-2xl text-[#EC2028] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Warangal</h4>
                            <p className="text-xs text-gray-500 mb-2">Heritage &amp; Industrial Hub</p>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">~180 km</span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:bg-red-50/30 transition-all">
                            <FaRoute className="text-2xl text-[#EC2028] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Vijayawada</h4>
                            <p className="text-xs text-gray-500 mb-2">Commercial Corridor</p>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">~275 km</span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:bg-red-50/30 transition-all">
                            <FaRoute className="text-2xl text-[#EC2028] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Visakhapatnam</h4>
                            <p className="text-xs text-gray-500 mb-2">Coastal Port Transit</p>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">~620 km</span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:bg-red-50/30 transition-all">
                            <FaRoute className="text-2xl text-[#EC2028] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Tirupati</h4>
                            <p className="text-xs text-gray-500 mb-2">Spiritual Pilgrimage</p>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">~560 km</span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:bg-red-50/30 transition-all">
                            <FaRoute className="text-2xl text-[#EC2028] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Bengaluru</h4>
                            <p className="text-xs text-gray-500 mb-2">Inter-City Highway (NH44)</p>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">~570 km</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Family Trips &amp; Corporate Travel</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Family trips benefit from the extra space an SUV or Tempo Traveller provides, while corporate clients booking for visiting executives or event logistics can arrange multi-vehicle transfers as part of a broader travel plan. Special occasions, from weddings to milestone celebrations, are handled with the same top priority.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Car Rental &amp; City Travel Beyond the Airport</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Airport pickup is often just the start of a longer stay. Fiesta&apos;s car rental services extend to everyday city travel, running errands, and multi-day hire for visitors who need a vehicle on call rather than booking a fresh ride for every trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Comparison Table - Fiesta vs App-based Cabs */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Value Comparison</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Transparent Pricing: Fiesta Compared with App-Based Cabs
                        </h2>
                        <p className="text-gray-600 text-lg">
                            One of the common complaints about ride-hailing apps is surge pricing during peak flight timings. Fiesta provides fixed, transparent fares agreed at the time of booking with zero surge surprises.
                        </p>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Feature</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3 text-[#EC2028]">Fiesta Smart Mobility</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">App-Based Cabs</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Fare Structure</td>
                                    <td className="p-6 text-gray-800 font-medium">Fixed fare confirmed upfront</td>
                                    <td className="p-6 text-gray-500">Fluctuates with demand, traffic &amp; time</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Surge Pricing</td>
                                    <td className="p-6 text-emerald-700 font-bold">Zero surge, even during midnight rush</td>
                                    <td className="p-6 text-gray-500">Frequent 1.5x - 2.5x surge multipliers</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Flight Tracking</td>
                                    <td className="p-6 text-gray-800 font-medium">Automatic monitoring of actual landing time</td>
                                    <td className="p-6 text-gray-500">No flight tracking; fixed wait window</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Delayed Flight Grace</td>
                                    <td className="p-6 text-gray-800 font-medium">Free buffer waiting for delayed arrivals</td>
                                    <td className="p-6 text-gray-500">Hefty waiting penalties or driver cancellations</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Airport Meet &amp; Greet</td>
                                    <td className="p-6 text-gray-800 font-medium">Driver meets at arrivals gate with name sign</td>
                                    <td className="p-6 text-gray-500">Navigate crowded parking tiers to hunt car</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Customer Support</td>
                                    <td className="p-6 text-gray-800 font-medium">24/7 dedicated human phone &amp; desk support</td>
                                    <td className="p-6 text-gray-500">Automated bot / in-app chat tickets</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Corporate Invoicing</td>
                                    <td className="p-6 text-gray-800 font-medium">Auditable GST invoices on every trip</td>
                                    <td className="p-6 text-gray-500">Variable / cumbersome billing process</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 9: Why Choose Fiesta for Hyderabad Airport Cab Service - Content LEFT, Image RIGHT */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Why Fiesta</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Why Choose Fiesta for Hyderabad Airport Cab Service
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fiesta&apos;s Hyderabad airport taxi services are backed by 28 years of industry experience, a 4.8 rating across 729 reviews, and a nationwide network built on the same standards wherever a passenger books a ride.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaAward className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">28 Years of Experience</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Pioneering reliable employee transport and car rentals across India since 1998.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaClock className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">On-Time Pickup, Every Time</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Vehicles dispatched with city traffic buffers and real-time flight tracking.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaReceipt className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Transparent Pricing</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">No hidden charges, zero surge pricing, and upfront disclosed tolls.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaUserTie className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Professional Chauffeurs</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Verified, trained drivers with airport terminal layout expertise.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaShieldHalved className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Safety &amp; Cleanliness</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">GPS-tracked vehicles, thoroughly sanitized and inspected before departure.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaHeadset className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">24/7 Desk Support</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Human assistance available at any hour for schedule modifications or questions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-hyderabad/hyderabad-airport-chauffeur.png"
                                alt="Professional Chauffeurs for Hyderabad Airport Transportation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: CTA Banner - Book Your Hyderabad Airport Cab Today */}
            <section className="relative py-24 md:py-28 w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/airport-transportation-in-hyderabad/hyderabad-airport-cta.jpg"
                        alt="Book Your Hyderabad Airport Cab Today"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Book Your Hyderabad Airport Cab Today
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        For an airport pickup, drop off, or outstation trip from Rajiv Gandhi International Airport, request a quote through Fiesta&apos;s website or reach the support team directly for round the clock assistance with any booking.
                    </p>
                    <BookNowButton className="px-10 py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Your Airport Transfer
                    </BookNowButton>
                </div>
            </section>

            {/* Cross-City Navigation & Hub Link */}
            <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Pan-India Coverage</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">Looking for Airport Transfers in Other Cities?</h3>
                            <p className="text-gray-600 text-sm mt-1">Explore our full network of flight-tracked airport rides across major metropolitan hubs.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/airport-transportation-in-chennai"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Chennai Airport Transfer
                                <FaArrowRight size={12} />
                            </Link>
                            <Link
                                href="/airport-transportation-in-pune"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Pune Airport Transfer
                                <FaArrowRight size={12} />
                            </Link>
                            <Link
                                href="/airport-transportation-in-delhi"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Delhi Airport Transfer
                                <FaArrowRight size={12} />
                            </Link>
                            <Link
                                href="/airport-transportation-services"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-[#EC2028] transition-all shadow-sm"
                            >
                                All Airport Services
                                <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ
                items={hyderabadAirportFaqs}
                badge="Knowledge Base"
                title="Frequently asked"
                darkTitle="questions"
                description="Find answers to common questions about booking Hyderabad airport transportation, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
}
