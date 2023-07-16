"use client";

import { useEffect, useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2020 } from "@/app/components/Cadets/CadetData";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import AssignmentDays from "@/app/components/Cadets/AssignmentDays";
import Judges from "@/app/components/Cadets/Judges";

const CadetsClient = () => {
  const [cadetLoading, setCadetLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);
  const [winner, setWinner] = useState<any>([]);

  setTimeout(() => setCadetLoading(false), 3000);
  setTimeout(() => setLogoLoading(false), 1000);

  useEffect(() => {
    const winners = cadets2020.filter(
      (cadet) => cadet.name === "Nikittysan" || cadet.name === "Weiao"
    );

    const win = winners.map((winner) => ({ ...winner, cadet: winner }));

    setWinner(win);
  }, []);

  const judges = [
    {
      name: "samdoesarts",
    },
  ];

  return (
    <div>
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
            bg-black
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
              font-extrabold
            "
          >
            2020
          </h1>
        </div>
      )}
      {!logoLoading && (
        <div className="absolute h-screen w-screen overflow-x-hidden flex flex-col">
          <section className="flex h-full w-full">
            <div className="flex">
              <CadetSelect cadets={cadets2020} />
            </div>
          </section>
          <section className="flex relative h-full flex-col top-[115%] w-full">
            <div className="w-full h-full top-[10%] pb-[17%]">
              <WinnerBanner winner={winner} />
            </div>
            <div>
              <Judges judges={judges} />
            </div>
            <div className="relative pb-10">
              <AssignmentDays winner={winner} year={2020} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
