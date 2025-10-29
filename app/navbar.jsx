"use client";
import React, { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[65%]
      rounded-2xl px-6 py-3 flex items-center justify-between border 
      transition-all duration-700 
      ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      backdrop-blur-2xl border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)]
      bg-[linear-gradient(135deg,rgba(255,255,255,0.45)_0%,rgba(209,233,255,0.55)_100%)]`}
    >
      {/* Left Profile Section */}
      <div className="flex items-center gap-3">
        <Image
          src="/img.jpg"
          alt="profile"
          width={42}
          height={42}
          className="rounded-full border border-white/50 shadow-sm"
        />
        <span className="text-gray-800 font-semibold text-sm md:text-base tracking-wide">
          Shiwam Pundir
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/shiwam-pundi0b8173298r-/"
          target="_blank"
          className="group"
        >
          <CiLinkedin
            size={23}
            className="text-gray-700 group-hover:text-blue-500 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <a
          href="https://github.com/shiwam2001"
          target="_blank"
          className="group"
        >
          <FaGithub
            size={22}
            className="text-gray-700 group-hover:text-gray-900 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <a
          href="https://leetcode.com/u/k0mr2WykmF/"
          target="_blank"
          className="group"
        >
          <TbBrandLeetcode
            size={22}
            className="text-gray-700 group-hover:text-yellow-500 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
