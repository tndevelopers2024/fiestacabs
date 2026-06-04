import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/wedding/hyderabad/Intro';
import LuxuryFleet from '../../components/sections/wedding/hyderabad/LuxuryFleet';
import BusLimo from '../../components/sections/wedding/hyderabad/BusLimo';
import ServiceStandards from '../../components/sections/wedding/hyderabad/ServiceStandards';
import WeddingPlanning from '../../components/sections/wedding/hyderabad/WeddingPlanning';
import BookingExperience from '../../components/sections/wedding/hyderabad/BookingExperience';
import WhyChoose from '../../components/sections/wedding/hyderabad/WhyChoose';
import HyderabadCTA from '../../components/sections/wedding/hyderabad/HyderabadCTA';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/wedding/hyderabad/FAQ';

export const metadata = getMetadata("/wedding-cars-in-hyderabad");

export default function WeddingCarRentalHyderabad() {
    return (
        <div className="w-full bg-white">
            <HeroForm
                title="Hyderabad Wedding Cars - Luxury Rentals by Fiesta"
                subtitle="Elegance, reliability, and refined presentation for your special day."
                imageSrc="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.40 PM.jpeg"
                ctaText="Book Now"
                imageClassName="brightness-[0.9]"
            />

            <Intro />
            <LuxuryFleet />
            <BusLimo />
            <ServiceStandards />
            <WeddingPlanning />
            <BookingExperience />
            <WhyChoose />
            <HyderabadCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
