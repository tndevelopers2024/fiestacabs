import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import Image from 'next/image';
import HeroForm from "../../components/common/HeroForm";
import BookNowButton from "../../components/common/BookNowButton";
import FAQ from "../../components/sections/home/FAQ";
import { 
    FaCar, 
    FaPlaneDeparture, 
    FaRoute, 
    FaCalendarCheck, 
    FaMapLocationDot, 
    FaCarSide, 
    FaCreditCard, 
    FaCircleCheck, 
    FaClock, 
    FaShieldHalved, 
    FaUserTie, 
    FaTag, 
    FaCloudSunRain, 
    FaCity, 
    FaHeadset, 
    FaAward,
    FaSuitcaseRolling,
    FaArrowRight,
    FaCompass
} from "react-icons/fa6";

export const metadata = getMetadata("/cab-service");

const cabServiceFaqs = [
    {
        id: "1",
        question: "Which cab is the cheapest?",
        answer: "Cost depends on vehicle type, distance, and city, so an economy hatchback booked for a short local ride will typically cost less than an SUV or luxury car booked for a longer trip. Comparing the same vehicle category across a few providers, rather than comparing an economy car to a premium sedan, gives a fairer sense of which service actually offers the lower price."
    },
    {
        id: "2",
        question: "How much is 1 km in taxi?",
        answer: "Per-kilometre rates vary by city, vehicle category, and operator, and traditional metered taxis price differently from pre-booked services. Fiesta confirms the total fare for a trip at the time of booking rather than quoting a fixed per-kilometre rate upfront, since distance alone doesn't account for waiting time, tolls, or the specific vehicle booked."
    },
    {
        id: "3",
        question: "What is the cheapest taxi service?",
        answer: "The cheapest option is usually a shared ride or a local metered taxi for short distances, while a pre-booked cab service like Fiesta trades a slightly higher fare for a confirmed vehicle, verified driver, and fixed pricing agreed in advance, which often works out more predictable over a full trip."
    },
    {
        id: "4",
        question: "What is the best cab service app in Manipur?",
        answer: "Fiesta's cab network is focused on major metro hubs across India, including Chennai, New Delhi, Mumbai, Bangalore, Hyderabad, Gurgaon, and Pune. For destinations outside this network, a local operator or a regional ride-hailing app may be the more suitable option."
    },
    {
        id: "5",
        question: "What is the meaning of cab service?",
        answer: "A cab service refers to a taxi or car booked to carry passengers between a pickup location and a destination, whether that's arranged through a phone call, a website, an app, or hailed directly on the street."
    },
    {
        id: "6",
        question: "What is the cheapest taxi service in Bihar?",
        answer: "Fiesta's coverage centres on major metro cities rather than every state, so pricing for Bihar specifically isn't part of Fiesta's network; a local taxi operator in the region would be better placed to answer on cost."
    }
];

export default function CabServicePage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Contact / Booking Form */}
            <HeroForm
                title="Cab Service by Fiesta Smart Mobility"
                subtitle="Whether it's a quick local ride, an airport transfer, or a long outstation trip, Fiesta Smart Mobility's cab service is built around the same standards the company has run since 1998: well maintained vehicles, professional drivers, and pricing that's agreed before the ride begins. With 28 years of experience and a pan-India presence, Fiesta brings reliable cab services to daily commutes, one-off airport transfers, and everything in between."
                imageSrc="/images/cab-service/cab-service-hero.jpg"
                ctaText="Book Your Cab"
            />

            {/* Intro & Categories Overview */}
            <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
                            Cab booking today usually falls into one of a few categories: a local metered taxi hailed on the street, an app-based ride booked on demand, or a pre-booked private cab arranged in advance. Each suits a different kind of trip, and knowing which one fits a specific journey, whether it's a short city ride or a multi-day outstation trip, makes the difference between a smooth journey and one spent waiting endlessly for a vehicle that never quite matches the request.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: What Is Fiesta's Cab Service & Reliable Cab Services Across India */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                                Overview
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                What Is Fiesta&apos;s Cab Service
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Fiesta&apos;s cab service covers local cabs for city travel, airport taxi and airport transfers, outstation taxi for intercity trips, and chauffeur-driven car rental for businesses and individuals. Every booking, whatever the trip type, runs through the same standard of vehicle checks and driver verification, so the experience of booking a short local ride and a longer outstation trip feels consistent rather than like two different services.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                This online platform approach means a customer doesn&apos;t need to separately research local operators for a city ride and a different provider for an outstation trip. One enquiry, made through the website or by phone, covers the full range of cab booking needs Fiesta supports.
                            </p>

                            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaAward className="text-[#EC2028]" />
                                    Reliable Cab Services Across India
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    A reliable cab service is one where the vehicle shows up on time, the driver knows the route, and the fare doesn&apos;t change after the ride starts. Fiesta applies this standard across its network of major cities, so a booking works the same way whether it starts in Chennai, Delhi, or Bangalore. Consistency across cities matters most for customers who travel for business across multiple locations and want the same standard of service wherever the trip begins.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/images/cab-service/WhatsApp Image 2026-10-27 at 3.52.39 PM.jpeg"
                                    alt="Chauffeur opening door for business passenger"
                                    width={700}
                                    height={525}
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: How to Book a Cab Online */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Booking Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How to Book a Cab Online
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Fiesta&apos;s booking process is designed to be simple, whether it&apos;s arranged through the website or over a phone call. The steps stay the same regardless of whether the trip is a short local ride, a full-day car rental, or a multi-day outstation trip.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-2xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                <FaMapLocationDot />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">Step 1</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Share Pickup and Drop Location</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Booking begins with the pickup location and drop off location, along with the date and time of travel. For an airport taxi, flight details are shared as well so the driver can track the flight rather than working to a fixed pickup time.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-2xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                <FaCarSide />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">Step 2</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose the Right Vehicle</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Based on passenger count and luggage, the booking is matched to the right vehicle, from an economy car for a solo traveller to an SUV for a larger group, or a luxury car for a corporate or special occasion booking.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-2xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                <FaCreditCard />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">Step 3</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Confirm Fare and Payment Method</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The fare is confirmed before the trip, along with the preferred payment method, so there are no surprises once the cab arrives. This step is what separates a transparent booking process from one where the price is only revealed after the ride is already underway.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-2xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                <FaCircleCheck />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">Step 4</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Get Booking Confirmation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Once confirmed, vehicle and driver details are shared ahead of the pickup, removing any uncertainty about who to expect and when the cab will arrive.
                            </p>
                        </div>
                    </div>

                    {/* Booking in Advance Box with Visual Image */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200/80 shadow-md">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                                    Planning Ahead
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Booking in Advance
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                    Cab bookings, including airport taxi bookings, can be made well in advance of the travel date, which helps guarantee vehicle availability during busy periods and gives passengers time to plan pickup and drop-off details without last-minute stress. Booking ahead also gives Fiesta&apos;s team time to match the right vehicle to the trip rather than assigning whatever car happens to be free at short notice.
                                </p>
                                <BookNowButton className="px-6 py-2.5 text-sm">
                                    Plan Your Ride Ahead
                                </BookNowButton>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <Image
                                        src="/images/cab-service/cab-booking-guide.jpg"
                                        alt="Passenger booking cab online in advance"
                                        width={500}
                                        height={375}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Cab Services & Trips */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Service Categories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cab Services Tailored for Every Journey
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Local Cabs for City Travel */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-red-200 transition-colors">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaCity />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Local Cabs for City Travel
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Local cabs handle the everyday needs of city travel: office commutes, running errands, or a short ride across town. These bookings use the same well maintained cabs and experienced drivers as longer trips, just for a shorter distance. Local rentals booked by the hour are also available for customers who need a vehicle on standby for a few hours of errands or meetings across the city, rather than a single point-to-point trip.
                            </p>
                        </div>

                        {/* Airport Taxi and Airport Transfers */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-red-200 transition-colors">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaPlaneDeparture />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Airport Taxi and Airport Transfers
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Airport transfers are treated as a specialised booking, with drivers tracking the flight and waiting at the terminal rather than working to a fixed clock time. This matters most for early morning departures or late arrivals, when waiting endlessly for a ride is the last thing a traveller wants. Drivers assigned to airport pickups typically wait with identification at the arrivals area, and drop-off bookings build in enough buffer time for city traffic so a flight departure isn&apos;t put at risk.
                            </p>
                        </div>
                    </div>

                    {/* Outstation Taxi and Road Trips */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-12 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                            <div className="lg:col-span-7">
                                <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-4">
                                    <FaRoute />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Outstation Taxi and Road Trips
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Outstation trips call for a different standard than a city ride: drivers with intercity road experience, vehicles maintained for longer distances, and a fare that accounts for the full route rather than a single city drop.
                                </p>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/cab-service/WhatsApp Image 2026-10-27 at 3.57.09 PM.jpeg"
                                        alt="Outstation taxi travel on scenic open highway"
                                        width={500}
                                        height={375}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <FaArrowRight className="text-[#EC2028] text-sm" />
                                    One-Way Drops
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    For trips that only need to go in one direction, Fiesta offers one way drops rather than requiring a return booking, which suits travellers connecting onward by another mode of transport or ending a trip at a destination different from where it started.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <FaCompass className="text-[#EC2028] text-sm" />
                                    Round Trip Bookings
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A round trip keeps the same vehicle and driver for the outbound and return journey, useful for business trips or short getaways with a fixed itinerary, and it removes the need to arrange a separate booking for the return leg.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-4">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Popular Outstation Routes</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Fiesta&apos;s outstation network covers routes such as Chennai to Pondicherry, Bangalore, and Vellore; Hyderabad to Vijayawada and Warangal; Bangalore to Mysore, Coorg, and Chikmagalur; Delhi to Jaipur, Agra, and Chandigarh; and Gurgaon to Manesar, Neemrana, and Jaipur, alongside other routes available on request.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Routes Beyond the Core Network</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Road trips to destinations outside Fiesta&apos;s core metro network, including hill and pilgrimage routes such as a Dehradun airport pickup or drop, can often be arranged on request. Since coverage and driver availability vary by route and distance, it&apos;s worth confirming availability for a specific destination directly with Fiesta&apos;s team before finalising travel plans.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Car Rental and Long Term Rentals */}
                    <div className="bg-red-50/40 rounded-3xl border border-red-100 p-8 md:p-10">
                        <div className="max-w-4xl">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-[#EC2028] uppercase border border-red-100 rounded-full bg-white">
                                Extended Hire
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Car Rental and Long Term Rentals
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Beyond single trips, Fiesta&apos;s car rental services extend to long term rentals for businesses that need a vehicle on call for weeks or months at a time. All rentals are chauffeur-driven, with a professional driver included rather than a self-drive option, keeping the same safety and maintenance standards across every booking length. A long term rental also gives a company a fixed transport cost and a familiar driver for a set of routes, rather than booking a fresh cab for every single trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: A Fleet Built for Every Trip */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Vehicle Categories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            A Fleet Built for Every Trip
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Choosing the right vehicle comes down to passenger count, luggage, distance, and budget, and Fiesta&apos;s fleet is built to cover each of these without forcing every customer into the same category of car.
                        </p>
                    </div>

                    {/* Fleet Lineup Banner Image */}
                  {/*   <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-12">
                        <Image
                            src="/images/cab-service/cab-fleet-lineup.jpg"
                            alt="Fiesta comprehensive cab fleet lineup from hatchbacks to luxury cars"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                        />
                    </div>*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Economy Cars */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaCar />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Economy Cars</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Economy cars and hatchbacks suit solo travellers or small groups on a budget, offering a practical, budget friendly option for local cabs and short trips where a larger vehicle isn&apos;t necessary.
                            </p>
                        </div>

                        {/* Sedans */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaCarSide />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sedans</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sedans are a common choice for airport transfers and city travel, offering a comfortable ride for two to four passengers with a reasonable amount of luggage space, making them a popular default for business travel.
                            </p>
                        </div>

                        {/* SUVs and Toyota Innova */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaSuitcaseRolling />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">SUVs and Toyota Innova</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For families or slightly larger groups, SUVs and vehicles such as the Toyota Innova and Innova Crysta provide more seating and boot space without stepping up to a full luxury category, and they remain a common choice for outstation trips carrying more luggage than a sedan can comfortably hold.
                            </p>
                        </div>

                        {/* Luxury Cars */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaAward />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Cars</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For corporate travel, weddings, and special occasions, Fiesta&apos;s luxury cars, including premium sedans and larger vehicles such as the Toyota Vellfire, are maintained to a higher standard of comfort and presentation, suited to client pickups, executive transfers, and events where the ride itself is part of the experience.
                            </p>
                        </div>
                    </div>

                    {/* Well Maintained Vehicles */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#EC2028] text-2xl shrink-0">
                            <FaShieldHalved />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Well Maintained Vehicles, Every Time
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Every vehicle in Fiesta&apos;s fleet, across every category, is checked and cleaned between trips. Clean cars and consistent maintenance are treated as a baseline requirement, not an added extra, whatever type of booking is made, from a short local ride to a multi-day outstation trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Standards - Drivers, Safety, Pricing & Journey Quality */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Service Excellence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Standards Behind Every Ride
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Professional and Experienced Drivers */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaUserTie />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional and Experienced Drivers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Drivers across Fiesta&apos;s cab service are experienced drivers trained in both safe driving and passenger-facing service, from short local cabs to multi-hour outstation trips. Route knowledge matters as much as driving skill, particularly for outstation taxi bookings that cover unfamiliar roads, and drivers assigned to longer routes are matched to their familiarity with that specific journey.
                            </p>
                        </div>

                        {/* Safety as a Top Priority */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaShieldHalved />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety as a Top Priority</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Safety is one of Fiesta&apos;s top priorities across every booking type: verified drivers, well maintained vehicles, and route tracking combine to give passengers a dependable ride, including during unfavorable weather conditions when road conditions demand extra care and a longer, more cautious drive.
                            </p>
                        </div>

                        {/* Transparent, Competitive Pricing */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaTag />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent, Competitive Pricing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fiesta&apos;s cab bookings are built around transparent pricing agreed at the time of booking, with no hidden charges added once the ride is underway and no surge pricing during peak demand. This approach keeps pricing competitive and predictable, whether the trip is a short local ride or a longer outstation taxi booking, and it means the fare quoted before the trip is the fare paid at the end of it.
                            </p>
                        </div>

                        {/* Payment Methods and Convenience */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaCreditCard />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Methods and Convenience</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Multiple payment options make it easier for customers to pay in the way that suits them, and booking convenience is treated as part of the overall service rather than an afterthought, from the initial enquiry through to payment. Corporate accounts can also arrange invoicing for recurring bookings, rather than settling payment individually for every trip.
                            </p>
                        </div>

                        {/* Hassle Free, Stress Free Journeys */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaClock />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hassle Free, Stress Free Journeys</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The purpose of a good cab service is a hassle free, stress free journey: a vehicle that arrives on time, a driver who knows the destination, and a fare that was agreed before the trip began, so save money and peace of mind go together rather than being a trade-off. A stress free journey also means fewer calls back and forth confirming details that should have been settled at the time of booking.
                            </p>
                        </div>

                        {/* Booking for Unfavorable Weather Conditions */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaCloudSunRain />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Booking for Unfavorable Weather Conditions</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Heavy rain, fog, or other unfavorable weather conditions are exactly when a pre-booked cab matters most, removing the need to stand outside waiting endlessly for an available ride during difficult conditions. A confirmed pickup time and a driver already assigned to the trip take away much of the unpredictability that bad weather adds to city travel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Major Cities We Serve */}
            <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Pan-India Network
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Major Cities We Serve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Chennai */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Chennai
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Chennai is where Fiesta was founded in 1998, and it remains a core hub for local cabs, airport transfers, and outstation trips toward Pondicherry, Bangalore, and Vellore.
                            </p>
                        </div>

                        {/* New Delhi */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                New Delhi
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                In New Delhi, Fiesta&apos;s cab service supports daily commutes, airport transfers, and outstation routes toward Jaipur, Agra, and Chandigarh, covering both business and leisure travel out of the capital.
                            </p>
                        </div>

                        {/* Mumbai */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Mumbai
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Mumbai&apos;s cab bookings cover city travel, airport transfers, and outstation trips toward Pune, Nashik, and Aurangabad, with drivers matched to the passenger count and distance of each specific journey.
                            </p>
                        </div>

                        {/* Bangalore */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Bangalore
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Bangalore&apos;s network extends from local city travel to outstation routes toward Mysore, Coorg, and Chikmagalur, alongside daily corporate cab bookings across the city&apos;s business districts.
                            </p>
                        </div>

                        {/* Hyderabad */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Hyderabad
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Hyderabad&apos;s cab service covers local rides, airport transfers, and outstation trips toward Vijayawada and Warangal, in addition to daily employee transport bookings.
                            </p>
                        </div>

                        {/* Gurgaon */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Gurgaon
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Gurgaon&apos;s bookings include local cabs and outstation routes toward Manesar, Neemrana, and Jaipur, serving the city&apos;s concentration of corporate offices and tech parks.
                            </p>
                        </div>

                        {/* Pune */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors md:col-span-2 lg:col-span-1 xl:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                Pune
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Pune rounds out Fiesta&apos;s major city coverage, supporting local and corporate cab bookings across the city alongside outstation trips connecting to nearby business hubs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Excellent Service & Why Choose Fiesta */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                        {/* Excellent Service and Customer Support */}
                        <div className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                    <FaHeadset />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Excellent Service and Customer Support
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    Excellent service depends on responsive customer support, and Fiesta&apos;s team is reachable by phone and through the website for booking queries, changes, or last-minute requests, rather than support that only exists inside an app. Reviews and repeat corporate accounts are usually a better indicator of a cab service&apos;s reliability than the marketing copy on any single page, and Fiesta&apos;s track record of long-standing corporate clients across multiple cities reflects the same standard applied to individual bookings.
                                </p>
                            </div>
                        </div>

                        {/* Why Choose Fiesta for Your Cab Booking Needs */}
                        <div className="p-8 md:p-10 rounded-3xl bg-red-50/50 border border-red-100 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6 shadow-sm">
                                    <FaAward />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Why Choose Fiesta for Your Cab Booking Needs
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Fiesta brings together 28 years of experience, a diverse and well maintained fleet, professional drivers, and transparent pricing across every city it serves. For cab booking needs ranging from a local ride to a long outstation trip, that combination is what keeps customers coming back rather than searching for a new provider on every visit. A single point of contact for local cabs, airport transfers, outstation trips, and long term rentals also means less coordination effort for anyone booking cabs repeatedly, whether that&apos;s an individual traveller or a company managing transport for an entire team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: CTA Banner - Book Your Cab Today */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cab-service/WhatsApp Image 2026-10-27 at 3.59.56 PM.jpeg"
                        alt="Book Your Cab with Fiesta Smart Mobility"
                        fill
                        className="object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-500/40 rounded-full bg-red-950/40 backdrop-blur-sm">
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Book Your Cab Today
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                        For a local ride, an airport transfer, or an outstation trip, share the pickup location, drop location, and travel date through Fiesta&apos;s website or by phone to get a confirmed vehicle and fare before the journey begins.
                    </p>
                    <BookNowButton className="px-10 py-4 text-base font-semibold shadow-2xl hover:scale-105 transition-transform">
                        Share Your Requirement
                    </BookNowButton>
                </div>
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <FAQ
                items={cabServiceFaqs}
                badge="Cab Service FAQs"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about Fiesta's cab booking services, vehicle options, pricing transparency, and coverage."
            />
        </main>
    );
}
