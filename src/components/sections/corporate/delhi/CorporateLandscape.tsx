import Image from "next/image";

const CorporateLandscape = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg order-2 md:order-1">
                        <Image
                            src="/images/corporate-car-rental-in-delhi/landscape-in-india.jpg"
                            alt="The Corporate Car Rental Landscape in India"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            The Corporate Car Rental Landscape in India
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>India&apos;s corporate car rental market runs at real scale, with well over 6,000 chauffeur-driven cabs operating nationally and established fleets ranging from around 5,000 to over 12,000 vehicles among the larger providers.</p>
                            <p>Packages across the market include both chauffeur-driven and self-drive options, though Fiesta focuses specifically on chauffeur-driven corporate travel for the added safety and professional image it brings.</p>
                            <p>Experienced operators in this space report 20 to 25-plus years in the business and have completed several million trips between them, with larger providers typically active across ten or more major cities alongside Delhi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateLandscape;
