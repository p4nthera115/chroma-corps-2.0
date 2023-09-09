"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface ReturnButtonProps {
  year: string;
}

const PrevAssButton: React.FC<ReturnButtonProps> = ({ year }) => {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 flex p-4 m-4 ">
      <button
        className="md:w-[16rem] h-10 md:border rounded font-cyber hover:text-amber-400 flex flex-row justify-center items-center"
        onClick={() => router.push(`/cadets/${year}`)}
      >
        <span className="p-2 flex flex-row md:hidden left-0 absolute text-3xl items-center">
          <AiOutlineArrowLeft />
        </span>
        <span className="hidden md:block">Return to {year}</span>
      </button>
    </div>
  );
};

export default PrevAssButton;
