"use client";

import { useRouter } from "next/navigation";
import { Assignment, Cadet } from "@/app/types";
import { motion } from "framer-motion";
import { useState } from "react";

interface AssDayProps {
  winner: Cadet[];
  year: number;
}

const AssignmentDays: React.FC<AssDayProps> = ({ winner, year }) => {
  const router = useRouter();
  const [name, setName] = useState("ASSIGNMENTS");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return "ASSIGNMENTS"[i];
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
    <div>
      <div className="flex w-full flex-wrap relative flex-row gap-[3rem] justify-center">
        <motion.div className="relative flex w-full justify-center overflow-hidden">
          <h1
            className={`relative font-cyber m-3 w-3/4 md:w-1/2 text-xl md:text-4xl lg:text-5xl xl:text-6xl p-6 md:p-8 text-center border-2 overflow-hidden cursor-default `}
            onMouseOver={hoverAnimation}
          >
            {name}
          </h1>
        </motion.div>

        {winner[0]?.assignments?.map((assignment: Assignment) => (
          <button
            key={assignment.day}
            className="border h-[3rem] w-[6rem] md:w-[10rem] justify-center items-center flex font-cyber text-[#ffe600] md:text-white hover:text-[#ffe600]"
            onClick={() =>
              router.push(`/cadets/${year}/assignments/${assignment.day}`)
            }
          >
            {assignment.day}
          </button>
        ))}
      </div>
      <div className="ml-[1rem] pt-8 mb-[-2rem]">
        <p className="text-xs">
          See your art and don&rsquo;t want it displayed? Let us know{" "}
          <a
            href="https://twitter.com/p4nthera_"
            className="hover:text-green-200"
          >
            @p4nthera_
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/lifguson1"
            className="hover:text-green-200"
          >
            @lifguson1
          </a>
        </p>
      </div>
    </div>
  );
};

export default AssignmentDays;
