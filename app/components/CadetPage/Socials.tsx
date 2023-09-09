"use client";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import { Cadet } from "@/app/types";

interface SocialsProps {
  cadet: Cadet | undefined;
}

const Socials: React.FC<SocialsProps> = ({ cadet }) => {
  return (
    <div className="flex items-start md:items-end h-full w-full max-h-10 md:max-h-full justify-center flex-row md:flex-col z-50">
      <div className="flex flex-row md:flex-col gap-2 scale-[60%] md:scale-100 items-end">
        {cadet?.socials.instagram && (
          <a href={cadet?.socials.instagram} target="_blank">
            <AiOutlineInstagram
              className="hover:opacity-70 hover:cursor-pointer"
              size={50}
            />
          </a>
        )}
        {cadet?.socials.twitter && (
          <a href={cadet?.socials.twitter} target="_blank">
            <AiOutlineTwitter
              className="hover:opacity-70 hover:cursor-pointer"
              size={50}
            />
          </a>
        )}
        {cadet?.socials.artstation && (
          <a href={cadet?.socials.artstation} target="_blank">
            <FaArtstation
              className="hover:opacity-70 hover:cursor-pointer"
              size={50}
            />
          </a>
        )}
        {cadet?.socials.website && (
          <a href={cadet?.socials.website} target="_blank">
            <AiOutlineGlobal
              className="hover:opacity-70 hover:cursor-pointer"
              size={50}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Socials;
