
"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import teamMemberLarge from "@/assets/images/OurTeam/Team-member-large.png";
import teamMember from "@/assets/images/OurTeam/team-member.png";

export type Expert = {
  name: string;
  role: string;
  bio: string;
  largeImage: StaticImageData;
  cardImage: StaticImageData;
  avatarImage: StaticImageData;
  socialLinks?: { platform: "Facebook" | "Twitter" | "Instagram"; href: string }[];
};

export const experts: Expert[] = [
  {
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    bio: "Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.HR, and training solutions for safer, more inclusive workplaces.",
    largeImage: teamMemberLarge,
    cardImage: teamMember,
    avatarImage: teamMember,
  },
  {
    name: "Ayesha Kapoor",
    role: "hr strategist, trainer",
    bio: "Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.HR, and training solutions for safer, more inclusive workplaces.",
    largeImage: teamMemberLarge,
    cardImage: teamMember,
    avatarImage: teamMember,
  },
  {
    name: "Martin Feldman",
    role: "compliance advisor",
    bio: "Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.HR, and training solutions for safer, more inclusive workplaces.",
    largeImage: teamMemberLarge,
    cardImage: teamMember,
    avatarImage: teamMember,
  },
  {
    name: "Neha Raghav",
    role: "policy lead, facilitator",
    bio: "Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.HR, and training solutions for safer, more inclusive workplaces.",
    largeImage: teamMemberLarge,
    cardImage: teamMember,
    avatarImage: teamMember,
  },
  {
    name: "Daniel Ortiz",
    role: "labour law counsel",
    bio: "Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.HR, and training solutions for safer, more inclusive workplaces.",
    largeImage: teamMemberLarge,
    cardImage: teamMember,
    avatarImage: teamMember,
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 35 : -35,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -35 : 35,
    opacity: 0,
  }),
};

const largeImageVariants = {
  enter: {
    opacity: 0,
    scale: 0.97,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.97,
  },
};

const roleVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 12 : -12,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -12 : 12,
    opacity: 0,
  }),
};

export function OurTeam() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const count = experts.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((current) => (current + dir + count) % count);
    },
    [count]
  );

  const current = experts[active]!;

  const at = (offset: number) =>
    experts[(active + offset + count) % count]!;

  const leftSide = [at(-2), at(-1)];
  const rightSide = [at(1), at(2)];

  const select = (index: number) => {
    const diff = index - active;

    const dir =
      diff === 0
        ? direction
        : (diff + count) % count <= count / 2
          ? 1
          : -1;

    setDirection(dir);
    setActive(index);
  };

  return (
    <section
      aria-label="Our experts"
      className="w-full overflow-hidden bg-white"
    >
      <style>{`
        .our-team-marquee-track {
          display: flex;
          width: max-content;
          animation: our-team-marquee 28s linear infinite;
          will-change: transform;
        }

        @keyframes our-team-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .our-team-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="container-custom px-4 sm:px-6">
        <div
          className="
            relative
            pt-28
            pb-14
            sm:pt-32
            sm:pb-16
            md:pt-36
            md:pb-20
            lg:pt-24
            lg:pb-14
            xl:pt-28
          "
        >
          {/* ROLE */}
          <div className="relative z-30">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={`role-${active}`}
                custom={direction}
                variants={roleVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  font-nunito-sans-bold
                  text-[22px]
                  font-bold
                  leading-[1.3]
                  tracking-[0.04em]
                  text-[#FEBC5A]
                  sm:text-[26px]
                  md:text-[30px]
                  lg:text-[36px]
                "
              >
                {current.role}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* IMAGE AND CARD AREA */}
          <div className="relative mt-5 sm:mt-6 lg:mt-2">
            {/* IMAGE STAGE */}
            <div
              className="
                relative
                h-[310px]
                w-full
                sm:h-[380px]
                md:h-[450px]
                lg:h-[480px]
                xl:h-[520px]
              "
            >
              {/* BACKGROUND MARQUEE */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[45%]
                  z-0
                  w-screen
                  -translate-x-1/2
                  overflow-hidden
                  select-none
                  sm:top-[43%]
                  md:top-[45%]
                  lg:top-[30%]
                "
              >
                <div className="our-team-marquee-track">
                  {[0, 1].map((set) => (
                    <div
                      key={set}
                      className="flex shrink-0"
                    >
                      {[0, 1, 2].map((item) => (
                        <span
                          key={`${set}-${item}`}
                          className="
                            shrink-0
                            px-8
                            font-bold
                            uppercase
                            leading-none
                            tracking-tight
                            text-[#d9eeee]
                            text-[18vw]
                            sm:text-[12vw]
                            md:text-[10vw]
                            lg:text-[7.5vw]
                          "
                        >
                          {current.name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* DESKTOP BASELINE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[70px]
                  left-1/2
                  z-10
                  hidden
                  h-px
                  w-screen
                  -translate-x-1/2
                  bg-[#d8d8d8]
                  lg:block
                "
              />

              {/* DESKTOP SIDE AVATARS */}
              <div
                className="
                  absolute
                  bottom-[70px]
                  left-0
                  z-20
                  hidden
                  h-[125px]
                  w-full
                  lg:block
                "
              >
                {/* LEFT */}
                <div
                  className="
                    absolute
                    left-0
                    top-[55px]
                    flex
                    items-end
                    gap-4
                    xl:gap-8
                  "
                >
                  <AnimatePresence
                    mode="popLayout"
                    custom={direction}
                    initial={false}
                  >
                    {leftSide.map((person) => (
                      <motion.div
                        key={`left-${person.name}`}
                        layout
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <SideAvatar
                          person={person}
                          onClick={() =>
                            select(experts.indexOf(person))
                          }
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* RIGHT */}
                <div
                  className="
                    absolute
                    right-0
                    top-[55px]
                    flex
                    items-end
                    gap-4
                    xl:gap-8
                  "
                >
                  <AnimatePresence
                    mode="popLayout"
                    custom={direction}
                    initial={false}
                  >
                    {rightSide.map((person) => (
                      <motion.div
                        key={`right-${person.name}`}
                        layout
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <SideAvatar
                          person={person}
                          onClick={() =>
                            select(experts.indexOf(person))
                          }
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* MAIN CENTER IMAGE */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  mx-auto
                  h-[300px]
                  w-[250px]
                  sm:h-[370px]
                  sm:w-[310px]
                  md:h-[440px]
                  md:w-[370px]
                  lg:bottom-[105px]
                  lg:h-[390px]
                  lg:w-[320px]
                  xl:bottom-[110px]
                  xl:h-[440px]
                  xl:w-[370px]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`large-${active}`}
                    variants={largeImageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={current.largeImage}
                      alt={`${current.name}, ${current.role}`}
                      fill
                      priority
                      sizes="(max-width: 639px) 250px, (max-width: 767px) 310px, (max-width: 1023px) 370px, (max-width: 1279px) 320px, 370px"
                      className="
                        object-contain
                        object-bottom
                        grayscale
                      "
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* EXPERT CARD */}
            <div
              className="
                relative
                z-30
                mx-auto
                -mt-3
                w-full
                max-w-[500px]
                sm:-mt-8
                md:-mt-12
                lg:-mt-[150px]
                xl:-mt-[165px]
              "
            >
              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.article
                  key={`card-${active}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    w-full
                    rounded-xl
                    border
                    border-[#e6eeee]
                    bg-white
                    px-4
                    pt-5
                    pb-7
                    shadow-[0_12px_40px_rgba(40,120,120,0.12)]
                    sm:px-6
                    sm:pt-6
                    sm:pb-8
                    md:px-8
                  "
                >
                  {/* CARD HEADER */}
                  <div className="flex items-center gap-3 sm:gap-5">
                    {/* SMALL PROFILE IMAGE */}
                    <div
                      className="
                        relative
                        h-[85px]
                        w-[85px]
                        shrink-0
                        overflow-hidden
                        rounded-[15px]
                        bg-[#eeeeee]
                        sm:h-[120px]
                        sm:w-[120px]
                        md:h-[140px]
                        md:w-[140px]
                      "
                    >
                      <Image
                        src={current.cardImage}
                        alt={current.name}
                        fill
                        sizes="(max-width: 639px) 85px, (max-width: 767px) 120px, 140px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* NAME, ROLE, SOCIAL */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          font-avenir
                          text-[18px]
                          font-extrabold
                          leading-tight
                          text-black
                          sm:text-[22px]
                          md:text-[24px]
                        "
                      >
                        {current.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          font-nunito-sans
                          text-[12px]
                          leading-[1.5]
                          tracking-[0.04em]
                          text-[#5C5C5C]
                          sm:text-[14px]
                          md:text-[16px]
                        "
                      >
                        {current.role}
                      </p>

                      {current.socialLinks?.length ? (
                        <div className="mt-3 flex items-center gap-4 text-gray-800 sm:mt-4">
                          {current.socialLinks.map((social) => (
                            <a
                              key={social.platform}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${current.name} ${social.platform}`}
                              className="text-[18px] transition-opacity hover:opacity-60 sm:text-[20px]"
                            >
                              <i className={`fa-brands ${social.platform === "Facebook" ? "fa-facebook-f" : social.platform === "Twitter" ? "fa-twitter" : "fa-instagram"}`} />
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* BIO */}
                  <p
                    className="
                      mt-5
                      font-nunito-sans
                      text-[13px]
                      font-normal
                      leading-[1.6]
                      tracking-[0.02em]
                      text-[#2E262E]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[18px]
                      lg:leading-[26px]
                    "
                  >
                    {current.bio}
                  </p>
                </motion.article>
              </AnimatePresence>

              {/* SLIDER ARROWS */}
              <div
                className="
                  absolute
                  -bottom-4
                  right-4
                  z-40
                  flex
                  h-[32px]
                  w-[126px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#FEBC5A]
                  shadow-lg
                  sm:-bottom-5
                  sm:right-8
                  sm:h-[38px]
                  sm:w-[150px]
                  md:h-[40px]
                "
              >
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous expert"
                  className="
                    flex
                    h-full
                    flex-1
                    items-center
                    justify-center
                    text-white
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  <i className="fa-solid fa-arrow-left text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]" />
                </button>

                <span className="h-[24px] w-[2px] bg-[#FF9800]" />

                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next expert"
                  className="
                    flex
                    h-full
                    flex-1
                    items-center
                    justify-center
                    text-white
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  <i className="fa-solid fa-arrow-right text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SIDE AVATAR — DESKTOP ONLY */

function SideAvatar({
  person,
  onClick,
}: {
  person: Expert;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${person.name}`}
      className="
        group
        relative
        block
        h-[90px]
        w-[90px]
        shrink-0
        overflow-hidden
        rounded-full
        bg-[#e7e9e9]
        transition-transform
        duration-300
        hover:scale-105
        xl:h-[115px]
        xl:w-[115px]
      "
    >
      <Image
        src={person.avatarImage}
        alt={person.name}
        fill
        sizes="(max-width: 1279px) 90px, 115px"
        className="
          object-cover
          object-top
          grayscale
          transition-all
          duration-300
          group-hover:grayscale-0
        "
      />
    </button>
  );
}
