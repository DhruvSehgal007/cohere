export default function Banner() {
  return (
    <section className="w-full pt-30">
      <div className="container-custom">
        <div className="pt-[62px] pb-[100px] md:pt-[80px] md:pb-[120px]">
          {/* Content */}
          <div className="max-w-[1035px]">
            
            {/* Tag */}
            <div
              className="
                inline-flex
                h-[27px]
                items-center
                bg-[#439897]
                pl-[6px]
                pr-[10px]
                rounded-tr-[5px]
                rounded-br-[5px]
                shadow-[0px_5px_10px_rgba(0,0,0,0.22)]
              "
            >
              <span
                className="
                  font-avenir
                  text-[14px]
                  leading-[26px]
                  font-normal
                  uppercase
                  text-white
                "
              >
                Our Products
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-[28px]
                font-avenir
                text-[#070F0F]
                text-[38px]
                leading-[1]
                font-normal
                tracking-[0]
                sm:text-[46px]
                md:text-[54px]
                lg:text-[64px]
              "
            >
              Workplace Solutions,
              <br className="hidden sm:block" />
              Designed to Keep It Right®
            </h1>

            {/* Description */}
            <p
              className="
                mt-[52px]
                max-w-[802px]
                font-nunito-sans
                text-[16px]
                leading-[24px]
                font-normal
                tracking-[0.04em]
                text-[#5B5B5B]
                md:text-[18px]
                md:leading-[26px]
                lg:text-[20px]
              "
            >
              Practical digital solutions for workplace awareness, readiness,
              compliance and investigations.
            </p>

            {/* Buttons */}
            <div className="mt-[42px] flex flex-col gap-[20px] sm:flex-row sm:gap-[30px]">
              
              {/* View Demo */}
              <button
                type="button"
                className="
                  flex
                  h-[57px]
                  w-full
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#FEBC5A]
                  px-[12px]
                  py-[10px]
                  font-avenir
                  text-[16px]
                  font-bold
                  leading-none
                  tracking-[0.04em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#F5AD43]
                  sm:w-[240px]
                "
              >
                View Demo
              </button>

              {/* Explore Button */}
              <button
                type="button"
                className="
                  flex
                  h-[57px]
                  w-full
                  items-center
                  justify-center
                  rounded-[8px]
                  border-[2px]
                  border-[#173E40]
                  bg-transparent
                  px-[12px]
                  py-[10px]
                  font-avenir
                  text-[16px]
                  font-bold
                  leading-none
                  tracking-[0.04em]
                  text-[#173E40]
                  transition-all
                  duration-300
                  hover:bg-[#173E40]
                  hover:text-white
                  sm:w-[240px]
                "
              >
                Explore Keep it Right
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}