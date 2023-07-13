import React from "react";
import CadetCard from "./CadetCard";

import { Cadet } from "@/app/types";

interface CadetSelectProps {
  cadets: Cadet[];
}

const CadetSelect: React.FC<CadetSelectProps> = (cadets) => {
  let top;
  let bottom;
  if (cadets.cadets.length <= 16) {
    top = cadets.cadets.slice(0, 8);
    bottom = cadets.cadets.slice(8, 16);
  } else {
    top = cadets.cadets.slice(0, 9);
    bottom = cadets.cadets.slice(9, 18);
  }

  return (
    <div className="absolute h-full flex flex-col">
      <div className="h-full w-screen flex flex-row">
        {top?.map((cadet: Cadet, i: number) => (
          <CadetCard key={i} cadetObj={cadet} />
        ))}
      </div>
      <div className="h-full w-screen flex flex-row ">
        {bottom?.map((cadet: Cadet, i: number) => (
          <CadetCard key={i} cadetObj={cadet} />
        ))}
      </div>
    </div>
  );
};

export default CadetSelect;
