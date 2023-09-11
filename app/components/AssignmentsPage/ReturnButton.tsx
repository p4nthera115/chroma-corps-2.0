"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface ReturnButtonProps {
  year: string;
}

const PrevAssButton: React.FC<ReturnButtonProps> = ({ year }) => {
  const router = useRouter();

  return (
    <div className="absolute top-0 -left-2 flex p-4 m-2 ">
      <button
        className="h-8 gap-4 font-cyber hover:text-amber-400 flex flex-row justify-center items-center"
        onClick={() => router.push(`/cadets/${year}`)}
      >
        <span className="text-3xl">
          <AiOutlineArrowLeft />
        </span>
        <span className="hidden md:flex text-lg">{year}</span>
      </button>
    </div>
  );
};

export default PrevAssButton;
