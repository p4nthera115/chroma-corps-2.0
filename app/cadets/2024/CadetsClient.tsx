"use client";

import { useEffect, useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2024 } from "@/app/data/cadetData2024";
import WinnerBanner from "@/app/components/Cadets/WinnerBanner";
import AssignmentDays from "@/app/components/Cadets/AssignmentDays";
import Judges from "@/app/components/Cadets/Judges";
import SmallWinnerBanner from "@/app/components/Cadets/SmallWinnerBanner";
import { Cadet } from "@/app/types";

const CadetsClient = () => {
  const [cadetLoading, setCadetLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);
  const [winner, setWinner] = useState<any>([]);
  const [width, setWidth] = useState(0);

  setTimeout(() => setCadetLoading(false), 3000);
  setTimeout(() => setLogoLoading(false), 1000);

  useEffect(() => {
    if (window) setWidth(window.innerWidth);

    const winners = cadets2024.filter(
      (cadet) => cadet.name === "Dako" || cadet.name === "FatCat"
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
              md:text-[20rem]
              text-6xl
              font-extrabold
            "
          >
            2024
          </h1>
        </div>
      )}
      {!logoLoading && (
        <div className="absolute h-screen w-screen overflow-x-hidden flex flex-col bg-black">
          <section className="flex h-full w-full">
            <div className="flex">
              <CadetSelect cadets={cadets2024} />
            </div>
          </section>
          {/* <section className="flex relative h-full flex-col top-full w-full">
            {width && width > 768 ? (
              <div className="w-full relative h-full top-[15%] ">
                <WinnerBanner winner={winner} />
              </div>
            ) : (
              <>
                <h2 className="relative text-center mx-auto z-30 font-cyber cursor-default text-xl md:text-4xl lg:text-5xl xl:text-6xl max-h-fit max-w-full border-2 p-6 md:p-8 m-6 w-3/4 md:w-1/2">
                  WINNERS
                </h2>

                {winner.map((winner: Cadet, i: number) => (
                  <SmallWinnerBanner key={i} winner={winner} />
                ))}
              </>
            )}
          </section> */}
          <section className="flex relative top-[105%] md:top-[150%]">
            <div className="relative ">
              <AssignmentDays winner={winner} year={2022} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
