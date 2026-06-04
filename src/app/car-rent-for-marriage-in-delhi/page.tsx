import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/wedding/delhi/Introduction";
import WhyChoose from "../../components/sections/wedding/delhi/WhyChoose";
import WhatWeOffer from "../../components/sections/wedding/delhi/WhatWeOffer";
import Benefits from "../../components/sections/wedding/delhi/Benefits";
import HowItWorks from "../../components/sections/wedding/delhi/HowItWorks";
import WhyWeStandOut from "../../components/sections/wedding/delhi/WhyWeStandOut";
import TipsForBooking from "../../components/sections/wedding/delhi/TipsForBooking";
import SafetyComfort from "../../components/sections/wedding/delhi/SafetyComfort";
import MakeYourDaySpecial from "../../components/sections/wedding/delhi/MakeYourDaySpecial";
import ContactUsCTA from "../../components/sections/wedding/delhi/ContactUsCTA";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/sections/wedding/delhi/FAQ";

export const metadata = getMetadata("/car-rent-for-marriage-in-delhi");

export default function CarRentForMarriageInDelhi() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Car Rent for Marriage in Delhi"
                subtitle="Celebrate your big day with Fiesta’s chauffeur-driven car rentals in Pune, offering elegant wedding entrances, smooth guest transfers, and complete peace of mind."
                imageSrc="/images/car-rent-for-marriage-in-delhi/kdsjf.jpg"
                ctaText="Book Now"
                imageClassName="brightness-[0.4]"
            />

            <Introduction />
            <WhyChoose />
            <WhatWeOffer />
            <Benefits />
            <HowItWorks />
            <WhyWeStandOut />
            <TipsForBooking />
            <SafetyComfort />
            <MakeYourDaySpecial />
            <ContactUsCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
