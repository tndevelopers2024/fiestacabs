import React from 'react';
import BookNowButton from '../../../common/BookNowButton';

const GetStarted = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#E31E24] text-white">
            <div className="max-w-[1440px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Get a Quote for Employee Transportation in Kolkata
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Share your headcount, locations, shift timings, and preferred transport model. Fiesta will deliver a customised transportation solution with transparent pricing, GST billing, and hassle-free travel for your Kolkata workforce from day one.
                </p>
                <BookNowButton className="!bg-white !text-[#E31E24] py-4 px-10 border-none rounded-full font-bold text-lg hover:!bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block cursor-pointer">
                    Request a Quote
                </BookNowButton>
            </div>
        </section>
    );
};

export default GetStarted;
