// export default function SocialFeedSection() {
//   return (
//     <section className="">
//       <div className="max-w-[1500px] mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//         <div>
//           <span className="inline-block bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded">
//             SOCIAL FEED
//           </span>
//           <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[588px]">
//             Follow Our Social Feed
//           </h2>
//         </div>
//         <p className="font-nunito-sans font-normal text-[20px] text-[#2E262E] max-w-[524px] ml-auto text-right">
//           Stay updated with the latest insights, tips, and company updates. Connect with us on our social channels.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heart, Share2} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


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
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 2,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 412,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 3,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 389,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 4,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 601,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
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
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 2,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 498,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 3,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 355,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
  },
  {
    id: 4,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Training, audits, and advisory built around your teams—so respect, safety, and accountability become everyday defaults.",
    likes: 512,
    image: LinkedinImage,
    date: "10:30 AM May 21, 2024"
  },
];

const CARD_WIDTH = 468;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
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

  const applyTransform = (pos: number, animate: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    const offset = (pos - 1) * STEP;
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

  // reset the slider whenever the platform is switched
  useEffect(() => {
    const newStart = Math.floor(REPEATS / 2) * N;
    setPosition(newStart);
    applyTransform(newStart, false);
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
    <section className="w-full bg-white">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-felx-start md:justify-between gap-6">
          <div>
            <span className="inline-block w-auto md:w-[150px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
              SOCIAL FEED
            </span>
            <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[588px]">
              Follow Our Social Feed
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
                        {/* Platform toggle */}
            <div className="flex gap-3">
             <button
  type="button"
  onClick={() => setPlatform("linkedin")}
  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
    platform === "linkedin"
      ? "bg-[#439897] text-white"
      : "border border-[#439897] text-[#439897]"
  }`}
>
  <FaLinkedinIn size={18} />
</button>
             <button
  type="button"
  onClick={() => setPlatform("instagram")}
  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
    platform === "instagram"
      ? "bg-[#439897] text-white"
      : "border border-[#439897] text-[#439897]"
  }`}
>
  <FaInstagram size={18} />
</button>
            </div>
            <p className="font-nunito-sans font-normal text-[20px] text-[#5B5B5B] max-w-[524px] text-right">
              Stay updated with the latest insights, tips, and company
              updates. Connect with us on our social channels.
            </p>


          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div ref={trackRef} className="flex gap-6 w-max">
            {loop.map((post, i) => {
              const isActive = i % N === activeIndex;
              return (
                <div
                  key={`${platform}-${i}`}
                  style={{ width: `${CARD_WIDTH}px` }}
                  className="cards shrink-0 bg-white rounded-[12px] border border-[#ECECEC] overflow-hidden shadow-sm"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5E5E5] shrink-0">
                          <Image
                            src={CohereLogo}
                            alt="Cohere Compliance"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-avenir font-bold text-[20px] leading-none text-[#2E262E]">
                            {post.title}
                          </h4>
                          <p className="font-nunito-sans text-[16px] font-normal text-[#777777] mt-1">
                            {post.username}
                          </p>
                        </div>
                      </div>

                      {platform === "linkedin" ? (
                        <Image
                          src={LinkedinIcon}
                          alt="LinkedIn"
                          className="w-8 h-8 object-contain shrink-0"
                        />
                      ) : (
                       <FaInstagram
  size={28}
  className="text-[#E4405F] shrink-0"
/>
                      )}
                    </div>

                    <p className="mt-6 font-nunito-sans text-[20px] font-normal leading-relaxed text-[#2E262E] line-clamp-4">
                      {post.text}
                    </p>

                    <button className="mt-4 font-nunito-sans text-[16px] font-normal text-[#666666] hover:text-[#024948] transition-colors">
                      {post.date}
                    </button>
                  </div>

                  <Image
                    src={post.image}
                    alt=""
                    className={`w-full aspect-[16/10] object-cover transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                  />

                  {/* <div className="flex items-center justify-between px-6 py-5 border-t border-[#F2F2F2]">
                    <div className="flex items-center gap-2 text-[#444444]">
                      <Heart size={18} />
                      <span className="font-nunito-sans text-[16px] font-normal">
                        {post.likes}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 font-nunito-sans text-[16px] font-normal text-[#444444] hover:text-[#024948] transition-colors">
                      <Share2 size={16} />
                      Share
                    </button>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        {/* <div className="mt-10 flex items-center justify-end gap-3">
          {posts.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(START + i)}
              aria-label={`Go to post ${i + 1}`}
              className="h-5 w-5 rounded-full border border-[#0D1E1E] flex items-center justify-center"
            >
              {i === activeIndex && (
                <span className="h-3 w-3 rounded-full bg-[#439897]" />
              )}
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
}
