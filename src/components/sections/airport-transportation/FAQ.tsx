"use client";

import FAQAccordion from "../../common/FAQAccordion";
import { getLiveFaqsByPath, RouteFAQItem } from "@/src/data/liveFaqContent";

const FAQ = () => {
    const liveFaqs = getLiveFaqsByPath("/airport-transportation-services");
    const faqItems = liveFaqs.map((item: RouteFAQItem, index: number) => ({
        id: String(index + 1),
        question: item.question,
        answer: item.answer,
    }));

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#EC2028] mb-4">Frequently Asked Questions</h2>
                </div>
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
