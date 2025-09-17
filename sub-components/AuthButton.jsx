"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src={session.user.image ?? "/user.png"}
            alt="avatar"
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
          <button
            onClick={() => signOut()}
            className="rounded-2xl bg-[#009bdb] text-white text-sm w-28 h-9 font-medium"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => signIn("google")}
            className="rounded-2xl bg-[#009bdb] text-white text-sm w-28 h-9 font-medium"
          >
            Sign up
          </button>
          <button
            onClick={() => signIn("google")}
            className="rounded-2xl border border-[#e0e0e0] text-[#121212] text-sm w-28 h-9 font-medium"
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
