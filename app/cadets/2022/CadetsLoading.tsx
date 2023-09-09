"use client";

import { motion } from "framer-motion";
import { Cadet } from "@/app/types";

const CadetsLoading: React.FC = () => {
  const topLeft = [
    {
      css: "left-[88.888%] bg-yellow-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/vevolf/cropped-vevolf.png",
      pos: "h-[150%] top-[-8%]",
    },
    {
      css: "left-[66.666%] bg-yellow-300",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/Baeloma/Emily_01.png",
      pos: "h-[300%] top-[-60%]",
    },
    {
      css: "left-[44.444%] bg-blue-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/dako/cropped-dako.png",
      pos: "h-[130%] top-[-15%]",
    },
    {
      css: "left-[22.222%] bg-blue-400",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/fatcat/cropped-fatcat-3.png",
      pos: "h-[100%] top-[0%]",
    },
    {
      css: "left-0 bg-blue-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/applechancery002/cropped-applechancery.png",
      pos: "h-[240%] top-[-10%]",
    },
  ];
  const topRight = [
    {
      css: "right-[66.666%] bg-yellow-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-[44.444%] bg-pink-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/greeblebot/greeblebot-card.png",
      pos: "h-[160%] top-[-8%]",
    },
    {
      css: "right-[22.222%] bg-pink-400",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2022/yugichu/cropped-yugichu.png",
      pos: "h-[100%] top-0",
    },
    {
      css: "right-0 bg-pink-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  const bottomLeft = [
    {
      css: "left-[88.888%] bg-yellow-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-[66.666%] bg-yellow-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-[44.444%] bg-blue-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-[22.222%] bg-blue-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-0 bg-blue-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  const bottomRight = [
    {
      css: "right-[66.666%] bg-yellow-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-[44.444%] bg-pink-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-[22.222%] bg-pink-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-0 bg-pink-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
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
              className={`absolute h-full w-[22.222%] overflow-hidden ${cadet.css}`}
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
          {topRight.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-[22.222%] overflow-hidden ${cadet.css}`}
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
              className={`absolute h-full w-[22.222%] overflow-hidden ${cadet.css}`}
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
        <motion.div
          className="relative h-full w-1/2 flex flex-row 
        "
        >
          {bottomRight.map((cadet, i) => (
            <motion.div
              key={i}
              className={`absolute h-full w-[22.222%] overflow-hidden ${cadet.css}`}
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
