import Image from "next/image";
import React from "react";

const Below = () => {
  return (
    <div className="sm:pt-7 pt-2.5 max-w-screen-xl mx-auto">
      <div className="relative">
        <h2 className="sm:text-4xl text-base leading-none tracking-0 font-semibold text-center text-[#000000] capitalize">
          keep your family oral health excited
        </h2>
        <span className="absolute left-[980px] top-[20px]">
          <Image
            src="/Star 1.png"
            alt="star"
            width={54}
            height={54}
            className="object-contain"
          />
        </span>
      </div>

      <div className="sm:pt-30 sm:pb-35 my-7 relative w-full sm:h-[990px] h-[400px] flex-shrink-0">
        <Image src="/below.png" alt="below" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Below;
