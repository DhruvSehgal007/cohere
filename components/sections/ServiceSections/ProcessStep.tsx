"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import volumeBg from "@/assets/images/homepage/volume_background.png";
import type { LucideIcon } from "lucide-react";

type Props = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  right?: boolean;
};

export default function ProcessStep({
  number,
  title,
  description,
  Icon,
  right = true,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: right ? 120 : -120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`w-full max-w-[900px] ${
        right ? "ml-auto" : "mr-auto"
      }`}
    >
      <div className="relative h-[165px]">

        {/* Gradient Capsule */}

        <div
          className={`absolute inset-0 overflow-hidden rounded-[90px]
          ${right ? "" : "scale-x-[-1]"}`}
        >
          <Image
            src={volumeBg}
            alt=""
            fill
            className="object-cover"
            priority
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,#439897 0%,rgba(0,0,0,.15) 60%,#2E262E 100%)",
              mixBlendMode: "multiply",
            }}
          />

          <div
            className={`absolute inset-y-0 flex items-center
            ${right ? "right-10" : "left-10"}`}
          >
            <span
              className={`font-avenir text-[78px] font-extrabold leading-none text-white
              ${right ? "" : "scale-x-[-1]"}`}
              style={{
                textShadow: "0 4px 12px rgba(0,0,0,.18)",
              }}
            >
              {number}
            </span>
          </div>
        </div>

        {/* White Card */}

        <div
          className={`
          absolute top-[10px] bottom-[10px]
          flex items-center
          rounded-[38px]
          bg-white
          px-8
          shadow-[0_30px_70px_rgba(0,0,0,.18)]

          ${
            right
              ? "left-[60px] right-[120px]"
              : "left-[120px] right-[60px] flex-row-reverse"
          }
          `}
        >
          <div
            className="
            flex
            h-[68px]
            w-[68px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#F6F7F6]
            "
          >
            <Icon
              className="h-8 w-8 text-[#1B3D3C]"
              strokeWidth={1.7}
            />
          </div>

          <div
            className={`${
              right ? "ml-6 text-left" : "mr-6 text-right"
            }`}
          >
            <h3 className="font-avenir text-[22px] font-extrabold text-black">
              {title}
            </h3>

            <p className="mt-2 max-w-[340px] font-nunito-sans text-[14px] leading-6 text-[#5B5B5B]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}