"use client";
import { motion, Variants } from "framer-motion";

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
};

import {
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";



type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
};

const SERVICES: Service[] = [
  {
    title: "JavaScript Development",
    desc: "Dynamic, high-performance frontend & backend apps with JS.",
    icon: <SiJavascript className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    title: "Python Programming",
    desc: "Automation, APIs, and scripts with clean Python code.",
    icon: <SiPython className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    title: "React.js Development",
    desc: "Modern UI/UX using React + Tailwind CSS.",
    icon: <SiReact className="w-8 h-8" />,
    color: "text-cyan-500",
  },
  {
    title: "Next.js Apps",
    desc: "SSR, SSG, and full-stack solutions with Next.js.",
    icon: <SiNextdotjs className="w-8 h-8" />,
    color: "text-gray-800",
  },
  {
    title: "Node.js & Express",
    desc: "REST APIs, authentication, and scalable backend logic.",
    icon: <SiNodedotjs className="w-8 h-8" />,
    color: "text-green-600",
  },
  {
    title: "MongoDB",
    desc: "Flexible NoSQL database solutions with Mongoose ORM.",
    icon: <SiMongodb className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "PostgreSQL",
    desc: "Relational DB design & optimization with PostgreSQL.",
    icon: <SiPostgresql className="w-8 h-8" />,
    color: "text-sky-600",
  },
  {
    title: "Prisma ORM",
    desc: "Type-safe DB access with Prisma ORM.",
    icon: <SiPrisma className="w-8 h-8" />,
    color: "text-purple-600",
  },
  {
    title: "Backend Development",
    desc: "Secure, optimized, and scalable backend architectures.",
    icon: <FaServer className="w-8 h-8" />,
    color: "text-indigo-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

export default function Services() {
  return (
    <section id="services" className="relative  mt-20 py-10 md:py-20">
      <div className="absolute inset-0 -z-10 rounded-xl " />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800">
            My Tech Stack & Services
          </h2>
          <p className="mt-2 text-gray-600">
            Specialized in MERN stack & modern backend technologies.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <motion.div
            key={s.title}
            variants={variants}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md  bg-gradient-to-br from-pink-100 via-white to-sky-100 p-6 
                         shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(161,196,253,0.35)] transition-all"
            >
              <div className={`mb-4 ${s.color}`}>{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
