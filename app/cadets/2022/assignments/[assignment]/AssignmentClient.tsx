"use client";

import { usePathname } from "next/navigation";
import { cadets2022 } from "@/app/components/Cadets/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import Prompt from "@/app/components/AssignmentsPage/Prompt";

const AssignmentClient = () => {
  const pathname = usePathname();
  const [assignmentDay, setAssignmentDay] = useState(pathname.slice(25));
  const [teamBlue, setTeamBlue] = useState<any>([]);
  const [teamYellow, setTeamYellow] = useState<any>([]);
  const [teamPink, setTeamPink] = useState<any>([]);
  const [winner, setWinner] = useState<any>([]);
  const [strike, setStrike] = useState<any>([]);
  const [eliminated, setEliminated] = useState<any>([]);
  const [dropout, setDropout] = useState<any>([]);

  const cadetAssignments = useMemo(() => {
    return cadets2022.map((cadet) => {
      const assignment = cadet.assignments.find(
        (assignment) => assignment.day.toString() === assignmentDay
      );
      return { cadet, assignment };
    });
  }, [cadets2022, assignmentDay]);

  useEffect(() => {
    const blueTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-blue-500"
    );
    const yellowTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-yellow-500"
    );
    const pinkTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-pink-600"
    );

    setTeamBlue(blueTeam);
    setTeamYellow(yellowTeam);
    setTeamPink(pinkTeam);

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
    teamBlue,
    teamYellow,
    teamPink,
  };

  return (
    <div>
      <Prompt
        prompt={cadetAssignments[0].assignment?.prompt}
        assignmentNo={cadetAssignments[0].assignment?.day}
      />
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
