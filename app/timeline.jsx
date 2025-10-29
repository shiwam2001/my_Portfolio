'use client'
import React from "react";
import data from "../data/timeLine";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="py-20 px-6 text-black">
      <h3 className="text-3xl font-bold text-center mb-10">My Journey</h3>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {data.map((item, i) => (
          <motion.div
            key={item.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-4 border-l-4 border-blue-400 bg-white/5 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.heading}</h2>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <a
          href="mailto:shiwamrajput4@gmail.com?subject=Contact%20Me&body=Hello%20Shiwam,"
          className="flex items-center gap-2 text-blue-400 hover:underline"
        >
          Email Me <FaExternalLinkAlt size={14} />
        </a>

        <a
          href="Shiwam's_cv(21).pdf"
          download="Shiwam_cv.pdf"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-xl text-white font-semibold hover:scale-105 transition-transform"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Timeline;
