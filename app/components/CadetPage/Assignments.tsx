"use client";

import {
  Cadet,
  CadetAssignment,
  Teams2022,
  Teams2021,
  Team2020,
} from "@/app/types";
import AssignmentCard from "./AssignmentCard";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

interface AssignmentsProps {
  cadet?: Cadet | undefined;
  cadetAssignments?: CadetAssignment[];
  teams?: Teams2022 | Teams2021 | Team2020;
}

const Assignments: React.FC<AssignmentsProps> = ({
  cadet,
  cadetAssignments,
  teams,
}) => {
  const [name, setName] = useState("ASSIGNMENTS");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return "ASSIGNMENTS"[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      iterations += 3;
    }, 80);
  };

  return (
    <div className={`relative h-full w-full bg-neutral-900`}>
      {!cadetAssignments && (
        <motion.div className="relative flex w-full justify-center overflow-hidden">
          <h1
            className={`relative font-cyber m-3 w-3/4 md:w-1/2 text-xl md:text-4xl lg:text-5xl xl:text-6xl p-6 md:p-8 text-center border-2 overflow-hidden cursor-default ${cadet?.borderColor} ${cadet?.teamColorOpacity}`}
            onMouseOver={hoverAnimation}
          >
            {name}
          </h1>
        </motion.div>
      )}
      {!cadetAssignments && (
        <div className="flex flex-row flex-wrap md:gap-5 md:p-4 justify-center">
          {cadet?.assignments.map((assignment: any, i) => (
            <AssignmentCard key={i} assignment={assignment} cadet={cadet} />
          ))}
        </div>
      )}
      {teams &&
        Object.keys(teams).map((teamKey) => {
          const teamAssignments = teams[teamKey];
          return (
            <Fragment key={teamKey}>
              <section className="flex flex-row flex-wrap gap-0 justify-center">
                {teamAssignments.map((cadetAssignment, i) => (
                  <div key={i} className="md:p-4">
                    <AssignmentCard
                      assignment={cadetAssignment.assignment}
                      cadet={cadetAssignment.cadet}
                      cadetAssignment={cadetAssignments}
                    />
                  </div>
                ))}
              </section>
              <br />
            </Fragment>
          );
        })}
    </div>
  );
};

export default Assignments;
