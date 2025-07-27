import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header
      style={{ backgroundImage: "url('/hero.png')" }}
      className=" w-full max-w-screen-xl mx-auto relative bg-no-repeat bg-center bg-cover pt-[15px] opacity-100 rotate-0 flex justify-end flex-col"
    >
      <div className="flex flex-col items-center gap-[20px] pt-[10px] sm:pb-[90px] pb-[40px]">
        <h1 className="sm:w-[900px] w-[400px] font-semibold sm:text-[64px] text-[32px] leading-[100%] text-center">
          Start the day With a Bright Smile
        </h1>

        <p className="font-semibold sm:text-[24px] text-[15px] tracking-normal text-center text-[#787878] leading-[130%] sm:w-[970px] w-[400px]">
          Your AI-powered oral health companion, making preventive dental care
          simple, personal and accessible for everyone.
        </p>
        <div className="flex gap-[10px] justify-center">
          <button className="rounded-[15px] bg-[#009bdb] text-[#ffffff] text-[14px] font-medium sm:w-[200px] w-[150px] h-[40px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEBeW2VkzNS_RGA3o3_REHmndZXOK-7m6OnpxYJVjyVyJ2hA/viewform"
            >
              Join Waitlist
            </a>
          </button>
          <button className="rounded-[15px]  bg-[#78787826] text-black text-[14px] sm:w-[200px] w-[150px] h-[40px] border border-[#e0e0e0]">
            <a href="">Try for Free </a>
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto flex items-end sm:justify-start justify-center sm:pl-[90px]">
        <div className="relative w-[380px] h-[360px] sm:block hidden">
          <Image
            src="/brush.png"
            alt="brushing"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[440px] h-[500px]">
          <Image
            src="/hero-screen.png"
            alt="screen"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
