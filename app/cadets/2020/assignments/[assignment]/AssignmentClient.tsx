"use client";

import { usePathname } from "next/navigation";
import { cadets2020 } from "@/app/components/Cadets/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";

const AssignmentClient = () => {
  const pathname = usePathname();
  const [assignmentDay, setAssignmentDay] = useState(pathname.slice(25));
  const [noTeam, setNoTeam] = useState<any>([]);
  const [winner, setWinner] = useState<any>([]);
  const [strike, setStrike] = useState<any>([]);
  const [eliminated, setEliminated] = useState<any>([]);
  const [dropout, setDropout] = useState<any>([]);

  const cadetAssignments = useMemo(() => {
    return cadets2020.map((cadet) => {
      const assignment = cadet.assignments.find(
        (assignment) => assignment.day.toString() === assignmentDay
      );
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
    <div>
      <Assignments cadetAssignments={cadetAssignments} teams={teams} />
      <WinnerBanner winner={winner} />
      <StrikeBanner strike={strike} />
      {(eliminated.length > 0 || dropout.length > 0) && (
        <EliminatedBanner eliminated={eliminated} dropout={dropout} />
      )}
    </div>
  );
};

export default AssignmentClient;
