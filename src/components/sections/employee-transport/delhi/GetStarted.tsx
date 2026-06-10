import React from 'react';
import BookNowButton from '../../../common/BookNowButton';

const GetStarted = () => {
    return (
        <section
            className="relative w-full py-16 md:py-24 text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/employee-transport-services-in-delhi/ets4.jpg')" }}
        >
            {/* bg-[#E31E24]/85 mix-blend-multiply */}
            <div className="absolute inset-0 "></div>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Get a Quote for Your Delhi Transport Programme
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Share your headcount, shift timings, and key pickup zones. Fiesta will design a route plan and provide transparent per-seat pricing with no hidden charges.
                </p>
                <BookNowButton className="!text-white !bg-[#E31E24] py-4 px-10 rounded-full font-bold text-lg hover:!bg-gray-100 hover:!text-white transition-colors shadow-lg hover:shadow-xl inline-block cursor-pointer">
                    Request a Quote
                </BookNowButton>
            </div>
        </section>
    );
};

export default GetStarted;
