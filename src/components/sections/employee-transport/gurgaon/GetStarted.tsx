import React from 'react';
import BookNowButton from '../../../common/BookNowButton';

const GetStarted = () => {
    return (
        <section
            className="relative w-full py-16 md:py-24 text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/employee-transportation-services-in-gurgaon/etsg4.png')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Get a Transport Quote for Your Gurgaon Workforce
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Share your employee count, office location in Gurgaon, shift timings, and key pickup areas. Fiesta will design a transportation solution and provide transparent pricing with no hidden charges and full access to the fleet management platform from day one.
                </p>
                <BookNowButton className="!text-white !bg-[#E31E24] py-4 px-10 rounded-full font-bold text-lg hover:!bg-red-700 transition-colors shadow-lg hover:shadow-xl inline-block cursor-pointer border-none">
                    Request a Quote
                </BookNowButton>
            </div>
        </section>
    );
};

export default GetStarted;
