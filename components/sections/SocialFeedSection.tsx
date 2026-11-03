"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import LinkedinImage from "@/assets/images/homepage/linkdin-post.png";
import CohereLogo from "@/assets/images/homepage/cohere-linkdin-logo.png";
import LinkedinIcon from "@/assets/images/homepage/linkdinicon.svg";
import Likeicon from "@/assets/images/homepage/Like-icon.svg";
import arrowsocial from "@/assets/images/homepage/arrow-social.svg";

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
  const [platform, setPlatform] = useState<"linkedin" | "instagram">("linkedin");

  // --- DYNAMIC DATA FETCHING WITH FALLBACK ---
  const [dynamicPosts, setDynamicPosts] = useState<{
    linkedin: any[];
    instagram: any[];
  }>({ linkedin: [], instagram: [] });
  const [expandedIds, setExpandedIds] = useState<Record<string | number, boolean>>({});

  const toggleExpand = (id: string | number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchSocialPosts() {
      try {
        const res = await fetch("/api/social-feed");
        const data = await res.json();
        if (
          isMounted &&
          data.success &&
          Array.isArray(data.posts) &&
          data.posts.length > 0
        ) {
          const li: any[] = [];
          const ig: any[] = [];

          data.posts.forEach((p: any, idx: number) => {
            const urnMatch = p.postUrl?.match(/urn:li:(share|activity|ugcPost):\d+/i);
            const actMatch = p.postUrl?.match(/activity-?(\d+)/i);
            const detectedEmbed =
              p.embedUrl ||
              (urnMatch
                ? `https://www.linkedin.com/embed/feed/update/${urnMatch[0]}`
                : actMatch
                ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${actMatch[1]}`
                : "");

            const formatted = {
              id: p.postId || idx + 1,
              platform: p.platform || "linkedin",
              title: p.title || (p.platform === "instagram" ? "Cohere Compliance" : "Cohere Compliance"),
              username: p.username || "@coherecompliance",
              avatar: p.avatar || "",
              text: p.text,
              likes: p.likes || 0,
              image: p.image || LinkedinImage,
              date: p.date,
              postUrl: p.postUrl,
              embedUrl: detectedEmbed,
            };

            if (p.platform === "instagram") {
              ig.push(formatted);
            } else {
              li.push(formatted);
            }
          });

          setDynamicPosts({ linkedin: li, instagram: ig });
        }
      } catch (err) {
        console.error("Failed to load dynamic social posts:", err);
      }
    }

    fetchSocialPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  const fallbackPosts = platform === "instagram" ? instagramPosts : linkedinPosts;
  const currentPlatformPosts = dynamicPosts[platform];
  const posts =
    currentPlatformPosts && currentPlatformPosts.length > 0
      ? currentPlatformPosts
      : fallbackPosts;
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
  }, [platform, N]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo(positionRef.current + 1);
    }, AUTO_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform, N]);

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

      {/* PLATFORM TOGGLE BUTTONS - LINKEDIN & INSTAGRAM */}
      <div className="order-2 md:order-1 flex gap-3">
        <button
          type="button"
          onClick={() => setPlatform("linkedin")}
          aria-label="LinkedIn feed"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            platform === "linkedin"
              ? "bg-[#439897] text-white shadow-md scale-105"
              : "bg-[#F3F3F3] text-[#737373] hover:bg-[#EBEBEB] hover:text-[#0A66C2]"
          }`}
        >
          <FaLinkedinIn size={18} />
        </button>
        <button
          type="button"
          onClick={() => setPlatform("instagram")}
          aria-label="Instagram feed"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            platform === "instagram"
              ? "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md scale-105"
              : "bg-[#F3F3F3] text-[#737373] hover:bg-[#EBEBEB] hover:text-[#ee2a7b]"
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
          <div ref={trackRef} className="flex gap-6 items-stretch">
            {loop.map((post, i) => {
              const isActive = i % N === activeIndex;
              const isExpanded = Boolean(expandedIds[post.id]);
              const isLongText = post.text && post.text.length > 120;

              return (
                <div
                  key={`${platform}-${i}`}
                  className="cards shrink-0 bg-white rounded-[16px] border border-[#ECECEC] overflow-hidden shadow-sm w-full min-[600px]:w-[calc(50%-12px)] min-[1024px]:w-[calc((100%-48px)/3)] flex flex-col justify-between"
                >
                  <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* HEADER */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border border-[#E5E5E5] bg-gray-50">
                            {/* --- PREVIOUS CODE (CohereLogo hardcoded for every post) ---
                            <Image
                              src={CohereLogo}
                              alt="Cohere Compliance"
                              className="w-full h-full object-cover"
                            />
                            --- END PREVIOUS CODE --- */}
                            {post.avatar ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={post.avatar}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Image
                                src={CohereLogo}
                                alt="Cohere Compliance"
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="font-avenir font-bold text-[16px] md:text-[18px] leading-tight text-[#2E262E]">
                              {post.title}
                            </h4>
                            <p className="font-nunito-sans text-[13px] md:text-[14px] font-normal text-[#777777] mt-0.5">
                              {post.username}
                            </p>
                          </div>
                        </div>

                        {platform === "instagram" ? (
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shrink-0 shadow-xs">
                            <FaInstagram size={14} />
                          </div>
                        ) : (
                          <Image
                            src={LinkedinIcon}
                            alt="LinkedIn"
                            className="w-6 h-6 md:w-7 md:h-7 object-contain shrink-0"
                          />
                        )}
                      </div>

                      {/* POST TEXT WITH FIXED LENGTH + EXPAND */}
                      <p
                        className={`mt-4 font-nunito-sans text-[15px] md:text-[16px] font-normal leading-relaxed text-[#2E262E] transition-all duration-200 ${
                          isExpanded ? "" : "line-clamp-3 min-h-[4.2rem]"
                        }`}
                      >
                        {post.text}
                      </p>

                      {/* READ MORE / SHOW LESS */}
                      {isLongText && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(post.id);
                          }}
                          className="mt-2 text-[13px] md:text-[14px] font-semibold text-[#439897] hover:underline cursor-pointer"
                        >
                          {isExpanded ? "Show less" : "Read more..."}
                        </button>
                      )}
                    </div>

                    <span className="mt-4 block font-nunito-sans text-[13px] md:text-[14px] font-normal text-[#777777]">
                      {post.date}
                    </span>
                  </div>

                  {/* POST IMAGE */}
                  {/* --- PREVIOUS CODE (aspect-[16/10] with default object-cover center which cropped heads/faces) ---
                  <div className="w-full aspect-[16/10] overflow-hidden shrink-0 bg-gray-100 mt-auto">
                    <img src={post.image} className="w-full h-full object-cover" />
                  </div>
                  --- END PREVIOUS CODE --- */}
                  <div className="w-full aspect-[4/3] overflow-hidden shrink-0 bg-gray-100 mt-auto">
                    {typeof post.image === "string" && post.image.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-85"
                        }`}
                      />
                    ) : (
                      <Image
                        src={post.image || LinkedinImage}
                        alt={post.title || ""}
                        className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-85"
                        }`}
                      />
                    )}
                  </div>

                  {/* FOOTER: LIKES & SHARE */}
                  <div className="flex items-center justify-between border-t border-[#F2F2F2] px-6 py-3.5 bg-white">
                    {/* LIKES */}
                    <div className="flex items-center gap-2 text-[#3A3A3A]">
                      <Image
                        src={Likeicon}
                        alt="Likes"
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0 object-contain"
                      />
                      <span className="font-nunito-sans text-[15px] md:text-[17px] font-normal text-[#3A3A3A]">
                        {post.likes || 0}
                      </span>
                    </div>

                    {/* SHARE */}
                    {post.postUrl ? (
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-nunito-sans text-[14px] md:text-[15px] font-medium text-[#3A3A3A] transition-colors hover:text-[#024948]"
                      >
                        <span>Share</span>
                        <Image
                          src={arrowsocial}
                          alt=""
                          className="h-3.5 w-3.5 shrink-0 object-contain"
                        />
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 font-nunito-sans text-[14px] md:text-[15px] font-medium text-[#3A3A3A]">
                        <span>Share</span>
                        <Image
                          src={arrowsocial}
                          alt=""
                          className="h-3.5 w-3.5 shrink-0 object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}