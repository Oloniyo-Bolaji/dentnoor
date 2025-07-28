"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="max-w-screen-xl mx-auto relative w-full bg-[#ebf7ff91] z-[1000]">
      {/* Main navbar row */}
      <div className=" flex items-center justify-between sm:px-[32px] px-[20px] h-[80px]">
        {/* Logo */}
        <div>
          <Image src="/Dentnoor.png" alt="logo" width={73} height={60} />
        </div>

        {/* Mobile toggle */}
        <div
          className="sm:hidden block text-[30px] text-[#009bdb]"
          onClick={toggle}
        >
          {showMenu ? <IoIosClose /> : <IoMenu />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center justify-between lg:gap-[360px] sm:gap-[100px]">
          {/* Links */}
          <div className="flex gap-[30px] text-[12px] font-medium text-[#787878]">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/" className="hover:text-black">About</Link>
            <Link href="/" className="hover:text-black">Features</Link>
          </div>

          {/* Buttons */}
          <div className="flex gap-[25px]">
            <button className="rounded-[15px] bg-[#009bdb] text-white text-[14px] w-[110px] h-[35px] font-medium">
              Sign up
            </button>
            <button className="rounded-[15px] border border-[#e0e0e0] text-[#121212] text-[14px] w-[110px] h-[35px] font-medium">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav: put it outside the max-w wrapper */}
      {showMenu && (
        <div className="flex sm:hidden flex-col items-center gap-[25px] absolute top-[80px] left-0 w-full bg-[#ebf7ff] py-4 px-4 z-[999]">
          <div className="flex flex-col gap-[20px] text-[14px] font-medium text-[#787878] items-center">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/" className="hover:text-black">About</Link>
            <Link href="/" className="hover:text-black">Features</Link>
          </div>
          <div className="flex flex-col gap-[15px] mt-2 items-center">
            <button className="rounded-[15px] bg-[#009bdb] text-white text-[14px] w-[110px] h-[35px] font-medium">
              Sign up
            </button>
            <button className="rounded-[15px] border border-[#e0e0e0] text-[#121212] text-[14px] w-[110px] h-[35px] font-medium">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
