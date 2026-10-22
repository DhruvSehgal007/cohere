"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import LinkedinImage from "@/assets/images/homepage/linkdin-post.png";
import CohereLogo from "@/assets/images/homepage/cohere-linkdin-logo.png";
import LinkedinIcon from "@/assets/images/homepage/linkdinicon.svg";

// same post data, one set per platform — swap in real Instagram content/images
// once you have them; for now Instagram reuses the same post text/image as a placeholder
const linkedinPosts = [
  {
    id: 1,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 550,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 2,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 412,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 3,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 389,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 4,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 601,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
];

const instagramPosts = [
  {
    id: 1,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 720,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 2,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 498,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 3,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 355,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
  {
    id: 4,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 512,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024",
  },
];

const GAP = 24;
const REPEATS = 9;
const TRANSITION_MS = 700;
const AUTO_MS = 4000;

export default function SocialFeedSection() {
  const [platform, setPlatform] = useState<"linkedin" | "instagram">(
    "linkedin"
  );
  const posts = platform === "linkedin" ? linkedinPosts : instagramPosts;
  const N = posts.length;
  const START = Math.floor(REPEATS / 2) * N;
  const loop = Array.from({ length: REPEATS }, () => posts).flat();

  const [position, setPosition] = useState(START);
  const positionRef = useRef(position);
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepRef = useRef(0); // measured card width + gap, updates per breakpoint

  const measureStep = () => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const cardEl = track.children[0] as HTMLElement;
    stepRef.current = cardEl.getBoundingClientRect().width + GAP;
  };

  const applyTransform = (pos: number, animate: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    const offset = (pos - 1) * stepRef.current;
    el.style.transition = animate
      ? `transform ${TRANSITION_MS}ms ease`
      : "none";
    el.style.transform = `translate3d(${-offset}px,0,0)`;
  };

  const goTo = (nextPosition: number) => {
    setPosition(nextPosition);
    applyTransform(nextPosition, true);

    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => {
      setPosition((p) => {
        if (Math.abs(p - START) < N) return p;
        const safe = START + (((p - START) % N) + N) % N;
        applyTransform(safe, false);
        return safe;
      });
    }, TRANSITION_MS + 20);
  };

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  // reset the slider whenever the platform is switched, and (re)measure
  // the card width — content differs slightly per platform/breakpoint
  useEffect(() => {
    const newStart = Math.floor(REPEATS / 2) * N;
    setPosition(newStart);
    measureStep();
    applyTransform(newStart, false);

    const onResize = () => {
      measureStep();
      applyTransform(positionRef.current, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo(positionRef.current + 1);
    }, AUTO_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform]);

  const activeIndex = (((position - START) % N) + N) % N;

  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom  px-4 sm:px-6">
        {/* Header */}
        












<div className="mb-10">
  <div className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-end md:justify-between">

    {/* LEFT CONTENT */}
    <div className="w-full md:w-1/2">

      {/* LABEL */}
      <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
        <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white">
          SOCIAL FEED
        </span>
      </div>

      {/* HEADING */}
      <h2
        className="
          mt-3
          w-full
          font-avenir
          font-extrabold
          leading-[1.15]
          text-[#101C1C]
          md:mt-4
          lg:max-w-[600px]
          text-[32px]
          sm:text-[36px]
          md:text-[40px]
        "
      >
        Follow Our Social Feed
      </h2>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end">

      {/* DESCRIPTION - FIRST ON MOBILE */}
      <p
        className="
          order-1
          md:order-2
          w-full
          max-w-[524px]
          font-nunito-sans
          font-normal
          text-[16px]
          sm:text-[18px]
          md:text-[20px]
          leading-[1.5]
          text-[#2E262E]
          text-left
          md:text-right
        "
      >
        Stay updated with the latest insights, tips, and company
        updates. Connect with us on our social channels.
      </p>

      {/* PLATFORM BUTTONS - BELOW PARAGRAPH ON MOBILE */}
      <div className="order-2 md:order-1 flex gap-3">

        <button
          type="button"
          aria-label="Show LinkedIn feed"
          aria-pressed={platform === "linkedin"}
          onClick={() => setPlatform("linkedin")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            platform === "linkedin"
              ? "bg-[#439897] text-white"
              : "border border-[#439897] text-[#439897]"
          }`}
        >
          <FaLinkedinIn size={18} />
        </button>

        <button
          type="button"
          aria-label="Show Instagram feed"
          aria-pressed={platform === "instagram"}
          onClick={() => setPlatform("instagram")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            platform === "instagram"
              ? "bg-[#439897] text-white"
              : "border border-[#439897] text-[#439897]"
          }`}
        >
          <FaInstagram size={18} />
        </button>

      </div>
    </div>
  </div>
</div>

































        {/* Slider */}
        <div className="relative overflow-hidden w-full">
          <div ref={trackRef} className="flex gap-6">
            {loop.map((post, i) => {
              const isActive = i % N === activeIndex;
              return (
                <div
                  key={`${platform}-${i}`}
                  className="cards shrink-0 bg-white rounded-[12px] overflow-hidden shadow-sm w-full min-[600px]:w-[calc(50%-12px)] min-[1024px]:w-[calc((100%-48px)/3)]"
                >
                  <div className="p-4 md:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={CohereLogo}
                            alt="Cohere Compliance"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-avenir font-bold  text-[16px] md:text-[20px] leading-none text-[#2E262E]">
                            {post.title}
                          </h4>
                          <p className="font-nunito-sans  text-[14px] md:text-[16px] font-normal text-[#777777] mt-1">
                            {post.username}
                          </p>
                        </div>
                      </div>

                      {platform === "linkedin" ? (
                        <Image
                          src={LinkedinIcon}
                          alt="LinkedIn"
                          className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0"
                        />
                      ) : (
                        <FaInstagram
                          size={28}
                          className="text-[#E4405F] shrink-0"
                        />
                      )}
                    </div>

                    <p className="mt-6 font-nunito-sans  text-[16px] md:text-[20px] font-normal leading-relaxed text-[#2E262E] line-clamp-4">
                      {post.text}
                    </p>

                    <span className="mt-4 font-nunito-sans  text-[16px] md:text-[16px] font-normal text-[#666666] hover:text-[#024948] transition-colors">
                      {post.date}
                    </span>
                  </div>

                  <Image
                    src={post.image}
                    alt=""
                    className={`w-full aspect-[16/10] object-cover transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}