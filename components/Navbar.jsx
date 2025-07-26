import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between-center h-[80px] py-[10px] px-[32px]  w-full bg-[#ebf7ff91] z-[1000]">
      <div>
        <Image src="/Dentnoor.png" alt="logo" width={73} height={60} />
      </div>
      <div className="flex gap-[30px] text-[12px] font-medium font-500 text-[#787878]">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <Link href="/" className="hover:text-black">
          About
        </Link>
        <Link href="/" className="hover:text-black">
          Features
        </Link>
      </div>
      <div className="flex gap-[23px] ">
        <button className="rounded-[15px] bg-[#009bdb] text-[#ffffff] text-[14px] w-[110px] h-[35px] font-medium font-500">
          Sign up
        </button>
        <button className="rounded-[15px] border border-solid border-[#e0e0e0] text-[#121212] text-[14px] w-[110px] h-[35px] font-medium leading-[1] tracking-normal">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
