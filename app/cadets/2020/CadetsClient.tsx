"use client";

import { useEffect, useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2020 } from "@/app/components/Cadets/CadetData";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";

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
    console.log(win);
  }, []);

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
        <div className="relative h-screen w-screen overflow-x-hidden flex flex-col">
          <section className="flex w-full ">
            <CadetSelect cadets={cadets2020} />
          </section>
          <section className="flex absolute top-full w-full">
            <div className="w-full absolute flex top-[8rem]">
              <WinnerBanner winner={winner} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
