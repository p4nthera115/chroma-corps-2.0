"use client";

import { Assignment, Cadet, CadetAssignment } from "@/app/types";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { CadetPageCard } from "./CadetPageCard";
import { usePathname } from "next/navigation";
import { AssignmentPageCard } from "../AssignmentsPage/AssignmentPageCard";

interface AssignmentCardProps {
  assignment: Assignment | undefined;
  cadet: Cadet;
  cadetAssignment?: CadetAssignment[];
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  assignment,
  cadet,
  cadetAssignment,
}) => {
  const [active, setActive] = useState(false);

  const pathname = usePathname();
  console.log();

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
          <div className="relative inset-0 h-full w-full">
            {pathname.includes("assignments") ? (
              <AssignmentPageCard
                assignment={assignment}
                cadet={cadet}
                active={active}
                setActive={setActive}
              />
            ) : (
              <CadetPageCard
                assignment={assignment}
                cadet={cadet}
                active={active}
                setActive={setActive}
              />
            )}
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
            rounded-lg
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
          {!active && assignment.img !== "" ? (
            assignment?.img.includes(".gif") ? (
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
                loading="lazy"
              />
            ) : (
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
            )
          ) : (
            <video width={224} height={126.4}>
              <source src={assignment.vid}></source>
            </video>
          )}
          {/* instead of ternary operator, can also use code below */}
          {/* {!active && assignment && (
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
          )} */}
        </button>
      )}
    </motion.div>
  );
};

export default AssignmentCard;
