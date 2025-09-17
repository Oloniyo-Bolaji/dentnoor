"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import About from "@/components/About";
import Below from "@/components/Below";
import Features from "@/components/Features";
import Reasons from "@/components/Reasons";
import Hero from "@/components/Hero";
import Chatbot from "@/components/Chatbot";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleOpen = () => {
    if (!session) {
      // If no session, redirect to sign in
      signIn(); // opens default NextAuth sign-in
      return;
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Hero handleOpen={handleOpen} />
      <About />
      <Features />
      <Reasons />
      <Below />

      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-5 right-5 bg-[#009bdb] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#009bdb]/60 transition"
      >
        {isOpen ? <IoClose /> : <FaRobot />}
      </button>

      {/* Chatbot */}
      {isOpen && <Chatbot currentUser={session?.user} />}
    </div>
  );
};

export default Home;
