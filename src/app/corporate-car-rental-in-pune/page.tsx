import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/corporate/pune/Introduction";
import ServicesOptions from "../../components/sections/corporate/pune/ServicesOptions";
import FleetOptions from "../../components/sections/corporate/pune/FleetOptions";
import ChauffeursSafety from "../../components/sections/corporate/pune/ChauffeursSafety";
import HowToBookBilling from "../../components/sections/corporate/pune/HowToBookBilling";
import WhyFiesta from "../../components/sections/corporate/pune/WhyFiesta";
import ContactCTA from "../../components/sections/corporate/pune/ContactCTA";
import FAQ from "../../components/sections/corporate/pune/FAQ";

export const metadata = getMetadata("/corporate-car-rental-in-pune");

export default function CorporateCarRentalPunePage() {
    return (
        <main className="min-h-screen relative">
            <HeroForm
                title="Corporate Car Rental in Pune: Premium Fleet"
                subtitle="Verified Chauffeurs, Zero Hidden Costs"
                imageSrc="/images/corporate-car-rental-in-pune/corporate-car-rental-in-pune.png"
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
