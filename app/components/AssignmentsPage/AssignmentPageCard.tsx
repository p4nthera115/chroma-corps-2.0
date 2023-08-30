"use client";

import { Assignment, Cadet } from "@/app/types";
import { Dispatch, SetStateAction, useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface AssignmentPageCardProps {
  assignment: Assignment | undefined;
  cadet: Cadet;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const AssignmentPageCard: React.FC<AssignmentPageCardProps> = ({
  assignment,
  cadet,
  active,
  setActive,
}) => {
  const [showMobileInfoModal, setShowMobileInfoModal] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const year = pathname.slice(8, 12);

  return (
    <div className="relative flex flex-row border h-full w-full bg-black">
      {assignment && (
        <section
          className={`relative flex h-full w-full md:w-3/4 md:border justify-center`}
        >
          <button
            className={`absolute h-10 w-10 font-cyber z-50 left-0 border ${cadet.borderColor} ${cadet.teamColorOpacity}`}
            onClick={() => setActive(!active)}
          >
            X
          </button>

          <div className="relative flex w-full h-full object-contain justify-center">
            <Image
              src={assignment.img}
              alt={assignment.prompt}
              height={1080}
              width={1920}
              className="relative block z-30 object-contain"
            />
          </div>
          <div className="absolute h-full w-full backdrop-blur-md z-20"></div>
          <Image
            src={assignment.img}
            alt={assignment.prompt}
            height={1080}
            width={1920}
            quality={1}
            priority={true}
            className="absolute opacity-80 z-10 object-cover "
          />
        </section>
      )}
      <section
        className={`hidden md:flex md:flex-col h-full md:w-1/4 ${cadet.bgLines}`}
      >
        <div className="mt-20 font-cyber flex flex-col gap-4">
          <h1 className="md:text-lg lg:text-xl md:p-2 lg:p-2 font-cyber">
            {cadet.name}
          </h1>
          <h1 className="md:text-lg lg:text-2xl md:p-2 lg:p-2">
            Prompt:
            <p className="md:text-lg lg:text-xl">{assignment?.prompt}</p>
          </h1>
        </div>
        <button
          className="absolute bottom-0 right-0 font-cyber p-2 text-sm cursor-pointer"
          onClick={() => router.push(`/cadets/${year}/${cadet.name}`)}
        >
          See Cadet Page
        </button>
      </section>
      <a
        className="absolute z-50 bottom-0 right-0 p-2 bg-black/50 md:hidden"
        onClick={() => setShowMobileInfoModal(!showMobileInfoModal)}
      >
        <RiInformationLine color="white" size={20} />
      </a>

      {showMobileInfoModal && (
        <div className="absolute flex h-full w-full justify-center items-center">
          <div
            className={`absolute font-mono flex flex-col z-50 p-4 h-1/2 w-[90%] bg-black/80 border ${cadet.borderColor}`}
          >
            <h1 className="text-6xl p-2 font-cyber">{cadet.name}</h1>
            <h1 className="text-2xl p-2">Prompt: {assignment?.prompt}</h1>
            <a
              className="absolute bottom-0 right-0 font-cyber p-1  cursor-pointer"
              onClick={() => router.push(`/cadets/${year}/${cadet.name}`)}
            >
              See Cadet Page
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
