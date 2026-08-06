import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/common/Button";

const WhyDifferent = () => {
    return (
        <section className="w-full py-14 md:py-16 bg-[#fafafa]">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative h-[320px] md:h-[520px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/why-different.jpg"
                        alt="Why Fiesta shuttle service is different"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">Why</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">We&apos;re Different</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our approach is deeply customized, local, and enterprise-ready with flexible integrations
                        and personalized support.
                    </p>
                    <h4 className="text-2xl font-semibold mb-2">Affordability Meets Convenience</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Managing transport logistics near busy transit hubs and campuses can strain time and resources. Fiesta's shuttle service removes this burden with a true gate-to-hub solution, eliminating the need for your organisation to coordinate parking, last-mile transfers, or ad hoc transport arrangements. One partner handles the entire commute logistics for your workforce.
                    </p>
                    <Button href="/reach-us" className=" bg-[#EC2028] btn-animated ">
                        Talk to Our Team
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhyDifferent;
