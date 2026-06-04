import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import AboutOutstation from "../../components/sections/outstation/mumbai/AboutOutstation";
import TravelerNeeds from "../../components/sections/outstation/mumbai/TravelerNeeds";
import MumbaiRoutes from "../../components/sections/outstation/mumbai/MumbaiRoutes";
import FareCalculation from "../../components/sections/outstation/mumbai/FareCalculation";
import VehicleSelectionMumbai from "../../components/sections/outstation/mumbai/VehicleSelectionMumbai";
import HowToBook from "../../components/sections/outstation/mumbai/HowToBook";
import LocalTaxiComparison from "../../components/sections/outstation/mumbai/LocalTaxiComparison";
import StartingTrip from "../../components/sections/outstation/mumbai/StartingTrip";
import WhyChooseUsMumbai from "../../components/sections/outstation/mumbai/WhyChooseUsMumbai";
import ComparisonMumbai from "../../components/sections/outstation/mumbai/ComparisonMumbai";
import HourlyRentals from "../../components/sections/outstation/mumbai/HourlyRentals";
import CTAMumbai from "../../components/sections/outstation/mumbai/CTAMumbai";

export const metadata = getMetadata("/outstation-cabs-in-mumbai");

const mumbaiOutstationFaqs = [
    {
        id: "1",
        question: "What is the fare for an outstation cab from Mumbai to Pune?",
        answer: "One-way fares from Mumbai to Pune start at approximately vary by vehicle type and distance. Tolls, state taxes, and driver batta are additional and disclosed before booking confirmation. Contact Fiesta for a specific quote on your route.",
    },
    {
        id: "2",
        question: "Does Fiesta charge surge pricing on outstation cabs from Mumbai?",
        answer: "No. Fiesta does not apply surge pricing on any outstation cab booking. The fare quoted at the time of booking is the fare billed on trip completion.",
    },
    {
        id: "3",
        question: "Can I book a one-way cab from Mumbai to Nashik or Shirdi?",
        answer: "Yes. One-way cab bookings are available for all outstation routes from Mumbai. One-way fares are priced as flat inclusive packages. You pay for the trip you take, not for the driver's return journey.",
    },
    {
        id: "4",
        question: "Does Fiesta provide GST invoices for outstation trips from Mumbai?",
        answer: "Yes. Every completed outstation trip produces a GST-compliant invoice. Corporate customers on account contracts receive consolidated monthly invoices for all trips.",
    },
    {
        id: "5",
        question: "What vehicles are available for outstation cab services from Mumbai?",
        answer: "Available vehicle types include sedans, SUVs such as the Toyota Innova Crysta, premium sedans such as the Toyota Camry, and Tempo Travellers for larger groups. Luxury cars are available on request. The vehicle type confirmed at booking is the vehicle dispatched.",
    },
    {
        id: "6",
        question: "Is real-time GPS tracking available on outstation cabs?",
        answer: "Yes. GPS tracking is active on all outstation trips from the moment the journey begins. Individual travelers receive a tracking link with their booking confirmation. Corporate accounts have access to a fleet tracking dashboard.",
    },
    {
        id: "7",
        question: "How does Fiesta verify its drivers?",
        answer: "All Fiesta drivers complete a background verification before joining the network. Drivers assigned to outstation trips are trained for long-distance travel and are expected to maintain professional, courteous conduct throughout the journey.",
    },
    {
        id: "8",
        question: "What is driver batta and is it included in the quoted fare?",
        answer: "Driver batta is a mandatory daily allowance covering the driver's meals and lodging on outstation trips. A fixed daily allowance applies for daytime journeys. Night allowances apply for trips extending between 10:00 PM and 6:00 AM. Batta is communicated clearly before booking confirmation and is not added silently at billing.",
    },
    {
        id: "9",
        question: "Can Fiesta pick me up from Mumbai Airport for an outstation trip?",
        answer: "Yes. Fiesta handles Mumbai airport transfers as the starting leg of an outstation journey. A single booking covers the airport pickup and the full outstation route, without requiring a separate cab arrangement for the city leg.",
    },
    {
        id: "10",
        question: "What payment options are available for outstation cab bookings from Mumbai?",
        answer: "Fiesta accepts cash, UPI, bank transfer, and corporate account billing. Individual travelers can settle by cash or digital payment on trip completion. Corporate customers on monthly accounts receive consolidated invoices.",
    },
];

const MumbaiOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Mumbai"
                subtitle="Reliable intercity rides from Mumbai to Pune, Lonavala, Nashik, Shirdi, and beyond."
                imageSrc="/images/outstation-cabs-in-mumbai/indian-cheerful-car-salesman-showing-new-keys-showroom.avif"
            />
            <AboutOutstation />
            <TravelerNeeds />
            <MumbaiRoutes />
            <FareCalculation />
            <VehicleSelectionMumbai />
            <HowToBook />
            <LocalTaxiComparison />
            <StartingTrip />
            <WhyChooseUsMumbai />
            <ComparisonMumbai />
            <HourlyRentals />
            <CTAMumbai />
            <FAQ
                items={mumbaiOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Mumbai, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
};

export default MumbaiOutstationPage;
