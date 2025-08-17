"use client";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {  Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // 👈 proper easing array (easeInOut curve)
    },
  },
};import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Employee Task Management System",
    image: "/p1.png",
    link: "https://github.com/shiwam2001/Employee_Task_management_System-project",
  },
  {
    id: 2,
    title: "Job Portal / Hirrd",
    image: "/p2.png",
    link: "https://github.com/shiwam2001/JobPortal-Hirrd_Project",
  },
  {
    id: 3,
    title: "AI Powered Code Reviewer",
    image: "/p3.png",
    link: "https://github.com/shiwam2001/Ai_Powered_Code_Reviewer-Project",
  },
  {
    id: 4,
    title: "Car Marketing Application",
    image: "/p4.png",
    link: "https://github.com/shiwam2001/Powerd-Ai-Vehiql-markiting-app_Project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};



const Projects = () => {
  return (
    <motion.div
      className="mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="mb-6 text-gray-600">Showcasing some of my work.</p>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={variants}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-100 via-white to-sky-100 rounded-2xl p-4 shadow-md flex flex-col gap-4"
          >
            <Image
              width={400}
              height={300}
              src={project.image}
              alt={project.title}
              className="rounded-xl object-cover"
            />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <a
                href={project.link}
                target="_blank"
                className="text-sky-600 hover:text-pink-500 transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
