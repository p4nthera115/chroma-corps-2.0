"use client";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Cadet } from "@/app/types";

interface SocialsProps {
  cadet: Cadet | undefined;
}

const Socials: React.FC<SocialsProps> = ({ cadet }) => {
  return (
    <div className="flex flex-col z-50 absolute right-[2.5%] top-[6%] lg:right-[2%] lg:top-[] xl:right-[1.5%]">
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
};

export default Socials;
