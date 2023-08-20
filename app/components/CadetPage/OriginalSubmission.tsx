"use client";

import { Cadet } from "@/app/types";
import { motion } from "framer-motion";
import { useState } from "react";

interface OriginalSubmissionProps {
  cadet: Cadet | undefined;
}

const OriginalSubmission: React.FC<OriginalSubmissionProps> = ({ cadet }) => {
  const [name, setName] = useState("ORIGINAL SUBMISSION");

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
    <div className="flex flex-col mb-[10%]">
      <motion.div className="flex w-full justify-center overflow-hidden">
        <h1
          className={`relative font-cyber m-3 w-3/4 text-xl md:text-4xl lg:text-5xl xl:text-6xl p-6 md:p-8 text-center border-2 overflow-hidden cursor-default ${cadet?.borderColor} ${cadet?.teamColorOpacity}`}
          onMouseOver={hoverAnimation}
        >
          {name}
        </h1>
      </motion.div>
      <div className="flex flex-col mx-auto">
        <img src={cadet?.originalSubmission} alt="" height={500} width={500} />
      </div>
    </div>
  );
};

export default OriginalSubmission;
