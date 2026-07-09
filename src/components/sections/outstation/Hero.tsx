import HeroForm from "../../common/HeroForm";

interface HeroProps {
    title?: string;
    subtitle?: string;
    imageSrc?: string;
}

const Hero = ({ title, subtitle, imageSrc }: HeroProps) => {
    return (
        <HeroForm
            title={title || "Outstation Cab & Intercity Rides Across India"}
            subtitle={subtitle || "Outstation Cab from Chennai / Delhi / Bangalore…"}
            imageSrc={imageSrc || "/images/services-offered/premium-car-rentals/outstation-rides/outside-ride-hero-banner-img.png"}
            ctaText="Book Your Outstation Ride Now"
            ctaLink="#booking-form"
        />
    );
};

export default Hero;
