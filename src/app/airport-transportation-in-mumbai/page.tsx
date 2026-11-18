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
    FaTrainSubway,
    FaFileInvoiceDollar,
    FaCircleCheck,
    FaCircleXmark,
    FaCarRear,
    FaUsers,
    FaRoad
} from "react-icons/fa6";

export const metadata = getMetadata("/airport-transportation-in-mumbai");

const mumbaiAirportFaqs = [
    {
        id: "1",
        question: "What is the distance between Mumbai Airport and Mumbai Central Railway Station?",
        answer: "Mumbai Central railway station is roughly 15 to 20 kilometres from the airport, depending on the terminal and the route. Travel time is usually 45 to 75 minutes, depending on traffic."
    },
    {
        id: "2",
        question: "Does Uber work in Mumbai?",
        answer: "Yes, Uber operates in Mumbai, along with other app-based services such as Ola. Fares depend on ride type, trip length and demand."
    },
    {
        id: "3",
        question: "Can I use Uber from Mumbai Airport?",
        answer: "Yes, Uber offers rides from Mumbai airport at all hours, with advance booking options. Pickup points are designated, so check the app for the zone that applies to your terminal."
    },
    {
        id: "4",
        question: "How much does it cost to park a car at Mumbai Airport?",
        answer: "Parking charges depend on the duration and the parking area, and the airport operator revises them from time to time. Check the official airport website for the current rates before you travel."
    },
    {
        id: "5",
        question: "How do I transfer from Terminal 2 to Terminal 1 at Mumbai International Airport?",
        answer: "The two terminals are separate buildings a few kilometres apart, so you need a road transfer. The airport lists its inter-terminal options on its official website, and a pre-booked cab is the most direct choice with luggage."
    },
    {
        id: "6",
        question: "How much does a taxi cost from Mumbai Airport?",
        answer: "The fare depends on the destination, the vehicle and traffic. Prepaid taxis follow regulated rates, and Fiesta provides a quote on request before you confirm."
    },
    {
        id: "7",
        question: "Is it cheaper to book a taxi in advance or at the airport?",
        answer: "Advance booking gives a fixed price and a confirmed vehicle, and it avoids surge pricing at peak hours. Booking at the counter can be quicker for a solo traveller, but queues and availability vary."
    },
    {
        id: "8",
        question: "Which cab is cheaper in Mumbai?",
        answer: "Prepaid taxis and app-based rides can cost less on short trips, while app fares rise during surge periods. For corporate travel, the cheaper option is the one with a fixed quote, a GST invoice and no cancellation risk."
    },
    {
        id: "9",
        question: "Does Fiesta provide GST invoices for airport transfers?",
        answer: "Yes, every Fiesta transfer is billed with a GST-compliant invoice. Corporate accounts can also receive a consolidated monthly invoice."
    }
];

export default function AirportTransportationMumbaiPage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Form */}
            <HeroForm
                title="Airport Transport Service Mumbai"
                subtitle="On-time airport pickups and drops at Chhatrapati Shivaji Maharaj International Airport (BOM). Professional chauffeurs, real-time tracking, zero surge pricing, and GST-compliant corporate billing."
                imageSrc="/images/airport-transportation-in-mumbai/mumbai-airport-hero.png"
                ctaText="Get A Free Quote"
            />
            
            {/* Section 1: Intro - Airport Cab Service Mumbai */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <span className="text-xs uppercase font-bold tracking-widest text-[#EC2028] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                Chhatrapati Shivaji Maharaj International Airport (BOM) &bull; Terminal 1 &amp; Terminal 2
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Airport Transport Service Mumbai
                            </h1>
                            <p>
                                Airport cab service Mumbai only works when the car is at the arrival gate before your guest is. Fiesta Smart Mobility has run corporate transport for 28 years, and Mumbai airport cabs are among the most requested transfers for visiting executives, auditors and project teams. This page explains how airport pickup and airport drop work with Fiesta, what to expect at Chhatrapati Shivaji Maharaj International Airport, and how to avoid hidden charges and surge pricing.
                            </p>
                            <p>
                                Fiesta is headquartered in Chennai and operates across India. Our drivers are verified and background-checked, vehicles are tracked in real time, and every trip is billed with a GST-compliant invoice. Customers rate Fiesta 4.8 across 729 reviews.
                            </p>
                        </div>
                        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-mumbai/mumbai-airport-intro.png"
                                alt="Airport Transport Service Mumbai by Fiesta Smart Mobility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Why Mumbai Airport Transfers Fail Corporate Teams */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Corporate Mobility Challenges</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Why Mumbai Airport Transfers Fail Corporate Teams
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Admin and HR teams book airport transfers for people who cannot afford a missed first meeting. The usual failures are predictable, and each one is avoidable with the right vendor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaReceipt className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Surge Pricing and Hidden Charges
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                App-based cab services raise fares sharply when demand peaks, and airport arrival banks are exactly that moment. A fare that looked fixed at booking can change by the time the guest lands. Finance teams then face per-ride receipts that do not match the approved budget. A vendor with a clear quote and no hidden charges removes this problem.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaMapLocationDot className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Delayed Pickup &amp; Gate Confusion
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Mumbai airport has separate terminals and several pickup zones. A driver who waits at the wrong arrival gate leaves a delayed guest standing with luggage and no clear instructions. Pre-planned airport pickup fixes this by matching the driver to the terminal, the flight and the arrival time before the trip starts.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaClock className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Cancellations on the Way to Airport
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                On-demand rides can be cancelled by the driver after the passenger has already accepted the booking. For an early morning flight, a cancellation is a missed flight. A confirmed vehicle with a named driver is the safer option for any business trip.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaFileInvoiceDollar className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">
                                Missing GST Invoices
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Corporate travel needs paperwork that survives an audit. Many ride apps issue receipts that do not carry the company GST details in a usable form. Fiesta issues GST-compliant invoices for every transfer, which keeps reimbursement and input credit clean.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mumbai Airport Taxi Options at a Glance */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Transit Comparison</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Mumbai Airport Taxi Options at a Glance
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Mumbai airport is the second busiest in India and handles millions of passengers every year. That volume is why the transport on offer ranges from regulated counters to app-based rides and private chauffeur services. Understanding each option helps your team choose the one that fits the traveller and the schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaBuildingColumns className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Prepaid Taxi Counters</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Prepaid taxis operate under government regulated rates and require payment at the official counters inside the airport. Using these counters also helps with safety, because it avoids unverified transport offers from touts. The trade-off is a queue at peak hours and little control over the vehicle or driver.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaTaxi className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kaali-Peeli Taxis</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Traditional black and yellow taxis remain available for short city trips. They suit a solo traveller with light luggage going to a nearby destination. They are less suited to long routes, group travel or any trip where a GST invoice is needed.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaCarRear className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">App-Based Rides</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                App-based cab services such as Ola and Uber offer on-demand rides across the city. Fares depend on ride type, trip length and demand, so surge pricing often applies during busy periods. They are convenient for a single traveller but difficult to standardise across a company.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaAward className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Booked Private Transfers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A private transfer is booked before the flight, with the vehicle type and pickup time agreed in advance. Pre-booking is advised for late-night arrivals, when other options thin out. This is the category Fiesta serves, with a professional chauffeur and a vehicle matched to your group.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Mumbai Airport Pickup Service by Fiesta */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Arrival Gate Precision</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Mumbai Airport Pickup Service by Fiesta
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Airport pickup is where an airport cab service Mumbai travellers can rely on proves itself. Everything depends on the details shared before landing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#EC2028] text-xl font-bold mb-4">
                                    <FaPlaneArrival />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Airport Pickup at the Arrival Gate</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Your chauffeur is assigned to the terminal and the arrival gate for your flight. The guest does not need to search for a cab or negotiate a fare. This keeps the first ten minutes after landing calm and predictable.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#EC2028] text-xl font-bold mb-4">
                                    <FaMapLocationDot />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Pickup Zones and Terminal Coordination</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Chhatrapati Shivaji Maharaj International Airport uses designated pickup zones for each terminal. We plan the pickup around the zone that applies to your airline, so the driver and the guest meet without confusion. It is recommended to book taxi services according to terminal and arrival time, and our team confirms both with you.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#EC2028] text-xl font-bold mb-4">
                                    <FaClock />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Pickup Time and Waiting</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Flights arrive early, late or on time, and baggage reclaim adds its own delay. Share the flight number and the scheduled landing time so the pickup time can be set realistically. If the flight is delayed, tell our customer support team and the schedule can be adjusted.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#EC2028] text-xl font-bold mb-4">
                                    <FaShieldHalved />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Late Night Arrivals and Anytime Travel</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Many international flights land after midnight. A pre-booked transfer is the safer choice for these arrivals, because the vehicle and driver are confirmed in advance. Share the arrival details with your Fiesta contact when you confirm the booking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Airport Drop Services in Mumbai */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Departure Punctuality</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Airport Drop Services in Mumbai
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Airport drop looks simple, but a missed connection on the way to departures is costly. The drop needs a realistic buffer for traffic and check-in.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Andheri East, BKC &amp; Powai</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Most corporate drops start from the business districts around the airport. Andheri East with MIDC and SEEPZ is the closest, followed by Bandra Kurla Complex and Powai along the Jogeshwari Vikhroli Link Road. Our drivers know how these routes behave at morning and evening peaks.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">South Mumbai &amp; Lower Parel</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Teams in Nariman Point, Worli and Lower Parel face a longer drive that depends on the Bandra-Worli Sea Link and Western Express Highway traffic. We plan the departure time with extra margin for these trips. This matters most for domestic and international flights with early check-in cutoffs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Hotel to Airport Drops</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Visiting executives often leave from a hotel after a long day of meetings. A confirmed car at the hotel entrance removes the last logistical task of the business trip. Give us the hotel name, the departure terminal and the flight time, and we confirm the rest.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Early Morning Flights</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    For flights before sunrise, the vehicle is confirmed the evening before. This avoids the risk of finding a cab at four in the morning. Our chauffeur arrives at the agreed time at the door of the hotel or residence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: How Fiesta Airport Transfers Work */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-mumbai/mumbai-airport-booking.png"
                                alt="How Fiesta Airport Transfers Work in Mumbai"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Smooth Corporate Process</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                How Fiesta Airport Transfers Work
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">1</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Share Your Trip Details</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Pickup or drop location, terminal, flight number, arrival or departure time, headcount and luggage.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">2</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Receive an Upfront Quote</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Receive a quote that states the vehicle type and route. Fiesta pricing is provided on request, with no hidden charges added later.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">3</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Confirm the Vehicle Type</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            The vehicle type is fixed, so a sedan stays a sedan and an SUV stays an SUV.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">4</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Chauffeur &amp; Vehicle Allocation</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Receive the chauffeur and vehicle details before the trip so the guest knows who to look for.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">5</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Real-Time GPS Tracking</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Real-time GPS tracking lets the admin team see the vehicle on its route.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">6</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">GST-Compliant Consolidated Billing</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Complete the transfer and receive a GST-compliant invoice, with consolidated billing for corporate accounts.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Terminal Guide: Chhatrapati Shivaji Maharaj International Airport */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Airport Terminal Navigation</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Terminal Guide: Chhatrapati Shivaji Maharaj International Airport
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Mumbai airport has two terminals serving domestic and international flights. Knowing which terminal your guest uses is the single most useful detail for a smooth ride.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaBuildingColumns />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Terminal 1 &amp; Terminal 2 Explained</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Terminal 1 and Terminal 2 are separate buildings, and they are not within walking distance of each other. Always confirm the terminal printed on the ticket, because airlines can move between terminals. Our team asks for the terminal at the time of booking for this reason.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaRoute />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Transferring from Terminal 2 to Terminal 1</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Guests connecting between terminals need a road transfer because the buildings are a few kilometres apart. A pre-booked car for the inter-terminal leg avoids the wait and the luggage handling. The airport also lists its own inter-terminal options on its official website.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                    <FaPlaneDeparture />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Domestic &amp; International Arrivals</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    International arrivals involve immigration and customs, which add waiting time before the guest reaches the arrival gate. Domestic arrivals are faster, but baggage reclaim can still take time. We set the pickup time with these differences in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Mumbai Airport Cab Routes and Coverage */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Mumbai Transit Routes</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Mumbai Airport Cab Routes and Coverage
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Airport cab service Mumbai demand follows the city&apos;s business corridors. The table below shows the routes our corporate customers use most.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/70 border-b border-gray-200">
                                    <th className="p-5 font-bold text-gray-900 text-sm">Route</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Corridor</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Notes for Planners</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Andheri East (MIDC, SEEPZ)</td>
                                    <td className="p-5 text-gray-600">Sahar Road and Western Express Highway</td>
                                    <td className="p-5 text-gray-600">Shortest transfer, but heavy at office peak hours</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to BKC</td>
                                    <td className="p-5 text-gray-600">Santacruz Chembur Link Road and Kalina</td>
                                    <td className="p-5 text-gray-600">Main corporate and financial hub, plan extra time on weekdays</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Powai</td>
                                    <td className="p-5 text-gray-600">Jogeshwari Vikhroli Link Road</td>
                                    <td className="p-5 text-gray-600">Technology and corporate campuses, evening traffic is slow</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Lower Parel and Worli</td>
                                    <td className="p-5 text-gray-600">Western Express Highway and Bandra-Worli Sea Link</td>
                                    <td className="p-5 text-gray-600">Corporate towers and hotels, allow margin for departures</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Nariman Point</td>
                                    <td className="p-5 text-gray-600">Sea Link and Marine Drive</td>
                                    <td className="p-5 text-gray-600">Longest city transfer, suited to a sedan or premium car</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Navi Mumbai (Vashi, Belapur, Airoli)</td>
                                    <td className="p-5 text-gray-600">Santacruz Chembur Link Road and Vashi Bridge</td>
                                    <td className="p-5 text-gray-600">Common for IT and logistics teams</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Thane</td>
                                    <td className="p-5 text-gray-600">Eastern Express Highway and Ghodbunder Road</td>
                                    <td className="p-5 text-gray-600">Used for office parks and industrial clusters</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Pune</td>
                                    <td className="p-5 text-gray-600">Mumbai Pune Expressway</td>
                                    <td className="p-5 text-gray-600">One way taxi or round trip, planned with rest and toll stops</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 text-base">Airport to Navi Mumbai</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Navi Mumbai is a major base for IT parks and logistics firms. Transfers to Vashi, Belapur and Airoli depend on the Vashi bridge and link road traffic. We assign vehicles with enough space for luggage and laptops, since these are usually team travel bookings.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 text-base">Airport to Thane</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Thane has grown into a corporate and residential belt along Ghodbunder Road and the Eastern Express Highway. The route can be slow at peak hours, so the pickup time is set with extra margin. SUVs and Innova Crysta cars are the usual choice for small groups.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 text-base">Airport to Pune: One Way</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The Mumbai Pune Expressway makes a direct airport to Pune transfer practical for teams with work in Hinjewadi, Kharadi or Pune city. A one way taxi suits travellers who do not need a return vehicle. This is a long route, so a comfortable sedan or SUV and a rested chauffeur matter.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 text-base">To Mumbai Central Railway</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Mumbai Central railway station is roughly 15 to 20 kilometres from the airport, depending on the terminal and route taken. The drive usually takes between 45 and 75 minutes, and live traffic can change this. For train connections, we recommend leaving with a generous buffer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Vehicle Guide for Airport Transfers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Tailored Fleet Options</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Vehicle Guide for Airport Transfers
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The right vehicle depends on headcount, luggage and the seniority of the traveller. Mumbai airport transfers offer compact cars and spacious SUVs, and Fiesta extends this to premium cars and group vehicles.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 mb-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/70 border-b border-gray-200">
                                    <th className="p-5 font-bold text-gray-900 text-sm">Vehicle</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Suited For</th>
                                    <th className="p-5 font-bold text-gray-900 text-sm">Typical Use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Sedan (Corolla)</td>
                                    <td className="p-5 text-gray-600">1 to 3 guests with standard luggage</td>
                                    <td className="p-5 text-gray-600">Individual business trips, hotel transfers</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Toyota Camry</td>
                                    <td className="p-5 text-gray-600">Senior executives and VIP guests</td>
                                    <td className="p-5 text-gray-600">Premium airport pickup and drop</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">SUV</td>
                                    <td className="p-5 text-gray-600">3 to 5 guests with more luggage</td>
                                    <td className="p-5 text-gray-600">Small teams, family travel</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Toyota Innova Crysta</td>
                                    <td className="p-5 text-gray-600">Up to 6 guests, comfortable for long routes</td>
                                    <td className="p-5 text-gray-600">Team arrivals, Pune and Navi Mumbai runs</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Tempo Traveller</td>
                                    <td className="p-5 text-gray-600">Larger groups</td>
                                    <td className="p-5 text-gray-600">Project teams, delegations, events</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Minibus</td>
                                    <td className="p-5 text-gray-600">Large delegations and conference groups</td>
                                    <td className="p-5 text-gray-600">Group arrivals with shared schedules</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Cab Options for Executives</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Senior leadership and external guests often expect a premium cab. The Toyota Camry gives a quiet, professional arrival for these travellers. Please share the guest profile when you book, and we match the vehicle.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Luggage and Space Planning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A sedan holds a small number of suitcases comfortably, while an SUV or Innova Crysta handles more luggage and passengers. Tell us the number of bags so the vehicle is not overloaded. Space planning is part of a hassle free transfer, not an afterthought.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: Airport Cab Fare in Mumbai & Parking vs Chauffeur */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Transparent Pricing</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Airport Cab Fare in Mumbai: What to Expect
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                                Fares from Mumbai airport vary by location, vehicle and traffic conditions. Knowing how the options are priced helps your finance team compare them fairly.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">How Taxi Fares Are Set</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Prepaid taxis use government regulated rates, while app-based rides price by ride type, trip length and demand. Private transfers are quoted on the route and the vehicle. Published market references put a sedan airport taxi at around ₹500 for shorter city routes, and around ₹1,900 for a sedan to Pune. These are indicative figures, and the final price depends on the route, vehicle and traffic.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Advance Booking vs Airport Counters</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        An advance booking fixes the vehicle, the route and the price before the flight lands. Booking at the airport counter depends on queue length and availability at that hour. For corporate travel, advance booking is the more predictable choice.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Fiesta Pricing: On Request</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Fiesta quotes airport transfers per route and per vehicle, and the quote is shared before you confirm. Pricing is provided on request, with no hidden charges and no surge pricing at the time of travel. Corporate accounts can discuss a fixed-rate monthly contract for regular airport transfers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Travel Efficiency</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Airport Parking vs a Chauffeur Service
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                                Some travellers drive to the airport and park, while others prefer a chauffeur. The right choice depends on trip length and who is travelling.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Parking at Mumbai Airport</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Parking charges are set by the airport operator and depend on the duration and the parking area. Rates are revised from time to time, so check the official airport website before you travel. Extended parking during a multi-day business trip can add up quickly.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Why Many Teams Choose a Drop Service</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        A drop service removes the parking search, the walk with luggage and the cost of leaving a car for days. The traveller steps out at the departure gate and goes straight to check-in. For a pickup on return, the same driver or vehicle type can be arranged again.
                                    </p>
                                </div>

                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Contract Options</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Companies that send staff through Mumbai every week can set up a contract with agreed vehicle types and billing. This replaces repeated individual bookings with one consolidated invoice and dedicated priority allocations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 11: Fiesta vs App-Based Cab Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Enterprise Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Fiesta vs App-Based Cab Services
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Procurement and admin teams often ask whether a planned chauffeur service is worth the switch from ride apps. The table below compares the factors that matter to a company.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Feature</th>
                                    <th className="p-6 font-bold text-[#EC2028] w-1/3">Fiesta Smart Mobility</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">App-Based Aggregators</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">GST Invoice</td>
                                    <td className="p-6 text-gray-800 font-medium">Yes, always</td>
                                    <td className="p-6 text-gray-500">Inconsistent or unavailable</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Driver Verification</td>
                                    <td className="p-6 text-gray-800 font-medium">Full background check</td>
                                    <td className="p-6 text-gray-500">Variable by city</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Real-Time Tracking</td>
                                    <td className="p-6 text-gray-800 font-medium">Yes, corporate dashboard</td>
                                    <td className="p-6 text-gray-500">Basic, app-only</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Fleet Consistency</td>
                                    <td className="p-6 text-gray-800 font-medium">Confirmed vehicle type</td>
                                    <td className="p-6 text-gray-500">Vehicle type may change</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Billing Transparency</td>
                                    <td className="p-6 text-gray-800 font-medium">Monthly consolidated invoice</td>
                                    <td className="p-6 text-gray-500">Per-ride, no consolidated billing</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">SLA and Contract</td>
                                    <td className="p-6 text-gray-800 font-medium">Yes, formal SLA</td>
                                    <td className="p-6 text-gray-500">No enterprise SLA</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-gray-900">Female Employee Safety</td>
                                    <td className="p-6 text-gray-800 font-medium">Verified protocol</td>
                                    <td className="p-6 text-gray-500">No guaranteed protocol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 12: Why Fiesta for Mumbai Airport Transfers & Business Trip Planning */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">The Fiesta Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Why Fiesta for Mumbai Airport Transfers
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fiesta has built its reputation on operational consistency, not on promotions. The points below are the reasons corporate customers stay.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                                        <FaAward className="text-[#EC2028] text-lg" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">28 Years of Operations</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Fiesta has operated since 1998 with a team of more than 300 employees. A network built over this period gives corporate customers a vendor that does not disappear after a pilot.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                                        <FaUserTie className="text-[#EC2028] text-lg" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Verified Chauffeurs</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Every driver goes through verification and a background check before assignment. For airport pickup at odd hours, this is the first thing admin teams ask about.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                                        <FaMapLocationDot className="text-[#EC2028] text-lg" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Real-Time GPS Tracking</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        The admin team can follow each vehicle on its route to the airport or the destination. This replaces repeated phone calls with a clear view of progress.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                                        <FaFileInvoiceDollar className="text-[#EC2028] text-lg" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">GST-Compliant Invoicing</h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Every transfer ends with a GST-compliant invoice, and corporate accounts receive consolidated billing. Finance teams get a clean record of every airport trip.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Safety and the Customer Support Team</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Safety for female employees follows a verified protocol, and trips are monitored through tracking. Our customer support team stays reachable if a flight changes or the pickup needs adjustment.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-mumbai/mumbai-airport-chauffeur.png"
                                alt="Professional Chauffeur for Mumbai Airport Transportation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Business Trip Transfers and Car Rental Services */}
                    <div className="mt-16 pt-12 border-t border-gray-200">
                        <div className="max-w-3xl mb-8">
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Comprehensive Corporate Mobility</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
                                Business Trip Transfers and Car Rental Services
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Airport cabs are usually one part of a larger travel plan. Fiesta also provides car rental services with driver for corporate and executive use.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Trip Planning</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A visiting team often needs an airport pickup, local travel during the stay and an airport drop. Booking all three with one vendor keeps the schedule and the billing together.
                                </p>
                            </div>

                            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Car Rental Services with Driver</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Car rental services with a chauffeur suit executives who move between meetings in different parts of Mumbai. The same vehicle can handle airport transfers and local travel across the city.
                                </p>
                            </div>

                            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Monthly Contracts for Regular Transfers</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Companies that send staff through Mumbai every week can set up a contract with agreed vehicle types and billing. This replaces repeated individual bookings with one consolidated invoice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 13: CTA Banner - Request an Airport Transfer Quote */}
            <section className="relative py-24 md:py-28 w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/airport-transportation-in-mumbai/mumbai-airport-cta.jpg"
                        alt="Request an Airport Transfer Quote for Mumbai"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Request an Airport Transfer Quote
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        If your team flies into Mumbai for work in BKC, Andheri East, Powai or Navi Mumbai, Fiesta can arrange airport pickup and drop with consolidated GST billing. Send your terminal, flight time and headcount, and request a quote.
                    </p>
                    <BookNowButton className="px-10 py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Request An Airport Transfer Quote
                    </BookNowButton>
                </div>
            </section>

            {/* Section 14: Cross-City Navigation & Hub Link */}
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
                                href="/airport-transportation-in-bangalore"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Bangalore Airport Transfer
                                <FaArrowRight size={12} />
                            </Link>
                            <Link
                                href="/airport-transportation-in-chennai"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Chennai Airport Transfer
                                <FaArrowRight size={12} />
                            </Link>
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

            {/* Section 15: FAQ Section */}
            <FAQ
                items={mumbaiAirportFaqs}
                badge="Knowledge Base"
                title="Frequently asked"
                darkTitle="questions"
                description="Find answers to common questions about booking Mumbai airport cabs, fares, terminal pickups, and corporate transfer options."
            />
        </main>
    );
}