import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex justify-between bg-[#FFFFFF]">
      <div className="w-full max-w-screen-xl mx-auto flex gap-25 items-center sm:pl-16 sm:pr-5 px-5">

        <div className="flex flex-col gap-6 sm:py-40 py-20">
          <h2 className="font-semibold sm:text-4xl text-xl leading-[50px] tracking-[0] text-[#121212] sm:w-90 w-full">
            Bridging the Dental Care Gap
          </h2>
          <p className="sm:text-xl text-base tracking-[0] font-normal w-full sm:w-[670px] text-[#757575] leading-[25px]">
            Millions across Africa lack access to dental care, leaving
            preventable oral diseases untreated. Dentnoor bridges this gap with
            an AI-powered oral health assisstant designed for you where it's needed most.
          </p>
        </div>
      
      <div className="sm:flex-center hidden w-full">
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
