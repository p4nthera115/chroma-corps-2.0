"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

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
    <div className="relative h-full w-full bg-[#ffe600] diagonal-lines-black flex flex-col gap-10 justify-center">
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
        className="flex gap-4 justify-center text-center flex-col"
      >
        <a
          href="https://discord.com/invite/ejaQBdWyyN"
          className="max-w-fit mx-auto"
        >
          <button className="bg-black text-[#ffe600] text-sm md:text-base py-4 px-4 md:px-16 rounded shadow-inner hover:scale-[105%] transition font-mono">
            <h2>Join the Discord server</h2>
          </button>
        </a>
        <div className="flex flex-row gap-4 justify-center">
          <a
            target="_blank"
            href="https://ko-fi.com/anzuwebdevs"
            className="max-w-fit"
          >
            <button className="bg-black text-[#ffe600] text-sm md:text-base py-4 px-4 md:px-16 rounded shadow-inner hover:scale-[105%] transition font-mono">
              <h2>Donate</h2>
            </button>
          </a>
          <a onClick={() => router.push("/faqs")} className="max-w-fit">
            <button className="bg-black text-[#ffe600] text-sm md:text-base py-4 px-4 md:px-16 rounded shadow-inner hover:scale-[105%] transition font-mono">
              <h2>FAQs</h2>
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
