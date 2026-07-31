"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import bannerImage from "@/assets/images/homepage/side-images.png";
// import bannerImageone from "@/assets/images/homepage/linkdin-post.png";
import sliderBackground from "@/assets/images/homepage/slider-background.png";

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
      "End-to-end PoSH advisory, policy drafting, and training so your organization stays compliant and confident every single day.",
    image: bannerImage,
  },
  {
    highlight: "Integrity.",
    description:
      "Independent workplace investigations led by seasoned advocates—objective findings you and your people can trust.",
    image: bannerImage,
  },
  {
    highlight: "Cultures.",
    description:
      "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
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

  // capture where the small peek thumbnail is *before* we swap content,
  // so we can morph the incoming main image from that exact spot/size
  const goTo = (i: number, forward: boolean) => {
    const next = ((i % N) + N) % N;
    isForwardStep.current = forward;

    if (forward && peekRef.current) {
      prevPeekRect.current = peekRef.current.getBoundingClientRect();
    } else {
      prevPeekRect.current = null;
    }

    setTextKey((k) => k + 1);
    setIndex(next);
  };

  const next = () => goTo(index + 1, true);
  const prev = () => goTo(index - 1, false);

  // FLIP: after the main image swaps to the new slide, if we have a
  // captured "from" rect (the peek's old position/size), animate the
  // main image from that small rect up to its natural big rect —
  // i.e. it visually grows from small to big and lands in place.
  useLayoutEffect(() => {
    const mainEl = mainImgWrapRef.current;
    if (!mainEl) return;

    const fromRect = prevPeekRect.current;

    if (!fromRect || !isForwardStep.current) {
      // no morph available (prev/dot navigation) — simple fade
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
      fromRect.left + fromRect.width / 2 - (toRect.left + toRect.width / 2);
    const translateY =
      fromRect.top + fromRect.height / 2 - (toRect.top + toRect.height / 2);

    mainEl.style.transformOrigin = "center center";
    mainEl.style.transition = "none";
    mainEl.style.opacity = "0.5";
    mainEl.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;

    // force reflow so the browser registers the "from" state before we animate
    void mainEl.offsetWidth;

    mainEl.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1), opacity ${TRANSITION_MS}ms ease`;
    mainEl.style.transform = "translate(0, 0) scale(1)";
    mainEl.style.opacity = "1";

    prevPeekRect.current = null;
  }, [index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo(index + 1, true);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

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
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center pt-40 pb-10"
      style={{ backgroundImage: `url(${sliderBackground.src})` }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: text */}
        <div>
          <h1
            className="font-avenir font-extrabold leading-[1.05] text-[112px]"
            style={{ WebkitTextStroke: "2px #439897", color: "transparent" }}
          >
            {staticContent.line1}
          </h1>
          <h1 className="font-avenir font-normal leading-[1.05] text-[72px] text-[#070F0F] mt-1">
            {staticContent.line2}{" "}
            <span
              key={textKey}
              className="bg-[#439897] text-white font-avenir font-extrabold text-[62px] px-3 py-3 rounded-[10px] inline-block animate-[fadeInText_700ms_ease-in-out]"
            >
              {active.highlight}
            </span>
          </h1>

          <h3 className="font-avenir font-[800] text-[50px] text-[#367A79] mt-6">
            {staticContent.subtitle}
          </h3>

          <p
            key={`desc-${textKey}`}
            className="font-nunito-sans font-normal text-[20px] text-[#2E262E] mt-4 max-w-[620px] leading-relaxed animate-[fadeInText_700ms_ease-in-out]"
          >
            {active.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#439897] hover:bg-[#357b7a] transition-colors text-[#FFFFFF] font-avenir font-[800] text-[16px] px-6 py-3 rounded-lg">
              Schedule a Consulation
            </button>
            <button className="border border-[#1B3D3C] bg-[#FFFFFF] hover:bg-[#357b7a] hover:text-white transition-colors font-avenir font-[800] text-[16px] px-6 py-3 rounded-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* RIGHT: single main image, morphs in from the peek's position/size */}
        <div className="relative w-full flex justify-center">
          <div ref={mainImgWrapRef} className="w-full max-w-[580px]">
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

      <div className="container-custom flex items-center justify-end gap-3 mt-5">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-9 h-9 rounded-full border border-[#439897] text-[#439897] flex items-center justify-center hover:bg-[#439897] hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-3 h-3 bg-[#439897]"
                  : "w-2.5 h-2.5 bg-transparent border border-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-9 h-9 rounded-full border border-[#439897] text-[#439897] flex items-center justify-center hover:bg-[#439897] hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Small peek thumbnail — this is the "from" shape/position the
          next main image morphs out of when advancing forward */}
      <div
        ref={peekRef}
        key={nextIndex}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[160px] pointer-events-none select-none grayscale animate-[peekFadeIn_900ms_ease-out_forwards]"
      >
        <Image
          src={nextSlide.image}
          alt=""
          className="w-full h-auto object-contain"
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
