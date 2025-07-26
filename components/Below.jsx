import Image from "next/image";
import React from "react";

const Below = () => {
  return (
    <div className="pt-[30px]">
      <div className="relative">
        <h2 className="text-[40px] leading-none tracking-0 font-semibold text-center text-[#000000] capitalize">
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

      <div className="pt-[120px] pb-[145px] relative w-full h-[990px] flex-shrink-0">
        <Image src="/below.png" alt="below" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Below;
