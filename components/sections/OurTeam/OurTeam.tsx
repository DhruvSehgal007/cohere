"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { StaticImageData } from "next/image";

import teamMemberLarge from "@/assets/images/OurTeam/Team-member-large.png";
import teamMember from "@/assets/images/OurTeam/team-member.png";

export type Expert = {
  name: string;
  role: string;
  bio: string;
  largeImage: StaticImageData;
  cardImage: StaticImageData;
  avatarImage: StaticImageData;
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
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
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

      setActive((current) => {
        return (current + dir + count) % count;
      });
    },
    [count],
  );

  const current = experts[active]!;

  const at = (offset: number) => {
    return experts[(active + offset + count) % count]!;
  };

  const leftSide = [at(-2), at(-1)];
  const rightSide = [at(1), at(2)];

  const indexOf = (expert: Expert) => {
    return experts.indexOf(expert);
  };

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
    <>
      {/* =====================================================
          MARQUEE CSS
      ===================================================== */}

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

      <section
        aria-label="Our experts"
        className="w-full overflow-x-hidden bg-white"
      >
        {/* =====================================================
            CONTAINER
        ===================================================== */}

        <div className="container-custom mt-28 py-16">
          <div
            className="
              relative
              w-full
              py-10
              sm:py-14
              lg:py-16
            "
          >
            {/* =================================================
                ROLE
            ================================================= */}

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
                    text-[26px]
                    font-bold
                    leading-[26px]
                    tracking-[0.04em]
                    text-[#FEBC5A]
                    sm:text-[30px]
                    lg:text-[36px]
                  "
                >
                  {current.role}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* =================================================
                TEAM AREA
            ================================================= */}

            <div
              className="
                relative
                mt-2
                h-[520px]
                sm:h-[600px]
                lg:h-[700px]
              "
            >
              {/* =================================================
                  RUNNING MARQUEE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[22%]
                  z-0
                  w-screen
                  -translate-x-1/2
                  overflow-hidden
                  select-none
                "
              >
                <div className="our-team-marquee-track">
                  {/* SET 1 */}

                  <div className="flex shrink-0">
                    {[0, 1, 2].map((item) => (
                      <span
                        key={`one-${item}`}
                        className="
                          shrink-0
                          px-8
                          text-[18vw]
                          font-bold
                          uppercase
                          leading-none
                          tracking-tight
                          text-[#d9eeee]
                          sm:text-[10vw]
                          lg:text-[7.5vw]
                        "
                      >
                        {current.name}
                      </span>
                    ))}
                  </div>

                  {/* SET 2 */}

                  <div className="flex shrink-0">
                    {[0, 1, 2].map((item) => (
                      <span
                        key={`two-${item}`}
                        className="
                          shrink-0
                          px-8
                          text-[18vw]
                          font-bold
                          uppercase
                          leading-none
                          tracking-tight
                          text-[#d9eeee]
                          sm:text-[10vw]
                          lg:text-[7.5vw]
                        "
                      >
                        {current.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================================
                  BASELINE
                  HIDDEN ON MOBILE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[100px]
                  left-1/2
                  z-10
                  hidden
                  h-px
                  w-screen
                  -translate-x-1/2
                  bg-[#d8d8d8]
                  md:block
                "
              />

              {/* =================================================
                  FOUR SIDE AVATARS
                  
                  MOBILE:
                  hidden

                  DESKTOP:
                  visible
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[100px]
                  left-0
                  z-20
                  hidden
                  h-[160px]
                  w-full
                  md:block
                "
              >
                {/* LEFT TWO */}

                <div
                  className="
                    absolute
                    left-0
                    top-[70px]
                    flex
                    items-end
                    gap-8
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
                            select(indexOf(person))
                          }
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* RIGHT TWO */}

                <div
                  className="
                    absolute
                    right-0
                    top-[70px]
                    flex
                    items-end
                    gap-8
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
                            select(indexOf(person))
                          }
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* =================================================
                  LARGE CENTER IMAGE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[150px]
                  left-1/2
                  z-10
                  h-[430px]
                  w-[330px]
                  -translate-x-1/2
                  sm:h-[540px]
                  sm:w-[430px]
                  lg:bottom-[160px]
                  lg:h-[640px]
                  lg:w-[540px]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`large-${active}`}
                    src={current.largeImage.src}
                    alt={`${current.name}, ${current.role}`}
                    width={540}
                    height={640}
                    variants={largeImageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      h-[430px]
                      w-[330px]
                      scale-[1.08]
                      object-contain
                      object-bottom
                      grayscale
                      sm:h-[540px]
                      sm:w-[430px]
                      sm:scale-[1.12]
                      lg:h-[640px]
                      lg:w-[540px]
                      lg:scale-[1.18]
                    "
                    style={{
                      willChange: "opacity, transform",
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* =================================================
                  CARD WRAPPER
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  z-30
                  w-[calc(100%-32px)]
                  max-w-[500px]
                  -translate-x-1/2
                  overflow-visible
                  sm:w-[min(92vw,500px)]
                "
              >
                {/* =================================================
                    CARD
                ================================================= */}

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
                      overflow-visible
                      rounded-xl
                      border
                      border-[#e6eeee]
                      bg-white
                      px-[16px]
                      pb-[18px]
                      pt-[18px]
                      shadow-[0_12px_40px_rgba(40,120,120,0.12)]
                      sm:px-[30px]
                      sm:pb-[24px]
                      sm:pt-[24px]
                    "
                  >
                    {/* =================================================
                        CARD HEADER
                    ================================================= */}

                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* =================================================
                          CARD IMAGE
                      ================================================= */}

                      <div
                        className="
                          -mt-[45px]
                          h-[100px]
                          w-[100px]
                          shrink-0
                          overflow-hidden
                          rounded-[15px]
                          bg-[#eeeeee]
                          sm:-mt-[62px]
                          sm:h-[160px]
                          sm:w-[160px]
                        "
                      >
                        <img
                          src={current.cardImage.src}
                          alt=""
                          width={148}
                          height={148}
                          loading="lazy"
                          className="
                            block
                            h-[100px]
                            w-[100px]
                            object-cover
                            object-top
                            sm:h-[160px]
                            sm:w-[160px]
                          "
                        />
                      </div>

                      {/* =================================================
                          NAME + ROLE + SOCIAL
                      ================================================= */}

                      <div className="min-w-0 flex-1">
                        <h3
                          className="
                            font-avenir
                            text-lg
                            font-extrabold
                            leading-tight
                            text-black
                            sm:text-2xl
                          "
                        >
                          {current.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            font-nunito-sans
                            text-[12px]
                            font-normal
                            leading-[18px]
                            tracking-[0.04em]
                            text-[#5C5C5C]
                            sm:text-[16px]
                            sm:leading-[26px]
                          "
                        >
                          {current.role}
                        </p>

                        {/* =================================================
                            SOCIAL LINKS
                        ================================================= */}

                        <div
                          className="
                            mt-2
                            flex
                            items-center
                            gap-3
                            text-gray-800
                            sm:mt-3
                            sm:gap-4
                          "
                        >
                          <a
                            href="#"
                            aria-label={`${current.name} Facebook`}
                            className="
                              text-[20px]
                              transition-opacity
                              hover:opacity-60
                            "
                          >
                            <i className="fa-brands fa-facebook-f" />
                          </a>

                          <a
                            href="#"
                            aria-label={`${current.name} Twitter`}
                            className="
                              text-[20px]
                              transition-opacity
                              hover:opacity-60
                            "
                          >
                            <i className="fa-brands fa-twitter" />
                          </a>

                          <a
                            href="#"
                            aria-label={`${current.name} Instagram`}
                            className="
                              text-[20px]
                              transition-opacity
                              hover:opacity-60
                            "
                          >
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        BIO
                    ================================================= */}

                    <p
                      className="
                        mt-4
                        font-nunito-sans
                        text-[12px]
                        font-normal
                        leading-[17px]
                        tracking-[0.02em]
                        text-[#2E262E]
                        sm:mt-5
                        sm:text-[18px]
                        sm:leading-[26px]
                        sm:tracking-[0.04em]
                      "
                    >
                      {current.bio}
                    </p>
                  </motion.article>
                </AnimatePresence>

                {/* =================================================
                    ARROWS

                    IMPORTANT:
                    OUTSIDE motion.article
                    SO THEY DON'T FADE / SLIDE
                ================================================= */}

                <div
                  className="
                    absolute
                    -bottom-3
                    right-4
                    z-40
                    flex
                    h-[38px]
                    w-[120px]
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#FEBC5A]
                    shadow-lg
                    sm:-bottom-5
                    sm:right-10
                    sm:h-[42px]
                    sm:w-[162px]
                  "
                >
                  {/* LEFT ARROW */}

                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous expert"
                    className="
                      flex
                      h-full
                      w-[54px]
                      items-center
                      justify-center
                      text-white
                      transition-opacity
                      hover:opacity-70
                      sm:w-[72px]
                    "
                  >
                    <i className="fa-solid fa-arrow-left text-[24px] sm:text-[34px]" />
                  </button>

                  {/* DIVIDER */}

                  <span
                    className="
                      h-[22px]
                      w-px
                      bg-white/30
                      sm:h-[24px]
                    "
                  />

                  {/* RIGHT ARROW */}

                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next expert"
                    className="
                      flex
                      h-full
                      w-[54px]
                      items-center
                      justify-center
                      text-white
                      transition-opacity
                      hover:opacity-70
                      sm:w-[72px]
                    "
                  >
                    <i className="fa-solid fa-arrow-right text-[24px] sm:text-[34px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   SIDE AVATAR

   DESKTOP ONLY
============================================================ */

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
        h-[160px]
        w-[160px]
        shrink-0
        overflow-hidden
        rounded-[100px]
        bg-[#e7e9e9]
        p-0
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <img
        src={person.avatarImage.src}
        alt={person.name}
        width={160}
        height={160}
        loading="lazy"
        className="
          block
          h-[160px]
          w-[160px]
          rounded-[100px]
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