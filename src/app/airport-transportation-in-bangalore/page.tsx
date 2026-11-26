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
    FaCarRear,
    FaUsers,
    FaRoad,
    FaBusSimple
} from "react-icons/fa6";

export const metadata = getMetadata("/airport-transportation-in-bangalore");

const bangaloreAirportFaqs = [
    {
        id: "1",
        question: "Which cab service is best at Bangalore airport?",
        answer: "The best choice depends on your needs. Official airport taxis suit solo travellers, app-based cabs suit quick rides, and a pre-booked private operator suits corporate teams that need a GST invoice and a confirmed vehicle."
    },
    {
        id: "2",
        question: "How much does an airport taxi cost in Bangalore?",
        answer: "The fare depends on the destination, vehicle and toll charges. Published listings show pickup fares from around ₹574, and Fiesta provides a quote on request."
    },
    {
        id: "3",
        question: "Is Banglore airport taxi cheaper than Uber?",
        answer: "Official airport taxis offer fixed pricing, while Uber fares depend on ride type, trip length and demand. During peak hours, surge pricing can make app fares higher."
    },
    {
        id: "4",
        question: "What is the best taxi app for Bangalore airport?",
        answer: "Several apps operate from designated pickup zones at the airport. For a planned business transfer, a pre-booked service with a fixed quote is more dependable than an on-demand app."
    },
    {
        id: "5",
        question: "Which cab service is the cheapest in Bangalore?",
        answer: "The cheapest option changes with time of day and demand. For corporate travel, the better measure is a clear quote with no hidden fees, no cancellation risk and a GST invoice."
    },
    {
        id: "6",
        question: "How do I get from Bangalore Cantonment railway station to Kempegowda airport?",
        answer: "The station is roughly 35 to 40 km from the airport, and the drive passes through Hebbal and Bellary Road. A pre-booked cab is the most direct option, and BMTC Vayu Vajra buses are an economical alternative."
    },
    {
        id: "7",
        question: "Is it cheaper to book a taxi in advance or at the airport?",
        answer: "Advance booking fixes the price and the vehicle, and it avoids surge fares at peak times. Booking at the airport depends on queue length and availability."
    },
    {
        id: "8",
        question: "How to order an airport taxi?",
        answer: "Share your flight details, pickup location, headcount and luggage with Fiesta, then confirm the quote. You receive the driver and vehicle details before the trip."
    },
    {
        id: "9",
        question: "Does Fiesta provide GST invoices for airport transfers?",
        answer: "Yes, every Fiesta transfer is billed with a GST-compliant invoice. Corporate accounts can also receive a consolidated monthly invoice."
    }
];

export default function AirportTransportationBangalorePage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Form */}
            <HeroForm
                title="Airport Transport Service Bangalore"
                subtitle="Kempegowda International Airport (BLR) pickups and drops with verified chauffeurs, transparent upfront pricing, zero surge, and live GPS tracking."
                imageSrc="/images/airport-transportation-in-bangalore/WhatsApp Image 2026-11-25 at 4.27.38 PM.jpeg"
                ctaText="Get A Free Quote"
            />
            
            {/* Section 1: Intro - Airport Cab Service Bangalore */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <span className="text-xs uppercase font-bold tracking-widest text-[#EC2028] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                Kempegowda International Airport (BLR) &bull; Devanahalli
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Airport Transport Service Bangalore
                            </h1>
                            <p>
                                Airport cab service Bangalore is a planning problem before it is a booking problem. Kempegowda International Airport is about 36 km from the city centre, and traffic on the way is unpredictable. Fiesta Smart Mobility has run corporate transport for 28 years, and Bangalore airport cabs are a core part of how visiting teams reach their offices.
                            </p>
                            <p>
                                Fiesta is headquartered in Chennai and operates across India. Drivers are verified and background-checked, vehicles are tracked in real time, and every trip carries a GST-compliant invoice. Customers rate Fiesta 4.8 across 729 reviews.
                            </p>
                        </div>
                        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-bangalore/WhatsApp Image 2026-11-25 at 4.28.00 PM.jpeg"
                                alt="Airport Transport Service Bangalore by Fiesta Smart Mobility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Why Bangalore Airport Transfers Need Planning */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Transit Preparation</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Why Bangalore Airport Transfers Need Planning
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A missed pickup after a long flight, or a late drop before departure, costs a team more than the fare. The causes are well known, and each can be handled in advance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                    <FaRoute className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    Distance and Traffic on Airport Route
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    The airport sits far north of the city, so every transfer is a long drive. A trip to Whitefield, Electronic City or Koramangala can take far longer at peak hours than the map suggests. We plan the pickup time and the airport drop time with this margin built in.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                    <FaReceipt className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    Surge Pricing, Fees &amp; Toll Charges
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    App-based cab services apply surge pricing during peak hours, and arrival banks are peak hours. Add toll charges that are not stated upfront, and the final fare can differ from the one on screen. A clear quote with transparent pricing and no hidden charges keeps the budget predictable.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                    <FaClock className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                    Cancellations &amp; Late-Night Arrivals
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    On-demand rides can be cancelled after you have accepted them. Booking a pre-arranged taxi is recommended for late-night arrivals, when options are fewer. A confirmed vehicle with a named driver removes that risk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Bangalore Airport Taxi Options at Kempegowda International Airport */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left max-w-4xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Transit Options Comparison</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Bangalore Airport Taxi Options at Kempegowda International Airport
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Bengaluru airport offers several ways to reach the city. The right one depends on the traveller, the luggage and the company&apos;s billing needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaBuildingColumns className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Official Airport Taxis</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Official airport taxis are state-backed and offer fixed pricing, which avoids surge fares. They are reliable for a solo traveller with no preference on vehicle or driver. They do not offer corporate invoicing or a chosen vehicle type.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaCarRear className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">App-Based Cab Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                App-based cab services operate from designated pickup zones at the airport. Fares change with demand, and the vehicle type can differ from what was expected. They suit a quick individual ride more than a planned business transfer.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaBusSimple className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">BMTC Vayu Vajra Buses</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                BMTC Vayu Vajra AC buses provide economical transport from the airport on fixed routes to major areas of the city. They are a sensible choice for budget travel with light luggage. They are less practical for teams, late arrivals or door-to-door travel.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-7 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaAward className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Booked Private Transfers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Pre-booked private operators offer fixed pricing packages for airport transfers. The vehicle, the route and the pickup time are agreed before the flight. This is the category Fiesta serves, with a verified chauffeur and a confirmed vehicle type.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Airport Cab Booking Bangalore with Fiesta */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-bangalore/bangalore-airport-booking.png"
                                alt="Airport Cab Booking Bangalore with Fiesta"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Built for Admin &amp; HR Teams</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Airport Cab Booking Bangalore with Fiesta
                            </h2>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Airport cab booking with Fiesta is built for admin and HR teams that book for others. The process below keeps the traveller informed and the billing clean.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">1</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Share Trip Details</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Pickup location or destination, flight number, arrival or departure time, headcount and luggage.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">2</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Receive an Upfront Quote</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Receive a quote that states the vehicle type and route. Fiesta pricing is provided on request, with no hidden fees.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">3</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Confirm Vehicle Type</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            The vehicle type is fixed, so a sedan stays a sedan and an SUV stays an SUV.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">4</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Driver &amp; Car Details</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Receive the driver and vehicle details before the trip so your guest knows who to look for.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">5</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">Real-Time GPS Tracking</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Track the vehicle in real time through GPS for total visibility and safety.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-3 shrink-0 shadow-sm text-sm">6</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">GST-Compliant Consolidated Billing</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Complete the trip and receive a GST-compliant invoice with consolidated monthly billing for corporate accounts.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Airport Pickup Location and Drop Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                <FaPlaneArrival />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Airport Pickup Location and Arrival Plan</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Your driver is briefed on the terminal, the pickup location and the flight arrival time. If the flight is delayed, our customer support team can adjust the pickup. The guest does not need to search for a cab after landing.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center text-xl font-bold mb-4">
                                <FaPlaneDeparture />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Airport Drop Services</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                For departures, the driver collects the traveller from the office, hotel or home at an agreed time. The drop time includes a buffer for traffic, check-in and security. The traveller reaches the departure gate calm and on schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Bangalore Airport Pickup and Drop Routes */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Bangalore Transit Corridors</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Bangalore Airport Pickup and Drop Routes
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Most corporate demand follows the city&apos;s technology and business corridors. The table below shows the routes our customers use most.
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
                                    <td className="p-5 font-semibold text-gray-900">Airport to Hebbal and Manyata Tech Park</td>
                                    <td className="p-5 text-gray-600">Bellary Road and Outer Ring Road</td>
                                    <td className="p-5 text-gray-600">Closest major business cluster</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to MG Road and Cantonment</td>
                                    <td className="p-5 text-gray-600">Bellary Road via Hebbal</td>
                                    <td className="p-5 text-gray-600">Central business district, hotels and railway access</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Whitefield and ITPL</td>
                                    <td className="p-5 text-gray-600">Outer Ring Road and Whitefield Road</td>
                                    <td className="p-5 text-gray-600">Long transfer, allow extra time at peak hours</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Marathahalli</td>
                                    <td className="p-5 text-gray-600">Outer Ring Road</td>
                                    <td className="p-5 text-gray-600">Heavy traffic on weekday evenings</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Koramangala and HSR Layout</td>
                                    <td className="p-5 text-gray-600">Outer Ring Road and inner city roads</td>
                                    <td className="p-5 text-gray-600">Startup and office belt, plan for city traffic</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Sarjapur Road</td>
                                    <td className="p-5 text-gray-600">Outer Ring Road</td>
                                    <td className="p-5 text-gray-600">Corporate parks and residential clusters</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-semibold text-gray-900">Airport to Electronic City</td>
                                    <td className="p-5 text-gray-600">Through the city via Hosur Road</td>
                                    <td className="p-5 text-gray-600">Longest common transfer, plan a generous buffer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Cantonment Railway Station to Kempegowda Airport</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Cantonment railway station is roughly 35 to 40 km from the airport. The usual route runs through Hebbal and Bellary Road, and the drive can take 60 to 90 minutes in traffic. For a flight, leave with a generous buffer and book the car in advance.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Airport to Electronic City</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Teams based in Electronic City face the longest regular transfer from the airport. Heavy city traffic makes the arrival time unpredictable. A comfortable SUV or Innova Crysta suits this route.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Vehicle Guide for Bangalore Airport Taxi Transfers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Tailored Vehicle Range</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Vehicle Guide for Bangalore Airport Taxi Transfers
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Bangalore airport taxis come in a range of vehicle options, from hatchbacks and sedans to SUVs. Fiesta matches the vehicle to group size and the seniority of the traveller.
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
                                    <td className="p-5 text-gray-600">Individual business trips</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Toyota Camry</td>
                                    <td className="p-5 text-gray-600">Senior executives and VIP guests</td>
                                    <td className="p-5 text-gray-600">Premium airport pickup and drop</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">SUV</td>
                                    <td className="p-5 text-gray-600">3 to 5 guests with more luggage</td>
                                    <td className="p-5 text-gray-600">Small teams and family travel</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Toyota Innova Crysta</td>
                                    <td className="p-5 text-gray-600">Premium comfort for families and business trips</td>
                                    <td className="p-5 text-gray-600">Team arrivals and long routes</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Tempo Traveller</td>
                                    <td className="p-5 text-gray-600">12 to 13 passengers</td>
                                    <td className="p-5 text-gray-600">Group transfers and project teams</td>
                                </tr>
                                <tr className="hover:bg-gray-50/70 transition-colors">
                                    <td className="p-5 font-bold text-gray-900">Minibus</td>
                                    <td className="p-5 text-gray-600">Large delegations</td>
                                    <td className="p-5 text-gray-600">Conference and event groups</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Luggage Requirements and Group Size</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tell us the number of guests and bags when you book. A vehicle that is too small for the luggage slows down the whole journey. Group size decides the vehicle, not the other way around.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 8: Airport Taxi Fare in Bangalore */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Budget Planning</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Airport Taxi Fare in Bangalore: What to Expect
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Airport taxi fares in Bangalore depend on the destination, vehicle and traffic. Official taxis offer fixed pricing, while app-based fares rise during peak hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">What Affects the Fare</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Published listings show airport taxi pickup fares starting from around ₹574 and drop fares from around ₹724 for eligible bookings. These are indicative figures, and the final price depends on the route, vehicle and toll charges.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transparent pricing helps travellers plan the budget in advance.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fiesta Pricing: On Request</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Fiesta quotes each transfer by route and vehicle, and the quote is shared before you confirm. Pricing is provided on request, with no hidden fees.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Corporate accounts can ask about a fixed-rate monthly contract for regular airport transfers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Fiesta vs App-Based Cab Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">Enterprise Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Fiesta vs App-Based Cab Services
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Admin teams comparing a planned chauffeur service with ride apps care about invoices, verification and reliability. The table below sets out the differences.
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 10: Why Fiesta for Bangalore Airport Transfers & Outstation Trips */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-[#EC2028]">The Fiesta Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Why Fiesta for Bangalore Airport Transfers
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fiesta earns repeat business through consistent operations. The points below are the reasons corporate customers stay.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center shrink-0 text-xl font-bold">
                                        <FaUserTie />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">Verified Drivers and Safety</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Every driver is verified and background-checked before assignment. Safety for female employees follows a verified protocol, which matters on late-night transfers.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center shrink-0 text-xl font-bold">
                                        <FaMapLocationDot />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">GPS Tracking and Customer Support Team</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Real-time GPS tracking lets the admin team follow each vehicle. Our customer support team stays reachable for booking changes and flight delays.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EC2028] flex items-center justify-center shrink-0 text-xl font-bold">
                                        <FaFileInvoiceDollar />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">GST Invoicing and Transparent Pricing</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Every trip ends with a GST-compliant invoice. Consolidated monthly billing gives finance a clear record of each airport transfer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Outstation Cabs and Weekend Trips from the Airport</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                                    Some visitors continue from the airport to another city. Fiesta also provides outstation cabs for business and weekend trips, using the same verified drivers and vehicle standards.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Ask us to link your airport pickup with an outstation journey, and we confirm both in one quote.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-bangalore/bangalore-airport-chauffeur.png"
                                alt="Professional Chauffeur for Bangalore Airport Transportation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 11: CTA Banner - Request an Airport Cab Booking in Bangalore */}
            <section className="relative py-24 md:py-28 w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/airport-transportation-in-bangalore/WhatsApp Image 2026-11-25 at 4.28.23 PM.jpeg"
                        alt="Request an Airport Cab Booking in Bangalore"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Request an Airport Cab Booking in Bangalore
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        If your team works from Whitefield, Manyata Tech Park, Electronic City or HSR Layout, Fiesta can arrange airport pickup and drop with consolidated GST billing. Send your flight time and headcount, and request a quote.
                    </p>
                    <BookNowButton className="px-10 py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Request An Airport Transfer Quote
                    </BookNowButton>
                </div>
            </section>

            {/* Section 12: Cross-City Navigation & Hub Link */}
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
                                href="/airport-transportation-in-mumbai"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Mumbai Airport Transfer
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

            {/* Section 13: FAQ Section */}
            <FAQ
                items={bangaloreAirportFaqs}
                badge="Knowledge Base"
                title="Frequently asked"
                darkTitle="questions"
                description="Find answers to common questions about booking Bangalore airport taxis, fares, terminal pickups, and vehicle options."
            />
        </main>
    );
}