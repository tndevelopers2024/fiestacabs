import React from 'react';
import BookNowButton from '../../../common/BookNowButton';

const GetStarted = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#E31E24] text-white">
            <div className="max-w-[1440px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Get a Quote for Your Delhi Transport Programme
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Share your headcount, shift timings, and key pickup zones. Fiesta will design a route plan and provide transparent per-seat pricing with no hidden charges.
                </p>
                <BookNowButton className="bg-white text-[#E31E24] py-4 px-10 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block">
                    Request a Quote
                </BookNowButton>
            </div>
        </section>
    );
};

export default GetStarted;
