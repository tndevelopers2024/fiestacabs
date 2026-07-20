import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/corporate/hyderabad/Introduction";
import ServicesOptions from "../../components/sections/corporate/hyderabad/ServicesOptions";
import FleetOptions from "../../components/sections/corporate/hyderabad/FleetOptions";
import ChauffeursSafety from "../../components/sections/corporate/hyderabad/ChauffeursSafety";
import HowToBookBilling from "../../components/sections/corporate/hyderabad/HowToBookBilling";
import WhyFiesta from "../../components/sections/corporate/hyderabad/WhyFiesta";
import ContactCTA from "../../components/sections/corporate/hyderabad/ContactCTA";
import FAQ from "../../components/sections/corporate/hyderabad/FAQ";

export const metadata = getMetadata("/corporate-car-rental-in-hyderabad");

export default function CorporateCarRentalHyderabadPage() {
    return (
        <main className="min-h-screen relative">
            <HeroForm
                title="Corporate Car Rental in Hyderabad"
                subtitle="Transparent Pricing and Corporate Billing"
                imageSrc="/images/corporate-car-rental-in-hyderabad/corporate-car-rental-in-hyderabad.png"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <ServicesOptions />
            <FleetOptions />
            <ChauffeursSafety />
            <HowToBookBilling />
            <WhyFiesta />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
