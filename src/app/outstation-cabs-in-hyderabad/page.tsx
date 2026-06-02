import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import AboutOutstation from "../../components/sections/home/outstation-cabs-in-hyderabad/AboutOutstation";
import HyderabadRoutes from "../../components/sections/home/outstation-cabs-in-hyderabad/HyderabadRoutes";
import VehicleSelectionHyderabad from "../../components/sections/home/outstation-cabs-in-hyderabad/VehicleSelectionHyderabad";
import FareStructure from "../../components/sections/home/outstation-cabs-in-hyderabad/FareStructure";
import HowToBook from "../../components/sections/home/outstation-cabs-in-hyderabad/HowToBook";
import AirportTransfers from "../../components/sections/home/outstation-cabs-in-hyderabad/AirportTransfers";
import WhyChooseUsHyderabad from "../../components/sections/home/outstation-cabs-in-hyderabad/WhyChooseUsHyderabad";
import ComparisonHyderabad from "../../components/sections/home/outstation-cabs-in-hyderabad/ComparisonHyderabad";
import CTAHyderabad from "../../components/sections/home/outstation-cabs-in-hyderabad/CTAHyderabad";

export const metadata = getMetadata("/outstation-cabs-in-hyderabad");

const hyderabadOutstationFaqs = [
    {
        id: "1",
        question: "What are the most popular outstation cab routes from Hyderabad?",
        answer: "The most popular outstation cab routes from Hyderabad include Tirupati, Vijayawada, Warangal, Srisailam, Bangalore, and Aurangabad. Hyderabad offers strong road connectivity across Telangana, Andhra Pradesh, Karnataka, and Maharashtra, making outstation cab services a practical option for both short and long-distance intercity travel.",
    },
    {
        id: "2",
        question: "Does Fiesta charge surge pricing on outstation cabs in Hyderabad?",
        answer: "No. Fiesta does not apply surge pricing on any outstation cab booking from Hyderabad or Secunderabad. The fare quoted at the time of booking is the fare billed at trip completion, regardless of demand, time of day, or traffic conditions.",
    },
    {
        id: "3",
        question: "Can I book a one-way outstation cab from Hyderabad to Tirupati or Vijayawada?",
        answer: "Yes. One-way outstation cab bookings are available for all routes from Hyderabad. One-way fares are fixed flat packages covering the distance to the destination only. This is a cost-effective option for passengers who do not need a return cab.",
    },
    {
        id: "4",
        question: "Are outstation cabs in Hyderabad suitable for family trips and business trips?",
        answer: "Yes. Fiesta offers vehicle options across hatchbacks, sedans, SUVs, and Tempo Travellers to accommodate family trips of different sizes and business trips requiring professional, punctual service. All vehicles are well-maintained and air-conditioned.",
    },
    {
        id: "5",
        question: "Does Fiesta provide airport transfers from Rajiv Gandhi International Airport for outstation travel?",
        answer: "Yes. Fiesta handles Rajiv Gandhi International Airport pickups as the starting leg of outstation journeys from Hyderabad. A single booking covers the airport transfer and the full intercity route to the destination.",
    },
    {
        id: "6",
        question: "What are the driver allowance charges for outstation cabs from Hyderabad?",
        answer: "Driver allowances for outstation rides from Hyderabad range from Rs. 300 to Rs. 400 per day. Night driving fees apply for trips between 10:00 PM and 6:00 AM. State entry permits are billed on actual usage. All charges are disclosed before booking confirmation.",
    },
    {
        id: "7",
        question: "How reliable are Fiesta's outstation cab services in Hyderabad?",
        answer: "Fiesta has been operating cab services for 28 years with a 4.8 rating across 729 reviews. Reliability is built on on-time pickup, confirmed vehicle type dispatch, and transparent billing. GPS tracking is active on all outstation journeys for passenger safety and accountability.",
    },
    {
        id: "8",
        question: "What payment options are available for outstation cab bookings in Hyderabad?",
        answer: "Payment for outstation cab bookings from Hyderabad can be made by cash, UPI, or corporate account transfer. A GST invoice is issued on completion of every outstation trip. Corporate customers on monthly accounts receive consolidated invoices.",
    },
];

const HyderabadOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero
                title="Outstation Cabs in Hyderabad"
                subtitle="Hassle-free intercity travel from Hyderabad to Tirupati, Vijayawada, Warangal, and beyond."
            />
            <AboutOutstation />
            <HyderabadRoutes />
            <VehicleSelectionHyderabad />
            <FareStructure />
            <HowToBook />
            <AirportTransfers />
            <WhyChooseUsHyderabad />
            <ComparisonHyderabad />
            <CTAHyderabad />
            <FAQ
                items={hyderabadOutstationFaqs}
                badge="Knowledge Base"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about booking outstation cabs from Hyderabad, fare structures, pricing, and our premium cab fleet."
            />
        </main>
    );
};

export default HyderabadOutstationPage;
