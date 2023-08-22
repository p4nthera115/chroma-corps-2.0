"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CadetCard from "./CadetCard";
import { Cadet } from "@/app/types";

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

  console.log(saplings);
  console.log(pruned);

  const top = saplings.slice(0, 4);
  const bottom = saplings.slice(4, 8);

  const prunedLeft = pruned.slice(0, 19);
  const prunedRight = pruned.slice(19, 38);

  return (
    <div className="h-full w-full relative flex flex-row">
      <section className="flex flex-col relative h-full w-1/2">
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
      <section className="flex flex-row relative h-full font-cyber w-1/2">
        <div className="flex flex-col h-full w-1/2">
          {prunedLeft.map((cadet, i) => (
            <button
              key={i}
              className={`h-full relative rounded ${
                i % 2 === 0
                  ? "bg-green-900/40 hover:bg-green-900/80"
                  : "bg-green-800/40 hover:bg-green-800/80"
              } border-black border flex transition`}
              onClick={() => router.push(`/cadets/2023/${cadet.name}`)}
            >
              <h1 className="flex relative opacity-75 w-full h-full hover:scale-110 hover:opacity-100 transition justify-center items-center">
                {cadet.name}
              </h1>
            </button>
          ))}
        </div>
        <div className="flex flex-col h-full w-1/2">
          {prunedRight.map((cadet, i) => (
            <button
              key={i}
              className={`h-full relative rounded ${
                i % 2 !== 0
                  ? "bg-green-900/40 hover:bg-green-900/80"
                  : "bg-green-800/40 hover:bg-green-800/80"
              } border-black border flex`}
              onClick={() => router.push(`/cadets/2023/${cadet.name}`)}
            >
              <h1 className="flex relative opacity-75 w-full h-full hover:scale-110 hover:opacity-100 transition justify-center items-center">
                {cadet.name}
              </h1>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Select2023;
