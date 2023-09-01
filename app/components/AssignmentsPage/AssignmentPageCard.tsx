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
            {assignment.img.includes(".mp4") ? (
              <video
                className="relative block z-30 object-contain"
                autoPlay
                loop
              >
                <source src={assignment.img} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={assignment.img}
                alt={assignment.prompt}
                height={1080}
                width={1920}
                priority={false}
                className="relative block z-30 object-contain"
              />
            )}
          </div>
          <div className="absolute h-full w-full backdrop-blur-md z-20"></div>
          {assignment.img.includes(".mp4") ? (
            <div className="bg-neutral-700"></div>
          ) : (
            <Image
              src={assignment.img}
              alt={assignment.prompt}
              fill
              quality={1}
              priority={true}
              className="absolute opacity-80 z-10 object-cover "
            />
          )}
        </section>
      )}
      <section
        className={`hidden md:flex md:flex-col h-full md:w-1/4 ${cadet.bgLines}`}
      >
        <div className="relative h-full w-full mt-20 font-cyber flex flex-col gap-4">
          <h2
            className={`${
              cadet.name.length >= 6 &&
              cadet.name.length < 12 &&
              cadet?.name !== "Edouardtredan" &&
              cadet?.name !== "Slimeslugger"
                ? "text-2xl lg:text-2xl xl:text-[2.75rem] max-h-full max-w-full md:pl-4"
                : cadet.name.length >= 12 && cadet.name.length < 14
                ? "text-lg lg:text-xl xl:text-3xl max-h-full max-w-full md:p-4"
                : cadet.name.length >= 14
                ? "text-sm lg:text-xl xl:text-lg max-h-full max-w-full md:p-4"
                : cadet?.name === "Edouardtredan"
                ? "text-xl md:text-2xl lg:text-4xl xl:text-2xl max-h-full max-w-full md:p-4"
                : cadet?.name === "Slimeslugger"
                ? "text-xl md:text-2xl lg:text-4xl xl:text-2xl max-h-full max-w-full md:p-4"
                : "text-7xl max-h-full max-w-full"
            } md:pl-4 font-cyber`}
          >
            {cadet.name}
          </h2>
          <div className="relative w-full h-[23rem] ">
            <h3 className="text-lg leading-7 max-h-full p-4 overflow-auto overflow-x-hidden">
              Prompt: <br /> {assignment?.prompt}
            </h3>
          </div>
          {assignment?.img ===
            "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Assignments/2023-Cadet-Assignments/ass-29/naka.png" && (
            <a
              className="md:text-xl lg:text-2xl underline md:p-2 lg:p-4 "
              href="https://www.webtoons.com/en/canvas/chroma23/project-overgrowth/viewer?title_no=894013&episode_no=2"
              target="_blank"
            >
              See full comic
            </a>
          )}
        </div>
        <button
          className="absolute bottom-0 right-0 font-cyber p-2 text-sm cursor-pointer"
          onClick={() => router.push(`/cadets/${year}/${cadet.name}`)}
        >
          See Cadet Page
        </button>
      </section>
      <button
        className="absolute z-50 bottom-0 right-0 p-2 bg-black/50 md:hidden"
        onClick={() => setShowMobileInfoModal(!showMobileInfoModal)}
      >
        <RiInformationLine color="white" size={20} />
      </button>

      {showMobileInfoModal && (
        <div className="absolute flex h-full w-full justify-center items-center">
          <div
            className={`relative font-mono flex flex-col z-50 p-4 h-1/2 w-[90%] bg-black/80 border ${cadet.borderColor}`}
          >
            <h2 className="text-xl p-2 font-cyber">{cadet.name}</h2>
            <div className="relative w-full h-36 ">
              <h3 className="text-lg leading-6 max-h-full p-2 overflow-scroll">
                Prompt: <br /> {assignment?.prompt}
              </h3>
            </div>
            {assignment?.img ===
              "https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Assignments/2023-Cadet-Assignments/ass-29/naka.png" && (
              <a
                className="md:text-xl lg:text-2xl underline md:p-2 lg:p-4 mt-8"
                href="https://www.webtoons.com/en/canvas/chroma23/project-overgrowth/viewer?title_no=894013&episode_no=2"
                target="_blank"
              >
                See full comic
              </a>
            )}
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
