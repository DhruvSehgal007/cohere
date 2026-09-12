"use client";

import { useState } from "react";
import teammember from "@/assets/images/OurTeam/team-member.png";
import cardbackground from "@/assets/images/OurTeam/card-background.png";

/* =========================================================
   TYPE
========================================================= */

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
};

/* =========================================================
   CARD
========================================================= */

function TeamCard({
  member,
  expanded,
  onClick,
}: {
  member: TeamMember;
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[14px]
        shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        transition-all
        duration-500
        ease-in-out

        ${expanded ? "w-full" : "w-[360px]"}

        h-[440px]

        max-md:w-full
        max-md:max-w-[360px]
      `}
      style={{
        backgroundImage: `url(${cardbackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* =====================================================
          GRADIENT
          
          Normal  = hidden
          Hover   = visible
          Expanded = visible
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[linear-gradient(180deg,#439897_0%,#2E262E_100%)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          ${expanded ? "opacity-100" : ""}
        `}
      />

      {/* =====================================================
          CARD CONTENT
      ===================================================== */}

{/* CARD CONTENT */}
<div className="relative z-10 flex h-full w-full">
  <div
    className="
      relative
      flex
      h-full
      w-[360px]
      shrink-0
      flex-col

      p-[32px]

      max-md:w-full
      rounded-[16px]
    "
  >
    {/* NAME */}
<h3
  className={`
    font-avenir
    text-[24px]
    font-extrabold
    leading-[1.2]
    transition-colors
    duration-300
    mb-6

    ${
      expanded
        ? "text-white"
        : "text-black group-hover:text-white"
    }
  `}
>
  {member.name}
</h3>

    {/* ROLE / SUBTEXT */}
  <p
  className={`
    mt-[8px]
    font-nunito-sans
    text-[16px]
    font-normal
    leading-[1.4]
    transition-colors
    duration-300
    mb-9
    mt-0

    ${
      expanded
        ? "text-white"
        : "text-[#5B5B5B] group-hover:text-white"
    }
  `}
>
  {member.role}
</p>

    {/* PROFILE IMAGE */}
    <div
      className="
        absolute
        bottom-[34px]
        left-[32px]
        right-[32px]
        overflow-hidden
        rounded-[10px]
        
      "
    >
      <img
        src={teammember.src}
        alt={member.name}
        className="h-full w-full object-contain rounded-[10px]"
      />
    </div>
  </div>

        {/* ===================================================
            RIGHT SIDE

            DESCRIPTION ONLY WHEN EXPANDED
        =================================================== */}

        <div
          className={`
            py-10
            relative
            flex
            h-full
            flex-1
            flex-col
            px-[30px]
            pr-[70px]
            transition-all
            duration-500

            ${
              expanded
                ? "visible opacity-100"
                : "invisible opacity-0"
            }

            max-md:absolute
            max-md:inset-0
            max-md:px-[25px]
            max-md:pt-[80px]
            max-md:justify-start
          `}
        >
          <p
            className="
              font-nunito-sans
              max-w-[600px]
              font-['TestSohne-Buch']
              text-[16px]
              leading-[1.6]
              text-white

              max-md:text-[16px]
            "
          >
            {member.description}
          </p>
        </div>

        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        {expanded && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="
              absolute
              right-[22px]
              top-[15px]
              z-30
              border-0
              bg-transparent
              p-0
              text-[36px]
              font-normal
              leading-none
              text-white
              transition-transform
              duration-200
              hover:scale-110
            "
            aria-label="Close card"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   CARD ROWS

   One row has its own active card.

   If a card opens:
   - Other cards in SAME row hide
   - Other rows stay visible
========================================================= */

function CardRows({
  members,
  cardsPerRow,
}: {
  members: TeamMember[];
  cardsPerRow: number;
}) {
  const [activeRows, setActiveRows] = useState<
    Record<number, number | null>
  >({});

  const rows: TeamMember[][] = [];

  for (
    let i = 0;
    i < members.length;
    i += cardsPerRow
  ) {
    rows.push(
      members.slice(i, i + cardsPerRow)
    );
  }

  const handleCardClick = (
    rowIndex: number,
    cardId: number
  ) => {
    setActiveRows((previous) => {
      const currentCard =
        previous[rowIndex] ?? null;

      return {
        ...previous,
        [rowIndex]:
          currentCard === cardId
            ? null
            : cardId,
      };
    });
  };

  return (
    <div className="flex flex-col gap-[30px]">
      {rows.map((row, rowIndex) => {
        const activeCard =
          activeRows[rowIndex] ?? null;

        return (
          <div
            key={rowIndex}
            className="
              flex
              w-full
              justify-center
              gap-[30px]

              max-md:flex-col
              max-md:items-center
              max-md:gap-[20px]
            "
          >
            {row.map((member) => {
              const isActive =
                activeCard === member.id;

              /*
               * ONLY HIDE OTHER CARDS
               * FROM THE CURRENT ROW.
               */

              if (
                activeCard !== null &&
                !isActive
              ) {
                return null;
              }

              return (
                <TeamCard
                  key={member.id}
                  member={member}
                  expanded={isActive}
                  onClick={() =>
                    handleCardClick(
                      rowIndex,
                      member.id
                    )
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   ==================== SECTION 1 ==========================
   
   3 CARDS PER ROW
   6 CARDS TOTAL
   
   INNER DIV MAX WIDTH = 1150px

   CHANGE SECTION 1 STYLING HERE
========================================================= */

function SectionOne() {
  const members: TeamMember[] = [
    {
      id: 1,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 2,
      name: "Dr. Pushkar Singh",
      role: "Lawyer, Consultant",
      description:
        "Dr. Pushkar Singh is an experienced consultant focused on strategy, advisory and business development.",
    },
    {
      id: 3,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 4,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 5,
      name: "Dr. Pushkar Singh",
      role: "Lawyer, Consultant",
      description:
        "Dr. Pushkar Singh is an experienced consultant focused on strategy, advisory and business development.",
    },
    {
      id: 6,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
  ];

  return (
    <section
      className="
        bg-white
        py-[70px]

        max-md:py-[50px]
      "
    >


      {/* ===================================================
          SECTION 1 INNER DIV
          
          CHANGE WIDTH / PADDING HERE
      =================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1150px]
          px-4
        "
      >
        <CardRows
          members={members}
          cardsPerRow={3}
        />
      </div>
    </section>
  );
}

/* =========================================================
   ==================== SECTION 2 ==========================
   
   4 CARDS PER ROW
   8 CARDS TOTAL
   
   INNER DIV = container-custom
   MAX WIDTH = 1500px

   CHANGE SECTION 2 STYLING HERE
========================================================= */

/* =========================================================
   ==================== SECTION 2 ==========================

   CORE TEAM
   ONLY 4 CARDS
   ONE ROW

   INNER DIV = container-custom
   MAX WIDTH = 1500px
========================================================= */

function SectionTwo() {
  const members: TeamMember[] = [
    {
      id: 7,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 8,
      name: "Dr. Pushkar Singh",
      role: "Lawyer, Consultant",
      description:
        "Dr. Pushkar Singh is an experienced consultant focused on strategy, advisory and business development.",
    },
    {
      id: 9,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 10,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
  ];

  return (
    <section
      className="
        bg-[#f1f1f1]
        py-[70px]

        max-md:py-[50px]
      "
    >
      {/* ================= SECTION 2 INNER DIV ================= */}

      <div
        className="
          container-custom
          mx-auto
          w-full
          max-w-[1500px]
          px-4
        "
      >
        {/* SECTION HEADING */}

        <h2
          className="
            mb-[30px]
            font-avenir
            text-[24px]
            font-extrabold
            leading-[1.2]
            text-black

            sm:text-[40px]
          "
        >
          Core Team
        </h2>

        {/* ONLY 4 CARDS */}

        <CardRows
          members={members}
          cardsPerRow={4}
        />
      </div>
    </section>
  );
}

/* =========================================================
   ==================== SECTION 3 ==========================
   
   4 CARDS PER ROW
   8 CARDS TOTAL
   
   INNER DIV = container-custom
   MAX WIDTH = 1500px

   CHANGE SECTION 3 STYLING HERE
========================================================= */
/* =========================================================
   ==================== SECTION 3 ==========================

   3 CARDS PER ROW
   6 CARDS TOTAL

   INNER DIV = container-custom
   MAX WIDTH = 1500px
========================================================= */
function SectionThree() {
  const members: TeamMember[] = [
    {
      id: 15,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 16,
      name: "Dr. Pushkar Singh",
      role: "Lawyer, Consultant",
      description:
        "Dr. Pushkar Singh is an experienced consultant focused on strategy, advisory and business development.",
    },
    {
      id: 17,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 18,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 19,
      name: "Devika Singh",
      role: "Owner, Partner",
      description:
        "Devika Singh brings extensive experience in building businesses, developing partnerships and creating long-term growth opportunities.",
    },
    {
      id: 20,
      name: "Dr. Pushkar Singh",
      role: "Lawyer, Consultant",
      description:
        "Dr. Pushkar Singh is an experienced consultant focused on strategy, advisory and business development.",
    },
  ];

  return (
    <section
      className="
        bg-white
        py-[70px]

        max-md:py-[50px]
      "
    >
      {/* ===================================================
          SECTION 3 OUTER CONTAINER
          
          Heading = 1500px
      =================================================== */}

      <div
        className="
          container-custom
          mx-auto
          w-full
          max-w-[1500px]
          px-4
        "
      >
        {/* SECTION 3 HEADING */}

        <h2
          className="
            mb-[30px]
            font-avenir
            text-[24px]
            font-extrabold
            leading-[1.2]
            text-black

            sm:text-[40px]
          "
        >
          Industry Expert
        </h2>

        {/* =================================================
            CARDS PARENT

            Cards = 1150px
            Expanded card = maximum 1150px
        ================================================= */}

        <div
          className="
            w-full
            max-w-[1150px]
            mx-auto
          "
        >
          <CardRows
            members={members}
            cardsPerRow={3}
          />
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   ==================== MAIN COMPONENT ====================
========================================================= */

export default function OurTeam() {
  return (
    
    <main className="w-full">


       <section className="bg-white py-[70px] max-md:py-[50px]">
        <div className="container-custom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-4 py-1 font-avenir text-[14px] text-white">
              OUR TEAM
            </span>

            <h2 className="mt-4 max-w-[620px] font-avenir text-[30px] font-extrabold leading-tight text-black md:text-[40px]">
              Meet Our Team of Trusted Advisors
            </h2>
          </div>

          <p className="max-w-[520px] font-nunito-sans text-[16px] leading-7 text-[#5B5B5B] md:text-right">
            Our multidisciplinary experts deliver practical legal, HR, and training solutions for safer, more inclusive workplaces.
          </p>
        </div>
      </section>

      {/* ===================================================
          SECTION 1
      =================================================== */}
      
      <SectionOne />

      {/* ===================================================
          SECTION 2
      =================================================== */}

      <SectionTwo />

      {/* ===================================================
          SECTION 3
      =================================================== */}

      <SectionThree />
    </main>
  );
}