"use client";

import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

import LinkedinImage from "@/assets/images/homepage/linkdin-post.png";
import CohereLogo from "@/assets/images/homepage/cohere-linkdin-logo.png";
import LinkedinIcon from "@/assets/images/homepage/linkdinicon.svg";

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
      <div className="container-custom px-4 sm:px-6 mb-10">
         <h2 className="
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                md:mt-4
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
                mb-10">
              Her from our Experties
            </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* LinkedIn Cards */}

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[24px] border border-[#ECECEC] overflow-hidden shadow-sm h-fit"
            >
              {/* Header */} 

              <div className="p-4 sm:p-4 md:p-4 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5E5E5] shrink-0">
                      <Image
                        src={CohereLogo}
                        alt="Cohere Compliance"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-nunito-sans font-bold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-none text-[#2E262E]">
                        {post.title}
                      </h4>

                      <p className="font-nunito-sans text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-normal text-[#777777] mt-1">
                        {post.username}
                      </p>
                    </div>
                  </div>

                  <Image
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 object-contain shrink-0"
                  />
                </div>

                <p className="mt-6 font-nunito-sans text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#2E262E]">
                  {post.text}
                </p>

                <button className="mt-5 font-nunito-sans text-[14px] font-normal text-[#666666] hover:text-[#024948] transition-colors">
                  Read more
                </button>
              </div>

              {/* Image */}

              <Image
                src={post.image}
                alt=""
                className="w-full aspect-[16/10] object-cover"
              />

              {/* Footer */}

              <div className="flex items-center justify-between px-6 py-5 border-t border-[#F2F2F2]">
                <div className="flex items-center gap-2 text-[#444444]">
                  <Heart size={20} />

                  <span className="font-nunito-sans text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                    {post.likes}
                  </span>
                </div>

                <button className="flex items-center gap-2 font-nunito-sans text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#444444] hover:text-[#024948] transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          ))}

          {/* Newsletter Card */}
          <div className="flex h-full flex-col rounded-[24px] bg-[#FEBC5A] p-6">
            {/* Label */}

            <span className="font-avenir text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-black">
              Newsletter
            </span>

            {/* Heading */}

            <h2 className=" font-avenir text-[32px] text-[32px] text-[36px] text-[40px] font-bold leading-[40px] text-black max-w-[]">
              Stay Ahead with Workplace Compliance Insights
            </h2>

            {/* Description */}

            <p className="mt-6 font-nunito-sans text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-[30px] text-black">
              Stay informed with the latest PoSH updates, workplace compliance
              insights, legal developments, expert articles and training
              announcements delivered straight to your inbox.
            </p>

            {/* Email */}

            <div className="mt-10">
              <input
                type="email"
                placeholder="Enter your work email"
                className="h-[60px] w-full rounded-xl border border-black bg-transparent px-5 font-nunito-sans text-[16px] text-black placeholder:font-nunito-sans placeholder:text-[16px] placeholder:text-black outline-none transition focus:border-black"
              />
            </div>

            {/* Button */}

            <button className="mt-5 h-[60px] rounded-xl bg-white font-nunito-sans-extra-bold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px]  text-[#000000] transition hover:bg-[#F4F4F4]">
              SUBMIT
            </button>

            {/* Bottom Text */}

            <p className="mt-2 pt-8 font-nunito-sans text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-[22px] text-black">
              By subscribing, you agree to receive periodic emails from Cohere
              Compliance. You can unsubscribe at any time. View our Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
