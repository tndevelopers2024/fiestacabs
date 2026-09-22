import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";

export const metadata = getMetadata("/airport-transportation-in-delhi");

export default function AirportTransportationDelhiPage() {
    return (
        <main className="min-h-screen relative bg-white">
            <HeroForm
                title="Delhi Airport Transportation Services"
                subtitle="Organized Delhi airport transportation services with fixed bookings, a named driver, and a confirmed vehicle."
                imageSrc="/images/airport-transportation-services/airport-transportation-services-hero-img.png"
                ctaText="Get A Free Quote"
            />
            
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12 text-gray-700 leading-relaxed">
                    
                    {/* Introduction */}
                    <div className="space-y-6">
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

                    {/* Getting to and from... */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Getting to and from Indira Gandhi International Airport</h2>
                        <p>Delhi Airport offers various transportation options for passengers, and each suits a different plan and budget. The right choice depends on your luggage, your schedule and how much certainty you want over the cost.</p>
                        
                        <div className="space-y-6 mt-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Airport Express Metro</h3>
                                <p>The Delhi Metro Airport Express Line is usually the quickest option to reach central Delhi, since it avoids road traffic. It works well for light travellers, though a booked taxi service still wins when you have luggage or several stops.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">DTC and app-based options</h3>
                                <p>Delhi Transport Corporation runs DTC buses that connect the airport with various parts of Delhi and the NCR. Auto-rickshaws wait outside the terminals for short trips, and app-based cabs can be booked on demand, though fares on these apps move with demand and distance.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Prepaid and pre-booked cabs</h3>
                                <p>Prepaid cabs are available at the airport, and a pre-booked airport transfer gives you a fixed fare agreed before the ride. Advance booking helps you avoid surge pricing during the busy rush and gives you a guaranteed on-time pickup at your location.</p>
                            </div>
                        </div>
                    </div>

                    {/* Terminals */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Delhi Airport terminals and inter-terminal travel</h2>
                        <p>Delhi Airport has three terminals: T1, T2 and T3. International flights mostly use Terminal 3, while Terminal 1 and Terminal 2 handle a large share of domestic traffic.</p>
                        <p>Free shuttle buses operate every 20 minutes between the terminals, so inter-terminal travel can use a complimentary shuttle. Passengers must present a boarding pass to board this shuttle service.</p>
                        <p>A DMRC feeder bus also links Terminal 1 and Terminal 2 for a nominal fare. Cabs and taxis are available for inter-terminal transfers when you are carrying heavy luggage or moving as a group.</p>
                        <p>If your connection is tight, a booked cab between terminals is the efficient choice, since it removes the wait for the next shuttle.</p>
                    </div>

                    {/* Fiesta Delhi airport transfer services */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Fiesta Delhi airport transfer services</h2>
                        <p>Our Delhi airport transfers cover the full commute in both directions, whether you land in the morning or arrive late at night. Book once and the same standard applies across every trip.</p>
                        
                        <div className="space-y-6 mt-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Airport pickup</h3>
                                <p>For an airport pickup, your driver tracks your flight and waits at the arrivals gate with a name sign to greet you. Waiting time is covered when a flight is delayed, so you never lose your ride.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Airport drop</h3>
                                <p>For an airport drop, we plan the pickup around your flight and Delhi rush hour traffic so you reach the terminal with time to spare. You confirm the pickup location and we handle the route.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Railway station and hotel transfers</h3>
                                <p>We also serve New Delhi Railway Station, the Delhi railway station at Old Delhi and Anand Vihar, plus door pickup from any hotel or address in the city centre. Airport, railway station and hotel legs can sit under one corporate account.</p>
                            </div>
                        </div>
                    </div>

                    {/* Routes table */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Routes and destinations we cover</h2>
                        <p>Common Delhi airport transportation routes and their approximate distance from Indira Gandhi International Airport are below. All fares are confirmed at the time of booking.</p>
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Destination</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Approx distance from DEL</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Fare</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="p-4 border border-gray-200">Connaught Place, New Delhi city centre</td><td className="p-4 border border-gray-200">16 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Dhaula Kuan</td><td className="p-4 border border-gray-200">9 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">New Delhi Railway Station</td><td className="p-4 border border-gray-200">17 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Anand Vihar</td><td className="p-4 border border-gray-200">27 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Aerocity hotel cluster</td><td className="p-4 border border-gray-200">3 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Gurgaon business hubs</td><td className="p-4 border border-gray-200">17 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Noida and wider Delhi NCR</td><td className="p-4 border border-gray-200">35 km</td><td className="p-4 border border-gray-200">On request</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Vehicles table */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Vehicles for every airport travel plan</h2>
                        <p>Our fleet is matched to your group size and luggage, from a solo airport pickup to a family or a corporate team. Every vehicle is clean, equipped and serviced on schedule.</p>
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Vehicle</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Ideal for</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Fare</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="p-4 border border-gray-200">Hatchback</td><td className="p-4 border border-gray-200">1 to 2 passengers, light luggage</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Sedan (Dzire, Corolla)</td><td className="p-4 border border-gray-200">Up to 3 passengers, city commute</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">SUV (Innova Crysta, Fortuner)</td><td className="p-4 border border-gray-200">Families and small groups with luggage</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Tempo Traveller</td><td className="p-4 border border-gray-200">Larger groups and corporate teams</td><td className="p-4 border border-gray-200">On request</td></tr>
                                    <tr><td className="p-4 border border-gray-200">Luxury (Mercedes E220, BMW 5 Series)</td><td className="p-4 border border-gray-200">Executive airport travel</td><td className="p-4 border border-gray-200">On request</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* On-time pickup */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">On-time pickup and meet-and-greet</h2>
                        <p>An on-time pickup is the point of an airport taxi, so we build our schedule around your flight and not around a fixed slot. Live flight tracking tells the driver exactly when you will land.</p>
                        <p>The driver reaches the pickup location early, waits with a name sign at the gate and helps you with your luggage to the car. Your priority is to walk out and go, not to search for a ride.</p>
                    </div>

                    {/* Fixed fares */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Fixed fares with no surge pricing</h2>
                        <p>Delhi airport taxi fares usually depend on the time and distance travelled, which is why demand-based apps can spike. We quote a fixed fare before the trip, so what you agree is what you pay.</p>
                        <p>The quote covers the driver, the vehicle and applicable tolls, all disclosed upfront. There is no surge pricing during peak hours and no cost added after you arrive.</p>
                        <p>Corporate clients receive a GST invoice on every ride, which keeps travel accounts clean and auditable.</p>
                    </div>

                    {/* Safety and standards */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Safety and standards</h2>
                        <p>Every driver is background-verified, trained and familiar with Delhi routes and traffic. Cars carry GPS tracking so a trip can be monitored end to end.</p>
                        <p>Our support desk runs round the clock to handle any query, change of plan or cancellation before you travel.</p>
                    </div>

                    {/* Booking Process */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">How to book your Delhi airport transfer</h2>
                        <p>Booking a Fiesta airport transfer takes only a few steps and can be done in advance for any date.</p>
                        <ul className="list-decimal pl-6 space-y-3">
                            <li>Share your pickup location, destination and flight details for the trip.</li>
                            <li>Choose your vehicle from hatchback to luxury based on passengers and luggage.</li>
                            <li>Receive a fixed fare quote and confirm the booking.</li>
                            <li>Get your driver and vehicle details before pickup, along with a contact to greet on arrival.</li>
                        </ul>
                        <p>Book at least a few hours ahead for a guaranteed vehicle, and earlier for early-morning or late-night flights. Free cancellation applies within the stated window if your plans change.</p>
                    </div>

                    {/* Why choose Fiesta */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Why choose Fiesta for Delhi airport transportation</h2>
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">28 years of service</h3>
                                <p>We have run cab service across India since 1998 and understand what business and leisure passengers expect from airport travel.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Fixed, transparent fares</h3>
                                <p>Prices are agreed before the ride with tolls and charges disclosed, so there are no surprises when you pay.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">On-time, every time</h3>
                                <p>Flight tracking and early arrival at the pickup point keep our on-time pickup record consistent, even in Delhi rush hours.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India presence</h3>
                                <p>The same standard covers Delhi, Mumbai, Chennai and other cities, so a national account gets one reliable partner.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Verified drivers</h3>
                                <p>Trained, background-checked drivers greet you, assist with luggage and know the fastest route to your destination.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Round-the-clock support</h3>
                                <p>Our team is available on the clock to assist with booking, changes and any queries before or during the journey.</p>
                            </div>
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Fiesta compared with app-based cabs</h2>
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Feature</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">Fiesta Smart Mobility</th>
                                        <th className="p-4 border border-gray-200 font-bold text-gray-900">App-based cabs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Fare</td><td className="p-4 border border-gray-200">Fixed quote before the ride</td><td className="p-4 border border-gray-200">Moves with demand and distance</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Surge pricing</td><td className="p-4 border border-gray-200">None, even in peak hours</td><td className="p-4 border border-gray-200">Common during rush</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Airport pickup</td><td className="p-4 border border-gray-200">Meet-and-greet at the gate</td><td className="p-4 border border-gray-200">Find your driver in the queue</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Waiting on delay</td><td className="p-4 border border-gray-200">Covered when flights are late</td><td className="p-4 border border-gray-200">Charged or cancelled</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">GST invoice</td><td className="p-4 border border-gray-200">Every trip</td><td className="p-4 border border-gray-200">Inconsistent</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Driver</td><td className="p-4 border border-gray-200">Verified and trained</td><td className="p-4 border border-gray-200">Variable</td></tr>
                                    <tr><td className="p-4 border border-gray-200 font-bold">Support</td><td className="p-4 border border-gray-200">24x7 phone and email</td><td className="p-4 border border-gray-200">App-based, variable</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Book your Delhi airport transfer */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Book your Delhi airport transfer</h2>
                        <p>Plan your airport travel with a partner that shows up on time and quotes a fixed fare. Reach our team to book a Delhi airport pickup or drop, or to set up a corporate account for regular travel.</p>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6 pt-10 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
                        
                        <div className="space-y-6 mt-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">1. What does Fiesta Delhi airport transportation include?</h3>
                                <p>It includes a confirmed vehicle, a verified driver, flight tracking, meet-and-greet at the airport gate and a fixed fare that covers the ride and tolls.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Do you offer pickup from all Delhi Airport terminals?</h3>
                                <p>Yes. We cover Terminal 1, Terminal 2 and Terminal 3 at Indira Gandhi International Airport for both airport pickup and drop.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Will the driver wait if my flight is delayed?</h3>
                                <p>Yes. We track your flight and the waiting time is covered when you land late, so your ride is held for you.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Does Fiesta charge surge pricing during peak hours?</h3>
                                <p>No. Your fare is fixed at the time of booking, so peak hours and rush traffic do not change the cost.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Can I book a transfer to the railway station instead?</h3>
                                <p>Yes. We serve New Delhi Railway Station, the Delhi railway station at Old Delhi and Anand Vihar, along with any hotel or city address.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">6. How far in advance should I book?</h3>
                                <p>A few hours is enough for a standard trip, but early-morning and late-night flights are best booked further in advance to guarantee a vehicle.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">7. What vehicles are available for airport travel?</h3>
                                <p>Hatchbacks, sedans, SUVs such as the Innova Crysta, Tempo Travellers for groups and luxury cars for executive travel.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">8. Do you provide a GST invoice and can I cancel free of charge?</h3>
                                <p>Yes to both. Every corporate trip carries a GST invoice, and free cancellation applies within the stated window before pickup.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
