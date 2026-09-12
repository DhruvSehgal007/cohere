import Image from "next/image";
import hsbcLogo from "@/assets/images/homepage/HSBC.png";
import heroFinCorpLogo from "@/assets/images/homepage/herofincrop.png";
import quoraLogo from "@/assets/images/homepage/quora.png";
import paysafeLogo from "@/assets/images/homepage/paysafe.png";
import ukIndiaLogo from "@/assets/images/homepage/uk-india.png";
import standardchatered from "@/assets/images/homepage/standard-chatered.png";
import rukart from "@/assets/images/homepage/rukart.png";
import gmn from "@/assets/images/homepage/gmn.png";
import harmonic from "@/assets/images/homepage/harmonic.png";




const rowOneLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: ukIndiaLogo, alt: "UK India Business Council" },
  { src: standardchatered, alt: "Standard Chartered" },
  { src: rukart, alt: "RuKart" },
  { src: gmn, alt: "GMM Pfaudler" },
  { src: harmonic, alt: "Harmonic" },
];

// TODO: swap these placeholders for harmonic, GMM Pfaudler, Standard Chartered,
// and RuKart logos once those files are uploaded
const rowTwoLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: standardchatered, alt: "Standard Chartered" },
  { src: rukart, alt: "RuKart" },
  { src: gmn, alt: "GMM Pfaudler" },
  { src: harmonic, alt: "Harmonic" },
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },

  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
];

const marqueeRowOne = [...rowOneLogos, ...rowOneLogos, ...rowOneLogos, ...rowOneLogos];
const marqueeRowTwo = [...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos];

function LogoCard({ src, alt }: { src: typeof hsbcLogo; alt: string }) {
  return (
    <div className="p-5 w-[250px] h-[90px] md:w-[348px] md:h-[120px] flex items-center justify-center border border-[#2E262E] rounded-[8px] shadow-[4px_4px_8px_#00000048] shrink-0">
      <Image
        src={src}
        alt={alt}
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

export default function OurClientsSection() {
  return (
    <section className="w-full bg-white">
      <div className="container-custom px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-block w-auto md:w-[130px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
  OUR CLIENTS
</span>
          <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[420px]">
            Trusted by Leading Organizations
          </h2>
        </div>
        <p className="font-nunito-sans font-normal text-[20px] text-[#2E262E] max-w-[360px] ml-auto">
          Display client logos in an auto-scrolling marquee or responsive grid.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="w-full overflow-hidden pb-6">
        {/* <div className="marquee-track flex w-max gap-10 animate-marquee"> */}
          <div className="marquee-track flex w-max gap-10 animate-marquee">
          {marqueeRowOne.map((logo, index) => (
            <LogoCard key={`row1-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="w-full overflow-hidden pb-16">
        {/* <div className="marquee-track flex w-max gap-10 animate-marquee-delay"> */}
          <div className="marquee-track flex w-max gap-10 animate-marquee-delay">
          {marqueeRowTwo.map((logo, index) => (
            <LogoCard key={`row2-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}