"use client";

import { motion } from "framer-motion";
import { Cadet } from "@/app/types";

const CadetsLoading: React.FC = () => {
  const topLeft = [
    {
      css: "left-[80%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/feik_art/feik_art.png",
      pos: "h-[130%] md:top-[0%] top-[50%] max-w-none left-[-45%]",
    },
    {
      css: "left-[60%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/andre/andre.png",
      pos: "h-[100%] md:top-[5%] top-[50%] max-w-none right-[-85%]",
    },
    {
      css: "left-[40%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/dunk-zunk/dunk-zunk.png",
      pos: "h-[200%] md:top-[5%] top-[50%] max-w-none left-[-170%]",
    },
    {
      css: "left-[20%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/naka/naka.png",
      pos: "h-[200%] md:top-[10%] top-[50%]",
    },
    {
      css: "left-0 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/sabi/sabi.png",
      pos: "h-[200%] md:top-[-25%] top-[50%] right-[-140%] max-w-none",
    },
  ];
  const topRight = [
    {
      css: "right-[80%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/deovise/deovise.png",
      pos: "h-[270%] md:top-[15%] top-[50%] max-w-none right-[-40%]",
    },
    {
      css: "right-[60%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/frunklin/frunklin.png",
      pos: "h-[220%] md:top-[0%] top-[50%] max-w-none left-[-130%]",
    },
    {
      css: "right-[40%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/ghost-dawg/ghost-dawg.png",
      pos: "h-[190%] md:top-[5%] top-[50%]",
    },
    {
      css: "right-[20%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/brioche/brioche.png",
      pos: "h-[220%] md:top-[-45%] top-[50%] max-w-none left-[-180%]",
    },
    {
      css: "right-0 bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/ofelia0u8/ofelia0u8.png",
      pos: "h-[100%] md:top-[15%] top-[50%] max-w-none right-[-25%]",
    },
  ];
  const bottomLeft = [
    {
      css: "left-[80%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/spiderlair/spiderlair.png",
      pos: "h-[240%] md:top-[5%] top-[50%] max-w-none right-[-175%]",
    },
    {
      css: "left-[60%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/funky-pep/funky-pepe.png",
      pos: "h-[230%] md:top-[-10%] top-[50%]",
    },
    {
      css: "left-[40%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/tjl/tjl.png",
      pos: "h-[190%] md:top-[0%] top-[50%] max-w-none left-[-79%]",
    },
    {
      css: "left-[20%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/bagley/bagley.png",
      pos: "h-[280%] md:top-[0%] top-[50%] max-w-none left-[-180%]",
    },
    {
      css: "left-0 bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/voland/voland.png",
      pos: "h-[300%] md:top-[-95%] top-[50%] max-w-none right-[-180%]",
    },
  ];
  const bottomRight = [
    {
      css: "right-[80%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/gek/gek.png",
      pos: "h-[300%] md:top-[-35%] top-[50%] max-w-none left-[-210%]",
    },
    {
      css: "right-[60%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/bristletale/bristletale.png",
      pos: "h-[200%] md:top-[-5%] top-[50%] max-w-none left-[-70%]",
    },
    {
      css: "right-[40%] bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/mica/mica.png",
      pos: "h-[250%] md:top-[0%] top-[50%]",
    },
    {
      css: "right-[20%] bg-red-600",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/cloudy73/cloudy73.png",
      pos: "h-[150%] md:top-[0%] top-[50%]",
    },
    {
      css: "right-0 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2024/will/will.png",
      pos: "h-[120%] md:top-[10%] top-[50%] max-w-none right-[-10%]",
    },
  ];
  return (
    <div className="absolute h-screen w-screen overflow-hidden flex flex-col z-[200] ">
      <motion.div
        className="relative h-1/2 w-full flex flex-row"
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
          {topLeft.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/5 overflow-hidden ${cadet.css}`}
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
        <motion.div className="relative h-full w-1/2 flex flex-row">
          {topRight.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/5 overflow-hidden ${cadet.css}`}
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
      <motion.div
        className="relative h-1/2 w-full flex flex-row"
        initial={{
          y: "101%",
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
          {bottomLeft.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/5 overflow-hidden ${cadet.css}`}
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
        <motion.div
          className="relative h-full w-1/2 flex flex-row 
        "
        >
          {bottomRight.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-1/5 overflow-hidden ${cadet.css}`}
              animate={{ width: "0" }}
              transition={{
                ease: "easeInOut",
                duration: 0.2,
                delay: 1.5 + i * 0.2,
              }}
            >
              {" "}
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
