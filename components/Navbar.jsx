"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import AuthButton from "@/sub-components/AuthButton";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => setShowMenu((prev) => !prev);

  // ✅ nav links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Features", href: "/" },
  ];

  return (
    <nav className="relative w-full bg-[#ebf7ff91] z-[1000]">
      {/* Main navbar row */}
      <div className=" flex-between-center sm:px-8 px-5 h-20">
        {/* Logo */}
        <div>
          <Image src="/Dentnoor.png" alt="logo" width={73} height={60} />
        </div>

        {/* Mobile toggle */}
        <div
          className="sm:hidden block text-3xl text-[#009bdb]"
          onClick={toggle}
        >
          {showMenu ? <IoIosClose /> : <IoMenu />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center justify-between lg:gap-90 sm:gap-25">
          {/* Links */}
          <div className="flex gap-8 text-xs font-medium text-[#787878]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-black"
                aria-label={`Visit Dentnoor ${link.label} page`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <AuthButton />
        </div>
      </div>

      {/* Mobile Nav */}
      {showMenu && (
        <div className="flex sm:hidden flex-col items-center gap-6 absolute top-20 left-0 w-full bg-[#ebf7ff] py-4 px-4 z-[999]">
          <div className="flex flex-col gap-5 text-sm font-medium text-[#787878] items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-black"
                aria-label={`Visit Dentnoor ${link.label} page`}
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <AuthButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
