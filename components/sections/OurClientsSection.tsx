import Image from "next/image";
import hsbcLogo from "@/assets/images/homepage/HSBC.png";
import heroFinCorpLogo from "@/assets/images/homepage/hero-fin-crop.png";
import quoraLogo from "@/assets/images/homepage/quora.png";
import paysafeLogo from "@/assets/images/homepage/paysafe.png";
import ukIndiaLogo from "@/assets/images/homepage/uk-inida.png";

const rowOneLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: ukIndiaLogo, alt: "UK India Business Council" },
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: ukIndiaLogo, alt: "UK India Business Council" },
];

// TODO: swap these placeholders for harmonic, GMM Pfaudler, Standard Chartered,
// and RuKart logos once those files are uploaded
const rowTwoLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
];

const marqueeRowOne = [...rowOneLogos, ...rowOneLogos, ...rowOneLogos, ...rowOneLogos];
const marqueeRowTwo = [...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos];

function LogoCard({ src, alt }: { src: typeof hsbcLogo; alt: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} className="h-full w-auto max-h-24 object-contain" />
    </div>
  );
}

export default function OurClientsSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1500px] mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-block w-auto md:w-[130px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
  OUR CLIENTS
</span>
          <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[420px]">
            Trusted by Leading Organizations
          </h2>
        </div>
        <p className="font-nunito-sans font-normal text-[20px] text-[#5B5B5B] max-w-[360px] ml-auto">
          Display client logos in an auto-scrolling marquee or responsive grid.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="w-full overflow-hidden pb-6">
        <div className="marquee-track flex w-max gap-10 animate-marquee">
          {marqueeRowOne.map((logo, index) => (
            <LogoCard key={`row1-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="w-full overflow-hidden pb-16">
        <div className="marquee-track flex w-max gap-10 animate-marquee-delay">
          {marqueeRowTwo.map((logo, index) => (
            <LogoCard key={`row2-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}