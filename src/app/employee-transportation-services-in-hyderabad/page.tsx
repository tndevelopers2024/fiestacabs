import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transport/hyderabad/Introduction";
import WhyChooseFiesta from "../../components/sections/employee-transport/hyderabad/WhyChooseFiesta";
import Benefits from "../../components/sections/employee-transport/hyderabad/Benefits";
import TrustedBy from "../../components/sections/employee-transport/hyderabad/TrustedBy";
import SeamlessPartner from "../../components/sections/employee-transport/hyderabad/SeamlessPartner";
import WhyReliable from "../../components/sections/employee-transport/hyderabad/WhyReliable";
import Conclusion from "../../components/sections/employee-transport/hyderabad/Conclusion";
import GetStarted from "../../components/sections/employee-transport/hyderabad/GetStarted";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/sections/employee-transport/hyderabad/FAQ";

export const metadata = getMetadata("/employee-transportation-services-in-hyderabad");

export default function EmployeeTransportServices() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transport Services in Hyderabad"
                subtitle="BEnsure reliable, safe and punctual travel for your workforce with Fiesta's Employee Transportation Services in Hyderabad—making daily commutes efficient, comfortable and stress-free."
                imageSrc="/images/employee-transportation-services-in-hyderabad/unnamed-9-e1763104171192.jpg"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <WhyChooseFiesta />

            <Benefits />

            <TrustedBy />

            <SeamlessPartner />

            <WhyReliable />

            <Conclusion />

            <GetStarted />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
