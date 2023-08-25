"use client";

import { motion } from "framer-motion";

const CadetsLoading: React.FC = () => {
  const topLeft = [
    {
      css: "left-3/4 bg-amber-400",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/awfullysabi/awfullysabi.png",
      pos: "h-[260%] top-[-12%]",
    },
    {
      css: "left-2/4 bg-amber-300",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/spiderlair/cropped-spiderlair-2.png",
      pos: "h-[120%] top-[-20%]",
    },
    {
      css: "left-1/4 bg-amber-400",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/nikittysan/cropped-nikittysan.png",
      pos: "h-[120%] top-0",
    },
    {
      css: "left-0 bg-amber-300",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/makennu/cropped-makennu.png",
      pos: "h-[300%] top-[-10%]",
    },
  ];
  const topRight = [
    {
      css: "right-3/4 bg-amber-300",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/dehaf/dehaf-edited.png",
      pos: "h-[150%] top-[-13%]",
    },
    {
      css: "right-2/4 bg-amber-400",
      img: "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Cadets/2020/storse/cropped-storse.png",
      pos: "h-[150%] top-[-3%]",
    },
    {
      css: "right-1/4 bg-amber-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-0 bg-amber-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  const bottomLeft = [
    {
      css: "left-3/4 bg-amber-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-2/4 bg-amber-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-1/4 bg-amber-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "left-0 bg-amber-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
  ];
  const bottomRight = [
    {
      css: "right-3/4 bg-amber-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-2/4 bg-amber-300",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-1/4 bg-amber-400",
      img: "/images/silhouette.png",
      pos: "h-[300%] top-[-17%]",
    },
    {
      css: "right-0 bg-amber-300",
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
