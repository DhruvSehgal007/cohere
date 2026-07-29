import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  avenir,
  interMedium,
  markazi,
  markaziBold,
  nunitoSans,
  nunitoSansBold,
} from "@/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.variable} ${nunitoSans.variable} ${markazi.variable} ${markaziBold.variable} ${nunitoSansBold.variable} ${interMedium.variable}`}
    >
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
