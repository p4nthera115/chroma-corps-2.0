"use client";

import { useState } from "react";
import CadetsLoading from "./CadetsLoading";
import CadetSelect from "../../components/Cadets/CadetSelect";
import { cadets2022 } from "@/app/components/Cadets/CadetData";

const CadetsClient = () => {
  const [cadetLoading, setCadetLoading] = useState(true);
  const [logoLoading, setLogoLoading] = useState(true);

  setTimeout(() => setCadetLoading(false), 3000);
  setTimeout(() => setLogoLoading(false), 1000);

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
            2022
          </h1>
          {/* <img
            alt="logo"
            src={"/images/ChromaCorpsLogoBlack.png"}
            className="
              h-[90vh]
            "
          /> */}
        </div>
      )}
      {!logoLoading && (
        <div className="relative h-screen w-screen overflow-x-hidden">
          <CadetSelect cadets={cadets2022} />
        </div>
      )}
    </div>
  );
};

export default CadetsClient;
