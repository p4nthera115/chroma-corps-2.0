"use client";

import { usePathname } from "next/navigation";
import { cadets2021 } from "@/app/components/Cadets/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import Prompt from "@/app/components/AssignmentsPage/Prompt";

const AssignmentClient = () => {
  const pathname = usePathname();
  const [assignmentDay, setAssignmentDay] = useState(pathname.slice(25));
  const [teamCyan, setTeamCyan] = useState<any>([]);
  const [teamRed, setTeamRed] = useState<any>([]);
  const [winner, setWinner] = useState<any>([]);
  const [strike, setStrike] = useState<any>([]);
  const [eliminated, setEliminated] = useState<any>([]);
  const [dropout, setDropout] = useState<any>([]);

  const cadetAssignments = useMemo(() => {
    return cadets2021.map((cadet) => {
      const assignment = cadet.assignments.find(
        (assignment) => assignment.day === +assignmentDay
      );
      return { cadet, assignment };
    });
  }, [cadets2021, assignmentDay]);

  useEffect(() => {
    const cyanTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-cyan-500"
    );
    const redTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-red-500"
    );

    setTeamCyan(cyanTeam);
    setTeamRed(redTeam);

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
    teamCyan,
    teamRed,
  };

  console.log(eliminated);

  return (
    <div>
      <Prompt
        prompt={cadetAssignments[0].assignment?.prompt}
        assignmentNo={cadetAssignments[0].assignment?.day}
      />
      <div className="z-20">
        <Assignments cadetAssignments={cadetAssignments} teams={teams} />
      </div>
      <WinnerBanner winner={winner} />
      <StrikeBanner strike={strike} />
      {(eliminated.length > 0 || dropout.length > 0) && (
        <EliminatedBanner eliminated={eliminated} dropout={dropout} />
      )}
    </div>
  );
};

export default AssignmentClient;
