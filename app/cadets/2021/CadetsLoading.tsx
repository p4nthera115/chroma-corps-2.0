"use client";

import { motion } from "framer-motion";
import { Cadet } from "@/app/types";

const CadetsLoading: React.FC = () => {
  const topLeft = [
    {
      css: "left-3/4 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/awfullysabi/cropped-awfullysabi.PNG",
      pos: "h-[250%] top-[-16%]",
    },
    {
      css: "left-2/4 bg-red-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/spiderlair/cropped-spiderlair.PNG",
      pos: "h-[130%] top-[-14%]",
    },
    {
      css: "left-1/4 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/silverstar1234/cropped-silverstar1234.PNG",
      pos: "h-[300%] top-[-6%]",
    },
    {
      css: "left-0 bg-red-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/hieumay/cropped-hieumay.PNG",
      pos: "h-[300%] top-[-14%]",
    },
  ];
  const topRight = [
    {
      css: "right-3/4 bg-red-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/ozan pulat/cropped-ozan.PNG",
      pos: "h-[140%] top-[-5%]",
    },
    {
      css: "right-2/4 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/dehaf/cropped-dehaf.PNG",
      pos: "h-[300%] top-[-45%]",
    },
    {
      css: "right-1/4 bg-red-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/joharts/cropped-joharts.png",
      pos: "h-[200%] top-[-15%]",
    },
    {
      css: "right-0 bg-cyan-500",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2021/kawffee/kawffee-card.PNG",
      pos: "h-[150%] top-[-0%]",
    },
  ];
  const bottomLeft = [
    {
      css: "left-3/4 bg-red-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-2/4 bg-cyan-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-1/4 bg-red-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-0 bg-cyan-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  const bottomRight = [
    {
      css: "right-3/4 bg-cyan-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-2/4 bg-red-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-1/4 bg-cyan-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-0 bg-red-500",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  return (
    <div className="absolute h-screen w-screen overflow-hidden flex flex-col z-20 ">
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
        <motion.div className="relative h-full w-1/2 flex flex-row">
          {topRight.map((cadet, i) => (
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
        <motion.div
          className="relative h-full w-1/2 flex flex-row 
        "
        >
          {bottomRight.map((cadet, i) => (
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
