import Image from "next/image";
import React from "react";

const AboutFeature3 = () => {
  return (
    <section className="flex gap-5 sm:py-15 py-6 items-center">
      <div className="relative sm:w-[440px] sm:h-[890px] w-[100px] h-[400px] flex-shrink-0">
        <Image
          src="/feature3.png"
          alt="feature3"
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-[600px]">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h2 className="sm:text-3xl text-lg font-semibold leading-[1] tracking-[0] text-black">
            Gamified Habit Tracker
          </h2>
          <span className="sm:text-2xl text-base font-normal leading-[1] tracking-[0] text-[#575757]">
            Gain points, streaks and badge regards to encourage consistency.
          </span>
        </div>
        <div>
          <p className="sm:text-2xl text-base font-normal leading-[1.4] tracking-[0] text-[#575757]">
            Track how well you are brushing and how consistent you have been.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature3;
