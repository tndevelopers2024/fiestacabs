import { getMetadata } from "@/src/data/metadata";
import Link from "next/link";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/shuttle/Hero";
import Milestones from "../../components/sections/shuttle/Milestones";
import WhatIsService from "../../components/sections/shuttle/WhatIsService";
import PanIndiaServices from "../../components/sections/shuttle/PanIndiaServices";
import KeyFeatures from "../../components/sections/shuttle/KeyFeatures";
import SmarterWay from "../../components/sections/shuttle/SmarterWay";
import StartToday from "../../components/sections/shuttle/StartToday";
import WhyDifferent from "../../components/sections/shuttle/WhyDifferent";
import CTA from "../../components/sections/shuttle/CTA";

export const metadata = getMetadata("/shuttle-service");

const ShuttleServicePage = () => {
    return (
        <div className="w-full bg-white">
            <Hero />
            <Milestones />
            <WhatIsService />
            <PanIndiaServices />
            <KeyFeatures />
            <SmarterWay />
            <StartToday />
            <WhyDifferent />
            <CTA />
            <FAQ />
        </div>
    );
};

export default ShuttleServicePage;
