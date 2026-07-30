"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cohereLogo from "@/assets/images/logos/cohere-logo.png";
import allThingsLogo from "@/assets/images/logos/all-things.png";

const navLinks = [
  { href: "/services", label: "SERVICES" },
  { href: "/keep-it-right", label: "KEEP IT RIGHT" },
  { href: "/training-workshops", label: "TRAINING & WORKSHOPS" },
  { href: "/news", label: "COHERE IN NEWS" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className="w-full bg-white">
    <header className="absolute top-0 z-[9999] w-full bg-transparent">
         <div className="container-custom flex items-start justify-between md:justify-start">
          {/* Left logo */}
        {/* <div className="shrink-0 py-3 pl-0 md:pr-[30px]">
          <Image src={cohereLogo} alt="Cohere Consultants" className="h-10 md:h-12 w-auto" priority />
        </div> */}
        <div className="shrink-0 py-3 pl-0 md:pr-[30px]">
  <Image
    src={cohereLogo}
    alt="Cohere Consultants"
    className="w-full max-w-[170px] h-auto"
    priority
  />
</div>

        {/* Mobile menu toggle */}
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-6 p-2 text-[#439897]" aria-label="Toggle menu" aria-expanded={isOpen}>
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Fluid teal nav - desktop */}
        <div className="hidden md:block flex-1 max-w-[1038px] mx-auto bg-[#439897] rounded-b-[20px]">
          <nav className="font-avenir font-normal flex items-center justify-center gap-[30px] px-6 py-4 text-white">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-avenir text-[20px] whitespace-nowrap hover:underline">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-white text-[#439897] text-[20px] font-semibold px-5 py-2 rounded-sm whitespace-nowrap hover:bg-gray-100">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right logo - desktop only */}
        <div className="hidden md:block shrink-0 py-3 pl-[30px]">
          <Image src={allThingsLogo} alt="All Things Cohere Posh" className="w-full max-w-[170px] h-auto" priority />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#439897] font-avenir">
          <nav className="flex flex-col items-center gap-4 px-6 py-6 text-white">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-[20px]">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-white text-[#439897] text-[20px] font-semibold px-5 py-2 rounded-sm">
              CONTACT US
            </Link>
            <Image src={allThingsLogo} alt="All Things Cohere Posh" className="h-10 w-auto mt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}