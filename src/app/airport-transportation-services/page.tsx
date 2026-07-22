import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "@/src/components/sections/airport-transportation/Introduction";
import ServicesOffered from "@/src/components/sections/airport-transportation/ServicesOffered";
import FleetOptions from "@/src/components/sections/airport-transportation/FleetOptions";
import Coverage from "@/src/components/sections/airport-transportation/Coverage";
import ChauffeursSupport from "@/src/components/sections/airport-transportation/ChauffeursSupport";
import ComparisonTable from "@/src/components/sections/airport-transportation/ComparisonTable";
import ContactCTA from "@/src/components/sections/airport-transportation/ContactCTA";
import FAQ from "@/src/components/sections/airport-transportation/FAQ";

export const metadata = getMetadata("/airport-transportation-services");

export default function AirportTransportationServicesPage() {
    return (
        <main className="min-h-screen relative bg-white">
            <HeroForm
                title="Airport Transportation Services You Can Rely On, Every Time"
                subtitle="Professional chauffeurs, a diverse fleet, and transparent pricing for every airport pickup and drop booked in minutes, tracked in real time."
                imageSrc="/images/airport-transportation-services/airport-transportation-services-hero-img.png"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <ServicesOffered />
            <FleetOptions />
            <Coverage />
            <ChauffeursSupport />
            <ComparisonTable />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
