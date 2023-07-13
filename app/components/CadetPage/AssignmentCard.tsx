"use client";

import { Assignment, Cadet, CadetAssignment } from "@/app/types";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";

interface AssignmentCardProps {
  assignment: Assignment;
  cadet: Cadet;
  cadetAssignment?: CadetAssignment[];
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  assignment,
  cadet,
  cadetAssignment,
}) => {
  const [active, setActive] = useState(false);

  const layoutId = `assignment-card-${
    cadetAssignment ? cadet.name : assignment?.day
  }`;

  const styles: any = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    margin: "2rem",
    top: "0vh",
    left: "0%",
    zIndex: 100,
  };

  return (
    <motion.div
      layout
      layoutId={layoutId}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      style={active ? styles : undefined}
    >
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 ">
          <div className="relative inset-0 h-screen w-screen p-4">
            <ExpandedCard
              assignment={assignment}
              cadet={cadet}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      )}
      {assignment && (
        <button
          onClick={() => setActive(!active)}
          className={`
            flex 
            z-0
            border
            w-screen
            h-[12rem]
            md:w-[14rem] 
            md:h-[7.9rem] 
            ${active ? "border-transparent" : cadet?.borderColor} 
            ${cadet?.teamColorOpacity} 
            hover:bg-white/0
            font-cyber 
            justify-center 
            items-center 
            text-2xl 
            text-white
            ${active ? "disabled" : ""}
            overflow-hidden
          `}
        >
          <h2
            className={`absolute ${
              cadet.name.length > 14 ? "text-xl" : "text-2xl"
            }`}
          >
            {!active && !cadetAssignment && assignment.day}
            {!active && cadetAssignment && cadet.name}
          </h2>
          {!active && assignment && (
            <Image
              src={assignment.img}
              alt="cadet"
              height={126.4}
              width={224}
              className={`
                relative
                object-cover 
                md:sepia
                opacity-50
                hover:sepia-0 
                hover:opacity-100
                hover:scale-110
                transition
                scale-150
                md:scale-100
              `}
            />
          )}
        </button>
      )}
    </motion.div>
  );
};

interface ExpandedCardProps {
  assignment: Assignment;
  cadet: Cadet;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({
  assignment,
  cadet,
  active,
  setActive,
}) => {
  const [showMobileInfoModal, setShowMobileInfoModal] = useState(false);

  return (
    <div className="relative flex flex-row border h-full w-full bg-black">
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
          fill
          className="opacity-4 z-10"
        />
      </section>
      <section className={`hidden md:flex h-full md:w-1/4 ${cadet.bgLines}`}>
        <h1 className="font-cyber text-5xl p-4">Day {assignment.day} : </h1>
        <h2>{assignment.prompt}</h2>
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
            className={`absolute font-cyber flex flex-col z-50 p-4 h-1/2 w-[90%] bg-black/80 border ${cadet.borderColor}`}
          >
            <h2>Day: {assignment.day}</h2>
            <h2>Prompt: {assignment.prompt}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentCard;
