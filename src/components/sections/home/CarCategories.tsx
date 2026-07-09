"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CarCategory {
    id: string;
    name: string;
    icon: string;
    image: string;
    description: string;
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
            name: "Toyota Vellfire",
            icon: "/images/home/car-categories/Toyota Vellfire.png",
            image: "/images/home/car-categories/Toyota Vellfire.png",
            description:
                "Experience premium luxury travel with the Toyota Vellfire. This top-tier executive vehicle offers exceptional VIP comfort, an ultra-spacious cabin, and advanced amenities. It is the perfect choice for high-profile client transfers, VIP delegations, and luxury corporate transport where nothing but the absolute best will suffice.",
        },
        {
            id: "tempo-traveller",
            name: "Tempo Traveller",
            icon: "/images/home/car-categories/Tempo.png",
            image: "/images/home/car-categories/Tempo.png",
            description:
                "Fiesta's Tempo Traveller services offer spacious and reliable transportation for medium-sized groups. With ample legroom and luggage capacity, it is perfect for corporate outings, family trips, and group airport transfers. Enjoy a smooth, comfortable ride while keeping your entire team together in a single, well-maintained vehicle.",
        },
        {
            id: "minibus",
            name: "Mini Bus",
            icon: "/images/home/car-categories/Fiesta Mini Bus .png",
            image: "/images/home/car-categories/Fiesta Mini Bus .png",
            description:
                "Fiesta's Mini Bus fleet is ideal for group travel, employee commutes, and mid-sized corporate events. Balancing comfortable, spacious seating with efficient maneuverability, it provides a reliable and cost-effective group transport solution. Trust our professional drivers to handle your group logistics seamlessly and safely.",
        },
        {
            id: "large-bus",
            name: "Large Bus",
            icon: "/images/home/car-categories/Large Bus.png",
            image: "/images/home/car-categories/Large Bus.png",
            description:
                "Fiesta's Large Bus services provide comprehensive transport solutions for large corporate teams, major events, and excursions. Our buses are fully equipped with superior amenities to ensure passenger comfort and safety on every large-scale journey. Trust us for dependable, on-time mass transportation logistics.",
        },
    ];

    const [activeCategory, setActiveCategory] = useState<string>("standard");

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
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-8 mb-16 overflow-x-auto pb-4 hide-scrollbar">
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
                                className="drop-shadow-lg"
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
        </section>
    );
};

export default CarCategories;
