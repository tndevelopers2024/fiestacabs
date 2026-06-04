import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import AboutOutstation from "../../components/sections/outstation/bangalore/AboutOutstation";
import ChoosingService from "../../components/sections/outstation/bangalore/ChoosingService";
import BangaloreRoutes from "../../components/sections/outstation/bangalore/BangaloreRoutes";
import VehicleSelectionBangalore from "../../components/sections/outstation/bangalore/VehicleSelectionBangalore";
import FareStructure from "../../components/sections/outstation/bangalore/FareStructure";
import HowToBook from "../../components/sections/outstation/bangalore/HowToBook";
import WhyChooseUsBangalore from "../../components/sections/outstation/bangalore/WhyChooseUsBangalore";
import ComparisonBangalore from "../../components/sections/outstation/bangalore/ComparisonBangalore";
import CTABangalore from "../../components/sections/outstation/bangalore/CTABangalore";

export const metadata = getMetadata("/outstation-cabs-in-bangalore");

const bangaloreOutstationFaqs = [
    {
        id: "1",
        question: "What is the fare for outstation cabs from Bangalore to Mysore?",
        answer: "One-way fares for outstation cabs from Bangalore to Mysore vary by vehicle type. Mysore is 143 km from Bangalore and takes about 3 hours 30 minutes by road. Tolls and driver batta are additional and disclosed before booking.",
    },
    {
        id: "2",
        question: "Are check post charges included in the outstation cab fare from Bangalore?",
        answer: "No. Check post charges and state permit taxes are billed on actual expenditure at the border and are not included in the base fare. These apply on cross-state routes such as Bangalore to Tirupati (Andhra Pradesh), Ooty (Tamil Nadu), and Wayanad (Kerala). Fiesta communicates expected check post costs before booking confirmation.",
    },
    {
        id: "3",
        question: "Can I book a one-way trip from Bangalore to Coorg or Ooty?",
        answer: "Yes. One-way trip bookings are available for all outstation routes from Bangalore. One-way fares are fixed flat packages covering the distance to the destination only. This is significantly cheaper than round-trip billing for travelers who do not need a return cab.",
    },
    {
        id: "4",
        question: "How far in advance should I book outstation cabs from Bangalore for a weekend trip?",
        answer: "Booking outstation cabs at least 7 days in advance is recommended for weekend travel and peak season trips to popular destinations like Coorg, Ooty, and Nandi Hills. Advance booking secures preferred vehicle types and avoids weekend demand increases from other taxi services in Bangalore.",
    },
    {
        id: "5",
        question: "Does Fiesta provide GST invoices for outstation cab bookings from Bangalore?",
        answer: "Yes. Every outstation cab booking produces a GST-compliant invoice on trip completion. Corporate customers receive consolidated monthly invoices for all outstation journeys booked on account.",
    },
    {
        id: "6",
        question: "What vehicle types are available for outstation travel from Bangalore?",
        answer: "Available options for outstation travel include AC hatchbacks for budget road trips, sedans for a comfortable ride, SUVs such as the Toyota Innova Crysta for families or larger groups, premium sedans for executive travel, and Tempo Travellers for groups of up to 12 passengers.",
    },
    {
        id: "7",
        question: "Can Fiesta pick me up from Bangalore Airport for an outstation journey?",
        answer: "Yes. Fiesta handles Bangalore airport pickups as the starting leg of an outstation journey. A single outstation cab booking covers the airport drop and the full route to your destination without a separate city cab arrangement.",
    },
    {
        id: "8",
        question: "What payment options are available for outstation cab bookings in Bangalore?",
        answer: "Payment for outstation cab bookings can be made by cash, UPI, or corporate account transfer. Individual travelers settle at trip completion. Corporate customers on monthly accounts receive consolidated invoices. A GST invoice is issued for every completed outstation journey.",
    },
];

const BangaloreOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Bangalore"
                subtitle="Safe and timely rides from Bangalore to Mysore, Coorg, Ooty, Tirupati, and beyond."
                imageSrc="/images/outstation-cabs-in-bangalore/progressive-businessman-with-ev-car-public-parking-car-charging-station.avif"
            />
            <AboutOutstation />
            <ChoosingService />
            <BangaloreRoutes />
            <VehicleSelectionBangalore />
            <FareStructure />
            <HowToBook />
            <WhyChooseUsBangalore />
            <ComparisonBangalore />
            <CTABangalore />
            <FAQ
                items={bangaloreOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Bangalore, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
};

export default BangaloreOutstationPage;
