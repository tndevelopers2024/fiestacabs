const HowToBookBilling = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="space-y-16 md:space-y-24  mx-auto">
                    {/* Booking Process Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Booking Process
                        </h2>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-4">
                            <ol className="list-decimal pl-5 space-y-4 text-[#555555] text-[15px] leading-[1.7] font-medium">
                                <li><strong>Send enquiry</strong> with pickup, drop point and vehicle preference.</li>
                                <li><strong>Receive a fixed plan</strong> for the trip based on business requirements.</li>
                                <li><strong>Confirm the booking</strong> and get driver and vehicle details ahead of the ride.</li>
                                <li><strong>Complete the trip</strong>, with the support team available for any last-minute changes.</li>
                            </ol>
                        </div>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Booking ahead helps guarantee vehicle availability, particularly for events or during peak travel periods across Delhi.
                        </p>
                    </div>

                    {/* Corporate Billing Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Corporate Billing and Flexible Rental Plans
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>Corporate car rental packages are customized for short or long-term needs, with flexible plans and fair deals that suit how a business actually travels.</p>
                            <p>Outsourcing transportation also removes the administrative burden of ownership, since agencies handle paperwork such as road tax and insurance, while businesses bypass large upfront costs and vehicle depreciation and can often claim Input Tax Credit on the rental.</p>
                            <p>Providers in this space commonly bundle in value-added extras such as 24/7 roadside assistance and fuel management as part of the corporate account.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToBookBilling;
