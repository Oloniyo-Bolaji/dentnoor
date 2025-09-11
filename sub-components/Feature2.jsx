import Image from "next/image";
import React from "react";

const AboutFeature2 = () => {
  return (
    <section className="flex sm:gap-[180px] gap-7 sm:py-15 py-6 items-center">
      <div className="max-w-[600px]">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h2 className="sm:text-3xl text-lg font-semibold leading-[1] tracking-[0] text-black">
            Teledentistry Access
          </h2>
          <span className="sm:text-2xl text-base font-normal leading-[1] tracking-[0] text-[#575757]">
            Expert dental care without the clinic Visit.
          </span>
        </div>
        <div>
          <p className="sm:text-2xl text-base font-normal leading-[1.4] tracking-[0] text-[#575757]">
            Connect with licensed dentists from the comfort of your home.
            Dentnoor makes expert consultations fast, affordable and stress
            free.
          </p>
        </div>
      </div>
      <div className="relative sm:w-[440px] sm:h-[890px] w-[100px] h-[400px] flex-shrink-0">
        <Image
          src="/feature2.png"
          alt="feature2"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutFeature2;
