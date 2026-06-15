import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transport/gurgaon/Introduction";
import SolutionsProvides from "../../components/sections/employee-transport/gurgaon/SolutionsProvides";
import FleetOptions from "../../components/sections/employee-transport/gurgaon/FleetOptions";
import Technology from "../../components/sections/employee-transport/gurgaon/Technology";
import SafetyStandards from "../../components/sections/employee-transport/gurgaon/SafetyStandards";
import Benefits from "../../components/sections/employee-transport/gurgaon/Benefits";
import WhyChooseFiesta from "../../components/sections/employee-transport/gurgaon/WhyChooseFiesta";
import GetStarted from "../../components/sections/employee-transport/gurgaon/GetStarted";
import FAQ from "../../components/sections/employee-transport/gurgaon/FAQ";

export const metadata = getMetadata("/employee-transportation-services-in-gurgaon");

export default function EmployeeTransportServicesGurgaon() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Gurgaon"
                subtitle=""
                imageSrc="/images/employee-transportation-services-in-gurgaon/herog.png"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <SolutionsProvides />

            <FleetOptions />

            <Technology />

            <SafetyStandards />

            <Benefits />

            <WhyChooseFiesta />

            <GetStarted />

            <FAQ />

        </div>
    );
}
