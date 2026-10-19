"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import one from "@/assets/images/homepage/one.svg";
import two from "@/assets/images/homepage/two.svg";
import three from "@/assets/images/homepage/three.svg";
import roundIcon from "@/assets/images/homepage/round-icon.svg";

const posts = [
  {
    image: one,
    title: "Anti Sexual Harassment",
    text: "Our team of experienced Lawyers & SMEs act as external members on company internal committees. We provide end-to-end support for PoSH complaint management, conciliations & investigations, train IC members, leaders & employees & ensure regulatory compliances.",
    href: "/anti-sexual-harassment",
  },
  {
    image: two,
    title: "Workplace Discrimination",
    text: "We set operational excellence standards through ongoing programs, mediating and resolving concerns with structured, compliant frameworks. We work closely with leadership, audits & consultation for a customized approach.",
    href: "/workplace-discrimination",
  },
  {
    image: three,
    title: "Employment and Labour",
    text: "Our specialists guide employee discipline, compliance, and investigations through workplace transformation. Our team supports the full framework, contributes to policy building, and drives a strong regulatory approach.",
    href: "/employeement-labour",
  },
];

const STACK_TOP = 110;
const STACK_STEP = 30;
const SCROLL_GAP = 14;
const PEEK_HEIGHT = 140;
const CARD_HEIGHT = 350;

function useScrollStack(count: number) {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardTops = useRef<number[]>([]);
  const thresholds = useRef<number[]>([]);
  const windowStart = useRef(0);
  const framePending = useRef(false);

  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  const measure = () => {
    const stackEl = stackRef.current;
    if (!stackEl) return;
    const stackTopAbs = stackEl.getBoundingClientRect().top + window.scrollY;
    cardTops.current = cardRefs.current.map((el) =>
      el ? stackTopAbs + el.offsetTop : 0,
    );
    const slot2Line = STACK_TOP + STACK_STEP * 2;
    thresholds.current = [];
    for (let i = 3; i < cardTops.current.length; i += 1) {
      thresholds.current.push(cardTops.current[i] - slot2Line);
    }
  };

  const applyState = (start: number, scrollY: number) => {
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const relative = idx - start;
      const isOld = relative < 0;
      const slot = isOld ? 2 : Math.min(relative, 2);
      let isPeek = false;

      if (!isOld && relative === 0 && idx + 1 < cardTops.current.length) {
        const peekAt = cardTops.current[idx + 1] - (STACK_TOP + STACK_STEP);
        isPeek = scrollY >= peekAt;
      }
      if (!isOld && relative === 1 && idx + 1 < cardTops.current.length) {
        const peekAt = cardTops.current[idx + 1] - (STACK_TOP + STACK_STEP * 2);
        isPeek = scrollY >= peekAt;
      }

      el.style.top = `${STACK_TOP + STACK_STEP * slot}px`;
      el.style.zIndex = String(220 + idx);

      const overlay = el.querySelector(".card-overlay") as HTMLDivElement;

      if (isPeek || isOld) {
        el.style.clipPath = `inset(0 0 calc(100% - ${PEEK_HEIGHT}px) 0 round 0px)`;
        if (overlay) overlay.style.opacity = "1";
        el.style.border = "1px solid rgba(0,0,0,.15)";
      } else {
        el.style.clipPath = "inset(0 round 28px)";
        if (overlay) overlay.style.opacity = "0";
        el.style.border = "1px solid rgba(0,0,0,0)";
      }

      if (isOld) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.pointerEvents = "none";
      } else {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.pointerEvents = "auto";
      }
    });
  };

  const syncWindowStart = (scrollY: number) => {
    let start = 0;
    while (
      start < thresholds.current.length &&
      scrollY >= thresholds.current[start]
    ) {
      start += 1;
    }
    windowStart.current = start;
  };

  const resetMobile = () => {
    windowStart.current = 0;
    cardRefs.current.forEach((el) => {
      if (!el) return;
      el.style.position = "relative";
      el.style.top = "auto";
      el.style.clipPath = "inset(0 round 28px)";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  };

  const requestUpdate = () => {
    if (framePending.current) return;
    framePending.current = true;
    requestAnimationFrame(update);
  };

  const update = () => {
    framePending.current = false;
    if (!isDesktop()) {
      resetMobile();
      return;
    }
    const scrollY = window.scrollY;
    let moved = false;

    if (
      windowStart.current < thresholds.current.length &&
      scrollY >= thresholds.current[windowStart.current]
    ) {
      windowStart.current += 1;
      moved = true;
    } else if (
      windowStart.current > 0 &&
      scrollY < thresholds.current[windowStart.current - 1]
    ) {
      windowStart.current -= 1;
      moved = true;
    }

    applyState(windowStart.current, scrollY);

    const needForward =
      windowStart.current < thresholds.current.length &&
      scrollY >= thresholds.current[windowStart.current];
    const needBackward =
      windowStart.current > 0 &&
      scrollY < thresholds.current[windowStart.current - 1];

    if (moved || needForward || needBackward) requestUpdate();
  };

  const rebuild = (sync: boolean) => {
    measure();
    if (!isDesktop()) {
      resetMobile();
      return;
    }
    cardRefs.current.forEach((el) => {
      if (el) el.style.position = "sticky";
    });
    if (sync) {
      syncWindowStart(window.scrollY);
      applyState(windowStart.current, window.scrollY);
    } else {
      requestUpdate();
    }
  };

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, count);
    rebuild(true);

    const onScroll = () => requestUpdate();
    const onResize = () => rebuild(true);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return { stackRef, cardRefs };
}

export default function SocialFeedSection() {
  const { stackRef, cardRefs } = useScrollStack(posts.length);

  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6 mb-10">
        {/* Header */}

        <div className="mb-20">
          <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-start md:justify-between">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
                <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
                  WHAT WE ARE EXPERT AT
                </span>
              </div>

              <h2
                className="
                mt-3
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                md:mt-4
                lg:max-w-[590px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
              >
                Our Core Service Areas
              </h2>
            </div>

            <p
              className="
              w-full
              font-nunito-sans
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              lg:max-w-[580px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
            >
              Cohere Consultants LLP is a boutique practice with a pan-India
              presence, offering comprehensive legal and compliance services.
              Specializing in areas such as laws on sexual harassment and
              discrimination in the workplace, as well as maternity and labor
              laws, the firm boasts a multidisciplinary team.
            </p>
          </div>
        </div>

        {/* Scroll-stacking cards */}
        <div ref={stackRef} className="relative flex flex-col">
          {posts.map((post, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative w-full overflow-hidden rounded-[80px] shadow-xl max-[767px]:!h-auto max-[767px]:rounded-[32px] md:max-[1200px]:rounded-[40px] md:max-[1200px]:!h-[260px]"
              style={{
                height: `${CARD_HEIGHT}px`,
                marginBottom: `${SCROLL_GAP}px`,
                background:
                  "linear-gradient(120deg, #439897 0%, #1c3a3a 55%, #0D1E1E 100%)",
                transition:
                  "top 380ms cubic-bezier(0.22,1,0.36,1), clip-path 320ms ease, opacity 350ms ease, transform 360ms cubic-bezier(0.22,1,0.36,1), border-color 420ms ease",
                willChange: "top, clip-path, opacity, transform",
              }}
            >
              <div className="card-overlay absolute inset-0 rounded-[28px] pointer-events-none"></div>
              <div className="flex h-full items-center justify-around gap-8 px-10 md:px-16 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-6 max-[767px]:px-6 max-[767px]:py-8 md:max-[1200px]:px-8 md:max-[1200px]:justify-around md:max-[1200px]:gap-10">
                {/* Image */}
                <div className="shrink-0 overflow-hidden max-[767px]:w-full max-[767px]:max-w-[260px] max-[767px]:self-center md:max-[1200px]:max-w-[290px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title + text */}
                <div className="textwithbtn flex justify-between items-end gap-[60px] max-[767px]:w-full md:max-[1200px]:gap-[24px]">
                  {" "}
                  <div className="flex flex-col gap-[40px] flex-1 max-w-[640px] max-[767px]:gap-5 md:max-[1200px]:gap-4 md:max-[1200px]:max-w-[360px]">
                    <h3 className="font-avenir font-extrabold text-white text-[40px] leading-tight max-[767px]:text-[28px] md:max-[1200px]:text-[26px]">
                      {post.title}
                    </h3>

                    <p className="font-nunito-sans font-normal text-white text-[16px] md:text-[16px] leading-relaxed tracking-[0.04em] leading-6 max-[767px]:text-[15px] md:max-[1200px]:text-[14px] md:max-[1200px]:leading-5">
                      {post.text}
                    </p>
                  </div>
                  {/* Arrow */}
                  {/* Arrow with dynamic page link */}
                  <Link
                    href={post.href}
                    aria-label={`Explore ${post.title}`}
                    className="
    group
    shrink-0
    hidden
    md:flex
    w-14
    h-14
    rounded-full
    items-center
    justify-center
    hover:bg-white
    transition-colors
    cursor-pointer
    md:max-[1200px]:w-9
    md:max-[1200px]:h-9
  "
                  >
                    <span
                      className="
      block
      w-[68px]
      h-[68px]
      bg-white
      group-hover:bg-[#439897]
      transition-colors
      md:max-[1200px]:!w-[40px]
      md:max-[1200px]:!h-[40px]
    "
                      style={{
                        WebkitMaskImage: `url(${roundIcon.src})`,
                        maskImage: `url(${roundIcon.src})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
