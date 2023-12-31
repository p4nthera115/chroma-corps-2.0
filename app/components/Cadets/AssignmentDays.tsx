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
    <div className="bg-black text-white flex relative h-full w-full flex-col">
      <div className="flex w-full flex-wrap relative flex-row gap-[3rem] justify-center bg-black text-white">
        <motion.div className="relative flex w-full justify-center overflow-hidden">
          <h1
            className={`relative font-cyber m-3 w-3/4 md:w-1/2 text-xl md:text-4xl lg:text-5xl xl:text-6xl p-6 md:p-8 text-center border-2 rounded overflow-hidden cursor-default `}
            onMouseOver={hoverAnimation}
          >
            {name}
          </h1>
        </motion.div>

        {winner[0]?.assignments?.map((assignment: Assignment) => (
          <button
            key={assignment.day}
            className="border rounded h-[3rem] w-[6rem] md:h-[4rem] md:w-[12rem] md:m-2 justify-center items-center flex font-cyber text-amber-400 md:text-white hover:text-amber-400"
            onClick={() =>
              router.push(`/cadets/${year}/assignments/${assignment.day}`)
            }
          >
            {assignment.day}
          </button>
        ))}
      </div>
      <div className=" flex mt-10 p-4 text-center justify-center bg-neutral-900">
        <p className="text-xs">
          See your art and don&rsquo;t want it displayed? <br /> Let us know{" "}
          <a
            href="https://twitter.com/p4nthera_"
            className="hover:text-[#ffe600]"
            target="_blank"
          >
            @p4nthera_
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/leondvlpr"
            className="hover:text-[#ffe600]"
            target="_blank"
          >
            @leondvlpr
          </a>
        </p>
      </div>
    </div>
  );
};

export default AssignmentDays;
