import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "../../../../components/common/Button";

const ContactCTA = () => {
    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/corporate-car-rental-in-hyderabad/book-corporate.jpg"
                    alt="Book Corporate Car Rental in Hyderabad"
                    fill
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/50 bg-gradient-to-r from-transparent via-black/40 to-black/90"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="md:w-1/2 md:ml-auto text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="font-semibold text-[15px] text-white">4.8 (729 Reviews)</span>
                        <div className="flex gap-1 text-[#FFA800]">
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white max-w-xl">
                        Book Corporate Car Rental in Hyderabad
                    </h2>

                    <p className="text-[15px] text-gray-200 mb-8 leading-[1.7] max-w-xl">
                        Whether you need airport transfers, employee transportation or fleet support for a corporate event, Fiesta Smart Mobility delivers a stress free travel experience in Hyderabad with verified chauffeurs and transparent pricing. Share your rental period, vehicle preference and pickup details with our support team to receive a quote with no hidden costs.
                    </p>

                    <Button href="/reach-us" className=" bg-[#E31E24] hover:bg-black rounded duration-300">
                        Get A Quote Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
