"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const awardsData = [
    { id: 1, image: "/images/about-us/awards/1781326142135.png" },
    { id: 2, image: "/images/about-us/awards/2.jpeg" },
    { id: 3, image: "/images/about-us/awards/3.jpeg" },
    { id: 4, image: "/images/about-us/awards/4.jpeg" },
    { id: 5, image: "/images/about-us/awards/5.jpeg" },
];

const AwardsCarousel = () => {
    return (
        <div className="w-full relative max-w-7xl mx-auto px-2 md:px-10">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    prevEl: '.award-prev',
                    nextEl: '.award-next',
                }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="awards-swiper !pb-14"
            >
                {awardsData.map((award) => (
                    <SwiperSlide key={award.id}>
                        <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100/80 hover:shadow-lg transition-all duration-300 my-2">
                            <Image
                                src={award.image}
                                alt="Fiesta Awards & Recognitions"
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Controls */}
            <div className="absolute top-[40%] -translate-y-[50%] left-0 right-0 flex justify-between z-10 pointer-events-none lg:-mx-6">
                <button className="award-prev pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-400 hover:text-[#EC2028] hover:shadow-[#EC2028]/10 transition-all group/btn">
                    <FaChevronLeft className="text-lg group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>
                <button className="award-next pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-400 hover:text-[#EC2028] hover:shadow-[#EC2028]/10 transition-all group/btn">
                    <FaChevronRight className="text-lg group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
            </div>

            <style jsx global>{`
                .awards-swiper .swiper-button-disabled {
                    opacity: 0.5;
                }

                .awards-swiper .swiper-pagination-bullet {
                    background-color: #cbd5e1;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }

                .awards-swiper .swiper-pagination-bullet-active {
                    background-color: #EC2028;
                    width: 24px;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
};

export default AwardsCarousel;
