"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Cadet } from "@/app/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface CadetCardProps {
  cadet: Cadet;
  key: number;
  style: any;
}

const NameCard: React.FC<CadetCardProps> = ({ cadet, key: i, style }) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`h-full relative rounded ${style} border-black border flex flex-col`}
      onClick={() => router.push(`/cadets/2023/${cadet.name}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1
        className={`flex relative w-full h-full ${
          hover ? "scale-110 opacity-100" : "opacity-75 scale-100"
        } transition justify-center items-center max-h-8`}
      >
        {cadet.name}
      </h1>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: hover ? 100 : 0 }}
        className={`flex relative w-full transition justify-center overflow-hidden bg-green-950/50 ${
          hover && "border"
        } border-x-transparent border-b-transparent border-t-black`}
      >
        <img
          src={cadet.cardImg}
          alt={cadet.name}
          width={100}
          height={100}
          className={`
            object-cover 
            object-center
            ${cadet.cardPos} 
            scale-[200%]
          `}
        />
      </motion.div>
    </button>
  );
};

export default NameCard;
