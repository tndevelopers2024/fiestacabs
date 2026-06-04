import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/wedding/chennai/Intro';
import WhyChoose from '../../components/sections/wedding/chennai/WhyChoose';
import LuxuryCars from '../../components/sections/wedding/chennai/LuxuryCars';
import BridalCar from '../../components/sections/wedding/chennai/BridalCar';
import ChauffeurDriven from '../../components/sections/wedding/chennai/ChauffeurDriven';
import FlexiblePackages from '../../components/sections/wedding/chennai/FlexiblePackages';
import DecorationSupport from '../../components/sections/wedding/chennai/DecorationSupport';
import DiscountCTA from '../../components/sections/wedding/chennai/DiscountCTA';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/wedding/chennai/FAQ';

export const metadata = getMetadata("/wedding-car-rental-in-chennai");

export default function WeddingCarRentalChennai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Wedding Car Rental in Chennai for Style, Class and Comfort"
                subtitle=""
                imageSrc="/images/wedding-car-rental-in-chennai/unnamed.jpg"
                ctaText="Book Now"
                imageClassName="brightness-[0.4]"
            />

            <Intro />
            <WhyChoose />
            <LuxuryCars />
            <BridalCar />
            <ChauffeurDriven />
            <FlexiblePackages />
            <DecorationSupport />
            <DiscountCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
