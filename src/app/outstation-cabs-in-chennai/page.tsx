import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import VehicleSelection from "../../components/sections/outstation/VehicleSelection";
import WhyChooseUs from "../../components/sections/outstation/WhyChooseUs";
import PopularRoutes from "../../components/sections/outstation/PopularRoutes";
import InteriorGallery from "../../components/sections/outstation/InteriorGallery";
import Cities from "../../components/sections/outstation/Cities";
import LuxuryBrands from "../../components/sections/outstation/LuxuryBrands";
import GroupTravel from "../../components/sections/outstation/GroupTravel";
import SafetyComfort from "../../components/sections/outstation/SafetyComfort";
import Offers from "../../components/sections/outstation/Offers";
import CTA from "../../components/sections/outstation/CTA";
import AboutOutstation from "../../components/sections/outstation/chennai/AboutOutstation";
import HowToBook from "../../components/sections/outstation/chennai/HowToBook";
import ChennaiRoutes from "../../components/sections/outstation/chennai/ChennaiRoutes";
import VehicleSelectionChennai from "../../components/sections/outstation/chennai/VehicleSelectionChennai";
import WhyChooseUsChennai from "../../components/sections/outstation/chennai/WhyChooseUsChennai";
import ComparisonChennai from "../../components/sections/outstation/chennai/ComparisonChennai";
import CTAChennai from "../../components/sections/outstation/chennai/CTAChennai";

export const metadata = getMetadata("/outstation-cabs-in-chennai");

const chennaiOutstationFaqs = [
    {
        id: "1",
        question: "What is the fare for outstation cabs from Chennai to Pondicherry?",
        answer: "Fares vary by vehicle type and route. One-way drop fares and round-trip packages are priced differently. Fares exclude tolls, state entry permits, and driver batta, all of which are communicated before booking confirmation. Contact Fiesta via phone, email, or the website to get a quote for your specific outstation trip.",
    },
    {
        id: "2",
        question: "Does Fiesta charge surge pricing on outstation trips from Chennai?",
        answer: "No. Fiesta does not apply surge pricing on any outstation cab booking from Chennai. The fare quoted at the time of booking is the fare billed at the end of the trip, regardless of time of day, traffic in the city, or demand.",
    },
    {
        id: "3",
        question: "What are the ways to book an outstation cab from Chennai?",
        answer: "There are multiple ways to book outstation cabs from Chennai: via the Fiesta website, by phone, or by email. Customers can pre-book in advance to ensure on-time pickup at their doorstep. No app download is required, though users who prefer app-based booking can also access fare estimates and tracking digitally.",
    },
    {
        id: "4",
        question: "Does Fiesta provide GST invoices for outstation trips?",
        answer: "Yes. Every completed outstation trip produces a GST-compliant invoice. Corporate customers on account contracts receive consolidated monthly invoices for all trips, making it easy to plan and manage travel expenditure.",
    },
    {
        id: "5",
        question: "How are Fiesta drivers verified for outstation trips?",
        answer: "All Fiesta drivers complete a background check before joining the network. Drivers are trained for long-distance outstation journeys and expected to maintain professional, friendly, punctual, and courteous conduct. Driver quality is one of the most important factors in delivering a safe, pleasant travel experience over a multi-hour outstation trip.",
    },
    {
        id: "6",
        question: "What vehicles are available for outstation cab services from Chennai?",
        answer: "Available vehicle types include sedans, SUVs such as the Toyota Innova Crysta, premium sedans such as the Toyota Camry, and Tempo Travellers for groups. The vehicle type confirmed at booking is the vehicle dispatched — there are no last-minute substitutions.",
    },
    {
        id: "7",
        question: "Is real-time tracking available for outstation cabs from Chennai?",
        answer: "Yes. GPS tracking is active on all outstation trips. Individual travelers receive a tracking link with the booking confirmation. Corporate users and account customers have access to a fleet dashboard for full visibility during the journey.",
    },
    {
        id: "8",
        question: "What payment options are available for outstation cab bookings?",
        answer: "Fiesta accepts payment via bank transfer, UPI, and corporate account billing. Individual travelers can settle by cash or digital payment on trip completion. Multiple payment channels ensure smooth settlement regardless of how the journey is being claimed or reimbursed.",
    }
];

const ChennaiOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Chennai"
                subtitle="Reliable intercity rides from Chennai to Pondicherry, Bangalore, and beyond."
                imageSrc="/images/outstation-cabs-in-chennai/two-male-friends-drinking-beer-summer-terrace-pub.avif"
            />
            <AboutOutstation />
            {/* <Cities /> */}
            {/* <InteriorGallery /> */}
            <HowToBook />
            <ChennaiRoutes />
            <VehicleSelectionChennai />
            <WhyChooseUsChennai />
            <ComparisonChennai />
            <CTAChennai />
            {/* <LuxuryBrands /> */}
            {/* <GroupTravel /> */}
            {/* <Offers /> */}
            <FAQ
                items={chennaiOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Chennai, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
};

export default ChennaiOutstationPage;
