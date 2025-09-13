import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto relative bg-[url('/hero.png')] bg-no-repeat bg-center bg-cover pt-4 opacity-100 rotate-0 flex justify-end flex-col">
      <div className="flex flex-col items-center gap-5 pt-2.5 sm:pb-22 pb-10">
        <h1 className="sm:w-[900px] w-[350px] font-semibold sm:text-[64px] text-[32px] leading-[100%] text-center">
          Start the day With a Bright Smile
        </h1>

        <p className="font-semibold sm:text-[24px] text-[15px] tracking-normal text-center text-[#787878] leading-[130%] sm:w-[970px] w-[350px]">
          Your AI-powered oral health companion, making preventive dental care
          simple, personal and accessible for everyone.
        </p>
        <div className="flex gap-2.5 justify-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the waitlist"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEBeW2VkzNS_RGA3o3_REHmndZXOK-7m6OnpxYJVjyVyJ2hA/viewform"
            className="flex-center rounded-2xl bg-[#009bdb] text-[#ffffff] text-sm font-medium sm:w-[200px] w-[150px] h-[40px]"
          >
            Join Waitlist
          </Link>
          <Link
            href=""
            aria-label="Try our features for free"
            className="flex-center rounded-2xl  bg-[#78787826] text-black text-sm sm:w-[200px] w-[150px] h-[40px] border border-[#e0e0e0]"
          >
            Try for Free
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-end sm:justify-start justify-center sm:pl-20">
        {/* Brush Image */}
        <div className="relative sm:w-96 sm:h-80 w-72 h-40">
          <Image
            src="/brush.png"
            alt="Illustration of a toothbrush"
            fill
            sizes="(max-width: 768px) 288px, 384px"
            className="object-contain"
            priority
          />
        </div>

        {/* Screen Image */}
        <div className="relative w-[440px] h-[500px] sm:block hidden">
          <Image
            src="/hero-screen.png"
            alt="App screen showing dental companion interface"
            fill
            sizes="440px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
