"use client";

import { usePathname, useRouter } from "next/navigation";
import { Cadet } from "@/app/types";
import { useState, useEffect } from "react";

interface CadetCardProps {
  cadetObj: Cadet;
}

const CadetCard: React.FC<CadetCardProps> = (cadetObj) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hover, setHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const cadet = cadetObj.cadetObj;

  const year = pathname.slice(8, 12);
  const cadetName = pathname.slice(13);

  useEffect(() => {
    if (cadetName === cadet.name) setIsActive(true);
  }, []);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push(`/cadets/${year}/${cadet.name}`)}
      className={`
            relative
            flex flex-col align-top
            w-screen 
            h-full 
            overflow-hidden 
            border 
            border-neutral-950 
            ${isActive ? cadet.teamColor : "bg-neutral-800"}
            ${cadet.teamColorHover} 
            hover:cursor-pointer
          `}
    >
      <div
        className={`
                justify-center
                flex
                flex-col
                font-cyber
                font-bold
                w-full
                h-[6.5%]
                border
                ${cadet.teamColor}
                ${cadet.textColor}
              `}
      >
        <h1 className={`text-center ${year === "2023" ? "text-xs" : ""}`}>
          {cadet.name}
        </h1>
      </div>
      <img
        src={cadet.cardImg}
        alt="cadet"
        className={`
              absolute
              object-cover 
              object-center
              ${cadet.cardPos} 
              ${
                isActive
                  ? "scale-110 sepia-0 opacity-100"
                  : "scale-100 sepia opacity-50"
              }
              hover:sepia-0 
              hover:opacity-100
              hover:scale-110
              transition
            `}
      />
      {!hover && !isActive && (
        <h1
          className={`
                justify-center
                flex
                absolute
                top-0
                font-cyber
                font-extrabold
                w-full
                border
                ${cadet.textColor}
              `}
        >
          {/* {cadet.name} */}
        </h1>
      )}
    </button>
  );
};

export default CadetCard;
