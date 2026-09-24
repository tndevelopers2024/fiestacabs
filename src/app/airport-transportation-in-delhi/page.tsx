import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";
import FAQ from "../../components/sections/home/FAQ";

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
                imageSrc="/images/airport-transportation-services/airport-transportation-services-hero-img.png"
                ctaText="Get A Free Quote"
            />
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
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
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Getting to and from Indira Gandhi International Airport</h2>
                            <p className="text-gray-600 text-lg mb-8">Delhi Airport offers various transportation options for passengers, and each suits a different plan and budget. The right choice depends on your luggage, your schedule and how much certainty you want over the cost.</p>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Airport Express Metro</h3>
                                    <p className="text-gray-600">The Delhi Metro Airport Express Line is usually the quickest option to reach central Delhi, since it avoids road traffic. It works well for light travellers, though a booked taxi service still wins when you have luggage or several stops.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">DTC and app-based options</h3>
                                    <p className="text-gray-600">Delhi Transport Corporation runs DTC buses that connect the airport with various parts of Delhi and the NCR. Auto-rickshaws wait outside the terminals for short trips, and app-based cabs can be booked on demand, though fares on these apps move with demand and distance.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prepaid and pre-booked cabs</h3>
                                    <p className="text-gray-600">Prepaid cabs are available at the airport, and a pre-booked airport transfer gives you a fixed fare agreed before the ride. Advance booking helps you avoid surge pricing during the busy rush and gives you a guaranteed on-time pickup at your location.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Delhi Airport terminals and inter-terminal travel</h2>
                            <div className="space-y-6 text-gray-600 text-lg">
                                <p>Delhi Airport has three terminals: T1, T2 and T3. International flights mostly use Terminal 3, while Terminal 1 and Terminal 2 handle a large share of domestic traffic.</p>
                                <p>Free shuttle buses operate every 20 minutes between the terminals, so inter-terminal travel can use a complimentary shuttle. Passengers must present a boarding pass to board this shuttle service.</p>
                                <p>A DMRC feeder bus also links Terminal 1 and Terminal 2 for a nominal fare. Cabs and taxis are available for inter-terminal transfers when you are carrying heavy luggage or moving as a group.</p>
                                <div className="bg-[#EC2028]/10 p-6 rounded-xl border border-[#EC2028]/20 mt-8">
                                    <p className="text-gray-900 font-medium">If your connection is tight, a booked cab between terminals is the efficient choice, since it removes the wait for the next shuttle.</p>
                                </div>
                            </div>
                        </div>
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
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Airport pickup</h3>
                            <p className="text-gray-600 leading-relaxed">For an airport pickup, your driver tracks your flight and waits at the arrivals gate with a name sign to greet you. Waiting time is covered when a flight is delayed, so you never lose your ride.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Airport drop</h3>
                            <p className="text-gray-600 leading-relaxed">For an airport drop, we plan the pickup around your flight and Delhi rush hour traffic so you reach the terminal with time to spare. You confirm the pickup location and we handle the route.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Railway station and hotel transfers</h3>
                            <p className="text-gray-600 leading-relaxed">We also serve New Delhi Railway Station, the Delhi railway station at Old Delhi and Anand Vihar, plus door pickup from any hotel or address in the city centre. Airport, railway station and hotel legs can sit under one corporate account.</p>
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
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">On-time pickup and meet-and-greet</h2>
                                <p className="text-gray-600 mb-4">An on-time pickup is the point of an airport taxi, so we build our schedule around your flight and not around a fixed slot. Live flight tracking tells the driver exactly when you will land.</p>
                                <p className="text-gray-600">The driver reaches the pickup location early, waits with a name sign at the gate and helps you with your luggage to the car. Your priority is to walk out and go, not to search for a ride.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fixed fares with no surge pricing</h2>
                                <p className="text-gray-600 mb-4">Delhi airport taxi fares usually depend on the time and distance travelled, which is why demand-based apps can spike. We quote a fixed fare before the trip, so what you agree is what you pay.</p>
                                <p className="text-gray-600 mb-4">The quote covers the driver, the vehicle and applicable tolls, all disclosed upfront. There is no surge pricing during peak hours and no cost added after you arrive.</p>
                                <p className="text-gray-600">Corporate clients receive a GST invoice on every ride, which keeps travel accounts clean and auditable.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety and standards</h2>
                                <p className="text-gray-600 mb-4">Every driver is background-verified, trained and familiar with Delhi routes and traffic. Cars carry GPS tracking so a trip can be monitored end to end.</p>
                                <p className="text-gray-600">Our support desk runs round the clock to handle any query, change of plan or cancellation before you travel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to book your Delhi airport transfer</h2>
                            <p className="text-gray-600 text-lg mb-6">Booking a Fiesta airport transfer takes only a few steps and can be done in advance for any date.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                                    <p className="text-gray-700 pt-1">Share your pickup location, destination and flight details for the trip.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                                    <p className="text-gray-700 pt-1">Choose your vehicle from hatchback to luxury based on passengers and luggage.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                                    <p className="text-gray-700 pt-1">Receive a fixed fare quote and confirm the booking.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#EC2028] text-white flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                                    <p className="text-gray-700 pt-1">Get your driver and vehicle details before pickup, along with a contact to greet on arrival.</p>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-600">Book at least a few hours ahead for a guaranteed vehicle, and earlier for early-morning or late-night flights. Free cancellation applies within the stated window if your plans change.</p>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why choose Fiesta for Delhi airport transportation</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">28 years of service</h3>
                                    <p className="text-gray-600">We have run cab service across India since 1998 and understand what business and leisure passengers expect from airport travel.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fixed, transparent fares</h3>
                                    <p className="text-gray-600">Prices are agreed before the ride with tolls and charges disclosed, so there are no surprises when you pay.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">On-time, every time</h3>
                                    <p className="text-gray-600">Flight tracking and early arrival at the pickup point keep our on-time pickup record consistent, even in Delhi rush hours.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India presence</h3>
                                    <p className="text-gray-600">The same standard covers Delhi, Mumbai, Chennai and other cities, so a national account gets one reliable partner.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Verified drivers</h3>
                                    <p className="text-gray-600">Trained, background-checked drivers greet you, assist with luggage and know the fastest route to your destination.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Round-the-clock support</h3>
                                    <p className="text-gray-600">Our team is available on the clock to assist with booking, changes and any queries before or during the journey.</p>
                                </div>
                            </div>
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

            <section className="py-24 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#EC2028]/5 transform -skew-y-3 origin-top-left"></div>
                <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Book your Delhi airport transfer</h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                        Plan your airport travel with a partner that shows up on time and quotes a fixed fare. Reach our team to book a Delhi airport pickup or drop, or to set up a corporate account for regular travel.
                    </p>
                    <button className="bg-[#EC2028] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Your Airport Transfer
                    </button>
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
