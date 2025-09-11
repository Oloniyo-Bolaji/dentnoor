import Image from "next/image";
import React from "react";

const AboutFeature1 = () => {
  return (
    <section className="flex sm:gap-[64px] gap-5 sm:py-15 py-5 items-center">
      {/* FEature 1 Image */}
      <div className="relative sm:w-[440px] sm:h-[890px] w-25 h-100 flex-shrink-0">
        <Image
          src="/feature1.jpg"
          alt="feature1"
          fill
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h2 className="sm:text-3xl text-lg font-semibold leading-[1] tracking-[0] text-black">
            AI Dental Assistant
          </h2>
          <span className="sm:text-2xl text-base font-normal leading-[1] tracking-[0] text-[#575757]">
            Get Instant answers, 24/7.
          </span>
        </div>
        <div className="max-w-[500px]">
          <p className="sm:text-2xl text-base font-normal leading-[1.4] tracking-[0] text-[#575757]">
            Have a toothache or worried about oral symptoms? Our smart dental
            assistant listens, learns, and guides you through best practices
            right from your phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature1;
