
import Image from "next/image";

import whyitmattersBG from "@/assets/images/WorkplaceDiscrimination/whyitmatters-BG.png";
import WIMsideimage from "@/assets/images/WorkplaceDiscrimination/WIM-sideimage.png";

export default function Whyitmatters() {
  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6">

        <div className="relative isolate overflow-hidden rounded-[24px]">

          {/* BACKGROUND IMAGE */}
          <Image
            src={whyitmattersBG}
            alt=""
            fill
            sizes="100vw"
            className="z-[-2] object-cover object-center"
          />

          {/* DARK TEAL OVERLAY */}
          <div className="pointer-events-none absolute inset-0 z-[-1] bg-[#003C3B]/65" />

          {/* CONTENT */}
          <div
            className="
              relative
              flex
              flex-col
              items-center
              gap-6
              px-6
              pt-10
              pb-10

              sm:px-8
              sm:pt-12
              sm:pb-12

              md:px-10
              md:pt-12

              lg:min-h-[400px]
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-6
              lg:px-12
              lg:py-10

              xl:min-h-[458px]
              xl:px-14
            "
          >

            {/* LEFT CONTENT */}
            <div
              className="
                relative
                z-10
                w-full
                text-left

                min-[1025px]:w-[57%]
                xl:w-[55%]
              "
            >

              {/* LABEL */}
              <span
                className="
                  inline-block
                  rounded-[5px]
                  bg-white
                  px-3
                  py-1
                  font-avenir
                  text-[12px]
                  font-normal
                  uppercase
                  text-[#439897]

                  sm:text-[14px]
                "
              >
                WHY IT MATTERS
              </span>

              {/* HEADING */}
              <h2
                className="
                  mt-3
                  max-w-[700px]
                  font-avenir
                  font-extrabold
                  leading-[1.2]
                  text-white

                  text-[32px]
                  sm:text-[32px]
                  md:text-[32px]
                  lg:text-[36px]
                  xl:text-[40px]
                "
              >
                Respect Drives Stronger Workplace Culture
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  max-w-[630px]
                  font-nunito-sans
                  font-normal
                  leading-[1.55]
                  text-white

                  text-[16px]
                  sm:text-[16px]
                  md:text-[18px]
                  lg:text-[20px]
                  xl:text-[20px]
                "
              >
                Inclusive and respectful workplaces encourage trust,
                collaboration, accountability, and confidence. Through
                practical learning and informed workplace practices,
                organisations can build environments where employees
                feel supported and workplace concerns are addressed
                fairly.
              </p>

            </div>

            {/* RIGHT SPHERES */}
            <div
              className="
                hidden
                min-[1025px]:absolute
                min-[1025px]:inset-y-0
                min-[1025px]:right-0
                min-[1025px]:flex
                min-[1025px]:h-full
                min-[1025px]:w-[44%]
                min-[1025px]:justify-center
                min-[1025px]:overflow-visible
              "
            >
              <Image
                src={WIMsideimage}
                alt="Decorative teal spheres"
                className="
                  absolute
                  bottom-[-50px]
                  h-auto
                  w-[350px]
                  object-contain

                  sm:w-[290px]
                  md:w-[340px]

                  lg:bottom-[-60px]
                  lg:right-[0px]
                  lg:w-[500px]

                  xl:bottom-[-114px]
                  xl:right-[60px]
                  xl:w-[664px]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
