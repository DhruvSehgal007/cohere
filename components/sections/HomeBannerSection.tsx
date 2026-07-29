
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bannerImage from "@/assets/images/homepage/side-images.png";
import bannerImagetwo from "@/assets/images/homepage/testing.png";
import sliderBackground from "@/assets/images/homepage/slider-background.png";

// fixed text that never changes between slides
const staticContent = {
  line1: "Understand",
  line2: "Workplace",
  subtitle: "Keep It Right",
};

// only these two fields differ per slide
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
const TRANSITION_MS = 900; // slower, smoother slide

export default function HomeBanner() {
  const [index, setIndex] = useState(0);
  const [textKey, setTextKey] = useState(0); // retrigger text slide-in

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // image track: real slides + one cloned copy of slide 0 at the end,
  // so advancing past the last real slide slides smoothly into a
  // visual duplicate of slide 0, then we silently snap index back to 0
  const loopSlides = [...slides, slides[0]];

  const applyTransform = (i: number, animate: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = animate
      ? `transform ${TRANSITION_MS}ms ease-in-out`
      : "none";
    el.style.transform = `translateX(-${i * 100}%)`;
  };

  const goTo = (i: number) => {
    const next = ((i % N) + N) % N;
    const isWrapForward = next === 0 && i > 0 && index === N - 1;

    setTextKey((k) => k + 1);

    if (isWrapForward) {
      // slide into the cloned slide 0 at position N, then silently reset
      setIndex(N); // triggers render using loopSlides[N] visually
      applyTransform(N, true);

      if (resetTimeout.current) clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(() => {
        setIndex(0);
        applyTransform(0, false);
      }, TRANSITION_MS + 20);
    } else {
      setIndex(next);
      applyTransform(next, true);
    }
  };

  const next = () => goTo((index === N ? 0 : index) + 1);
  const prev = () => goTo((index === N ? 0 : index) - 1);

  useEffect(() => {
    applyTransform(0, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((index === N ? 0 : index) + 1);
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
      goTo((index === N ? 0 : index) + 1);
    }, AUTO_MS);
  };

  // active dot / active text should reflect the real slide (0..N-1),
  // even during the brief moment index === N (visually still slide 0)
  const activeContentIndex = index === N ? 0 : index;
  const active = slides[activeContentIndex];
  const nextContentIndex = (activeContentIndex + 1) % N;
const nextSlide = slides[nextContentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center my-20"
      style={{ backgroundImage: `url(${sliderBackground.src})` }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="max-w-[1500px] mx-auto py-0 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: text (slides in on change) */}
        {/* <div key={textKey} className="animate-[slideInText_900ms_ease-out]"> */}
         <div>
  <h1
    className="font-avenir font-extrabold leading-[1.05] text-[100px]"
    style={{
      WebkitTextStroke: "2px #439897",
      color: "transparent",
    }}
  >
    {staticContent.line1}
  </h1>
  <h1 className="font-avenir font-normal leading-[1.05] text-[62px] text-[#070F0F] mt-1">
    {staticContent.line2}{" "}
    <span
      key={textKey}
      className="bg-[#439897] text-white font-avenir font-extrabold text-[62px] px-3 py-3 rounded-[10px] inline-block animate-[fadeInText_700ms_ease-in-out]"
    >
      {active.highlight}
    </span>
  </h1>

  <h3 className="font-avenir font-normal text-[50px] text-[#439897] mt-6">
    {staticContent.subtitle}
  </h3>

  <p
    key={`desc-${textKey}`}
    className="font-nunito-sans font-normal text-[20px] text-[#2E262E] mt-4 max-w-[520px] leading-relaxed animate-[fadeInText_700ms_ease-in-out]"
  >
    {active.description}
  </p>

  <div className="flex flex-wrap gap-4 mt-8">
    <button className="bg-[#439897] hover:bg-[#357b7a] transition-colors text-[#FFFFFF] font-avenir font-[800] text-[16px] px-6 py-3 rounded">
      Schedule a Consulation
    </button>
<button className="border border-[#1B3D3C] bg-[#FFFFFF] hover:bg-[#357b7a] hover:text-white transition-colors font-avenir font-[800] text-[16px] px-6 py-3 rounded">
  Schedule a Consultation
</button>
  </div>
</div>

        {/* RIGHT: image slider */}
        <div className="relative w-full overflow-hidden">
          <div ref={trackRef} className="flex">
            {loopSlides.map((s, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <Image
                  src={s.image}
                  alt={`slide-${i + 1}`}
                  className="max-w-[580px] h-auto object-contain"
                  priority={i === 0}
                />
                
              </div>
            ))}

          </div>

          {/* Controls */}

          
        </div>

      </div>
                        <div className="max-w-[1500px] mx-auto px-6 jsx-a55a3ae0e30da40c flex items-center justify-end gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-[#439897] text-[#439897] flex items-center justify-center hover:bg-[#439897] hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeContentIndex
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
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
{/* Faded peek of the next slide, poking in from the right edge */}
<div
  key={textKey}
  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[160px] pointer-events-none select-none animate-[peekSlideIn_900ms_ease-out]"
>
  <Image
    src={nextSlide.image}
    alt=""
    className="w-full h-auto object-contain opacity-25 grayscale"
    aria-hidden="true"
  />
</div>
      <style jsx>{`
@keyframes fadeInText {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


        @keyframes peekSlideIn {
  from { opacity: 0; transform: translateX(50px); }
  to   { opacity: 1; transform: translateX(0); }
}
      `}</style>
    </section>
  );
}
