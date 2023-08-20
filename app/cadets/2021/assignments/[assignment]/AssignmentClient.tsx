"use client";

import { usePathname } from "next/navigation";
import { cadets2021 } from "@/app/components/Cadets/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import Prompt from "@/app/components/AssignmentsPage/Prompt";
import Menu from "@/app/components/Menu/Menu";
import NextAssButton from "@/app/components/AssignmentsPage/NextAssButton";
import PrevAssButton from "@/app/components/AssignmentsPage/PrevAssButton";
import { Assignment } from "@/app/types";

const AssignmentClient = () => {
  const pathname = usePathname();
  const [assignmentDay, setAssignmentDay] = useState(pathname.slice(25));
  const [teamCyan, setTeamCyan] = useState<any>([]);
  const [teamRed, setTeamRed] = useState<any>([]);
  const [winner, setWinner] = useState<any>([]);
  const [strike, setStrike] = useState<any>([]);
  const [eliminated, setEliminated] = useState<any>([]);
  const [dropout, setDropout] = useState<any>([]);

  const year = pathname.slice(8, 12);

  const cadetAssignments = useMemo(() => {
    return cadets2021.map((cadet) => {
      const assignment = (
        cadet.assignments as (Assignment | undefined)[] | undefined
      )?.find(
        (assignment: Assignment | undefined) =>
          assignment?.day === +assignmentDay
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

  console.log(winner);

  return (
    <div className="bg-neutral-900 relative w-full h-full">
      <div className="absolute z-[60]">
        <Menu />
      </div>
      <div>
        <Prompt
          prompt={cadetAssignments[0].assignment?.prompt}
          assignmentNo={cadetAssignments[0].assignment?.day}
        />
      </div>
      <Assignments cadetAssignments={cadetAssignments} teams={teams} />
      <div className="translate-y-14">
        {winner.length > 0 && <WinnerBanner winner={winner} />}
        {strike.length > 0 && <StrikeBanner strike={strike} />}
        {(eliminated.length > 0 || dropout.length > 0) && (
          <EliminatedBanner eliminated={eliminated} dropout={dropout} />
        )}
      </div>
      <div className="h-[33vh] w-screen relative items-center">
        {+assignmentDay > 1 && (
          <PrevAssButton year={year} day={+assignmentDay} />
        )}
        {+assignmentDay < 39 && (
          <NextAssButton year={year} day={+assignmentDay} />
        )}
      </div>
    </div>
  );
};

export default AssignmentClient;
