import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex justify-between bg-[#FFFFFF]">
      <div className="w-full max-w-screen-xl mx-auto flex gap-[100px] items-center pl-[65px] pr-[20px]">
        <div className="flex flex-col gap-[24px] py-[160px] ">
          <h2 className="font-semibold text-[40px] leading-[50px] tracking-[0] text-[#121212] max-w-[360px] w-full">
            Bridging the Dental Care Divide
          </h2>
          <p className="text-[20px]  tracking-[0] font-normal w-full max-w-[670px] text-[#757575] leading-[25px]">
            Millions in Africa region lack access to dental care, leaving
            preventable oral diseases untreated. Dentnoor bridges the gap with
            an AI-powered health assisstant designed for these underserved
            communities.
          </p>
        </div>
      
      <div className="flex-center w-full">
        <Image
          src="/teeth.png"
          alt="testing"
          width={585}
          height={585}
          className="w-full h-auto"
        />
      </div>
      </div>
    </section>
  );
};

export default About;
