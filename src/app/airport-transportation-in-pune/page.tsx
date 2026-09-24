import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = getMetadata("/airport-transportation-in-pune");

const puneAirportFaqs = [
    {
        id: "1",
        question: "How early should I book a Pune airport taxi?",
        answer: "Booking a few hours in advance is usually enough, but for early morning flights, peak season, or larger vehicles like a tempo traveller, booking a day ahead is the safer bet for guaranteed availability."
    },
    {
        id: "2",
        question: "Does Fiesta track flight delays?",
        answer: "Yes, flight status is monitored in real time and driver arrival adjusts automatically, so passengers aren't kept waiting and drivers aren't parked at the terminal for hours."
    },
    {
        id: "3",
        question: "Is there a waiting charge at the airport?",
        answer: "A standard grace period is included with every Pune airport pickup, and charges only apply if waiting time significantly exceeds that window, communicated clearly at booking."
    },
    {
        id: "4",
        question: "Can I book a one way trip from Pune airport?",
        answer: "Yes, one way airport taxi service is available to any destination in Pune, nearby cities, or outstation routes, so the fare reflects only the distance actually travelled rather than a round trip minimum."
    },
    {
        id: "5",
        question: "What vehicles are available for airport transfers?",
        answer: "Hatchbacks, sedans, SUVs and tempo travellers are all available, covering everything from a solo traveler with one bag to a group with extra luggage."
    },
    {
        id: "6",
        question: "Is the fare fixed or does it change with traffic?",
        answer: "The fare is fixed at the time of booking. Traffic conditions do not change the quoted price for a standard airport transfer."
    },
    {
        id: "7",
        question: "Can I book a round trip airport cab for a same day return?",
        answer: "Yes, round trip bookings are available and can be scheduled around a return flight or a same day meeting."
    },
    {
        id: "8",
        question: "How do I reach the airport if I don't book a cab in advance?",
        answer: "Pre-paid taxi counters, PMPML buses, app-based cabs, hotel shuttles and auto-rickshaws are all available at Pune Airport, though none offer the flight tracking or meet and greet included with a pre-booked Fiesta airport taxi."
    }
];

export default function AirportTaxiPunePage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            <HeroForm
                title="Pune Airport Transport Service by Fiesta Smart Mobility"
                subtitle="Dependable Pune airport transport service built around on-time pickup, transparent pricing, and clean, well-maintained cars."
                imageSrc="/images/airport-transportation-services/airport-transportation-services-hero-img.png"
                ctaText="Get A Free Quote"
            />
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
                        <p>
                            Landing at Pune International Airport and need a taxi service you can count on? Fiesta Smart Mobility offers a dependable Pune airport transport service built around three things travelers care about most: on time pickup, transparent pricing, and clean, well maintained cars. Our cab services range from everyday hatchbacks to luxury cars for a more premium ride.
                        </p>
                        <p>
                            Whether you are flying in for business, heading home after a long trip, or dropping a guest off before a flight, our Pune airport taxi service is available around the clock, every day of the year, covering Pune airport pickup and airport drop in equal measure. You can book airport taxi transport online, through the app, or by a quick call to the support line.
                        </p>
                        <p>
                            This guide covers everything you need to know about Pune airport taxi booking: routes, vehicle types, fare factors, and answers to the questions frequent flyers ask most about airport travel in and around Pune, whether the trip is a quick city hop or a longer outstation run.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Fiesta for Your Pune Airport Transfer</h2>
                        <p className="text-gray-600 text-lg">
                            Pune's traffic can be unpredictable, and missing a flight, or waiting endlessly for a cab after landing, is not something any corporate traveler or solo traveler wants. Fiesta Smart Mobility solves this with a taxi service designed specifically around airport timing.
                        </p>
                        <p className="text-gray-600 text-lg mt-4">
                            Corporate executives on a tight schedule and frequent flyers who travel through Pune regularly both benefit from the same underlying structure: a driver who already knows the route, a fare that doesn't shift after booking, and a customer support team that's reachable if plans change at short notice.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Real Time Flight Tracking</h3>
                            <p className="text-gray-600 leading-relaxed">Our drivers monitor your flight status in real time, so pickup times adjust automatically for early morning flights, delays, or an unexpectedly quick landing.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Meet and Greet at Arrivals</h3>
                            <p className="text-gray-600 leading-relaxed">Your cab driver waits at the terminal with a name board, so there's no scrambling to find your ride in a crowded parking lot after a long journey.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Pricing, No Hidden Charges</h3>
                            <p className="text-gray-600 leading-relaxed">No surge pricing, no last minute add-ons. You know the fare before you book, and transparent pricing means the amount confirmed at booking is the amount paid at drop off.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Wide Vehicle Choice</h3>
                            <p className="text-gray-600 leading-relaxed">From hatchbacks and sedans to SUVs and tempo travellers for group travel, vehicle types are matched to passenger count and luggage rather than offered as a single default option.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Verified, Professional Drivers</h3>
                            <p className="text-gray-600 leading-relaxed">Every professional driver is background checked and trained on the fastest routes in and out of Pune Airport, along with safety, etiquette and customer support basics. Friendly drivers who know the pickup location well make the whole trip smoother, especially for first time visitors to Pune.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
                            <p className="text-gray-600 leading-relaxed">Early morning flights and late night arrivals are covered without extra hassle, since airport cabs don't run on a fixed daytime schedule the way some other transport options do.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Pune Airport Transport Service Offerings</h2>
                        <p className="text-gray-600 text-lg">Fiesta's Pune airport transport service covers more than a single pickup or drop. Corporate travelers, families and solo travelers each use it differently, and the packages are built to flex around that.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Pune Airport Pickup</h3>
                            <p className="text-gray-600 leading-relaxed">Book a Pune airport pickup and your driver will be waiting at the arrivals gate when you land. This suits travelers heading to Hinjewadi, Koregaon Park, Baner, Kothrud, Viman Nagar, or anywhere else across Pune and its suburbs.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Pune Airport Drop</h3>
                            <p className="text-gray-600 leading-relaxed">Heading to catch a flight? Our airport drop services pick you up from home, hotel or office and get you to the terminal with buffer time built in, so a traffic jam near Hinjewadi or Kharadi during peak hours doesn't turn into a missed flight. Well maintained cabs and experienced drivers keep this leg of the trip just as reliable as the pickup.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">One Way Airport Taxi</h3>
                            <p className="text-gray-600 leading-relaxed">Need a one way taxi from Pune airport to a specific destination? You only pay for the trip you take, with no round trip charges added by default.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Outstation Transfers from Pune Airport</h3>
                            <p className="text-gray-600 leading-relaxed">Traveling beyond city limits? Fiesta also runs outstation cabs from Pune airport to destinations like Mumbai, Bangalore, Lonavala, Mahabaleshwar, Shirdi and Nashik, with both one way and round trip options, making a longer trip just as hassle free and convenient as a short city hop.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate and Group Airport Transport</h3>
                            <p className="text-gray-600 leading-relaxed">For business trips and teams, Fiesta offers corporate billing, multiple vehicle bookings, and larger vehicles for group airport transfers, coordinated through a dedicated customer support team rather than separate individual bookings.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hotel Pickup and Drop</h3>
                            <p className="text-gray-600 leading-relaxed">Guests staying at a hotel in Pune can book the same airport pickup or drop service directly to the hotel door, which is a common request for business travelers who land, check in, and head straight into meetings the same day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Popular Routes from Pune International Airport</h2>
                        <p className="text-gray-600 text-lg mb-4">Pune International Airport sits roughly 10 kilometers northeast of Pune's historical district, and travel time to most parts of the city runs between 15 and 60 minutes depending on the route and time of day.</p>
                        <p className="text-gray-600 text-lg">IT hubs such as Hinjewadi and Wakad see the longest travel times due to distance and peak hour congestion, while destinations closer to the airport, like Viman Nagar and Koregaon Park, are a comparatively quick ride.</p>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Route</th>
                                    <th className="p-6 font-bold text-gray-900">Approx. Distance</th>
                                    <th className="p-6 font-bold text-gray-900">Approx. Travel Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Hinjewadi</td><td className="p-6 text-gray-600">25-28 km</td><td className="p-6 text-gray-600">45-60 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Koregaon Park</td><td className="p-6 text-gray-600">8-10 km</td><td className="p-6 text-gray-600">20-25 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Kothrud</td><td className="p-6 text-gray-600">15-18 km</td><td className="p-6 text-gray-600">35-45 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Viman Nagar</td><td className="p-6 text-gray-600">5-7 km</td><td className="p-6 text-gray-600">15-20 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Wakad</td><td className="p-6 text-gray-600">20-23 km</td><td className="p-6 text-gray-600">40-50 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Hadapsar</td><td className="p-6 text-gray-600">12-15 km</td><td className="p-6 text-gray-600">30-35 mins</td></tr>
                                <tr className="hover:bg-gray-50/50 transition-colors"><td className="p-6 text-gray-600">Pune Airport to Pune Junction</td><td className="p-6 text-gray-600">8-11 km</td><td className="p-6 text-gray-600">20-30 mins</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm italic">Travel times vary with traffic conditions, and drivers factor this into pickup scheduling rather than working off a fixed estimate alone.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pune Airport Cabs and Vehicle Options</h2>
                        <p className="text-gray-600 text-lg">The right vehicle for a Pune airport cab usually comes down to passenger count and luggage rather than preference alone.</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hatchback</h3>
                            <p className="text-gray-600 leading-relaxed">A hatchback such as a Swift or i20 suits solo travelers or pairs with light luggage, and works well for a quick, comfortable ride into the city.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sedan</h3>
                            <p className="text-gray-600 leading-relaxed">A sedan such as a Dzire or Etios is a comfortable option for up to three passengers with standard luggage, and remains the most commonly booked vehicle type for airport pickup.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">SUV</h3>
                            <p className="text-gray-600 leading-relaxed">An SUV such as an Innova or Ertiga is ideal for families or groups of up to six or seven with extra luggage, offering a more comfortable ride on longer routes.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Tempo Traveller</h3>
                            <p className="text-gray-600 leading-relaxed">A tempo traveller suits larger groups, corporate executives travelling together, or event transport, when a single sedan or SUV isn't enough for the headcount.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2 space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pune Airport Cab Booking Process</h2>
                                <p className="text-gray-600 text-lg mb-6">Pune airport taxi booking takes a couple of minutes through the website or by phone, and confirmation includes driver and vehicle details well before pickup, whether the trip is booked days ahead or the same evening.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                                        <p className="text-gray-700 pt-1">Enter travel details: flight number, pickup and drop location, date and time.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                                        <p className="text-gray-700 pt-1">Choose a vehicle based on group size and luggage.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                                        <p className="text-gray-700 pt-1">Confirm the booking and receive driver and vehicle details in advance.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                                        <p className="text-gray-700 pt-1">Track the ride and get pickup confirmation as the flight lands.</p>
                                    </li>
                                </ul>
                                <p className="mt-6 text-gray-600">Advance booking is recommended, especially for early morning flights or during peak travel seasons, to guarantee vehicle availability.</p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Pune Airport Taxi Fare Works</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">Several factors affect a Pune airport taxi fare: vehicle type, distance and route from the airport to the destination, time of travel, whether the trip is one way or round trip, and waiting time beyond the complimentary grace period.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">Published per kilometer starting rates for Pune airport taxis are common across the market, but Fiesta shares a single, fixed, all inclusive fare upfront at the time of booking, so there are no surprises at drop off and no running meter to watch during the ride.</p>
                                <p className="text-gray-600 leading-relaxed">Peak hours, late night departures, and extra luggage don't change a fare that's already been confirmed, which is the main difference between a pre-booked airport taxi and an on-demand cab picked up at the curb.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Standards Behind Every Ride</h2>
                            <p className="text-gray-600 text-lg mb-8">Safety is treated as the foremost consideration on every Pune airport transfer, not an afterthought added after the vehicle is booked.</p>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Background Checked Drivers</h3>
                                    <p className="text-gray-600">All drivers undergo background checks and professional training before being cleared for airport routes, and are regularly evaluated afterward to keep standards consistent.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">GPS Enabled Real Time Tracking</h3>
                                    <p className="text-gray-600">Every vehicle is GPS enabled, giving both the passenger and the customer support team real time tracking of the ride from pickup to drop off.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Driver Evaluation</h3>
                                    <p className="text-gray-600">Chauffeurs are trained in safety, etiquette and local routes, and periodic evaluation keeps that standard from slipping as drivers gain more trips on the road.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Clean, Well Maintained Cars</h3>
                                    <p className="text-gray-600">Cabs are properly cleaned before use and kept as well maintained cars throughout their time on the road, so the vehicle that arrives at the terminal is ready for a pleasant travel experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Other Ways to Reach Pune Airport</h2>
                            <p className="text-gray-600 text-lg">A booked cab isn't the only way to leave Pune Airport, and knowing the alternatives helps put the convenience of a pre-booked ride in context.</p>
                        </div>
                        <div className="lg:w-2/3">
                            <ul className="space-y-6">
                                <li className="bg-gray-50 p-6 rounded-xl"><strong>Pre-Paid Taxi Counters:</strong> Pre-paid taxi counters are available at Pune Airport for a fixed fare paid upfront, which removes negotiation but doesn't include the meet and greet or flight tracking a pre-booked airport cab provides.</li>
                                <li className="bg-gray-50 p-6 rounded-xl"><strong>PMPML City Buses:</strong> PMPML city buses provide an economical transport option from Pune Airport, connecting to various parts of the city for travelers prioritising cost over door to door convenience.</li>
                                <li className="bg-gray-50 p-6 rounded-xl"><strong>Airport Shuttle to Ramwadi Metro Station:</strong> There is no metro station at Pune Airport itself, so travelers use a feeder shuttle that runs roughly every 30 minutes to Ramwadi Metro Station to connect onward.</li>
                                <li className="bg-gray-50 p-6 rounded-xl"><strong>App-Based Cabs and Auto-Rickshaws:</strong> App-based cabs are commonly used for transportation from Pune Airport, and auto-rickshaws are available outside the terminal for shorter trips, though neither typically includes flight tracking or a guaranteed vehicle booked in advance.</li>
                                <li className="bg-gray-50 p-6 rounded-xl"><strong>Hotel Shuttle Services:</strong> Some hotels run their own shuttle to and from the airport on a fixed schedule, which can work for a group staying at the same property, though it doesn't offer the door to door flexibility of a taxi booked around an individual flight.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fiesta vs Other Pune Airport Transport Options</h2>
                    </div>
                    
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Option</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Booking</th>
                                    <th className="p-6 font-bold text-gray-900 w-1/3">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Fiesta Airport Taxi</td><td className="p-6 text-gray-600">Pre-booked, fixed fare, flight tracked</td><td className="p-6 text-gray-600">Door to door, any time of day</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Pre-Paid Taxi Counter</td><td className="p-6 text-gray-600">Fixed fare, booked on arrival</td><td className="p-6 text-gray-600">Travelers without an advance booking</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">PMPML Bus</td><td className="p-6 text-gray-600">Low cost, fixed routes</td><td className="p-6 text-gray-600">Budget travel, flexible timing</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">App-Based Cab</td><td className="p-6 text-gray-600">On-demand, price can vary</td><td className="p-6 text-gray-600">Short notice, standard trips</td></tr>
                                <tr className="hover:bg-gray-50 transition-colors"><td className="p-6 font-semibold text-gray-900">Auto-Rickshaw</td><td className="p-6 text-gray-600">On-demand, short distance</td><td className="p-6 text-gray-600">Very short trips near the terminal</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#EC2028]/5 transform -skew-y-3 origin-top-left"></div>
                <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Book Your Pune Airport Transfer Today</h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                        A smooth Pune airport transfer sets the tone for the rest of the trip. With Fiesta Smart Mobility, travelers get a taxi service that's punctual, upfront about pricing, and available whenever a flight lands or departs, day or night. Book in advance and skip the uncertainty of a last minute airport cab search at the terminal door.
                    </p>
                    <button className="bg-[#EC2028] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Your Airport Transfer
                    </button>
                </div>
            </section>

            <FAQ
                items={puneAirportFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking Pune airport taxis, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
}
