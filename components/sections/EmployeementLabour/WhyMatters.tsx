import Image from "next/image";
import getInTouchBg from "@/assets/images/homepage/get-in-touch-bg.png";

export default function WhyMatters() {
  return (
    <section className="relative overflow-hidden">
  <Image
    src={getInTouchBg}
    alt=""
    fill
    priority
    className="-z-10 object-cover object-center"
  />

  <div
    className="
      container-custom
      flex
      min-h-[420px]
      flex-col
      items-center
      justify-center
      px-5
      py-14
      text-center

      sm:min-h-[500px]
      sm:px-6
      sm:py-16

      lg:min-h-[560px]
      lg:py-20
    "
  >
    {/* SPAN */}
    <span
      className="
        inline-block
        w-full
        max-w-[196px]
        rounded-[5px]
        bg-white
        px-4
        py-2
        font-avenir
        text-[14px]
        font-normal
        text-[#439897]

        sm:text-[16px]

        lg:text-[14px]
      "
    >
      GET IN TOUCH
    </span>

    {/* HEADING */}
    <h3
      className="
        mt-4
        max-w-[840px]
        font-avenir
        font-extrabold
        leading-tight
        text-white
        text-[24px]

        sm:text-[30px]

        lg:text-[40px]
        xl:text-[48px]
      "
    >
      Building respectful workplaces starts with the right conversation.
    </h3>

    {/* PARAGRAPH */}
    <p
      className="
        mt-4
        max-w-[1400px]
        font-nunito-sans
        font-normal
        leading-relaxed
        text-white
        text-[14px]

        sm:text-[14px]

        lg:text-[20px]
      "
    >
      Cohere Consultants LLP is a boutique practice with a pan-India
      presence, offering comprehensive legal and compliance services.
      Specializing in areas such as laws on sexual harassment and
      discrimination in the workplace, as well as maternity and labor laws,
      the firm boasts a multidisciplinary team.
    </p>

    {/* BUTTONS */}
    <div
      className="
        mt-10
        flex
        w-full
        flex-col
        items-center
        gap-4

        sm:mt-10
        sm:flex-row
        sm:justify-center

        lg:mt-16
      "
    >
      <button
        className="
          w-full
          max-w-[260px]
          rounded-[10px]
          bg-white
          px-6
          py-3
          font-nunito-sans-extra-bold
          text-[14px]
          text-[#0D1E1E]
          transition
          hover:bg-gray-100

          sm:text-[14px]
        "
      >
        TALK TO AN EXPERT
      </button>

      <button
        className="
          w-full
          max-w-[260px]
          rounded-[10px]
          border
          border-white
          bg-transparent
          px-6
          py-3
          font-nunito-sans-extra-bold
          text-[14px]
          text-white
          transition
          hover:bg-white/10

          sm:text-[14px]
        "
      >
        CONTACT US
      </button>
    </div>
  </div>
</section>
  );
}