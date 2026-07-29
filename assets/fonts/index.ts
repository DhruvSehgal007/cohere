import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    { path: "./avenir/AvenirLT-Roman.woff2", weight: "400", style: "normal" },
    { path: "./avenir/AvenirLT-Roman.woff", weight: "400", style: "normal" },
    { path: "./avenir/AvenirLT-Oblique.woff2", weight: "400", style: "italic" },
    { path: "./avenir/AvenirLT-Oblique.woff", weight: "400", style: "italic" },
    { path: "./avenir/AvenirLT-Heavy.woff2", weight: "800", style: "normal" },
    { path: "./avenir/AvenirLT-Heavy.woff", weight: "800", style: "normal" },
    { path: "./avenir/AvenirLT-HeavyOblique.woff2", weight: "800", style: "italic" },
    { path: "./avenir/AvenirLT-HeavyOblique.woff", weight: "800", style: "italic" },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const nunitoSans = localFont({
  src: [
    { path: "./nunito/NunitoSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./nunito/NunitoSans-Regular.woff", weight: "400", style: "normal" },
    { path: "./nunito/NunitoSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./nunito/NunitoSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
});


export const nunitoSansBold = localFont({
  src: [
    { path: "./nunito/NunitoSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./nunito/NunitoSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-nunito-sans-bold",
  display: "swap",
});

export const markazi = localFont({
  src: [
    { path: "./markazi/MarkaziText-Regular.woff2", weight: "400", style: "normal" },
    { path: "./markazi/MarkaziText-Regular.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-markazi",
  display: "swap",
});


export const markaziBold = localFont({
  src: [
    { path: "./markazi/MarkaziText-Bold.woff2", weight: "700", style: "bold" },
    { path: "./markazi/MarkaziText-Bold.woff", weight: "700", style: "bold" },
  ],
  variable: "--font-markaziBold",
  display: "swap",
});




export const interMedium = localFont({
  src: [
    { path: "./inter/Inter_18pt-Medium.woff2", weight: "500", style: "normal" },
    { path: "./inter/Inter_18pt-Medium.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-inter-medium",
  display: "swap",
});