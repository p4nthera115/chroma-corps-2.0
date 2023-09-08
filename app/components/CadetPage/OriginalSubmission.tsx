"use client";

import { Cadet } from "@/app/types";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface OriginalSubmissionProps {
  cadet: Cadet | undefined;
}

const OriginalSubmission: React.FC<OriginalSubmissionProps> = ({ cadet }) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("ORIGINAL SUBMISSION");

  const styles: any = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    margin: "2rem",
    top: "0vh",
    left: "0%",
    zIndex: 100,
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return "ORIGINAL SUBMISSION"[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      iterations += 3;
    }, 80);
  };

  return (
    <div className="flex flex-col pb-[10%] bg-black">
      <motion.div className="flex w-full justify-center overflow-hidden">
        <h1
          className={`relative font-cyber m-3 w-3/4 text-xl md:text-4xl lg:text-5xl xl:text-6xl p-6 md:p-8 text-center rounded-lg border-2 overflow-hidden cursor-default ${cadet?.borderColor} ${cadet?.teamColorOpacity}`}
          onMouseOver={hoverAnimation}
        >
          {name}
        </h1>
      </motion.div>
      <div className="flex flex-col mx-auto mt-[2%]">
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          style={active ? styles : undefined}
        >
          {active && cadet && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
              <div className="relative inset-0 h-full w-full">
                <div className="relative flex flex-row border h-full w-full bg-black">
                  <section
                    className={`relative flex h-full w-full md:w-[100%] md:border justify-center`}
                  >
                    <button
                      className={`absolute h-10 w-10 font-cyber z-50 left-0 border ${cadet.borderColor} ${cadet.teamColorOpacity}`}
                      onClick={() => setActive(!active)}
                    >
                      X
                    </button>
                    <div className="relative flex w-full h-full object-contain justify-center">
                      <Image
                        src={cadet.originalSubmission}
                        alt=""
                        height={1080}
                        width={1920}
                        className="relative block z-30 object-contain"
                      />
                    </div>
                    <div className="absolute h-full w-full backdrop-blur-md z-20"></div>
                    <Image
                      src={cadet.originalSubmission}
                      alt=""
                      fill
                      className="opacity-4 z-10"
                    />
                  </section>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setActive(!active)}
            className={`
            flex 
            z-0
            border
            rounded-lg
            w-[90vw]
            md:w-[75vw]
            lg:w-[70vw]
            h-[50vh]
            lg:h-[60vh]
            xl:h-[80vh]
            ${active ? "border-transparent" : cadet?.borderColor} 
            ${cadet?.teamColorOpacity} 
            hover:bg-white/0
            font-cyber 
            justify-center 
            items-center 
            text-2xl 
            text-white
            ${active ? "disabled" : ""}
            overflow-hidden
          `}
          >
            {cadet && cadet.originalSubmission.includes(".gif") ? (
              <Image
                src={cadet.originalSubmission}
                alt="cadet"
                height={126.4}
                width={224}
                className={`
                  relative
                  object-cover 
                  md:sepia
                  opacity-50
                  hover:sepia-0 
                  hover:opacity-100
                  hover:scale-110
                  transition
                  scale-150
                  md:scale-100
                `}
                loading="lazy"
              />
            ) : (
              cadet && (
                <Image
                  src={cadet.originalSubmission}
                  alt="cadet"
                  height={758.4}
                  width={1344}
                  className={`
                    relative
                    object-cover 
                    md:sepia
                    opacity-50
                    hover:sepia-0 
                    hover:opacity-100
                    hover:scale-110
                    transition
                    scale-150
                    md:scale-100
                  `}
                />
              )
            )}
            {cadet && cadet.originalSubmission.includes(".mp4") && (
              <video width={224} height={126.4}>
                <source src={cadet.originalSubmission}></source>
              </video>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OriginalSubmission;
