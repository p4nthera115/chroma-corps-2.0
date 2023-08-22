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
            w-full 
            h-full 
            md:flex
            md:flex-col
            md:align-top
            overflow-hidden 
            border 
            rounded
            border-neutral-950 
            ${isActive ? cadet.teamColor : "bg-neutral-800"}
            ${cadet.teamColorHover} 
            hover:cursor-pointer
          `}
    >
      <h1
        className={`text-center z-50 text-white absolute font-cyber md:hidden -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 ${
          year === "2023" ? "text-xs" : ""
        }`}
      >
        {cadet.name}
      </h1>
      <div
        className={`
                justify-center
                flex
                flex-col
                font-cyber
                font-bold
                w-full
                h-full
                opacity-50
                md:opacity-100
                md:h-[6.5%]
                md:border
                md:rounded-t
                text-sm
                md:text-base
                ${cadet.teamColor}
                ${cadet.textColor}
              `}
      >
        <h1
          className={`text-center hidden md:block ${
            year === "2023" ? "text-xs" : ""
          }`}
        >
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
                  ? "md:scale-110 sepia-0 opacity-100"
                  : "scale-100 sepia opacity-50"
              }
              hover:sepia-0 
              hover:opacity-100
              md:hover:scale-110
              scale-[400%]
              md:scale-100
              translate-y-24
              translate-x-14
              md:translate-y-0
              md:translate-x-0
              transition
            `}
      />
      {!hover && !isActive && (
        <h1
          className={`
                justify-center
                hidden
                md:flex
                absolute
                top-0
                font-cyber
                font-extrabold
                w-full
                border
                rounded-t
                text-sm
                md:text-base
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
