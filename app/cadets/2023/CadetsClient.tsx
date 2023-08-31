"use client";

import { useEffect, useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2023 } from "@/app/components/Cadets/CadetData";
import WinnerBanner from "@/app/components/Cadets/WinnerBanner";
import AssignmentDays from "@/app/components/Cadets/AssignmentDays";
import Judges from "@/app/components/Cadets/Judges";
import Select2023 from "@/app/components/Cadets/Select2023";

const CadetsClient = () => {
  const [cadetLoading, setCadetLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);
  const [winner, setWinner] = useState<any>([]);

  setTimeout(() => setCadetLoading(false), 3000);
  setTimeout(() => setLogoLoading(false), 1000);

  useEffect(() => {
    const winners = cadets2023.filter(
      (cadet) =>
        cadet.name === "Teted" ||
        cadet.name === "Double" ||
        cadet.name === "Trout"
    );

    const win = winners.map((winner) => ({ ...winner, cadet: winner }));

    setWinner(win);
  }, []);

  return (
    <div className="bg-black text-white">
      {cadetLoading && (
        <div className="z-20">
          <CadetsLoading />
        </div>
      )}
      {logoLoading && (
        <div
          className="
            justify-center
            items-center
            flex
            absolute
            inset-0
            z-10
            bg-neutral-700
          "
        >
          <h1
            className="
              font-cyber 
              justify-center
              items-center 
              absolute 
              inset-0
              flex
              text-[20rem]
              opacity-30
              font-extrabold
            "
          >
            2023
          </h1>
        </div>
      )}
      {!logoLoading && (
        <div className="relative h-screen w-screen overflow-x-hidden flex flex-col bg-black">
          <section className="flex h-full w-full">
            <Select2023 cadets={cadets2023} />
          </section>
          <section className="flex relative h-full flex-col top-[145%] md:top-[115%] w-full bg-black text-neutral-100">
            <WinnerBanner winner={winner} />
          </section>
          <section className="flex relative top-[330%] md:top-[137%]">
            <AssignmentDays winner={winner} year={2023} />
          </section>
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
