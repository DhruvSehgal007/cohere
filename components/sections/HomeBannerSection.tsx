
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import bannerImage from "@/assets/images/homepage/side-images.png";
import sliderBackground from "@/assets/images/homepage/slider-background.png";
import Lefticon from "@/assets/images/homepage/Left-icon.svg";
import Righticon from "@/assets/images/homepage/Right-icon.svg";

const staticContent = {
  line1: "Understand",
  line2: "Workplace",
  subtitle: "Keep It Right",
};

const slides = [
  {
    highlight: "Laws.",
    description:
      "Cohere Consultants LLC- Expert legal advisory on workplace safety, PoSH compliance, and corporate ethics—ensuring safer, inclusive work environments.",
    image: bannerImage,
  },
  {
    highlight: "Clearly.",
    description:
      "Cohere Consultants LLC- Expert legal advisory on workplace safety, PoSH compliance, and corporate ethics—ensuring safer, inclusive work environments.",
    image: bannerImage,
  },
  {
    highlight: "Integrity.",
    description:
      "Cohere Consultants LLC- Expert legal advisory on workplace safety, PoSH compliance, and corporate ethics—ensuring safer, inclusive work environments.",
    image: bannerImage,
  },
  {
    highlight: "Cultures.",
    description:
      "Cohere Consultants LLC- Expert legal advisory on workplace safety, PoSH compliance, and corporate ethics—ensuring safer, inclusive work environments.",
    image: bannerImage,
  },
];

const N = slides.length;
const AUTO_MS = 4500;
const TRANSITION_MS = 1400;

export default function HomeBanner() {
  const [index, setIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mainImgWrapRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const prevPeekRect = useRef<DOMRect | null>(null);
  const isForwardStep = useRef(false);

  const active = slides[index];
  const nextIndex = (index + 1) % N;
  const nextSlide = slides[nextIndex];

  const goTo = (i: number, forward: boolean) => {
    const next = ((i % N) + N) % N;
    isForwardStep.current = forward;

    if (
      forward &&
      peekRef.current &&
      window.innerWidth >= 1024
    ) {
      prevPeekRect.current = peekRef.current.getBoundingClientRect();
    } else {
      prevPeekRect.current = null;
    }

    setTextKey((k) => k + 1);
    setIndex(next);
  };

  const next = () => goTo(index + 1, true);
  const prev = () => goTo(index - 1, false);

  useLayoutEffect(() => {
    const mainEl = mainImgWrapRef.current;
    if (!mainEl) return;

    const fromRect = prevPeekRect.current;

    if (
      !fromRect ||
      !isForwardStep.current ||
      window.innerWidth < 1024
    ) {
      mainEl.style.transition = "none";
      mainEl.style.opacity = "0";
      mainEl.style.transform = "none";

      void mainEl.offsetWidth;

      mainEl.style.transition = `opacity ${TRANSITION_MS}ms ease`;
      mainEl.style.opacity = "1";
      return;
    }

    const toRect = mainEl.getBoundingClientRect();
    const scaleX = fromRect.width / toRect.width;
    const scaleY = fromRect.height / toRect.height;

    const translateX =
      fromRect.left +
      fromRect.width / 2 -
      (toRect.left + toRect.width / 2);

    const translateY =
      fromRect.top +
      fromRect.height / 2 -
      (toRect.top + toRect.height / 2);

    mainEl.style.transformOrigin = "center center";
    mainEl.style.transition = "none";
    mainEl.style.opacity = "0.5";

    mainEl.style.transform =
      `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;

    void mainEl.offsetWidth;

    mainEl.style.transition =
      `transform ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1), opacity ${TRANSITION_MS}ms ease`;

    mainEl.style.transform = "translate(0, 0) scale(1)";
    mainEl.style.opacity = "1";

    prevPeekRect.current = null;
  }, [index]);

  // useEffect(() => {
  //   timerRef.current = setInterval(() => {
  //     goTo(index + 1, true);
  //   }, AUTO_MS);
  //   return () => {
  //     if (timerRef.current) clearInterval(timerRef.current);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [index]);

  const pause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resume = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      goTo(index + 1, true);
    }, AUTO_MS);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 md:pb-16"
      style={{ backgroundImage: `url(${sliderBackground.src})` }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* LEFT: text */}
        <div>
          <h1
            className="font-avenir font-extrabold leading-[1.05] text-[52px] sm:text-[72px] md:text-[90px] lg:text-[112px]"
            style={{
              WebkitTextStroke: "2px #439897",
              color: "transparent",
            }}
          >
            {staticContent.line1}
          </h1>

          <h1 className="font-avenir font-normal leading-[1.05] text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px]">
            {staticContent.line2}{" "}
            <span
              key={textKey}
              className="bg-[#439897] text-white font-avenir font-extrabold text-[28px] sm:text-[40px] md:text-[50px] lg:text-[62px] px-3 py-3 rounded-[10px] inline-block animate-[fadeInText_700ms_ease-in-out]"
            >
              {active.highlight}
            </span>
          </h1>

          <h3 className="font-avenir font-[800] text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] text-[#367A79] mt-6">
            {staticContent.subtitle}
          </h3>

          <p
            key={`desc-${textKey}`}
            className="font-nunito-sans font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#2E262E] mt-4 max-w-[600px] leading-relaxed animate-[fadeInText_700ms_ease-in-out]"
          >
            {active.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button type="button" className="inline-flex items-center justify-center text-center bg-[#439897] hover:bg-[#357b7a] transition-colors text-[#FFFFFF] font-avenir font-[800] text-[16px] w-full sm:w-auto px-6 py-3 rounded-lg">
              Schedule a Consultation
            </button>

            <button type="button" className="inline-flex items-center justify-center text-center border border-[#1B3D3C] bg-[#FFFFFF] hover:bg-[#357b7a] hover:text-white transition-colors font-avenir font-[800] text-[16px] w-full sm:w-auto px-6 py-3 rounded-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* RIGHT: main image */}
        <div className="relative w-full flex justify-center">
          <div
            ref={mainImgWrapRef}
            className="w-full max-w-[300px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px] mx-auto hidden sm:block md:block lg:block"
          >
            <Image
              key={index}
              src={active.image}
              alt={`slide-${index + 1}`}
              className="w-full h-auto object-contain"
              priority={index === 0}
            />
          </div>
        </div>
      </div>

      {/* UPDATED SLIDER ARROWS AND DOTS */}
      <div className="container-custom mt-0 sm:mt-8 flex justify-center lg:justify-end items-center gap-4">
        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-[30px] w-[30px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={Lefticon}
            alt=""
            className="h-full w-full object-contain"
          />
        </button>

        {/* DOTS */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i, i > index)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="flex h-[16px] w-[16px] sm:h-[16px] sm:w-[16px] md:h-[20px] md:w-[20px] shrink-0 items-center justify-center rounded-full border border-[#2E262E] bg-transparent transition-all duration-300"
            >
              {i === index && (
                <span className="h-[12px] w-[12px] rounded-full bg-[#439897]" />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-[30px] w-[30px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={Righticon}
            alt=""
            className="h-full w-full object-contain"
          />
        </button>
      </div>

      {/* Small peek thumbnail */}
      <div
        ref={peekRef}
        key={nextIndex}
        className="hidden lg:block absolute right-[-70px] top-1/2 -translate-y-1/2 w-[290px] pointer-events-none select-none opacity-20 scale-110 animate-[peekFadeIn_900ms_ease-out_forwards]"
      >
        <Image
          src={nextSlide.image}
          alt=""
          className="w-full h-auto object-contain blur-[2px]"
          aria-hidden="true"
        />
      </div>

      <style jsx>
        {`
          @keyframes fadeInText {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes peekFadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.25;
            }
          }
        `}
      </style>
    </section>
  );
}
