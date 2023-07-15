"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface AssButtonProps {
  year: string;
  day: number;
}

const PrevAssButton: React.FC<AssButtonProps> = ({ year, day }) => {
  const router = useRouter();

  return (
    <div className="absolute left-0 bottom-0 flex p-4 m-4 ">
      <button
        className="md:w-[16rem] h-10 md:border font-cyber hover:text-amber-400 flex flex-row justify-center items-center"
        onClick={() => router.push(`/cadets/${year}/assignments/${day - 1}`)}
      >
        <span className="p-2 flex flex-row md:hidden left-0 absolute text-3xl items-center">
          <AiOutlineArrowLeft />
          <span className="text-base p-3 ">{day - 1}</span>
        </span>
        <span className="hidden md:block">Previous Assignment</span>
      </button>
    </div>
  );
};

export default PrevAssButton;
