"use client";

import { useEffect, useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2021 } from "@/app/components/Cadets/CadetData";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import Judges from "@/app/components/Cadets/Judges";
import AssignmentDays from "@/app/components/Cadets/AssignmentDays";
import Image from "next/image";

const CadetsClient = () => {
  const [cadetLoading, setCadetLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);
  const [winner, setWinner] = useState<any>([]);
  const [ched, setChed] = useState<any>([]);

  setTimeout(() => setCadetLoading(false), 3000);
  setTimeout(() => setLogoLoading(false), 1000);

  useEffect(() => {
    const winners = cadets2021.filter(
      (cadet) =>
        cadet.name === "Beatrice" ||
        cadet.name === "Ozan Pulat" ||
        cadet.name === "Chedilkm"
    );
    const ch = cadets2021.filter((cadet) => cadet.name === "Chedilkm");

    const win = winners.map((winner) => ({ ...winner, cadet: winner }));

    setWinner(win);
    setChed(ch);
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
              opacity-100
              font-extrabold
            "
          >
            2021
          </h1>
        </div>
      )}
      {!logoLoading && (
        <div className="absolute h-screen w-screen overflow-x-hidden flex flex-col">
          <section className="flex h-full w-full">
            <div className="flex">
              <CadetSelect cadets={cadets2021} />
            </div>
          </section>
          <section className="flex relative h-full flex-col top-[115%] w-full">
            <div className="w-full relative h-full top-[10%] pb-[17%] ">
              {/* <div
                className={`flex  h-full scale-[100%] min-w-max z-20 absolute left-1/2 -translate-x-1/2 top-[-6rem]`}
              >
                <img src={ched[0].bannerImg[0]} alt="ched" />
                <h2
                  className={`flex  absolute font-cyber text-center top-[25rem]
                    ${
                      winner[0]?.cadet.name.length > 6 &&
                      winner[0]?.cadet.name.length < 14
                        ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                        : winner[0]?.cadet.name.length >= 14 &&
                          winner[0]?.cadet.name.length < 16
                        ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                        : winner[0]?.cadet.name.length >= 16
                        ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                        : "text-6xl lg:text-9xl max-h-full max-w-full"
                    }
                `}
                >
                  {ched[0].name}
                </h2>
              </div> */}
              <WinnerBanner winner={winner} />
            </div>
            <div>{/* <Judges judges={judges} /> */}</div>
            <div className="relative pb-10">
              <AssignmentDays winner={winner} year={2021} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
