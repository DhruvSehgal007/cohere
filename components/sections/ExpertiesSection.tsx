
"use client";

import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/common/NewsletterForm";

import LinkedinImage from "@/assets/images/homepage/linkdin-post.png";
import CohereLogo from "@/assets/images/homepage/cohere-linkdin-logo.png";
import LinkedinIcon from "@/assets/images/homepage/linkdinicon.svg";
import Likeicon from "@/assets/images/homepage/Like-icon.svg";
import arrowsocial from "@/assets/images/homepage/arrow-social.svg";


const posts = [
  {
    id: 1,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Building safer, more inclusive workplaces starts with awareness and action. Here's to a culture of respect and accountability.",
    likes: 550,
    image: LinkedinImage,
  },
  {
    id: 2,
    title: "Cohere Compliance",
    username: "@coherecompliance",
    text: "Building safer, more inclusive workplaces starts with awareness and action. Here's to a culture of respect and accountability.",
    likes: 550,
    image: LinkedinImage,
  },
];

export default function SocialFeedSection() {
  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom mb-10 px-4 sm:px-6">

        {/* HEADING */}
        <h2
          className="
            mb-10
            w-full
            font-avenir
            font-extrabold
            leading-[1.15]
            text-[#101C1C]
            md:mt-4
            text-[32px]
            sm:text-[36px]
            md:text-[40px]
          "
        >
          Her from our Experties
        </h2>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            items-start
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >

          {/* LINKEDIN CARDS */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="
                flex
                h-fit
                min-w-0
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-[#ECECEC]
                bg-white
                shadow-sm
              "
            >

              {/* HEADER */}
              <div
                className="
                  pr-[16px]
                  pt-[16px]
                  pb-[10px]
                  pl-[16px]
                  md:pr-[28px]
                  md:pt-[28px]
                  md:pb-[12px]
                  md:pl-[28px]
                "
              >
                <div className="flex items-center justify-between">

                  <div className="flex min-w-0 items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">

                    {/* LOGO */}
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#E5E5E5]">
                      <Image
                        src={CohereLogo}
                        alt="Cohere Compliance"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* NAME */}
                    <div className="min-w-0">
                      <h4
                        className="
                          font-nunito-sans
                          font-bold
                          text-[16px]
                          sm:text-[16px]
                          md:text-[18px]
                          lg:text-[20px]
                          leading-none
                          text-[#2E262E]
                        "
                      >
                        {post.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          font-nunito-sans
                          text-[14px]
                          sm:text-[14px]
                          md:text-[16px]
                          lg:text-[16px]
                          font-normal
                          text-[#777777]
                        "
                      >
                        {post.username}
                      </p>
                    </div>
                  </div>

                  {/* LINKEDIN ICON */}
                  <Image
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    className="
                      h-5
                      w-5
                      shrink-0
                      object-contain
                      sm:h-7
                      sm:w-7
                      md:h-8
                      md:w-8
                      lg:h-8
                      lg:w-8
                    "
                  />
                </div>

                {/* POST TEXT */}
                <p
                  className="
                    mt-4
                    font-nunito-sans
                    text-[16px]
                    sm:text-[16px]
                    md:text-[18px]
                    lg:text-[18px]
                    font-normal
                    leading-[24px]
                    sm:leading-[28px]
                    md:leading-[32px]
                    text-[#2E262E]
                  "
                >
                  {post.text}
                </p>

                {/* READ MORE */}
                <Link
                  href="/blog"
                  className="
                    mt-5
                    inline-block
                    font-nunito-sans
                    text-[16px]
                    md:text-[18px]
                    font-normal
                    text-[#666666]
                    transition-colors
                    hover:text-[#024948]
                  "
                >
                  Read more
                </Link>
              </div>

              {/* POST IMAGE */}
              <Image
                src={post.image}
                alt=""
                className="
                  aspect-[16/10]
                  w-full
                  shrink-0
                  object-cover
                "
              />

              {/* FOOTER */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#F2F2F2]
                  px-6
                  py-4
                "
              >

                {/* LIKES */}
                <div className="flex items-center gap-2 text-[#3A3A3A]">
                  <Image
                    src={Likeicon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 object-contain"
                  />

                  <span
                    className="
                      font-nunito-sans
                      text-[16px]
                      sm:text-[16px]
                      md:text-[18px]
                      lg:text-[20px]
                      font-normal
                    "
                  >
                    {post.likes}
                  </span>
                </div>

                {/* SHARE */}
                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    font-nunito-sans
                    text-[16px]
                    sm:text-[16px]
                    md:text-[18px]
                    lg:text-[20px]
                    font-normal
                    text-[#3A3A3A]
                    transition-colors
                    hover:text-[#024948]
                  "
                >
                  <Image
                    src={arrowsocial}
                    alt=""
                    width={26}
                    height={26}
                    className="h-[26px] w-[26px] shrink-0 object-contain"
                  />
                  Share
                </button>
              </div>
            </div>
          ))}

          {/* NEWSLETTER CARD */}
          <div
            className="
              flex
              h-fit
              min-w-0
              flex-col
              rounded-[24px]
              bg-[#FEBC5A]
              p-6
              sm:col-span-2
              xl:col-span-1
            "
          >

            {/* LABEL */}
            <span
              className="
                font-avenir
                text-[18px]
                sm:text-[18px]
                md:text-[20px]
                lg:text-[24px]
                font-bold
                text-black
              "
            >
              Newsletter
            </span>

            {/* HEADING */}
            <h2
              className="
                font-avenir
                text-[32px]
                sm:text-[32px]
                md:text-[36px]
                lg:text-[40px]
                font-bold
                leading-[40px]
                text-black
                max-w-[500px]
              "
            >
              Stay Ahead with Workplace Compliance Insights
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                font-nunito-sans
                text-[16px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[18px]
                font-normal
                leading-[30px]
                tracking-[0.04em]
                text-black
              "
            >
              Stay informed with the latest PoSH updates, workplace compliance
              insights, legal developments, expert articles and training
              announcements delivered straight to your inbox.
            </p>

            <NewsletterForm />

            {/* BOTTOM TEXT */}
            <p
              className="
                mt-2
                pt-8
                font-nunito-sans
                text-[16px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[18px]
                font-normal
                leading-[24px]
                tracking-[0.04em]
                text-black
              "
            >
              By subscribing, you agree to receive periodic emails from Cohere.
              You can unsubscribe at any time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
