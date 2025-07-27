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
    <div className="max-w-screen-xl mx-auto px-[75px] pt-[120px] pb-[170px]">
      <div className="mb-[79px] flex gap-[16px] flex-col">
        <h2 className="font-semibold text-[40px] leading-[100%] tracking-0">
          Why Dentnoor ?
        </h2>
        <p className="font-normal text-[24px] leading-[100%] tracking-0 text-[#757575]">
          Trust Dentnoor for you and your Family
        </p>
      </div>
      <div className="flex flex-col gap-[40px] my-[10px]">
        {reasons.map((reason, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center bg-[#E0E0E047] py-[20px] pr-[100px] pl-[20px] border-[2px] border-[#009BDB80] rounded-[30px]"
            >
              <div className="flex gap-[10px]">
                <Image src="/liststyle.png" alt="list" width={24} height={24} />
                <p className="text-[24px] leading-none tracking-0 font-medium text-[#121212]">{reason}</p>
              </div>
              
              <div>
                <Image src="/tickicon.png" alt="tickicon" width={24} height={24}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
