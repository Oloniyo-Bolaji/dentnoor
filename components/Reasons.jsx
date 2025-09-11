import Image from "next/image";
import React from "react";

const Reasons = () => {
  const reasons = [
    "Designed for African Families with real world dental challenges.",
    "Available in local languages for better understanding.",
    "Powered by AI and built with you in mind.",
    "Easy to use and encourage kids and adults to build consistent oral care habits.",
  ];

  return (
    <section className="max-w-screen-xl mx-auto sm:px-[75px] px-[35px] sm:pt-30 pt-[50px] sm:pb-[170px] pb-[50px]">
      <header className="sm:mb-20 flex gap-4 flex-col">
        <h2 className="font-semibold sm:text-[40px] text-[25px] leading-[100%] tracking-0">
          Why Dentnoor ?
        </h2>
        <p className="font-normal sm:text-[24px] text-[15px] leading-[100%] tracking-0 text-[#757575]">
          Trust Dentnoor for you and your Family
        </p>
      </header>
      <div className="flex flex-col sm:gap-10 gap-5 my-2.5">
        {reasons.map((reason, index) => {
          return (
            <div
              key={index}
              className="flex-between-center bg-[#E0E0E047] py-5 sm:pr-25 px-5 sm:pl-5 border-[2px] border-[#009BDB80] rounded-4xl"
            >
              <div className="flex gap-2.5 items-center">
                <div className="relative sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0">
                  <Image
                    src="/liststyle.png"
                    alt="list"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 16px, 24px"
                  />
                </div>
                <p className="sm:text-2xl text-base leading-none tracking-0 font-medium text-[#121212]">
                  {reason}
                </p>
              </div>
              <div className="relative sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0">
                <Image
                  src="/tickicon.png"
                  alt="tickicon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 16px, 24px"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reasons;
