import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import type { Metadata } from 'next';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/corporate/bangalore/Introduction";
import EfficientSolutions from "../../components/sections/corporate/bangalore/EfficientSolutions";
import CorporateEvents from "../../components/sections/corporate/bangalore/CorporateEvents";
import PremiumOptions from "../../components/sections/corporate/bangalore/PremiumOptions";
import LongTermSolutions from "../../components/sections/corporate/bangalore/LongTermSolutions";
import MeasurableBenefits from "../../components/sections/corporate/bangalore/MeasurableBenefits";
import SafetyProfessionalism from "../../components/sections/corporate/bangalore/SafetyProfessionalism";
import ContactCTA from "../../components/sections/corporate/bangalore/ContactCTA";
import FAQ from "../../components/sections/corporate/bangalore/FAQ";

export const metadata = getMetadata("/corporate-car-rental-in-bangalore");

export default function CorporateCarRentalBangalorePage() {
    return (
        <main className="min-h-screen">
            <HeroForm
                title="Corporate Car Rental in Bangalore: Business Essentials"
                subtitle=""
                imageSrc="/images/corporate-car-rental-in-bangalore/unnamed-8.jpg"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <EfficientSolutions />
            <CorporateEvents />
            <PremiumOptions />
            <LongTermSolutions />
            <MeasurableBenefits />
            <SafetyProfessionalism />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
