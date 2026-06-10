import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transport/delhi/Introduction";
import ServicesCover from "../../components/sections/employee-transport/delhi/ServicesCover";
import SafetyStandards from "../../components/sections/employee-transport/delhi/SafetyStandards";
import Technology from "../../components/sections/employee-transport/delhi/Technology";
import WhyChooseFiesta from "../../components/sections/employee-transport/delhi/WhyChooseFiesta";
import GetStarted from "../../components/sections/employee-transport/delhi/GetStarted";
import FAQ from "../../components/sections/employee-transport/delhi/FAQ";

export const metadata = getMetadata("/employee-transport-services-in-delhi");

export default function EmployeeTransportServicesDelhi() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transport Services in Delhi"
                subtitle="Corporate Employee Transport Services in Delhi GPS-Tracked Fleets, Verified Drivers"
                imageSrc="/images/employee-transport-services-in-delhi/hero.jpg"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <ServicesCover />

            <SafetyStandards />

            <Technology />

            <WhyChooseFiesta />

            <GetStarted />

            <FAQ />

        </div>
    );
}
