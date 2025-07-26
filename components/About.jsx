import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex justify-between bg-[#FFFFFF]">
      <div className=" pl-[64px] py-[160px] flex flex-col gap-[24px]">
        <h2 className="font-semibold text-[40px] leading-[50px] tracking-[0] text-[#121212] w-[367px]">
          Bridging the Dental Care Divide
        </h2>
        <p className="text-[20px]  tracking-[0] font-normal w-[670px] text-[#757575] leading-[25px]">
          Millions in Africa region lack access to dental care, leaving
          preventable oral diseases untreated. Dentnoor bridges the gap with an
          AI-powered health assisstant designed for these underserved
          communities.
        </p>
      </div>
      <div className="flex-center w-full max-w-[585px] aspect-square">
        <Image
          src="/teeth.png"
          alt="testing"
          width={585}
          height={585}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default About;
