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
    FaCar,
    FaCity,
    FaBuildingColumns,
    FaTrainSubway
} from "react-icons/fa6";

export const metadata = getMetadata("/airport-transportation-in-chennai");

const chennaiAirportFaqs = [
    {
        id: "1",
        question: "Which cab is cheaper in Chennai?",
        answer: "Fares vary by vehicle type and distance across operators. Fiesta's fixed, transparent pricing is agreed before the ride, so there's no surge pricing to factor in."
    },
    {
        id: "2",
        question: "Where is the pickup point for cabs at Chennai Airport?",
        answer: "Pre-booked private transfers are collected directly from the arrivals area, with the driver waiting at the terminal with identification rather than the passenger needing to locate a pickup counter."
    },
    {
        id: "3",
        question: "Which cab app is best in Chennai?",
        answer: "Several app-based aggregators operate in Chennai alongside pre-booked private services like Fiesta, which prioritises fixed fares and a confirmed vehicle over an on-demand app request."
    },
    {
        id: "4",
        question: "Is prepaid taxi available at Chennai Airport?",
        answer: "Yes, prepaid taxi counters are one of the transport options at Chennai Airport, alongside app-based cabs and pre-booked private transfers."
    },
    {
        id: "5",
        question: "How much does a taxi cost at Chennai Airport?",
        answer: "Cost depends on distance, vehicle type, and time of day. Fiesta confirms the fare at the time of booking so the price is known before the ride begins."
    },
    {
        id: "6",
        question: "How to get a taxi at Chennai Airport?",
        answer: "Travellers can use the prepaid counters, book through an app on arrival, or pre-book a private transfer like Fiesta's in advance of landing."
    },
    {
        id: "7",
        question: "Can I use Uber at Chennai Airport?",
        answer: "Yes, app-based aggregators including Uber operate at Chennai Airport."
    },
    {
        id: "8",
        question: "What is the best taxi service at Chennai Airport?",
        answer: "The right choice depends on priorities: app-based cabs suit on-demand trips, while a pre-booked service like Fiesta suits travellers who want a confirmed vehicle and fixed pricing arranged in advance."
    },
    {
        id: "9",
        question: "Is Ola cab available at Chennai Airport?",
        answer: "Yes, Ola is among the app-based aggregators operating at Chennai Airport."
    },
    {
        id: "10",
        question: "Is Uber available at Chennai Airport?",
        answer: "Yes, Uber is available at Chennai Airport alongside other app-based and prepaid taxi options."
    }
];

export default function AirportTransportationChennaiPage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Form */}
            <HeroForm
                title="Chennai Airport Cab Service by Fiesta Smart Mobility"
                subtitle="Dependable airport transfers from Fiesta's Chennai headquarters since 1998. Verified chauffeurs, upfront transparent fares, and on-time flight-tracked pickups."
                imageSrc="/images/airport-transportation-in-chennai/chennai-airport-hero.png"
                ctaText="Get A Free Quote"
            />
            
            {/* Section 1: Intro - Chennai Airport Taxi Services You Can Rely On */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <span className="text-xs uppercase font-bold tracking-widest text-[#EC2028] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                Chennai International Airport (MAA) &bull; Tirusulam
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Chennai Airport Taxi Services You Can Rely On
                            </h1>
                            <p>
                                Landing at Chennai International Airport and need a dependable ride into the city? Fiesta Smart Mobility&apos;s Chennai airport cab service runs on the standards the company has kept from its Chennai headquarters since 1998: verified drivers, transparent fares, and a fleet matched to the trip.
                            </p>
                            <p>
                                Fiesta&apos;s airport transfers are pre-booked in advance, with a driver tracking the flight and waiting at the terminal, so passengers don&apos;t have to search for a ride after landing.
                            </p>
                            <p>
                                Chennai International Airport sits in Tirusulam, about 21 kilometres from the city centre, and connects directly to the Chennai Metro. Multiple transport options are available, including app-based aggregators, prepaid taxi counters, and pre-booked private transfers.
                            </p>
                        </div>
                        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-chennai/chennai-airport-intro.png"
                                alt="Chennai Airport Cab Service by Fiesta Smart Mobility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Chennai International Airport at a Glance */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Airport Transit Overview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Chennai International Airport at a Glance
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Serving both international and domestic terminals, Chennai Airport (MAA) is one of South India&apos;s primary gateways. Knowing your transit options ensures a smooth arrival or departure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaMapLocationDot className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Prime Tirusulam Hub
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Located on GST Road in Tirusulam, roughly 21 km from Chennai Central, with quick arterial links to OMR, Guindy, and ECR.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaTrainSubway className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Metro &amp; Road Links
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Connected to Chennai Metro Blue Line, suburban trains, and national highways connecting to industrial and IT belts.
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
                                Drivers monitor the actual flight touchdown time, accommodating early landings and flight delays without penalties.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaHandshake className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Terminal Meet &amp; Greet
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Chauffeur waits at terminal arrivals with identification, ready to assist with baggage to eliminate queuing at taxi stands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Airport Transfers Built Around Transparent Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Honest Fares</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                                Airport Transfers Built Around Transparent Pricing
                            </h2>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                No Surge Pricing, No Hidden Charges
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base mb-6">
                                Fiesta&apos;s Chennai airport cab booking runs on transparent pricing agreed at the time of booking, not a fare that changes once a driver is assigned.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base mb-6">
                                App-based aggregators can raise fares sharply during peak hours or late-night arrivals. Fiesta avoids this entirely: no surge pricing, no hidden fees added once the trip is underway.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                                        <FaReceipt className="text-[#EC2028]" /> Fixed Quoted Price
                                    </h4>
                                    <p className="text-gray-500 text-xs">All tolls, airport entry, and parking clearly stated upfront.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                                        <FaShieldHalved className="text-[#EC2028]" /> Corporate GST Invoices
                                    </h4>
                                    <p className="text-gray-500 text-xs">Seamless GST compliance and auditable corporate accounting.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50/60 p-8 md:p-10 rounded-3xl border border-red-100">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Late-Night Arrivals and Flight Delays</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Late-night arrivals and delayed flights are handled like any other pickup: the driver monitors the actual landing time, so a delay doesn&apos;t turn into a missed ride.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <FaClock className="text-[#EC2028] mt-1 shrink-0" />
                                    <span><strong>Buffer Waiting:</strong> Complimentary waiting window included on all flights.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaUserTie className="text-[#EC2028] mt-1 shrink-0" />
                                    <span><strong>Dedicated Driver Assignment:</strong> Your confirmed driver stays held for your flight touchdown.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaHeadset className="text-[#EC2028] mt-1 shrink-0" />
                                    <span><strong>24/7 Dispatch Control:</strong> Operations desk actively manages terminal arrivals 24 hours a day.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: How to Book a Chennai Airport Cab */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-chennai/chennai-airport-booking.png"
                                alt="How to Book a Chennai Airport Cab"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Simple 3-Step Process</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                How to Book a Chennai Airport Cab
                            </h2>
                            <ul className="space-y-5">
                                <li className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-9 h-9 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">1</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Share Pickup and Flight Details</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Booking starts with pickup location, flight number, and destination, so the driver can track the flight and plan around any delay.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-9 h-9 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">2</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Confirm Your Fare in Advance</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            The fare is confirmed upfront through the website or by calling the support team directly, locking in transparent pricing.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-9 h-9 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">3</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Get Booking Confirmation</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            A confirmed booking is followed by driver and vehicle details sent ahead of the trip, with identification details for meeting at arrivals.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: A Fleet Built for Every Trip */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Tailored Fleet Options</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            A Fleet Built for Every Trip
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Vehicle selection is based on passenger count and luggage rather than preference alone, so a solo traveller and a family with several suitcases aren&apos;t offered the same car by default.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                    <FaCarSide />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    Comfortable Sedans
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Sedans suit solo travellers and small groups, offering a comfortable ride and reasonable luggage capacity for everyday trips. Smooth, air-conditioned city transit across Chennai.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Swift Dzire, Toyota Etios, Honda Amaze
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                    <FaCar />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    SUVs for Large Groups
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Families and larger groups travelling with more luggage are better served by an SUV. Ample boot capacity, elevated seating, and extra legroom for long highway airport journeys.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Toyota Innova Crysta, Maruti Ertiga, Hycross
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                    <FaAward />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    Luxury Cars for Corporate Travel
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    For executive pickups and corporate travel, Fiesta&apos;s luxury cars and chauffeur-driven sedans add a higher standard of comfort, presentation, and privacy even for a short airport run.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold">
                                Models: Mercedes-Benz E-Class, BMW 5 Series
                            </div>
                        </div>
                    </div>

                    {/* Fleet Table */}
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Vehicle Type</th>
                                    <th className="p-6 font-bold text-gray-900">Passenger Capacity</th>
                                    <th className="p-6 font-bold text-gray-900">Luggage Allowance</th>
                                    <th className="p-6 font-bold text-gray-900">Pricing</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Sedan (Dzire / Etios)</td>
                                    <td className="p-6 text-gray-600">1 - 3 Passengers</td>
                                    <td className="p-6 text-gray-600">2 Medium Bags + 2 Handbags</td>
                                    <td className="p-6 text-gray-900 font-semibold">Fixed Agreed Fare</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">SUV (Innova Crysta)</td>
                                    <td className="p-6 text-gray-600">4 - 6 Passengers</td>
                                    <td className="p-6 text-gray-600">4 Large Bags + 3 Cabin Bags</td>
                                    <td className="p-6 text-gray-900 font-semibold">Fixed Agreed Fare</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Luxury Sedan (BMW / Mercedes)</td>
                                    <td className="p-6 text-gray-600">1 - 3 VIP Guests</td>
                                    <td className="p-6 text-gray-600">3 Large Suitcases</td>
                                    <td className="p-6 text-gray-900 font-semibold">Corporate Rate Quote</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 text-gray-900 font-bold">Tempo Traveller</td>
                                    <td className="p-6 text-gray-600">9 - 20 Passengers</td>
                                    <td className="p-6 text-gray-600">Dedicated Luggage Carrier</td>
                                    <td className="p-6 text-gray-900 font-semibold">Custom Group Quote</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 6: Key Destination Routes in Chennai */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Chennai Transit Routes</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Major Destinations Served from Chennai Airport (MAA)
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We provide direct airport drop-offs and pickups covering residential neighbourhoods, IT tech parks, manufacturing corridors, and beachside destinations.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/70 border-b border-gray-200">
                                    <th className="p-5 font-bold text-gray-900 text-sm">Destination from Chennai Airport</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Approx. Distance</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Typical Travel Time</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Fare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">OMR IT Corridor &bull; Sholinganallur / Siruseri</td>
                                    <td className="p-5 text-gray-600">18 - 25 km</td>
                                    <td className="p-5 text-gray-600">35 - 50 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Guindy Industrial Estate &bull; Mount Road</td>
                                    <td className="p-5 text-gray-600">8 - 12 km</td>
                                    <td className="p-5 text-gray-600">20 - 30 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">T. Nagar / Nungambakkam Commercial Hub</td>
                                    <td className="p-5 text-gray-600">14 - 16 km</td>
                                    <td className="p-5 text-gray-600">30 - 45 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Chennai Central Railway Station &bull; George Town</td>
                                    <td className="p-5 text-gray-600">21 km</td>
                                    <td className="p-5 text-gray-600">45 - 60 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Sriperumbudur &bull; Oragadam Industrial Zone</td>
                                    <td className="p-5 text-gray-600">35 - 42 km</td>
                                    <td className="p-5 text-gray-600">50 - 70 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">ECR Coastal Resorts &bull; Mahabalipuram</td>
                                    <td className="p-5 text-gray-600">35 - 55 km</td>
                                    <td className="p-5 text-gray-600">50 - 75 mins</td>
                                    <td className="p-5 text-[#EC2028] font-semibold">Fixed / On Request</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 7: Comparing Your Chennai Airport Transfer Options */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Smart Comparisons</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Comparing Your Chennai Airport Transfer Options
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The Chennai Metro is often the fastest way into the city during heavy traffic, and app-based cabs are widely available around the clock. A pre-booked private transfer suits travellers who want a confirmed vehicle and fixed pricing without waiting at a counter after landing.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-6 font-bold text-gray-900 w-1/4">Transfer Factor</th>
                                    <th className="p-6 font-bold text-[#EC2028] w-1/4">Fiesta Pre-Booked Cabs</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/4">App-Based Aggregators</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/4">Chennai Metro / Prepaid</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Pricing &amp; Fares</td>
                                    <td className="p-6 text-gray-800 font-medium">Fixed fare agreed upfront</td>
                                    <td className="p-6 text-gray-500">Subject to dynamic surge multipliers</td>
                                    <td className="p-6 text-gray-500">Fixed ticket / zonal counter rates</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Luggage Handling</td>
                                    <td className="p-6 text-gray-800 font-medium">Chauffeur assists with all bags to car</td>
                                    <td className="p-6 text-gray-500">Self-haul through parking zones</td>
                                    <td className="p-6 text-gray-500">Difficult with multiple heavy suitcases</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Flight Delays</td>
                                    <td className="p-6 text-gray-800 font-medium">Monitored live; ride held automatically</td>
                                    <td className="p-6 text-gray-500">Driver cancels or charges penalty fees</td>
                                    <td className="p-6 text-gray-500">Service stops after midnight for metro</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Pickup Location</td>
                                    <td className="p-6 text-gray-800 font-medium">Direct arrivals meet &amp; greet with placard</td>
                                    <td className="p-6 text-gray-500">Walk to designated aggregator pickup lane</td>
                                    <td className="p-6 text-gray-500">Counter line queue / metro station link</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Driver Professionalism</td>
                                    <td className="p-6 text-gray-800 font-medium">Verified, uniformed executive chauffeur</td>
                                    <td className="p-6 text-gray-500">Crowdsourced drivers; variable quality</td>
                                    <td className="p-6 text-gray-500">Standard taxi driver</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 8: Safety & Professional Standards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6">
                                    <FaUserTie />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Verified Drivers and Chauffeurs
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Every driver on a Chennai airport route is verified before being assigned, and professional chauffeurs are trained specifically for airport pickups: waiting with identification at arrivals and assisting with luggage.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6">
                                    <FaMapLocationDot />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Real-Time Tracking for Peace of Mind
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Real-time tracking is available on every airport transfer, so passengers and anyone waiting for them can follow the ride from pickup to drop-off with full transparency.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl font-bold mb-6">
                                    <FaShieldHalved />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Corporate Travel &amp; Safety Standards
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Businesses booking airport transfers for employees, clients, or visiting executives get the same driver verification, sanitize-checked vehicles, and tracking standards applied to daily corporate commutes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Why Choose Fiesta for Chennai Airport Cab Booking - Content LEFT, Image RIGHT */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Fiesta Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Why Choose Fiesta for Chennai Airport Cab Booking
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fiesta combines 28 years of transport experience with transparent pricing, verified drivers, and a fleet built for every kind of Chennai airport trip, from a solo business flight to a large family visit.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaAward className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Chennai Roots Since 1998</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Headquartered in Chennai for 28 years with deep knowledge of every city arterial route.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaClock className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Flight-Tracked Pickups</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Early driver arrival synchronized with real-time landing time for zero wait time.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaReceipt className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">Zero Surge Guarantees</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Agreed fare remains completely constant regardless of rain, midnight hours, or traffic.</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaHeadset className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#EC2028] transition-colors duration-300">24/7 Phone Assistance</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">Direct human desk support ready to assist with terminal navigation or sudden schedule shifts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-chennai/chennai-airport-chauffeur.png"
                                alt="Professional Chauffeurs for Chennai Airport Transportation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: CTA Banner - Book Your Chennai Airport Cab Today */}
            <section className="relative py-24 md:py-28 w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/airport-transportation-in-chennai/chennai-airport-cta.jpg"
                        alt="Book Your Chennai Airport Cab Today"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Book Your Chennai Airport Cab Today
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        For a Chennai airport pickup or drop, request a fare and confirm a vehicle through Fiesta&apos;s website or by calling the support team directly, with flight details shared in advance for a smooth, on-time transfer.
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
                            <p className="text-gray-600 text-sm mt-1">Explore our nationwide network of flight-tracked airport rides across major metropolitan hubs.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/airport-transportation-in-hyderabad"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Hyderabad Airport Transfer
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
                                href="/airport-transportation-in-pune"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Pune Airport Transfer
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
                items={chennaiAirportFaqs}
                badge="Knowledge Base"
                title="Frequently asked"
                darkTitle="questions"
                description="Find answers to common questions about booking Chennai airport cabs, fares, terminal pickups, and vehicle options."
            />
        </main>
    );
}
