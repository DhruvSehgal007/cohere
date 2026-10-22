import AboutCohere from "@/components/sections/AboutSections/AboutCohere";
import CoreValues from "@/components/sections/AboutSections/CoreValues";
import Journey from "@/components/sections/AboutSections/Journey";
import WhyChooseUs from "@/components/sections/AboutSections/WhyChooseUs";
import AboutcohereBanner from "@/components/sections/AboutSections/AboutcohereBanner";

export default function AboutPage() {
    return (
        <>
            <AboutcohereBanner />
            <AboutCohere />
            <CoreValues />
            <WhyChooseUs />
            <Journey />
        </>
    );
}