"use client";

import { useState } from "react";
import LogoBottom from "../../Logo/LogoBottom";
import LogoTop from "../../Logo/LogoTop";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const logoVariants = {
    initial: { x: 0 },
    animate: {
      rotate: !isLoading ? 270 : 0,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="
        justify-center
        items-center
        flex
        fixed
        inset-0
        z-[500]
      "
    >
      <motion.div
        className="
          absolute
          bg-black
          h-full
          w-[50%]
          left-0
        "
        animate={{
          x: !isLoading ? "-50vw" : 0,
        }}
        transition={{
          delay: 1.3,
          ease: "easeIn",
          duration: 0.7,
        }}
      ></motion.div>
      <motion.div
        className="
          absolute
          bg-black
          h-full
          w-[50%]
          right-0
        "
        animate={{
          x: !isLoading ? "50vw" : 0,
        }}
        transition={{
          delay: 1.3,
          ease: "easeIn",
          duration: 0.7,
        }}
      ></motion.div>

      <motion.div
        className="absolute flex flex-col gap-2"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          initial={{
            fill: "#fff",
          }}
          animate={{
            y: !isLoading ? "-50vw" : 0,
            fill: "#f4ce34",
          }}
          transition={{
            delay: 1.3,
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          <LogoTop />
        </motion.div>
        <motion.div
          initial={{
            fill: "#fff",
          }}
          animate={{
            y: !isLoading ? "50vw" : 0,
            fill: "#f4ce34",
          }}
          transition={{
            delay: 1.3,
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          <LogoBottom />
        </motion.div>
      </motion.div>
    </div>
  );
};
