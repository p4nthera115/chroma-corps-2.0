"use client";

import { motion } from "framer-motion";
import { Cadet } from "@/app/types";

const CadetsLoading: React.FC = () => {
  const left = [
    {
      css: "left-3/4 bg-green-900",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/alto/altoCard.png",
      pos: "h-[150%] top-[-10%]",
    },
    {
      css: "left-2/4 bg-green-800",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/double/doubleCard.png",
      pos: "h-[130%] top-[-14%]",
    },
    {
      css: "left-1/4 bg-green-900",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/hjoy/hjoyCard.PNG",
      pos: "h-[300%] top-[-6%]",
    },
    {
      css: "left-0 bg-green-800",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/Trout/TroutCard.png",
      pos: "h-[300%] top-[-14%]",
    },
  ];
  const right = [
    {
      css: "right-3/4 bg-green-800",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/naka/nakaCard.png",
      pos: "h-[140%] top-[-5%]",
    },
    {
      css: "right-2/4 bg-green-900",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/edouardtredan/edouardtredanCard.png",
      pos: "h-[125%] top-[-5%]",
    },
    {
      css: "right-1/4 bg-green-800",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/kuzillon/kuzillon.png",
      pos: "h-[220%] top-[0%]",
    },
    {
      css: "right-0 bg-green-900",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2023/teted/tetedCard.png",
      pos: "h-[102%] top-[0%]",
    },
  ];
  return (
    <div className="absolute h-screen w-screen overflow-hidden flex flex-col z-20">
      <motion.div
        className="relative h-full w-full flex flex-row"
        initial={{
          y: "-101%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <motion.div className="relative h-full w-1/2 flex flex-row">
          {left.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/4 overflow-hidden ${cadet.css}`}
              animate={{ width: "0" }}
              transition={{
                ease: "easeInOut",
                duration: 0.16,
                delay: 1.5 + i * 0.16,
              }}
            >
              <img
                src={cadet.img}
                alt="cadet"
                className={`
                  absolute 
                  object-cover 
                  ${cadet.pos}
                  sepia
                  hue-rotate-180
                  opacity-80
                `}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="relative h-full w-1/2 flex flex-row">
          {right.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/4 overflow-hidden ${cadet.css}`}
              animate={{ width: "0" }}
              transition={{
                ease: "easeInOut",
                duration: 0.2,
                delay: 1.5 + i * 0.2,
              }}
            >
              <img
                src={cadet.img}
                alt="cadet"
                className={`
                  absolute 
                  object-cover 
                  ${cadet.pos}
                  sepia
                  hue-rotate-180
                  opacity-80
                `}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CadetsLoading;
