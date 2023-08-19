"use client";

import Image from "next/image";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Sinix = () => {
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
    <div className="relative h-full w-full flex flex-col justify-center text-center gap-12">
      <motion.h2
        className="text-5xl font-cyber text-[#ffe600]"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        An annual event hosted by Sinix
      </motion.h2>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          className="overflow-hidden rounded-full border-8 border-[#ffe600]"
          src="https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Sinix/sinixdp.jpg"
          alt=""
          height={300}
          width={300}
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-row space-x-2 self-center"
      >
        <a
          href="https://www.youtube.com/@sinixdesign"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineYoutube
            size={50}
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
          />
        </a>
        <a
          href="https://www.instagram.com/sinixdesign/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram
            size={50}
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
          />
        </a>
        <a href="https://twitter.com/sinix777" rel="noreferrer" target="_blank">
          <AiOutlineTwitter
            size={50}
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Sinix;
