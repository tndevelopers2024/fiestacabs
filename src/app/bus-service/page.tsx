import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import Image from 'next/image';
import HeroForm from "../../components/common/HeroForm";
import BookNowButton from "../../components/common/BookNowButton";
import FAQ from "../../components/sections/home/FAQ";
import { 
    FaBus, 
    FaVanShuttle, 
    FaRoute, 
    FaMobileScreenButton, 
    FaMapLocationDot, 
    FaShieldHalved, 
    FaUserTie, 
    FaClock, 
    FaCity, 
    FaAward, 
    FaBuildingColumns, 
    FaUsers, 
    FaHandshake, 
    FaCreditCard, 
    FaCompass, 
    FaCircleCheck,
    FaArrowRight,
    FaCalendarCheck,
    FaHeadset
} from "react-icons/fa6";

export const metadata = getMetadata("/bus-service");

const busServiceFaqs = [
    {
        id: "1",
        question: "What type of bus service does Fiesta provide?",
        answer: "Fiesta provides corporate employee transportation and shuttle services, including access to buses, mini buses, luxury mini coaches, and luxury coaches depending on the requirement."
    },
    {
        id: "2",
        question: "Can Fiesta customize bus routes?",
        answer: "Yes. Fiesta's corporate shuttle service can be customized around office locations, employee requirements, shift patterns, pickup points, and time slots."
    },
    {
        id: "3",
        question: "Does Fiesta provide real-time bus tracking?",
        answer: "Yes. Fiesta's employee transportation and shuttle services use GPS-enabled vehicles and real-time tracking, while its mobility app supports real-time shuttle tracking for employees."
    },
    {
        id: "4",
        question: "Does Fiesta offer corporate bus rental?",
        answer: "Fiesta provides corporate employee transportation and a fleet that includes buses and coaches suitable for organizational requirements. Businesses can contact the company for a customized transportation proposal."
    },
    {
        id: "5",
        question: "Can companies arrange transportation for large teams?",
        answer: "Yes. Fiesta's shuttle service is designed to support both smaller teams and large corporate workforces, with scalable transportation solutions and vehicles including larger buses and coaches."
    },
    {
        id: "6",
        question: "Does Fiesta provide bus ticket booking?",
        answer: "Fiesta's published offering is primarily corporate employee transportation and shuttle service rather than a public intercity bus-ticket marketplace. Organizations should contact Fiesta to arrange corporate transportation based on their requirements."
    },
    {
        id: "7",
        question: "Can employees book their rides online?",
        answer: "Fiesta's smart mobility app allows employees to book rides, select routes, track shuttle arrivals, and receive ride details."
    },
    {
        id: "8",
        question: "What safety measures are used?",
        answer: "Fiesta highlights verified drivers, professional training, GPS-enabled vehicles, real-time tracking, emergency response systems, fleet maintenance, and 24/7 support as part of its employee transportation operations."
    },
    {
        id: "9",
        question: "How can I get a price for corporate bus transportation?",
        answer: "Corporate transportation pricing depends on factors such as vehicle requirements, routes, passenger volume, locations, and schedules. Businesses can submit their requirements to Fiesta for a custom quote."
    }
];

export default function BusServicePage() {
    return (
        <main className="min-h-screen relative bg-white w-full">
            {/* Hero Section with Contact / Booking Form */}
            <HeroForm
                title="Corporate Bus Transportation"
                subtitle="Fiesta Smart Mobility provides reliable bus service and corporate bus transportation solutions for organizations that need safe, comfortable, and well-managed employee mobility. Our fleet includes buses, minibuses, luxury minibuses, and luxury coaches, giving businesses practical options for different workforce and route requirements."
                imageSrc="/images/bus-service/WhatsApp Image 2026-10-27 at 4.05.45 PM.jpeg"
                ctaText="Request A Proposal"
            />

            {/* Intro & History Overview */}
            <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
                            With more than 28 years of experience in employee transportation, Fiesta combines professional drivers, well-maintained vehicles, technology-enabled operations, and responsive support to make corporate journeys smoother and more reliable. Established in Chennai in 1998, Fiesta has expanded its employee transport operations across major business hubs in India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Bus Transportation for Corporate Mobility & Corporate Bus Rental */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                                Corporate Mobility
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Bus Transportation for Corporate Mobility
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Corporate bus transportation can simplify daily employee movement between residential areas, transit hubs, campuses, and offices. Fiesta designs employee transport solutions around organizational requirements, including workforce size, office locations, shift patterns, routes, and designated pickup points.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                Our shuttle and bus services are designed to provide structured commuting rather than ad-hoc travel. Companies can work with Fiesta to develop routes and schedules that support their operational needs while providing employees with a convenient and comfortable ride.
                            </p>

                            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaBus className="text-[#EC2028]" />
                                    Corporate Bus Rental
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3">
                                    Businesses often need transportation for more than routine office commuting. Corporate bus rental can also support employee movements, office transfers, corporate events, campus transportation, and large-group travel requirements.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    Fiesta offers a diverse fleet that includes mini buses, standard buses, luxury mini coaches, and luxury coaches, allowing organizations to select transportation according to passenger volume and the nature of the journey.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="/images/bus-service/WhatsApp Image 2026-10-27 at 4.10.40 PM.jpeg"
                                    alt="Corporate employees boarding modern bus outside office campus"
                                    width={700}
                                    height={525}
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Technology-Enabled Booking & Digital Process */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                        <div className="lg:col-span-7">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                                Smart Platform
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Bus Booking for Corporate Requirements
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                Fiesta&apos;s corporate transportation model is different from a conventional online bus ticket marketplace. Instead of selling individual intercity bus tickets, Fiesta works with organizations to create transportation arrangements based on their operational requirements.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Companies can contact the Fiesta team with details such as location, company, workforce requirements, and transportation needs to discuss a suitable solution. The official shuttle service page provides a custom-quote process for organizations.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <Image
                                    src="/images/bus-service/bus-tracking-tech.jpg"
                                    alt="Corporate employee tracking bus arrival on smartphone app"
                                    width={500}
                                    height={375}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Online Bus Booking */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaMobileScreenButton />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Online Bus Booking
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                                For corporate employee transportation, Fiesta provides technology-enabled booking through its smart mobility ecosystem. Employees can use the mobility app to select routes, book rides, track shuttle arrivals in real time, and access ride details.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base">
                                This approach gives organizations a more structured way to manage employee journeys while giving passengers greater visibility over their scheduled ride.
                            </p>
                        </div>

                        {/* Bus Booking Online for Employees */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaMapLocationDot />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Bus Booking Online for Employees
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                                A digital booking process can make everyday employee transportation more convenient. Fiesta&apos;s smart mobility app enables employees to book their rides with a few taps and track shuttle arrivals in real time.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base">
                                The system is designed around corporate commute requirements rather than traditional consumer bus ticket booking. Route selection, ride information, live tracking, and available cancellation functionality can be managed through the technology platform.
                            </p>
                        </div>
                    </div>

                    {/* Bus Tickets and Booking Distinctions */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                    Bus Tickets and Bus Ticket Booking
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    If you are searching for bus tickets online, individual bus ticket booking, or intercity bus ticket reservations, it is important to understand the type of service being offered. Fiesta primarily provides corporate employee transportation and shuttle solutions, rather than operating as a public intercity ticket marketplace.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    For organizations, the relevant booking process is based on employee transport requirements, routes, schedules, and authorized passengers. This distinction helps customers choose the right transportation service without confusion.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#EC2028]" />
                                    Book Bus Tickets for Corporate Travel
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    Corporate mobility is often different from purchasing a single bus ticket for a personal journey. Organizations may require recurring routes, multiple pickup points, fixed time slots, employee access management, and real-time tracking.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Fiesta&apos;s corporate bus and shuttle services are built around these requirements. Companies can discuss their workforce size, office locations, shift timings, and preferred pickup arrangements with the Fiesta team to create a suitable transportation plan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Fleet & Operational Capabilities */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Fleet & Operations
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Operational Policies & Fleet Standards
                        </h2>
                    </div>

                    {/* Fleet Lineup Banner */}
                  {/*  <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-12">
                        <Image
                            src="/images/bus-service/bus-fleet-coaches.jpg"
                            alt="Fiesta corporate bus, minibus, and luxury coach fleet lineup"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                        />
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Volvo Bus and Premium Coach Options */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaBus />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Volvo Bus and Premium Coach Options</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fiesta&apos;s official fleet information lists buses, mini buses, luxury mini coaches, and luxury coaches. However, the current official website does not establish a specific Volvo bus offering. For accuracy, customers should confirm the exact vehicle make, model, seating capacity, and availability with Fiesta when requesting a quote.
                            </p>
                        </div>

                        {/* Multiple Payment Options */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaCreditCard />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Payment Options</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Payment arrangements for corporate transportation can differ from consumer bus ticket websites. Fiesta&apos;s published service information focuses on corporate transport management and custom requirements rather than listing consumer payment methods such as debit cards, net banking, or digital wallets. For pricing, billing, payment terms, and applicable commercial arrangements, businesses should contact Fiesta directly and confirm the terms for their transportation requirement.
                            </p>
                        </div>

                        {/* Preferred Boarding and Pickup */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaMapLocationDot />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Preferred Boarding and Pickup</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Convenient pickup locations can make a significant difference to an employee&apos;s daily journey. Fiesta&apos;s shuttle services use strategically selected pickup points and fixed time slots to create smoother connections between employees, transit hubs, and workplaces. The service can be customized around office locations, workforce distribution, and shift patterns, helping organizations establish practical routes for their employees.
                            </p>
                        </div>

                        {/* Female Passengers and Employee Safety */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaShieldHalved />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Female Passengers and Employee Safety</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Employee safety is a central part of corporate transportation. Fiesta states that its employee transport operations use GPS-enabled vehicles, real-time tracking, verified drivers, and 24/7 customer support to support secure employee commuting. Driver verification, professional training, emergency response systems, fleet maintenance, and operational monitoring are also highlighted in Fiesta&apos;s Chennai shuttle service information.
                            </p>
                        </div>

                        {/* Free Cancellation and Cancellation Policy */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaCalendarCheck />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Free Cancellation and Cancellation Policy</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Cancellation rules can vary according to the specific corporate transportation arrangement. Fiesta&apos;s smart mobility platform includes cancellation functionality, but the official service pages do not publish a universal consumer free cancellation policy or standardized cancellation charges for bus tickets. For this reason, customers should confirm the applicable cancellation policy, notice period, rescheduling conditions, and any charges before finalizing a transportation arrangement.
                            </p>
                        </div>

                        {/* Hassle-Free Bus Service */}
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
                            <div className="w-12 h-12 bg-red-100/60 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                <FaClock />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hassle-Free Bus Service</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A well-managed employee bus service can reduce the administrative burden associated with daily transportation. Fiesta handles route planning, pickup connectivity, scheduling, vehicle operations, and technology-enabled monitoring as part of its corporate mobility solutions. Organizations can also request customized routes and time slots based on their workforce requirements, making the service suitable for changing shifts and different office locations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Amenities, Drivers, Tracking & Scalability */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Service Experience
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comfort, Reliability & Scalable Capacity
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {/* Bus Amenities and Comfort */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaBus />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bus Amenities and Comfort</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Comfort matters when employees spend significant time travelling to and from work. Fiesta&apos;s shuttle service information highlights spacious seating, air conditioning, and clean, well-maintained vehicles.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Its wider fleet includes standard buses, luxury mini coaches, and luxury coaches, allowing businesses to discuss appropriate vehicle options according to passenger numbers and travel requirements.
                            </p>
                        </div>

                        {/* Reliable Drivers */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaUserTie />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Drivers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Professional drivers play an important role in corporate bus transportation. Fiesta states that its drivers undergo verification and professional training and are assigned routes with operational processes designed to improve familiarity and reliability.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The company also emphasizes regular fleet maintenance, GPS-enabled vehicles, emergency alerts, and operational monitoring as components of its employee transportation approach.
                            </p>
                        </div>

                        {/* Real-Time Tracking */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaRoute />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Tracking</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Real-time tracking provides employees and transport teams with greater visibility during a journey. Fiesta&apos;s corporate shuttle services use GPS tracking to monitor commute status, while its smart mobility app enables employees to track shuttle arrivals.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                This technology supports better communication between passengers, transport teams, and organizations throughout the trip.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Convenient Pickup and Dropping */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaCompass />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Pickup and Dropping</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Fiesta&apos;s gate-to-gate employee transport model is designed to connect office locations with convenient pickup zones and transit hubs. Routes and pickup points can be planned according to employee residential clusters, office locations, and working schedules.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                This helps reduce unnecessary walking and makes daily commuting more convenient for passengers.
                            </p>
                        </div>

                        {/* Bus Service for Different Passenger Volumes */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#EC2028] text-lg mb-4">
                                <FaUsers />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bus Service for Different Passenger Volumes</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Every organization has different transportation requirements. A smaller team may need a mini bus or tempo traveller, while a larger workforce may require standard buses or higher-capacity coaches.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fiesta&apos;s fleet includes mini buses, buses, luxury mini coaches, and luxury coaches, alongside other vehicle categories. The company can scale transportation according to organizational requirements and passenger volumes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Pan-India Coverage & Corporate Events */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50">
                            Geographic Reach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Bus Transportation Across India
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Fiesta provides employee transportation services across major Indian business hubs. Its published service pages identify locations including Chennai, Hyderabad, Bangalore, Mumbai, Pune, Delhi, and Gurgaon for corporate employee and shuttle transportation. The exact route, vehicle, pickup point, and service availability can depend on the organization&apos;s requirements and operating location.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Bus Service in Chennai */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FaCity className="text-[#EC2028]" />
                                Bus Service in Chennai
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Chennai is where Fiesta was established, and its corporate shuttle services cover important business and industrial areas including OMR, Guindy, Taramani, TIDEL Park, Ambattur, and Porur.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The Chennai operation supports customized routes, pickup connectivity, fixed time slots, real-time GPS tracking, and corporate workforce transportation.
                            </p>
                        </div>

                        {/* Bus Service in Delhi */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FaCity className="text-[#EC2028]" />
                                Bus Service in Delhi
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Fiesta also provides corporate employee transportation and shuttle solutions in Delhi as part of its wider India presence. The company&apos;s shuttle service information describes structured routes connecting corporate zones and transit hubs.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Organizations operating in Delhi can discuss their office locations, employee distribution, route requirements, and schedules with Fiesta to determine an appropriate transportation solution.
                            </p>
                        </div>

                        {/* Bus Service in Mumbai */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FaCity className="text-[#EC2028]" />
                                Bus Service in Mumbai
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                Fiesta provides employee transportation solutions in Mumbai as part of its pan-India corporate mobility network. Businesses can explore structured employee transport based on their workforce, office locations, and operational requirements.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For exact vehicle availability, pickup points, service timings, and pricing in Mumbai, organizations should contact Fiesta for a customized proposal.
                            </p>
                        </div>
                    </div>

                    {/* Bus Service for Events */}
                    <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-[#EC2028] uppercase border border-red-100 rounded-full bg-white">
                            Group Movements
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Bus Service for Events
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            Large corporate events may require coordinated transportation for employees, guests, delegates, or teams. Fiesta&apos;s broader transportation operation supports corporate events and large-group mobility requirements, with route planning and vehicle deployment based on the assignment.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            For event transportation, businesses should provide the event date, locations, expected passenger volume, pickup requirements, and schedule so the team can plan the appropriate service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 6: Advantages, Why Choose Fiesta & How to Plan */}
            <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">
                        {/* Advantages of Corporate Bus Transportation */}
                        <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                    <FaAward />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Advantages of Corporate Bus Transportation
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    Corporate bus transportation can offer many advantages when it is planned around workforce requirements. Shared transportation can consolidate employee journeys, simplify route management, and reduce the need for employees to arrange individual daily travel.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    For businesses, a managed service can also provide greater visibility through route planning, real-time tracking, professional drivers, and centralized transportation support. Fiesta combines these operational elements with technology-enabled employee mobility.
                                </p>
                            </div>
                        </div>

                        {/* Why Choose Fiesta for Bus Service? */}
                        <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#EC2028] text-xl mb-6">
                                    <FaShieldHalved />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Why Choose Fiesta for Bus Service?
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    Fiesta brings together experience, technology, fleet options, and corporate transportation expertise. The company has more than 28 years of experience, a team of 300+ employees, a pan-India presence, and more than 2,000 partner vehicles according to its official company information.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Its employee transport offering includes buses, mini buses, luxury coaches, shuttle services, real-time tracking, route planning, professional drivers, and 24/7 support. This combination allows organizations to build transportation programs around their specific workforce and operational needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How to Plan Your Corporate Bus Service & Contact */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    How to Plan Your Corporate Bus Service
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    Planning a corporate bus service starts with understanding your employee transportation requirements. Share your office or campus locations, employee count, shift timings, preferred pickup areas, expected passenger volume, and required vehicle type.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    Fiesta can then assess the requirement and discuss route planning, vehicle options, schedules, and service arrangements. This makes it easier for companies to create a complete transportation plan before the service begins.
                                </p>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Contact Fiesta for Bus Transportation</h4>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        To discuss corporate bus rental, employee shuttle services, or a customized bus transportation requirement, contact Fiesta Smart Mobility directly.
                                    </p>
                                    <BookNowButton className="px-8 py-3 text-sm">
                                        Discuss Your Bus Service
                                    </BookNowButton>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="p-8 rounded-3xl bg-red-50/60 border border-red-100 text-center w-full">
                                    <div className="w-16 h-16 bg-[#EC2028] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-md">
                                        <FaHeadset />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        24/7 centralized operational monitoring and responsive fleet support across India.
                                    </p>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Pan-India Corporate Mobility
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Closing CTA Banner - Plan a Hassle-Free Corporate Journey with Fiesta */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <Image
                        src="/images/bus-service/WhatsApp Image 2026-10-27 at 4.14.07 PM.jpeg"
                        alt="Plan a Hassle-Free Corporate Journey with Fiesta"
                        fill
                        className="object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-500/40 rounded-full bg-red-950/40 backdrop-blur-sm">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Plan a Hassle-Free Corporate Journey with Fiesta
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed font-normal">
                        From daily employee commuting to large-group corporate transportation, Fiesta provides structured mobility solutions supported by professional drivers, technology, route planning, and a diverse fleet.
                    </p>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                        Whether your organization needs a bus service, corporate bus transportation, employee shuttle, mini bus, or coach, speak with Fiesta Smart Mobility about your requirements and create a transportation plan designed around your people, routes, schedules, and business operations.
                    </p>
                    <BookNowButton className="px-10 py-4 text-base font-semibold shadow-2xl hover:scale-105 transition-transform">
                        Share Your Requirement
                    </BookNowButton>
                </div>
            </section>

            {/* Section 8: Frequently Asked Questions About Bus Service */}
            <FAQ
                items={busServiceFaqs}
                badge="Bus Service FAQs"
                title="Frequently Asked"
                darkTitle="Questions About Bus Service"
                description="Find answers to common questions about Fiesta's corporate bus transportation, customized routes, fleet options, and booking models."
            />
        </main>
    );
}
