import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header
      style={{ backgroundImage: "url('/hero.png')" }}
      className=" bg-no-repeat bg-cover bg-center pt-[15px] h-[850px] opacity-100 rotate-0"
    >
      <div className="flex-col-center gap-[20px] pt-[10px] w-full h-[433px]">
        <h1 className="font-semibold text-[64px] leading-[100%] text-center">
          Start the day With a Bright{" "}
          <span className="block text-center leading-tight">Smile</span>
        </h1>

        <p className="font-semibold text-[24px] tracking-normal text-center text-[#787878] leading-[130%] w-[970px]">
          Your AI-powered oral health companion, making preventive dental care
          simple, personal and accessible for everyone.
        </p>
        <div className="flex gap-[10px]">
          <button className="rounded-[15px] bg-[#009bdb] text-[#ffffff] text-[14px] font-medium w-[200px] h-[40px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEBeW2VkzNS_RGA3o3_REHmndZXOK-7m6OnpxYJVjyVyJ2hA/viewform"
            >
              Join Waitlist
            </a>
          </button>
          <button className="rounded-[15px]  bg-[#78787826] text-black text-[14px] w-[200px] h-[40px] border border-[#e0e0e0]">
            <a href="">Try for Free </a>
          </button>
        </div>
      </div>
      <div className="flex pr-[500px] pl-[100px] pt-[75px] gap-0">
        <div className="relative w-[380px] h-[360px]">
          <Image
            src="/brush.png"
            alt="brushing"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative top-[-135px] w-[440px] h-[500px]">
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
