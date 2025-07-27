import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: `
      radial-gradient(
        125% 125% at -25% 95%,
        #009BDB 0%,
        #BCE5F5 33.5%,
        #24A9E0 52.1%,
        #FFFFFF 82%,
        #AEDFF4 86.5%,
        #24A9E0 92.3%
      ),
      linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.61),
        rgba(255, 255, 255, 0.61)
      )
    `,
      }}
      className="max-w-screen-xl mx-auto flex justify-between flex-col sm:gap-[100px] gap-[50px] pt-[25px] sm:pl-[55px] pl-[20px] sm:pr-[75px] pr-[30px] sm:pb-[55px] pb-[30px]"
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-extrabold text-[14px]">Dentnoor</h2>
          <div className="flex sm:gap-[10px] gap-[5px]">
            <p className="font-medium sm:text-[16px] text-[13px]">Us on social media</p>
            <a href="/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"
              />
            </a>
            <a href="/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
                className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"
              />
            </a>
            <a href="/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"
              />
            </a>
          </div>
        </div>
        <div className="flex sm:gap-[60px] gap-[30px] sm:text-[16px] text-[13px]">
          <ul className="flex flex-col sm:gap-[16px] gap-[10px]">
            <li>Home</li>
            <li>Features</li>
          </ul>
          <ul className="flex flex-col sm:gap-[16px] gap-[10px]">
            <li>About</li>
            <li>Sign up</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:gap-[15px] gap-[10px]">
        <p className="font-regular sm:text-[16px] text-[13px]">
          @Dentnoor Health System
        </p>
        <span className="font-regular sm:text-[16px] text-[13px]">
          All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
