"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="relative h-full w-full bg-[#ffe600] diagonal-lines-yellow flex flex-col gap-10 justify-center">
      <motion.h1
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-black font-cyber font-bold flex justify-center"
      >
        GET INVOLVED
      </motion.h1>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        <a href="https://discord.com/invite/ejaQBdWyyN">
          <button className="bg-black text-[#ffe600] text-sm md:text-base py-4 px-4 md:px-16 rounded shadow-inner hover:scale-110 transition font-mono">
            <h2>Join the Discord server</h2>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
