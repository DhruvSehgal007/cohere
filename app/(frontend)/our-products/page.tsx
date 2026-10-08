import Banner from "@/components/sections/OurProducts/Banner";
import ResolveSection from "@/components/sections/OurProducts/ResolveSection";
import Microsoft365Section from "@/components/sections/OurProducts/Microsoft365Section";
import EssentialsSection from "@/components/sections/OurProducts/EssentialsSection";
import ReadinessFramework from "@/components/sections/OurProducts/ReadinessFramework";
import KeepItRightSection from "@/components/sections/OurProducts/KeepItRightSection";

export default function OurProducts() {
  return (
    <>
      {/* <Banner /> */}
      <ResolveSection />
      <Microsoft365Section />
      <EssentialsSection />
      <ReadinessFramework />
      <KeepItRightSection />
    </>
  );
}