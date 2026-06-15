import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transport/kolkata/Introduction";
import ServiceModels from "../../components/sections/employee-transport/kolkata/ServiceModels";
import FleetOptions from "../../components/sections/employee-transport/kolkata/FleetOptions";
import SafetyStandards from "../../components/sections/employee-transport/kolkata/SafetyStandards";
import Technology from "../../components/sections/employee-transport/kolkata/Technology";
import WhyChooseFiesta from "../../components/sections/employee-transport/kolkata/WhyChooseFiesta";
import GetStarted from "../../components/sections/employee-transport/kolkata/GetStarted";
import FAQ from "../../components/sections/employee-transport/kolkata/FAQ";

export const metadata = getMetadata("/employee-transportation-services-in-kolkata");

export default function EmployeeTransportServicesKolkata() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Kolkata"
                subtitle=""
                imageSrc="/images/employee-transportation-services-in-kolkata/herok.png"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <ServiceModels />

            <FleetOptions />

            <SafetyStandards />

            <Technology />

            <WhyChooseFiesta />

            <GetStarted />

            <FAQ />
        </div>
    );
}
