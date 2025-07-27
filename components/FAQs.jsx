import Image from "next/image";
import React from "react";

const FAQs = () => {
  const reasons = [
    "Designed for African Families with real world dental challenges.",
    "Available in local languages for better understanding.",
    "Powered by AI and built with you in mind.",
    "Easy to use and encourage kids and adults to build consistent oral care habits.",
  ];

  return (
    <div className="max-w-screen-xl mx-auto sm:px-[75px] px-[35px] sm:pt-[120px] pt-[50px] sm:pb-[170px] pb-[50px]">
      <div className="sm:mb-[79px] flex gap-[16px] flex-col">
        <h2 className="font-semibold sm:text-[40px] text-[25px] leading-[100%] tracking-0">
          Why Dentnoor ?
        </h2>
        <p className="font-normal sm:text-[24px] text-[15px] leading-[100%] tracking-0 text-[#757575]">
          Trust Dentnoor for you and your Family
        </p>
      </div>
      <div className="flex flex-col sm:gap-[40px] gap-[20px] my-[10px]">
        {reasons.map((reason, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center bg-[#E0E0E047] py-[20px] sm:pr-[100px] px-[20px] sm:pl-[20px] border-[2px] border-[#009BDB80] rounded-[30px]"
            >
              <div className="flex gap-[10px] items-center">
                <div className="relative sm:w-[24px] sm:h-[24px] w-[15px] h-[15px] flex-shrink-0">
                  <Image
                    src="/liststyle.png"
                    alt="list"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="sm:text-[24px] text-[15px] leading-none tracking-0 font-medium text-[#121212]">
                  {reason}
                </p>
              </div>
              <div className="relative sm:w-[24px] sm:h-[24px] w-[15px] h-[15px] flex-shrink-0">
                <Image
                  src="/tickicon.png"
                  alt="tickicon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
