"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CadetCard from "./CadetCard";
import { Cadet } from "@/app/types";
import NameCard from "./2023NameCard";

interface CadetSelectProps {
  cadets: Cadet[];
}

const Select2023: React.FC<CadetSelectProps> = ({ cadets }) => {
  const router = useRouter();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  let saplings: Cadet[] = [];
  let pruned: Cadet[] = [];

  cadets.map((cadet) => {
    if (cadet.assignments && cadet.assignments.length > 26)
      saplings.push(cadet);
    if (cadet.assignments && cadet.assignments.length < 26) pruned.push(cadet);
  });

  const top = saplings.slice(0, 4);
  const bottom = saplings.slice(4, 8);

  const prunedLeft = pruned.slice(0, 19);
  const prunedRight = pruned.slice(19, 38);

  return (
    <div className="h-full w-full absolute flex flex-col md:flex-row bg-black text-white">
      <section className="flex flex-col relative h-2/5 md:h-full w-full md:w-3/5">
        <div className="flex flex-row relative h-full w-full">
          {top.map((cadet, i) => {
            if (cadet.assignments && cadet?.assignments?.length > 26)
              return <CadetCard key={i} cadetObj={cadet} />;
          })}
        </div>
        <div className="flex flex-row relative h-full w-full">
          {bottom.map((cadet, i) => {
            if (cadet.assignments && cadet?.assignments?.length > 26)
              return <CadetCard key={i} cadetObj={cadet} />;
          })}
        </div>
      </section>
      <section className="flex flex-row relative h-3/5 md:h-full font-cyber md:w-2/5 w-full">
        <div className="flex flex-col h-full w-1/2">
          {prunedLeft.map((cadet, i) => (
            <NameCard
              key={i}
              cadet={cadet}
              style={
                i % 2 === 0
                  ? "bg-green-900/40 hover:bg-green-900/80"
                  : "bg-green-800/40 hover:bg-green-800/80"
              }
            />
          ))}
        </div>
        <div className="flex flex-col h-full w-1/2">
          {prunedRight.map((cadet, i) => (
            <NameCard
              key={i}
              cadet={cadet}
              style={
                i % 2 !== 0
                  ? "bg-green-900/40 hover:bg-green-900/80"
                  : "bg-green-800/40 hover:bg-green-800/80"
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Select2023;
