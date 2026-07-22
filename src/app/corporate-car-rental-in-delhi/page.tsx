import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/corporate/delhi/Introduction";
import ServicesOptions from "../../components/sections/corporate/delhi/ServicesOptions";
import FleetOptions from "../../components/sections/corporate/delhi/FleetOptions";
import ChauffeursSafety from "../../components/sections/corporate/delhi/ChauffeursSafety";
import HowToBookBilling from "../../components/sections/corporate/delhi/HowToBookBilling";
import CorporateLandscape from "../../components/sections/corporate/delhi/CorporateLandscape";
import WhyFiesta from "../../components/sections/corporate/delhi/WhyFiesta";
import ContactCTA from "../../components/sections/corporate/delhi/ContactCTA";
import FAQ from "../../components/sections/corporate/delhi/FAQ";

export const metadata = getMetadata("/corporate-car-rental-in-delhi");

export default function CorporateCarRentalDelhiPage() {
    return (
        <main className="min-h-screen relative">
            <HeroForm
                title="Corporate Car Rental in Delhi"
                // subtitle="Responsive, Safe, and Professional Travel Solutions across Delhi NCR"
                subtitle="Built for the Way You Actually Travel"
                imageSrc="/images/corporate-car-rental-in-delhi/corporate-car-rental-in-delhi.png"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <ServicesOptions />
            <FleetOptions />
            <ChauffeursSafety />
            <HowToBookBilling />
            <CorporateLandscape />
            <WhyFiesta />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
