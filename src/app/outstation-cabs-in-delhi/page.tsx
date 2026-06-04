import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import AboutOutstation from "../../components/sections/outstation/delhi/AboutOutstation";
import DelhiRoutes from "../../components/sections/outstation/delhi/DelhiRoutes";
import VehicleSelectionDelhi from "../../components/sections/outstation/delhi/VehicleSelectionDelhi";
import FareStructure from "../../components/sections/outstation/delhi/FareStructure";
import HowToBook from "../../components/sections/outstation/delhi/HowToBook";
import WhyChooseUsDelhi from "../../components/sections/outstation/delhi/WhyChooseUsDelhi";
import ComparisonDelhi from "../../components/sections/outstation/delhi/ComparisonDelhi";
import CTADelhi from "../../components/sections/outstation/delhi/CTADelhi";

export const metadata = getMetadata("/outstation-cabs-in-delhi");

const delhiOutstationFaqs = [
    {
        id: "1",
        question: "What are the most popular outstation cab routes from Delhi?",
        answer: "The most popular outstation routes from Delhi include Agra, Jaipur, Chandigarh, Shimla, Manali, Dehradun, Haridwar, and Amritsar. Delhi NCR's central location makes it a natural starting point for outstation tours across Rajasthan, Himachal Pradesh, Uttarakhand, and Punjab.",
    },
    {
        id: "2",
        question: "How far in advance can I book an outstation cab from Delhi?",
        answer: "Outstation cab bookings from Delhi can be made up to 7 days in advance or as close as 2 hours before the trip. Advance booking is recommended for hill station routes during peak season and long weekends. Many bookings include free cancellation options for added flexibility if travel plans change.",
    },
    {
        id: "3",
        question: "Does Fiesta charge extra for toll taxes on outstation trips from Delhi?",
        answer: "Toll taxes and state border taxes are not included in the base outstation fare and are billed on actual expenditure during the trip. These charges are communicated before booking confirmation so travelers have a clear picture of total trip cost before departure.",
    },
    {
        id: "4",
        question: "Can I book a one-way outstation cab from Delhi to Agra or Jaipur?",
        answer: "Yes. One-way outstation cab bookings are available for all routes from Delhi. One-way fares are fixed flat packages covering the distance to the drop location only. This is the most cost-effective option for travelers who do not need a return cab.",
    },
    {
        id: "5",
        question: "Does Fiesta provide airport pickup from Indira Gandhi International Airport for outstation travel?",
        answer: "Yes. Fiesta handles Delhi airport pickup from Indira Gandhi International Airport as the starting leg of outstation journeys. A single cab booking covers the airport pickup and the full intercity route to the outstation destination.",
    },
    {
        id: "6",
        question: "What vehicle types are available for outstation trips from Delhi?",
        answer: "Available vehicle options include hatchbacks for budget travel, sedans for comfortable outstation rides, SUVs for larger groups and hill station terrain, luxury cars for premium outstation tours, and Tempo Travellers for group travel of 8 to 12 passengers.",
    },
    {
        id: "7",
        question: "Is outstation cab service from Delhi available for corporate travel?",
        answer: "Yes. Fiesta handles outstation cab bookings for corporate travel and business trips from Delhi and Delhi NCR. GST-compliant invoices are issued for every trip. Corporate accounts on monthly contracts receive consolidated billing and volume pricing.",
    },
    {
        id: "8",
        question: "How is the fare for outstation cabs from Delhi calculated?",
        answer: "Outstation taxi rates from Delhi are structured as per-km rates for round trips and fixed-route flat fares for one-way drops. Toll taxes, state border taxes, and driver batta are additional and disclosed before booking. No extra charges are added at the drop location after the trip.",
    },
];

const DelhiOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Delhi"
                subtitle="Transparent pricing, experienced drivers, no hidden fees for New Delhi and Delhi NCR routes."
                imageSrc="/images/shuttle-service-in-delhi/unnamed-13.jpg"
            />
            <AboutOutstation />
            <DelhiRoutes />
            <VehicleSelectionDelhi />
            <FareStructure />
            <HowToBook />
            <WhyChooseUsDelhi />
            <ComparisonDelhi />
            <CTADelhi />
            <FAQ
                items={delhiOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Delhi, fare structures, pricing, and available vehicle options."
            />
        </main>
    );
};

export default DelhiOutstationPage;
