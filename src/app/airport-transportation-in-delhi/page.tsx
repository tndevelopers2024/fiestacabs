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
    FaTrainSubway, 
    FaBusSimple, 
    FaTaxi, 
    FaVanShuttle, 
    FaClock,
    FaPlaneArrival,
    FaHotel,
    FaHandshake,
    FaReceipt,
    FaShieldHalved,
    FaAward,
    FaMapLocationDot,
    FaUserTie,
    FaHeadset
} from "react-icons/fa6";

export const metadata = getMetadata("/airport-transportation-in-delhi");

const delhiAirportFaqs = [
    {
        id: "1",
        question: "What does Fiesta Delhi airport transportation include?",
        answer: "It includes a confirmed vehicle, a verified driver, flight tracking, meet-and-greet at the airport gate and a fixed fare that covers the ride and tolls."
    },
    {
        id: "2",
        question: "Do you offer pickup from all Delhi Airport terminals?",
        answer: "Yes. We cover Terminal 1, Terminal 2 and Terminal 3 at Indira Gandhi International Airport for both airport pickup and drop."
    },
    {
        id: "3",
        question: "Will the driver wait if my flight is delayed?",
        answer: "Yes. We track your flight and the waiting time is covered when you land late, so your ride is held for you."
    },
    {
        id: "4",
        question: "Does Fiesta charge surge pricing during peak hours?",
        answer: "No. Your fare is fixed at the time of booking, so peak hours and rush traffic do not change the cost."
    },
    {
        id: "5",
        question: "Can I book a transfer to the railway station instead?",
        answer: "Yes. We serve New Delhi Railway Station, the Delhi railway station at Old Delhi and Anand Vihar, along with any hotel or city address."
    },
    {
        id: "6",
        question: "How far in advance should I book?",
        answer: "A few hours is enough for a standard trip, but early-morning and late-night flights are best booked further in advance to guarantee a vehicle."
    },
    {
        id: "7",
        question: "What vehicles are available for airport travel?",
        answer: "Hatchbacks, sedans, SUVs such as the Innova Crysta, Tempo Travellers for groups and luxury cars for executive travel."
    },
    {
        id: "8",
        question: "Do you provide a GST invoice and can I cancel free of charge?",
        answer: "Yes to both. Every corporate trip carries a GST invoice, and free cancellation applies within the stated window before pickup."
    }
];

export default function AirportTransportationDelhiPage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            <HeroForm
                title="Delhi Airport Transportation Services"
                subtitle="Organized Delhi airport transportation services with fixed bookings, a named driver, and a confirmed vehicle."
                imageSrc="/images/airport-transportation-in-delhi/Golden-Hour Departures at an Indian Airport.png"
                ctaText="Get A Free Quote"
            />
            
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Reliable Delhi Airport Transportation Services
                            </h2>
                            <p>
                                Fiesta Smart Mobility runs organized Delhi airport transportation services for travellers arriving at and departing from Indira Gandhi International Airport. Every ride is a fixed booking with a named driver, a confirmed vehicle and a clear pickup location.
                            </p>
                            <p>
                                Indira Gandhi International Airport is one of the busiest hubs in India, and Delhi traffic can turn a short distance into a long journey during peak hours. A pre-booked airport taxi in Delhi removes the guesswork and gets you to your destination without a wait at the queue.
                            </p>
                            <p>
                                Our airport taxi service is built around one promise, an on time pickup whether you are heading to a flight or arriving on one. Every driver knows the terminals, the routes and the fastest way to reach your destination.
                            </p>
                            <p>
                                We have moved corporate and leisure passengers for 28 years, hold a 4.8 rating across 729 reviews and cover pickup and drop across Delhi, New Delhi and the wider Delhi NCR. Our team is on the clock around the year to assist with any booking queries.
                            </p>
                        </div>
                        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                            <Image
                                src="/images/airport-transportation-in-delhi/Luxury Sedan and Jet at Sunset.png"
                                alt="Delhi Airport Transportation Services by Fiesta Smart Mobility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Getting to and from Indira Gandhi International Airport */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting to and from Indira Gandhi International Airport</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Delhi Airport offers various transportation options for passengers, and each suits a different plan and budget. The right choice depends on your luggage, your schedule and how much certainty you want over the cost.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaTrainSubway className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Airport Express Metro
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                The Delhi Metro Airport Express Line is usually the quickest option to reach central Delhi, since it avoids road traffic. It works well for light travellers, though a booked taxi service still wins when you have luggage or several stops.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaBusSimple className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                DTC and app-based options
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Delhi Transport Corporation runs DTC buses that connect the airport with various parts of Delhi and the NCR. Auto-rickshaws wait outside the terminals for short trips, and app-based cabs can be booked on demand, though fares on these apps move with demand and distance.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaTaxi className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Prepaid and pre-booked cabs
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Prepaid cabs are available at the airport, and a pre-booked airport transfer gives you a fixed fare agreed before the ride. Advance booking helps you avoid surge pricing during the busy rush and gives you a guaranteed on-time pickup at your location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Delhi Airport terminals and inter-terminal travel */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 w-full text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delhi Airport terminals and inter-terminal travel</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Delhi Airport has three terminals: T1, T2 and T3. Understanding the connections between them ensures a stress-free transition whether transferring between flights or boarding your flight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaPlaneDeparture className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Three Active Terminals
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Delhi Airport has three terminals: T1, T2 and T3. International flights mostly use Terminal 3, while Terminal 1 and Terminal 2 handle a large share of domestic traffic.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaVanShuttle className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Complimentary Shuttles
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Free shuttle buses operate every 20 minutes between the terminals, so inter-terminal travel can use a complimentary shuttle. Passengers must present a boarding pass to board this shuttle service.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaTaxi className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Feeder Bus & Private Cabs
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                A DMRC feeder bus also links Terminal 1 and Terminal 2 for a nominal fare. Cabs and taxis are available for inter-terminal transfers when you are carrying heavy luggage or moving as a group.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-red-50/70 p-6 rounded-2xl border border-red-100 flex items-center gap-5 max-w-4xl mx-auto shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#EC2028] text-white flex items-center justify-center shrink-0 shadow-sm">
                            <FaClock className="text-xl" />
                        </div>
                        <p className="text-gray-800 font-medium text-base leading-relaxed">
                            <strong>Tight connection tip:</strong> If your connection is tight, a booked cab between terminals is the efficient choice, since it removes the wait for the next shuttle.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fiesta Delhi airport transfer services</h2>
                        <p className="text-gray-600 text-lg">Our Delhi airport transfers cover the full commute in both directions, whether you land in the morning or arrive late at night. Book once and the same standard applies across every trip.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaPlaneArrival className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Airport pickup
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                For an airport pickup, your driver tracks your flight and waits at the arrivals gate with a name sign to greet you. Waiting time is covered when a flight is delayed, so you never lose your ride.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaPlaneDeparture className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Airport drop
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                For an airport drop, we plan the pickup around your flight and Delhi rush hour traffic so you reach the terminal with time to spare. You confirm the pickup location and we handle the route.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaHotel className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#EC2028] transition-colors duration-300">
                                Railway station and hotel transfers
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                We also serve New Delhi Railway Station, the Delhi railway station at Old Delhi and Anand Vihar, plus door pickup from any hotel or address in the city centre. Airport, railway station and hotel legs can sit under one corporate account.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Routes and destinations we cover</h2>
                        <p className="text-gray-600 text-lg mb-4">Common Delhi airport transportation routes and their approximate distance from Indira Gandhi International Airport are below. All fares are confirmed at the time of booking.</p>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Destination</th>
                                    <th className="p-6 font-bold text-gray-900">Approx distance from DEL</th>
                                    <th className="p-6 font-bold text-gray-900">Fare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Connaught Place, New Delhi city centre</td><td className="p-6 text-gray-600">16 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Dhaula Kuan</td><td className="p-6 text-gray-600">9 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">New Delhi Railway Station</td><td className="p-6 text-gray-600">17 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Anand Vihar</td><td className="p-6 text-gray-600">27 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Aerocity hotel cluster</td><td className="p-6 text-gray-600">3 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Gurgaon business hubs</td><td className="p-6 text-gray-600">17 km</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Noida and wider Delhi NCR</td><td className="p-6 text-gray-600">35 km</td><td className="p-6 text-gray-600">On request</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicles for every airport travel plan</h2>
                        <p className="text-gray-600 text-lg mb-4">Our fleet is matched to your group size and luggage, from a solo airport pickup to a family or a corporate team. Every vehicle is clean, equipped and serviced on schedule.</p>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Vehicle</th>
                                    <th className="p-6 font-bold text-gray-900">Ideal for</th>
                                    <th className="p-6 font-bold text-gray-900">Fare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600 font-semibold">Hatchback</td><td className="p-6 text-gray-600">1 to 2 passengers, light luggage</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600 font-semibold">Sedan (Dzire, Corolla)</td><td className="p-6 text-gray-600">Up to 3 passengers, city commute</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600 font-semibold">SUV (Innova Crysta, Fortuner)</td><td className="p-6 text-gray-600">Families and small groups with luggage</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600 font-semibold">Tempo Traveller</td><td className="p-6 text-gray-600">Larger groups and corporate teams</td><td className="p-6 text-gray-600">On request</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600 font-semibold">Luxury (Mercedes E220, BMW 5 Series)</td><td className="p-6 text-gray-600">Executive airport travel</td><td className="p-6 text-gray-600">On request</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaHandshake className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#EC2028] transition-colors duration-300">
                                On-time pickup and meet-and-greet
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
                                An on-time pickup is the point of an airport taxi, so we build our schedule around your flight and not around a fixed slot. Live flight tracking tells the driver exactly when you will land.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                The driver reaches the pickup location early, waits with a name sign at the gate and helps you with your luggage to the car. Your priority is to walk out and go, not to search for a ride.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaReceipt className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#EC2028] transition-colors duration-300">
                                Fixed fares with no surge pricing
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
                                Delhi airport taxi fares usually depend on the time and distance travelled, which is why demand-based apps can spike. We quote a fixed fare before the trip, so what you agree is what you pay.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
                                The quote covers the driver, the vehicle and applicable tolls, all disclosed upfront. There is no surge pricing during peak hours and no cost added after you arrive.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Corporate clients receive a GST invoice on every ride, which keeps travel accounts clean and auditable.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#EC2028] transition-colors duration-300">
                                <FaShieldHalved className="text-2xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#EC2028] transition-colors duration-300">
                                Safety and standards
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
                                Every driver is background-verified, trained and familiar with Delhi routes and traffic. Cars carry GPS tracking so a trip can be monitored end to end.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Our support desk runs round the clock to handle any query, change of plan or cancellation before you travel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. How to book your Delhi airport transfer - Image LEFT, Content RIGHT */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/corporate-car-rental-in-delhi/delhi-booking-process.png"
                                alt="How to book your Delhi airport transfer"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to book your Delhi airport transfer</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">Booking a Fiesta airport transfer takes only a few steps and can be done in advance for any date.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">1</div>
                                    <p className="text-gray-700 pt-1 font-medium">Share your pickup location, destination and flight details for the trip.</p>
                                </li>
                                <li className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">2</div>
                                    <p className="text-gray-700 pt-1 font-medium">Choose your vehicle from hatchback to luxury based on passengers and luggage.</p>
                                </li>
                                <li className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">3</div>
                                    <p className="text-gray-700 pt-1 font-medium">Receive a fixed fare quote and confirm the booking.</p>
                                </li>
                                <li className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0 shadow-sm">4</div>
                                    <p className="text-gray-700 pt-1 font-medium">Get your driver and vehicle details before pickup, along with a contact to greet on arrival.</p>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-600 leading-relaxed bg-red-50/60 p-4 rounded-lg border-l-4 border-[#EC2028]">Book at least a few hours ahead for a guaranteed vehicle, and earlier for early-morning or late-night flights. Free cancellation applies within the stated window if your plans change.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why choose Fiesta for Delhi airport transportation - Content LEFT, Image RIGHT */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why choose Fiesta for Delhi airport transportation</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaAward className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">28 years of service</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">We have run cab service across India since 1998 and understand what business and leisure passengers expect from airport travel.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaReceipt className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">Fixed, transparent fares</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Prices are agreed before the ride with tolls and charges disclosed, so there are no surprises when you pay.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaClock className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">On-time, every time</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Flight tracking and early arrival at the pickup point keep our on-time pickup record consistent, even in Delhi rush hours.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaMapLocationDot className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">Pan-India presence</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">The same standard covers Delhi, Mumbai, Chennai and other cities, so a national account gets one reliable partner.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaUserTie className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">Verified drivers</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Trained, background-checked drivers greet you, assist with luggage and know the fastest route to your destination.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mb-3 group-hover:bg-[#EC2028] transition-colors duration-300">
                                        <FaHeadset className="text-xl text-[#EC2028] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EC2028] transition-colors duration-300">Round-the-clock support</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Our team is available on the clock to assist with booking, changes and any queries before or during the journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/corporate-car-rental-in-delhi/professional-drivers.png"
                                alt="Why choose Fiesta for Delhi airport transportation - Professional Drivers"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fiesta compared with app-based cabs</h2>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Feature</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Fiesta Smart Mobility</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">App-based cabs</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Fare</td><td className="p-6 text-gray-600">Fixed quote before the ride</td><td className="p-6 text-gray-600">Moves with demand and distance</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Surge pricing</td><td className="p-6 text-gray-600">None, even in peak hours</td><td className="p-6 text-gray-600">Common during rush</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Airport pickup</td><td className="p-6 text-gray-600">Meet-and-greet at the gate</td><td className="p-6 text-gray-600">Find your driver in the queue</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Waiting on delay</td><td className="p-6 text-gray-600">Covered when flights are late</td><td className="p-6 text-gray-600">Charged or cancelled</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">GST invoice</td><td className="p-6 text-gray-600">Every trip</td><td className="p-6 text-gray-600">Inconsistent</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Driver</td><td className="p-6 text-gray-600">Verified and trained</td><td className="p-6 text-gray-600">Variable</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Support</td><td className="p-6 text-gray-600">24x7 phone and email</td><td className="p-6 text-gray-600">App-based, variable</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="relative py-24 md:py-28 w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/airport-transportation-in-delhi/tourist-carrying-luggage.jpg"
                        alt="Book your Delhi airport transfer"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/65"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Book your Delhi airport transfer</h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                        Plan your airport travel with a partner that shows up on time and quotes a fixed fare. Reach our team to book a Delhi airport pickup or drop, or to set up a corporate account for regular travel.
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
                                href="/airport-transportation-in-hyderabad"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#EC2028] hover:text-[#EC2028] transition-all shadow-sm"
                            >
                                <FaPlaneDeparture className="text-[#EC2028]" />
                                Hyderabad Airport Transfer
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

            <FAQ
                items={delhiAirportFaqs}
                badge="Knowledge Base"
                title="Frequently asked"
                darkTitle="questions"
                description="Find answers to common questions about booking Delhi airport transportation, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
}
