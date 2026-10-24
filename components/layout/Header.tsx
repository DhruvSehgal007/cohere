"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";

import cohereLogo from "@/assets/images/logos/cohere-logo.png";
import allThingsLogo from "@/assets/images/logos/all-things.png";

type DropdownType = "services" | "products" | "events" | "resources" | null;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrolledSnapshot() {
  return window.scrollY > 16;
}

function getServerScrolledSnapshot() {
  return false;
}

export default function Header() {
  const hasScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolledSnapshot,
    getServerScrolledSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownType>(null);

  const toggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(
      activeDropdown === dropdown ? null : dropdown
    );
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed left-0 top-0 z-[9999] w-full transition-colors duration-300 motion-reduce:transition-none ${hasScrolled ? "bg-white" : "bg-transparent"}`}>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="container-custom flex w-full items-center justify-between py-2 sm:py-3 lg:justify-start lg:py-0">

        {/* ================= LEFT LOGO ================= */}

        <div className="shrink-0 py-2 sm:py-3 lg:pr-[30px]">
          <Link href="/">
            <Image
              src={cohereLogo}
              alt="Cohere Consultants"
              className="h-auto w-[100px] sm:w-[120px] md:w-[130px] lg:w-[145px] 2xl:w-[170px]"
              priority
            />
          </Link>
        </div>


        {/* =================================================
            MOBILE / TABLET MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveDropdown(null);
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#439897] transition-colors hover:bg-white/20 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden min-w-0 flex-1 lg:block">

          <div className="mx-auto w-full max-w-[1038px]">

            {/* GREEN NAVBAR */}

            <nav className="flex items-center justify-center gap-4 rounded-b-[20px] bg-[#439897] px-4 py-4 font-avenir text-white xl:gap-[30px] xl:px-6">

              {/* Desktop dropdowns: anchored to each navigation item */}
              {([
                { key: "services", label: "SERVICES", href: "/service" },
                { key: "products", label: "OUR PRODUCTS", href: "/our-products" },
                { key: "events", label: "EVENTS", href: "/events" },
                { key: "resources", label: "RESOURCES", href: "/resources" },
              ] as const).map((item) => (
                <div
                  key={item.key}
                  className="relative shrink-0"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1 whitespace-nowrap text-[14px] min-[1200px]:text-[16px] min-[1440px]:text-[18px]">
                    <Link href={item.href} onClick={closeDropdown} className="transition hover:opacity-80">
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label.toLowerCase()} submenu`}
                      aria-expanded={activeDropdown === item.key}
                      onClick={() => toggleDropdown(item.key)}
                      className="p-1 transition hover:opacity-80"
                    >
                    <svg
                      className={`h-3 w-3 transition-transform duration-500 ease-in-out ${activeDropdown === item.key ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="m3 6 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </button>
                  </div>

                  {activeDropdown === item.key && (
                    <div className={`absolute top-full z-[100] pt-5 ${
                      item.key === "services" ? "w-[min(536px,90vw)]" :
                      item.key === "products" ? "w-[260px]" :
                      item.key === "events" ? "w-[255px]" : "w-[285px]"
                    } ${item.key === "resources" ? "right-0" : "left-0"}`}>
                      <div className={`relative rounded-[12px] bg-white text-left shadow-[0_12px_35px_rgba(0,0,0,0.13)] ${item.key === "services" ? "px-[34px] py-[35px]" : "px-5 py-6"}`}>
                        {/* Upward-facing pointer, as in the screenshot */}
                        <span className={`absolute -top-[12px] h-6 w-6 rotate-45 rounded-tl-[5px] bg-white ${item.key === "resources" ? "right-8" : "left-8"}`} />

                        {item.key === "services" && (
                          <div className="space-y-5 font-nunito-sans text-[16px] leading-[1.45] text-[#333333]">
                            <div>
                              <Link href="/anti-sexual-harassment" onClick={closeDropdown} className="inline-block font-avenir font-extrabold text-[#439897] transition-colors hover:text-[#1B3D3C]">ANTI SEXUAL HARASSMENT</Link>
                              <p className="mt-1 pl-9">End to end PoSH services. See annexure</p>
                            </div>
                            <div>
                              <Link href="/workplace-discrimination" onClick={closeDropdown} className="inline-block font-avenir font-extrabold text-[#439897] transition-colors hover:text-[#1B3D3C]">WORKPLACE DISCRIMINATION</Link>
                              <p className="mt-1 pl-9">Diversity Equity and Inclusion</p>
                            </div>
                            <div>
                              <Link href="/employment-and-labour" onClick={closeDropdown} className="inline-block font-avenir font-extrabold text-[#439897] transition-colors hover:text-[#1B3D3C]">EMPLOYMENT AND LABOUR</Link>
                              <p className="mt-1 pl-9">Investigation, Dispute Resolution &amp; Conflict Management</p>
                            </div>
                          </div>
                        )}

                        {item.key === "products" && (
                          <div className="flex flex-col items-start gap-3 text-left font-avenir text-[16px] font-extrabold text-[#439897]">
                            <Link href="/our-products#cohere-resolve" onClick={closeDropdown} className="hover:text-[#1B3D3C]">CohereResolve™</Link>
                            <Link href="/our-products#cohere-essentials" onClick={closeDropdown} className="hover:text-[#1B3D3C]">CohereEssentials™</Link>
                            <Link href="/our-products#cohere-readiness" onClick={closeDropdown} className="hover:text-[#1B3D3C]">CohereReadiness™</Link>
                            <Link href="/our-products#keep-it-right" onClick={closeDropdown} className="hover:text-[#1B3D3C]">KeepItRight®</Link>
                          </div>
                        )}

                        {item.key === "events" && (
                          <div className="flex flex-col items-start gap-3 text-left font-avenir text-[16px] font-extrabold text-[#439897]">
                            <Link href="/" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Training &amp; Workshops</Link>
                            <Link href="/calender" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Calendar</Link>
                          </div>
                        )}

                        {item.key === "resources" && (
                          <div className="flex flex-col items-start gap-3 text-left font-avenir text-[16px] font-extrabold text-[#439897]">
                            <Link href="/resources#downloadable-resources" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Downloadable Resources</Link>
                            <Link href="/resources#news" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Cohere in the News</Link>
                            <Link href="/resources#judgments" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Judgments</Link>
                            <Link href="/case-study" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Case Studies</Link>
                            <Link href="/resources#advisories" onClick={closeDropdown} className="hover:text-[#1B3D3C]">Advisories</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}


              {/* ================= CONTACT ================= */}

              <Link
                href="/#contact"
                onClick={closeDropdown}
                className="shrink-0 whitespace-nowrap rounded-sm bg-white px-4 py-2 text-[14px] font-semibold text-[#2E262E] transition hover:bg-gray-100 min-[1200px]:text-[16px] min-[1440px]:px-5 min-[1440px]:text-[18px]"
              >
                CONTACT US
              </Link>

            </nav>


          </div>
        </div>


        {/* =================================================
            RIGHT LOGO
        ================================================== */}

        <div className="hidden shrink-0 py-3 pl-[30px] lg:block">
          <Image
            src={allThingsLogo}
            alt="All Things Cohere Posh"
            className="h-auto w-[105px] xl:w-[125px] 2xl:w-[170px]"
            priority
          />
        </div>

      </div>


      {/* =====================================================
          MOBILE / TABLET MENU
      ====================================================== */}

      {isOpen && (
        <div className="w-full overflow-hidden bg-[#439897] shadow-lg lg:hidden">

          <nav className="flex w-full flex-col px-4 py-6 font-avenir text-white sm:px-6 sm:py-8">

            {/* SERVICES */}

            <MobileDropdown
              title="SERVICES"
              href="/service"
              onNavigate={() => { setIsOpen(false); closeDropdown(); }}
              open={activeDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              <div className="space-y-3 pl-4 text-left text-sm">

                <p>
                  <Link href="/anti-sexual-harassment" onClick={() => { setIsOpen(false); closeDropdown(); }} className="font-bold hover:underline">ANTI SEXUAL HARASSMENT</Link>
                  <br />
                  <span className="text-white/80">
                    End to end PoSH services. See annexure
                  </span>
                </p>

                <p>
                  <Link href="/workplace-discrimination" onClick={() => { setIsOpen(false); closeDropdown(); }} className="font-bold hover:underline">WORKPLACE DISCRIMINATION</Link>
                  <br />
                  <span className="text-white/80">
                    Diversity Equity and Inclusion
                  </span>
                </p>

                <p>
                  <Link href="/employment-and-labour" onClick={() => { setIsOpen(false); closeDropdown(); }} className="font-bold hover:underline">EMPLOYMENT AND LABOUR</Link>
                  <br />
                  <span className="text-white/80">
                    Investigation, Dispute Resolution &amp;
                    Conflict Management
                  </span>
                </p>

              </div>
            </MobileDropdown>


            {/* PRODUCTS */}

            <MobileDropdown
              title="OUR PRODUCTS"
              href="/our-products"
              onNavigate={() => { setIsOpen(false); closeDropdown(); }}
              open={activeDropdown === "products"}
              onClick={() => toggleDropdown("products")}
            >
              <div className="flex flex-col items-start gap-2 pl-4 text-left text-sm">

                <Link href="/our-products#cohere-resolve" onClick={() => { setIsOpen(false); closeDropdown(); }}>
                  CohereResolve™
                </Link>

                <Link href="/our-products#cohere-essentials" onClick={() => { setIsOpen(false); closeDropdown(); }}>
                  CohereEssentials™
                </Link>

                <Link href="/our-products#cohere-readiness" onClick={() => { setIsOpen(false); closeDropdown(); }}>
                  CohereReadiness™
                </Link>

                <Link href="/our-products#keep-it-right" onClick={() => { setIsOpen(false); closeDropdown(); }}>
                  KeepItRight®
                </Link>

              </div>
            </MobileDropdown>


            {/* EVENTS */}

            <MobileDropdown
              title="EVENTS"
              href="/events"
              onNavigate={() => { setIsOpen(false); closeDropdown(); }}
              open={activeDropdown === "events"}
              onClick={() => toggleDropdown("events")}
            >
              <div className="flex flex-col items-start gap-2 pl-4 text-left text-sm">

                <Link
                  href="/calender#training-workshops"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Training &amp; Workshops
                </Link>

                <Link
                  href="/calender"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Calendar
                </Link>

              </div>
            </MobileDropdown>


            {/* RESOURCES */}

            <MobileDropdown
              title="RESOURCES"
              href="/resources"
              onNavigate={() => { setIsOpen(false); closeDropdown(); }}
              open={activeDropdown === "resources"}
              onClick={() => toggleDropdown("resources")}
            >
              <div className="flex flex-col items-start gap-2 pl-4 text-left text-sm">

                <Link
                  href="/resources#downloadable-resources"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Downloadable Resources
                </Link>

                <Link
                  href="/resources#news"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Cohere in the News
                </Link>

                <Link
                  href="/resources#judgments"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Judgments
                </Link>

                <Link
                  href="/case-study"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Case Studies
                </Link>

                <Link
                  href="/resources#advisories"
                  onClick={() => { setIsOpen(false); closeDropdown(); }}
                >
                  Advisories
                </Link>

              </div>
            </MobileDropdown>


            {/* CONTACT */}

            <Link
              href="/#contact"
              onClick={() => { setIsOpen(false); closeDropdown(); }}
              className="mt-5 self-center rounded-md bg-white px-6 py-3 text-[14px] font-semibold text-[#2E262E]"
            >
              CONTACT US
            </Link>


            {/* LOGO */}

            <Image
              src={allThingsLogo}
              alt="All Things Cohere Posh"
              className="mx-auto mt-6 h-auto w-[100px] sm:w-[120px] md:w-[140px]"
            />

          </nav>
        </div>
      )}

    </header>
  );
}


/* =========================================================
   MOBILE DROPDOWN
========================================================= */

function MobileDropdown({
  title,
  href,
  onNavigate,
  open,
  onClick,
  children,
}: {
  title: string;
  href: string;
  onNavigate: () => void;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/20 ">

      <div className="flex w-full items-center justify-between text-left text-[15px] font-medium">
        <Link href={href} onClick={onNavigate} className="flex-1 py-4">
          {title}
        </Link>
        <button
          type="button"
          onClick={onClick}
          aria-label={`Toggle ${title.toLowerCase()} submenu`}
          aria-expanded={open}
          className="p-4"
        >
        <svg className={`h-4 w-4 transition-transform duration-500 ease-in-out ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m3 6 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </button>
      </div>

      {open && (
        <div className="pb-5 pt-1 text-white">
          {children}
        </div>
      )}

    </div>
  );
}
