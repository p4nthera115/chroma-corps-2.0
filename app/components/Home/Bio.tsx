"use client";

import { motion } from "framer-motion";

const Bio = () => {
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
    <div className="flex flex-col justify-center gap-[4.5rem] h-full relative w-full bg-black p-4 md:p-0">
      <motion.header
        className="flex flex-col align-middle justify-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="font-cyber font-extrabold text-center text-[#ffe600] lg:text-6xl md:text-4xl text-3xl">
          FOR THE LOVE OF ART.
        </h2>
      </motion.header>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col justify-center mx-auto text-center max-w-full md:max-w-[50%] md:text-3xl text-md font-mono gap-8"
      >
        <p>
          The ultimate art Battle Royale. Only the strongest will make it to the
          end.
        </p>
        <p>
          But more than a contest and more than the prizes, Chroma Corps brings
          artists together every summer to produce thousands of art pieces,
          share their work, connect and collaborate.
        </p>
      </motion.div>
    </div>
  );
};

export default Bio;
