'use client';
import React from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import TypingEffect from "./typed";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-gray-700 text-center px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/img.jpg"
          alt="profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-400 shadow-xl"
        />
      </motion.div>

      <div className="mt-6">
        <TypingEffect />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mt-8"
      >
        <h3 className="text-2xl font-semibold mb-3">Who am I?</h3>
        <p className="text-gray-700 leading-relaxed">
          A passionate <b className="text-blue-400">Software Developer</b> from{" "}
          <u>Noida, Uttar Pradesh</u>, focused on building interactive and
          performant web experiences.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">What do I do?</h3>
        <p className="text-gray-700 leading-relaxed">
          I develop modern web apps using <b>React</b>, <b>Node.js</b>,{" "}
          <b>Express</b>, <b>MongoDB</b>, and <b>MySQL</b>. Currently pursuing
          MCA and constantly improving my full-stack skills by working on real
          projects.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {[
          {
            icon: <CiLinkedin size={22} />,
            link: "https://www.linkedin.com/in/shiwam-pundi0b8173298r-/",
            label: "LinkedIn",
          },
          {
            icon: <FaGithub size={22} />,
            link: "https://github.com/shiwam2001",
            label: "GitHub",
          },
          {
            icon: <TbBrandLeetcode size={22} />,
            link: "https://leetcode.com/u/k0mr2WykmF/",
            label: "LeetCode",
          },
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.link}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            hover:scale-105 transition-transform duration-300 shadow-md"
          >
            {btn.icon} {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Main;
