import hsbcLogo from "@/assets/images/homepage/HSBC.png";
import heroFinCorpLogo from "@/assets/images/homepage/herofincrop.png";
import quoraLogo from "@/assets/images/homepage/quora.png";
import paysafeLogo from "@/assets/images/homepage/paysafe.png";
import ukIndiaLogo from "@/assets/images/homepage/uk-india.png";
import standardchatered from "@/assets/images/homepage/standard-chatered.png";
import rukart from "@/assets/images/homepage/rukart.png";
import gmn from "@/assets/images/homepage/gmn.png";
import harmonic from "@/assets/images/homepage/harmonic.png";
import IkigaiLaw from "@/assets/images/homepage/Ikigai-Law.png";




const rowOneLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: ukIndiaLogo, alt: "UK India Business Council" },
];

// TODO: swap these placeholders for harmonic, GMM Pfaudler, Standard Chartered,
// and RuKart logos once those files are uploaded
const rowTwoLogos = [
  { src: harmonic, alt: "Harmonic" },
  { src: gmn, alt: "GMM Pfaudler" },
  { src: standardchatered, alt: "Standard Chartered" },
  { src: rukart, alt: "RuKart" },
  { src: IkigaiLaw, alt: "Ikigai Law" },
];

export type ClientLogo = { _id: string; name: string; image: string; row: number };
export const defaultClients: ClientLogo[] = [
  ...rowOneLogos.map((logo, i) => ({ _id: (i + 1).toString(16).padStart(24, "0"), name: logo.alt, image: logo.src.src, row: 1 })),
  ...rowTwoLogos.map((logo, i) => ({ _id: (i + 6).toString(16).padStart(24, "0"), name: logo.alt, image: logo.src.src, row: 2 })),
];
