"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

interface AssButtonProps {
  year: string;
  day: number;
}

const NextAssButton: React.FC<AssButtonProps> = ({ year, day }) => {
  const router = useRouter();

  return (
    <div className="absolute right-0 bottom-0 flex p-4 m-4">
      <button
        className="md:w-[14rem] h-10 md:border rounded font-cyber hover:text-amber-400 flex flex-row justify-center items-center"
        onClick={() => router.push(`/cadets/${year}/assignments/${day + 1}`)}
      >
        <span className="hidden md:block">Next Assignment</span>
        <span className="p-2 flex flex-row md:hidden right-0 absolute text-3xl items-center ">
          <span className="text-base p-3 ">{day + 1}</span>
          <AiOutlineArrowRight />
        </span>
      </button>
    </div>
  );
};

export default NextAssButton;
