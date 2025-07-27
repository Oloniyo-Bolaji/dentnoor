import Image from "next/image";
import React from "react";

const Count = () => {
  return (
    <div className="my-gradient-bg max-w-screen-xl mx-auto flex flex-col gap-[10px] pt-[56px] pb-[130px]">
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-[115px] px-[109px]">
        <div className="flex-count">
          <h3 className="count">10,000+</h3>
          <span className="count-name">Users</span>
        </div>
        <div className="flex-count">
          <h3 className="count">12</h3>
          <span className="count-name">Doctors Participating</span>
        </div>
        <div className="flex-count">
          <h3 className="count">24,678</h3>
          <span className="count-name">Brands Collaboration</span>
        </div>
        <div className="flex-count">
          <h3 className="count">500</h3>
          <span className="count-name">Countries Reached</span>
        </div>
      </div>
      <main className="pt-[120px]">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-[40px] leading-[1] tracking-[0] text-center">
            Our Smile{" "}
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

        <div className="pl-[60px] pt-[110px] pr-[50px]">
          <section className="flex gap-[64px] px-[40px] py-[60px] items-center">
            {/* Image */}
            <div className="relative w-[440px] h-[890px] flex-shrink-0">
              <Image
                src="/feature1.jpg"
                alt="feature1"
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-[16px] max-w-[600px]">
                <h2 className="text-[32px] font-semibold leading-[1] tracking-[0] text-black">
                  AI Dental Chatbot 
                </h2>
                <span className="text-[24px] font-regular leading-[1] tracking-[0] text-[#575757]">
                  Get Instant answers, 24/7.
                </span>
              </div>
              <div className="max-w-[500px]">
                <p className="text-[24px] font-regular leading-[1.4] tracking-[0] text-[#575757]">
                  Have a toothache or worried about oral symptoms? Our smart
                  dental assistant listens, learns, and guides you through best
                  practices right from your phone.
                </p>
              </div>
            </div>
          </section>

          <section className="flex gap-[180px] py-[60px] items-center">
            <div className="max-w-[600px]">
              <div className="flex flex-col gap-[16px] max-w-[600px]">
                <h2 className="text-[32px] font-semibold leading-[1] tracking-[0] text-black">
                  Teledentistry Access
                </h2>
                <span className="text-[24px] font-regular leading-[1] tracking-[0] text-[#575757]">
                  Expert dental care without the clinic Visit.
                </span>
              </div>
              <div>
                <p className="text-[24px] font-regular leading-[1.4] tracking-[0] text-[#575757]">
                  Connect with licensed dentists from the comfort of your home.
                  Dentnoor makes expert consultations fast, affordable amd
                  stress free.
                </p>
              </div>
            </div>
            <div className="relative w-[440px] h-[890px] flex-shrink-0">
              <Image
                src="/feature2.png"
                alt="feature2"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex gap-[20px] py-[60px] items-center">
            <div className="relative w-[440px] h-[890px] flex-shrink-0">
              <Image
                src="/feature3.png"
                alt="feature3"
                fill
                className="object-contain"
              />
            </div>
            <div className="max-w-[600px]">
              <div className="flex flex-col gap-[16px] max-w-[600px]">
                <h2 className="text-[32px] font-semibold leading-[1] tracking-[0] text-black">
                  Gamified Habit Tracker
                </h2>
                <span className="text-[24px] font-regular leading-[1] tracking-[0] text-[#575757]">
                  Gain points, streaks and badge regards to encourage
                  consistency.
                </span>
              </div>
              <div>
                <p className="text-[24px] font-regular leading-[1.4] tracking-[0] text-[#575757]">
                  Gain points, straks and badge reeards to encourage
                  consistency. Track how well you are brushing and how
                  consistent you have been.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Count;
