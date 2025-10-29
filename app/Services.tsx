"use client";
import { motion, Variants } from "framer-motion";
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

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Service type
type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
};

// Services data
const SERVICES: Service[] = [
  {
    title: "JavaScript Development",
    desc: "Building fast, interactive, and scalable applications with modern JavaScript.",
    icon: <SiJavascript className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    title: "Python Programming",
    desc: "Automating workflows and crafting clean, maintainable Python scripts.",
    icon: <SiPython className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    title: "React.js Development",
    desc: "Creating elegant, high-performing UI components using React & Tailwind.",
    icon: <SiReact className="w-8 h-8" />,
    color: "text-cyan-500",
  },
  {
    title: "Next.js Apps",
    desc: "Developing full-stack, SEO-optimized apps using Next.js & modern SSR.",
    icon: <SiNextdotjs className="w-8 h-8" />,
    color: "text-gray-800",
  },
  {
    title: "Node.js & Express",
    desc: "Crafting robust REST APIs and authentication systems for scalable backends.",
    icon: <SiNodedotjs className="w-8 h-8" />,
    color: "text-green-600",
  },
  {
    title: "MongoDB",
    desc: "Designing flexible and efficient NoSQL database models with Mongoose.",
    icon: <SiMongodb className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "PostgreSQL",
    desc: "Structured relational database design with advanced query optimization.",
    icon: <SiPostgresql className="w-8 h-8" />,
    color: "text-sky-600",
  },
  {
    title: "Prisma ORM",
    desc: "Simplified, type-safe database access for modern applications.",
    icon: <SiPrisma className="w-8 h-8" />,
    color: "text-purple-600",
  },
  {
    title: "Backend Development",
    desc: "Designing secure and optimized server-side architectures with reliability.",
    icon: <FaServer className="w-8 h-8" />,
    color: "text-indigo-600",
  },
];

// Component
export default function Services() {
  return (
    <section
      id="services"
      className="relative mt-20 py-16 overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 -z-10  opacity-90" />

      {/* Subtle glowing pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.5)_0%,transparent_70%)] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.h2
            variants={cardVariants}
            className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight"
          >
            My Tech Stack & Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-3 text-gray-600 text-base font-medium md:text-lg"
          >
            I specialize in the MERN stack and modern backend technologies.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md 
                         bg-gradient-to-br from-white via-white/90 to-pink-50 
                         p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(161,196,253,0.25)] 
                         transition-all duration-300"
            >
              <div className={`mb-4 ${s.color}`}>{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
