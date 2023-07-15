"use client";

import { usePathname } from "next/navigation";
import { cadets2020 } from "@/app/components/Cadets/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import Prompt from "@/app/components/AssignmentsPage/Prompt";
import { Assignment } from "@/app/types";
import Menu from "@/app/components/Menu/Menu";

const AssignmentClient = () => {
  const pathname = usePathname();
  const [assignmentDay, setAssignmentDay] = useState(pathname.slice(25));
  const [noTeam, setNoTeam] = useState<any>([]);
  const [winner, setWinner] = useState<any>([]);
  const [strike, setStrike] = useState<any>([]);
  const [eliminated, setEliminated] = useState<any>([]);
  const [dropout, setDropout] = useState<any>([]);

  // const cadetAssignments = useMemo(() => {
  //   return cadets2020.map((cadet) => {
  //     const assignment = cadet.assignments.find(
  //       (assignment: Assignment | undefined) =>
  //         assignment?.day.toString() === assignmentDay
  //     );
  //     return { cadet, assignment };
  //   });
  // }, [cadets2020, assignmentDay]);

  const cadetAssignments = useMemo(() => {
    return cadets2020.map((cadet) => {
      const assignment = (
        cadet.assignments as (Assignment | undefined)[] | undefined
      )
        ?.filter((assignment) => assignment !== undefined)
        .find((assignment) => assignment?.day === +assignmentDay);
      return { cadet, assignment };
    });
  }, [cadets2020, assignmentDay]);

  useEffect(() => {
    const team = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-amber-300"
    );

    setNoTeam(team);

    const win = cadetAssignments.filter(
      (cadetAssignments) => cadetAssignments.assignment?.winner === true
    );
    const str = cadetAssignments.filter(
      (cadetAssignments) => cadetAssignments.assignment?.strike === true
    );
    const elim = cadetAssignments.filter(
      (cadetAssignments) => cadetAssignments.assignment?.eliminated === true
    );
    const drop = cadetAssignments.filter(
      (cadetAssignments) => cadetAssignments.assignment?.dropout === true
    );

    setWinner(win);
    setStrike(str);
    setEliminated(elim);
    setDropout(drop);
  }, [cadetAssignments]);

  const teams = {
    noTeam,
  };

  return (
    <div className="bg-neutral-900">
      <div className="absolute z-[60]">
        <Menu />
      </div>
      <Prompt
        prompt={cadetAssignments[0].assignment?.prompt}
        assignmentNo={cadetAssignments[0].assignment?.day}
      />
      <Assignments cadetAssignments={cadetAssignments} teams={teams} />
      <div className="translate-y-14">
        {winner.length > 0 && <WinnerBanner winner={winner} />}
        {strike.length > 0 && <StrikeBanner strike={strike} />}
        {(eliminated.length > 0 || dropout.length > 0) && (
          <EliminatedBanner eliminated={eliminated} dropout={dropout} />
        )}
      </div>
    </div>
  );
};

export default AssignmentClient;
