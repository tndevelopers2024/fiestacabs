import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import AboutOutstation from "../../components/sections/outstation/pune/AboutOutstation";
import ChoosingService from "../../components/sections/outstation/pune/ChoosingService";
import PuneRoutes from "../../components/sections/outstation/pune/PuneRoutes";
import VehicleSelectionPune from "../../components/sections/outstation/pune/VehicleSelectionPune";
import FareStructure from "../../components/sections/outstation/pune/FareStructure";
import HowToBook from "../../components/sections/outstation/pune/HowToBook";
import WhyChooseUsPune from "../../components/sections/outstation/pune/WhyChooseUsPune";
import ComparisonPune from "../../components/sections/outstation/pune/ComparisonPune";
import CTAPune from "../../components/sections/outstation/pune/CTAPune";

export const metadata = getMetadata("/outstation-cabs-in-pune");

const puneOutstationFaqs = [
    {
        id: "1",
        question: "What is the fare for outstation cabs from Pune to Mumbai or Shirdi?",
        answer: "Fares for outstation cabs from Pune vary by vehicle type, distance, and trip type. One-way and round trip packages are priced differently. Tolls, driver batta, and state border taxes are additional and disclosed before booking confirmation. Contact Fiesta via phone, email, or the website for a specific fare quote on your route.",
    },
    {
        id: "2",
        question: "Does Fiesta charge surge pricing on outstation cabs from Pune?",
        answer: "No. Fiesta does not apply surge pricing on any outstation cab booking from Pune. The fare quoted at the time of booking is the fare billed on completion, regardless of demand, traffic conditions, or time of day.",
    },
    {
        id: "3",
        question: "Can I book a one-way outstation cab from Pune to Mahabaleshwar or Goa?",
        answer: "Yes. One-way outstation cab bookings are available for all cabs from Pune. One-way fares are flat inclusive packages. You pay only for the distance traveled to the desired destination in one direction, making it significantly more cost-effective than outstation round trip billing for travelers who do not need a return cab.",
    },
    {
        id: "4",
        question: "How far in advance should I book outstation cabs from Pune?",
        answer: "Pre-booking 24 to 48 hours in advance is recommended for most outstation rides. For travel during long weekends, peak season visits to Mahabaleshwar, or major pilgrimage dates for Shirdi, booking up to a week in advance secures better vehicle availability and guarantees your preferred cab option.",
    },
    {
        id: "5",
        question: "Does Fiesta provide GST invoices for outstation trips from Pune?",
        answer: "Yes. Every completed outstation trip from Pune produces a GST-compliant invoice. Corporate customers receive consolidated monthly invoices for all outstation cab bookings on account.",
    },
    {
        id: "6",
        question: "What vehicles are available for outstation travel from Pune?",
        answer: "Available vehicle options include AC hatchbacks for budget trips, comfortable sedans for small families or corporate travel, SUVs such as the Toyota Innova Crysta for larger groups, luxury cars such as the Toyota Camry for executive hire, and Tempo Travellers for groups of 8 to 12 passengers. All vehicles are air-conditioned and well-maintained.",
    },
    {
        id: "7",
        question: "Is GPS tracking available on outstation cabs from Pune?",
        answer: "Yes. Ride tracking systems are active on all outstation journeys from Pune. Individual travelers receive a tracking link with the booking confirmation. Corporate accounts have access to a fleet tracking dashboard. Emergency SOS features are available for passenger safety.",
    },
    {
        id: "8",
        question: "Can Fiesta pick me up from Pune International Airport for an outstation trip?",
        answer: "Yes. Fiesta handles Pune airport pickups as the starting leg of any outstation journey. A single outstation cab booking covers the airport pickup and the full intercity route to the destination — no separate cab arrangement needed for the city leg.",
    },
];

const PuneOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Pune"
                subtitle="Reliable intercity rides from Pune to Mumbai, Mahabaleshwar, Shirdi, Goa, and beyond."
                imageSrc="/images/outstation-cabs-in-pune/smiling-businessman-talking-phone-with-client-while-sitting-car-backseats.avif"
            />
            <AboutOutstation />
            <ChoosingService />
            <PuneRoutes />
            <VehicleSelectionPune />
            <FareStructure />
            <HowToBook />
            <WhyChooseUsPune />
            <ComparisonPune />
            <CTAPune />
            <FAQ
                items={puneOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Pune, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
};

export default PuneOutstationPage;
