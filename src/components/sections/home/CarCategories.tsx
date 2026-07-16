"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface CarCategory {
    id: string;
    name: string;
    icon: string;
    image: string;
    description: string;
    scale?: string;
}

const CarCategories = () => {
    const categories: CarCategory[] = [
        {
            id: "ev",
            name: "EV",
            icon: "/images/home/car-categories/ev.png",
            image: "/images/home/car-categories/ev.png",
            description:
                "Fiesta's electric vehicle services represent our commitment to sustainable transportation. Our EV fleet offers zero-emission solutions for environmentally conscious businesses. Experience quiet, smooth rides while reducing your carbon footprint. Perfect for corporate transport with charging infrastructure support and cost-effective operations.",
        },
        {
            id: "standard",
            name: "Standard",
            icon: "/images/home/car-categories/standard.png",
            image: "/images/home/car-categories/standard.png",
            description:
                "Fiesta's standard car services deliver reliable and cost-effective transportation solutions without compromising on quality. Ideal for daily commuting and well-suited for employee transport services, our fleet of well-maintained vehicles ensures comfort, safety, and punctuality. Whether for work commutes, personal errands, or family travel, Fiesta offers a seamless travel experience backed by professional service and exceptional value. Free ride at great value.",
        },
        {
            id: "premium",
            name: "Premium",
            icon: "/images/home/car-categories/premium.png",
            image: "/images/home/car-categories/premium.png",
            description:
                "Fiesta's premium car services offer superior comfort and style for executives and special occasions. Our premium fleet features high-end vehicles with advanced amenities, ensuring a luxurious travel experience. Perfect for business meetings, airport transfers, and VIP transport with professional chauffeurs.",
        },
        {
            id: "muv",
            name: "MUV",
            icon: "/images/home/car-categories/muv.png",
            image: "/images/home/car-categories/muv.png",
            description:
                "Fiesta's MUV services provide spacious and versatile transportation for groups and families. Our multi-utility vehicles offer ample seating and luggage capacity, ideal for team outings, airport pickups, and group travel. Experience comfort and convenience with our well-maintained MUV fleet.",
        },
        {
            id: "luxury",
            name: "Luxury",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's luxury car services deliver the ultimate in sophistication and elegance. Our exclusive fleet of premium luxury vehicles provides unparalleled comfort, cutting-edge technology, and exceptional service. Perfect for high-profile executives, special events, and clients who demand the very best in corporate transportation.",
        },
        {
            id: "vellfire",
            name: "Vellfire",
            icon: "/images/home/car-categories/Toyota Vellfire.png",
            image: "/images/home/car-categories/Toyota Vellfire.png",
            scale: "scale-[0.9]",
            description:
                "The Toyota Vellfire is Fiesta's premium choice for executive and VIP transport. With plush leather interiors, captain seats, and a quiet cabin, it is designed for senior leadership, client visits, and high-profile events. Every Vellfire comes with a trained chauffeur who understands the standards executive travel demands. A refined option when comfort and image matter as much as the destination.",
        },
        {
            id: "tempo-traveller",
            name: "Tempo Traveller",
            icon: "/images/home/car-categories/Tempo.png",
            image: "/images/home/car-categories/Tempo.png",
            scale: "scale-[1.3]",
            description:
                "Fiesta's Tempo Travellers are built for group travel, from outstation trips to airport pickups for larger teams. Available in a range of seating configurations, they offer comfortable, well-ventilated cabins with ample luggage space. Popular for corporate offsites, team outings, and multi-passenger airport transfers, the Tempo Traveller gives groups a single, coordinated way to travel together.",
        },
        {
            id: "minibus",
            name: "Mini Bus",
            icon: "/images/home/car-categories/Fiesta Mini Bus .png",
            image: "/images/home/car-categories/Fiesta Mini Bus .png",
            scale: "scale-[1.3]",
            description:
                "Fiesta's minibuses fill the gap between sedans and full-size buses, offering group transport without the scale of a large fleet. Well suited for mid-sized teams, office transfers, and short outstation trips, these vehicles balance comfort with manoeuvrability in congested city routes. A practical option for departments or smaller teams that need to travel together without booking multiple cars.",
        },
        {
            id: "bus",
            name: "Bus",
            icon: "/images/home/car-categories/Large Bus.png",
            image: "/images/home/car-categories/Large Bus.png",
            scale: "scale-[1.3]",
            description:
                "Fiesta's bus services are built for large-scale workforce movement. Ideal for organisations running multiple shifts or moving hundreds of employees daily, our buses combine seating capacity with route efficiency. Each vehicle is maintained to strict safety standards and staffed by trained drivers. Suited for factories, IT parks, and campuses that need reliable, high-capacity transport across fixed routes every single day.",
        },
        {
            id: "ultra-luxury",
            name: "Ultra Luxury",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's ultra luxury services are reserved for the most demanding executive and VIP requirements. Our fleet includes vehicles such as the Toyota Vellfire, Mercedes-Benz S-Class, and Mercedes-Benz Sprinter/Commuter, or similar models, offering the highest level of comfort, privacy, and presence for top leadership, VVIP movements, and marquee corporate events. Backed by trained chauffeurs and meticulous vehicle upkeep, this category is built for clients who expect nothing less than the very best.",
        },
        {
            id: "force-urbania",
            name: "Force Urbania",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's Force Urbania (10-17 Seater) is built for mid-sized group travel that needs more room than a sedan but doesn't require a full-size bus. With flexible seating configurations, comfortable cabin space, and smooth handling even on longer routes, it suits corporate group transfers, airport pickups, and outstation trips for teams of varying sizes. A practical, well-balanced choice when you need to move a group together without over- or under-booking capacity.",
        },
        {
            id: "luxury-mini-coach",
            name: "Luxury Mini Coach",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's Luxury Mini Coach, featuring the Mercedes-Benz Mini Coach, is built for group travel that demands a higher standard of comfort and presence. With premium interiors, plush seating, and a refined cabin experience, it's suited for executive offsites, VIP group movements, and corporate events where image matters as much as capacity. A distinguished option for organisations that want their group travel to reflect the same standard as their individual executive transport.",
        },
        {
            id: "luxury-coach",
            name: "Luxury Coach",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's Luxury Coach, featuring the Volvo Coach, is built for large-group travel where comfort and reliability cannot be compromised. With spacious reclining seating, a smooth and stable ride, and a well-appointed cabin, it's suited for long-distance corporate travel, large offsites, and events requiring a full coach of executives or staff to travel together in comfort. A dependable choice when the group is large but the standard still needs to be premium.",
        },
    ];

    const [activeCategory, setActiveCategory] = useState<string>("standard");
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const activeCategoryData = categories.find(
        (cat) => cat.id === activeCategory
    );

    return (
        <section className="w-full py-5 md:py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        Cars
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        Car Categories
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="relative mb-1 group px-2 md:px-8">
                    {/* Left Button */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-0 top-[40%] -translate-y-1/2 z-10 p-2.5 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 text-gray-600 hover:text-[#EC2028] hover:scale-110 transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap justify-start gap-8 overflow-x-auto pb-4 scroll-smooth md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category.id)}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex flex-col items-center gap-3 transition-all duration-300 ${activeCategory === category.id
                                    ? "opacity-100"
                                    : "opacity-60 hover:opacity-80"
                                    }`}
                            >
                                <div className="relative w-20 h-16 md:w-24 md:h-20">
                                    <Image
                                        src={category.icon}
                                        alt={category.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className={`transition-transform duration-300 ${category.scale || ""}`}
                                    />
                                </div>
                                <span
                                    className={`text-sm md:text-base font-semibold ${activeCategory === category.id
                                        ? "text-gray-900"
                                        : "text-gray-600"
                                        }`}
                                >
                                    {category.name}
                                </span>
                                {activeCategory === category.id && (
                                    <div className="w-full h-1 bg-[#EC2028] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-0 top-[40%] -translate-y-1/2 z-10 p-2.5 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 text-gray-600 hover:text-[#EC2028] hover:scale-110 transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Active Category Content */}
                {activeCategoryData && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  p-8 md:p-12 ">
                        {/* Left Side - Car Image */}
                        <div className="relative w-full h-64 md:h-80 lg:h-96">
                            <Image
                                src={activeCategoryData.image}
                                alt={activeCategoryData.name}
                                fill
                                style={{ objectFit: "contain" }}
                                className={`drop-shadow-lg transition-transform duration-300 ${activeCategoryData.scale || ""}`}
                            />
                        </div>

                        {/* Right Side - Description */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {activeCategoryData.name}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                {activeCategoryData.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default CarCategories;
