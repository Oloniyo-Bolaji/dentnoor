import Image from "next/image";
import React from "react";
import Metrics from "../sub-components/Metrics";
import Feature1 from "../sub-components/Feature1";
import Feature2 from "../sub-components/Feature2";
import Feature3 from "../sub-components/Feature3";

const Features = () => {
  return (
    <div className="my-gradient-bg max-w-screen-xl mx-auto flex flex-col gap-[10px] pt-[56px] sm:pb-[130px] pb-[50px]">
      <Metrics />
      <main className="sm:pt-30 pt-[50px]">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold sm:text-[40px] text-[20px] leading-[1] tracking-[0] text-center">
            Your Smile{" "}
            <span className="relative inline-block">
              Addiction
              <Image
                src="/underline.png"
                alt="underline"
                width={145}
                height={12}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1"
              />
            </span>
          </h2>
        </div>

        <div className="sm:px-15 sm:pt-[110px] px-6 pt-10 gap-0">
          <Feature1 />

          <Feature2 />

          <Feature3 />
        </div>
      </main>
    </div>
  );
};

export default Features;
