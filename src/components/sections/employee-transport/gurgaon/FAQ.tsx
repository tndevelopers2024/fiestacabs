import React from 'react';
import FAQAccordion, { FAQItem } from '../../../common/FAQAccordion';

const faqs: FAQItem[] = [
    {
        id: "1",
        question: "1. What employee transportation services does Fiesta provide in Gurgaon?",
        answer: "Fiesta provides point-to-point home pickups, nodal shuttle services, inter-office loop services, and corporate event transport across Gurgaon. All solutions operate on GPS-tracked, well-maintained vehicles with background-verified professional chauffeurs and GST billing."
    },
    {
        id: "2",
        question: "2. How does Fiesta handle shift-based employee transportation in Gurgaon?",
        answer: "Fiesta's transport management platform adapts to multiple shift timings and hybrid work schedules. Automated rostering matches vehicle deployment to occupancy levels, ensuring employees arrive on time for early morning, regular, and late-night shifts without over-deploying fleet on low-attendance days."
    },
    {
        id: "3",
        question: "3. Can small and mid-sized businesses in Gurgaon hire Fiesta for employee transport?",
        answer: "Yes. Fiesta structures employee transportation solutions for businesses of all sizes in Gurgaon from 15-person startups to large enterprises with hundreds of employees spread across key locations in Delhi NCR. The fleet and route structure scale to the company's actual headcount and shift requirements."
    },
    {
        id: "4",
        question: "4. Are Electric Vehicles available for employee transportation in Gurgaon?",
        answer: "Yes. EV fleet options are available for organisations committed to sustainable commuting. EV deployment works best on high-frequency fixed routes and can be operated as part of a mixed fleet alongside standard vehicles to cover the full geography of Gurgaon and Delhi NCR."
    },
    {
        id: "5",
        question: "5. How does Fiesta ensure employee safety during late-night shifts in Gurgaon?",
        answer: "Late-night shift transport operates under dedicated safety protocols including route monitoring, male-only driver restrictions for female employees, in-cab panic buttons, and direct escalation lines to the 24x7 operations team. All night-shift vehicles carry CCTV. Compliance with local regulations and state motor vehicle laws is maintained across all routes."
    },
    {
        id: "6",
        question: "6. What is the cost structure for employee transportation services in Gurgaon?",
        answer: "Fiesta provides transparent per-seat or per-trip pricing based on route distance, vehicle type, and shift frequency. Managed employee transportation typically delivers 15 to 25 percent cost savings over unmanaged ride-hailing by eliminating surge pricing and reducing administration overhead. Contact Fiesta with your headcount, locations, and shift timings for a specific quote."
    }
];

const FAQ = () => {
    return (
        <section className="relative w-full py-20 px-4 md:py-12 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        ASSISTANCE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Frequently Asked <span className="text-[#EC2028]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. Find answers to common questions about our corporate mobility solutions in Gurgaon.
                    </p>
                </div>

                {/* FAQ Component */}
                <div className="mb-10">
                    <FAQAccordion items={faqs} />
                </div>

            </div>
        </section>
    );
};

export default FAQ;
