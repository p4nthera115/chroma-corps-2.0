"use client";

import { useState, useEffect } from "react";
import CadetCard from "./CadetCard";

import { Cadet } from "@/app/types";

interface CadetSelectProps {
  cadets: Cadet[];
}

const CadetSelect: React.FC<CadetSelectProps> = (cadets) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  let top;
  let bottom;
  if (cadets.cadets.length <= 16) {
    top = cadets.cadets.slice(0, 8);
    bottom = cadets.cadets.slice(8, 16);
  } else if (cadets.cadets.length >= 18 && cadets.cadets.length < 20) {
    top = cadets.cadets.slice(0, 9);
    bottom = cadets.cadets.slice(9, 18);
  } else if (cadets.cadets.length >= 20) {
    top = cadets.cadets.slice(0, 23);
    bottom = cadets.cadets.slice(23, 46);
  }

  return (
    <div className="absolute h-full w-full flex flex-col">
      <div className="h-full w-full flex flex-row">
        {width > 768 ? (
          top?.map((cadet: Cadet, i: number) => (
            <CadetCard key={i} cadetObj={cadet} />
          ))
        ) : (
          <>
            {top && top.length < 9 && (
              <div className="flex relative h-full w-full flex-row">
                <div className="flex relative h-full w-1/2 flex-col">
                  {top?.slice(0, 4).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
                <div className="flex relative h-full w-1/2 flex-col">
                  {top?.slice(4, 8).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
              </div>
            )}
            {top && top.length >= 9 && (
              <div className="flex relative h-full w-full flex-row">
                <div className="flex relative h-full w-1/2 flex-col">
                  {top?.slice(0, 5).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
                <div className="flex relative h-full w-1/2 flex-col">
                  {top?.slice(5, 9).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="h-full w-full flex flex-row">
        {width > 768 ? (
          bottom?.map((cadet: Cadet, i: number) => (
            <CadetCard key={i} cadetObj={cadet} />
          ))
        ) : (
          <>
            {bottom && bottom.length < 9 && (
              <div className="flex relative h-full w-full flex-row">
                <div className="flex relative h-full w-1/2 flex-col">
                  {bottom?.slice(0, 4).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
                <div className="flex relative h-full w-1/2 flex-col">
                  {bottom?.slice(4, 8).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
              </div>
            )}
            {bottom && bottom.length >= 9 && (
              <div className="flex relative h-full w-full flex-row">
                <div className="flex relative h-full w-1/2 flex-col">
                  {bottom?.slice(0, 4).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
                <div className="flex relative h-full w-1/2 flex-col">
                  {bottom?.slice(4, 9).map((cadet: Cadet, i: number) => (
                    <CadetCard key={i} cadetObj={cadet} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CadetSelect;
