"use client";

import { usePathname } from "next/navigation";
import { cadets2022 } from "@/app/data/CadetData";
import { useState, useEffect, useMemo } from "react";
import Assignments from "@/app/components/CadetPage/Assignments";
import EliminatedBanner from "@/app/components/AssignmentsPage/EliminatedBanner";
import StrikeBanner from "@/app/components/AssignmentsPage/StrikeBanner";
import WinnerBanner from "@/app/components/AssignmentsPage/WinnerBanner";
import Prompt from "@/app/components/AssignmentsPage/Prompt";
import Menu from "@/app/components/Menu/Menu";
import NextAssButton from "@/app/components/AssignmentsPage/NextAssButton";
import PrevAssButton from "@/app/components/AssignmentsPage/PrevAssButton";
import { Assignment, CadetAssignment } from "@/app/types";
import NotFound from "@/app/not-found";
import SmallWinnerBanner from "@/app/components/AssignmentsPage/SmallWinnerBanner";
import SmallElimBanner from "@/app/components/AssignmentsPage/SmallElimBanner";
import ReturnButton from "@/app/components/AssignmentsPage/ReturnButton";

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
  const [width, setWidth] = useState(0);
  const [promptArr, setPromptArr] = useState<any>([]);

  const year = pathname.slice(8, 12);

  const cadetAssignments = useMemo(() => {
    return cadets2022.map((cadet) => {
      const assignment = (
        cadet.assignments as (Assignment | undefined)[] | undefined
      )?.find(
        (assignment: Assignment | undefined) =>
          assignment?.day === +assignmentDay
      );
      return { cadet, assignment };
    });
  }, [cadets2022, assignmentDay]);

  useEffect(() => {
    const blueTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-blue-500"
    );
    const yellowTeam = cadetAssignments.filter(
      (cadetAssignment) => cadetAssignment.cadet.teamColor === "bg-[#ffe600]"
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
    const prompts = cadetAssignments.filter(
      (cadetAssignments) => cadetAssignments.cadet.name === "Dako"
    );

    setWinner(win);
    setStrike(str);
    setEliminated(elim);
    setDropout(drop);
    setPromptArr(prompts);

    if (window) setWidth(window.innerWidth);
  }, [cadetAssignments]);

  const teams = {
    teamBlue,
    teamYellow,
    teamPink,
  };

  return (
    <div>
      {+assignmentDay > 31 || +assignmentDay < 1 ? (
        <NotFound />
      ) : (
        <div className="bg-black relative w-full h-full">
          <div className="absolute z-[60]">
            <Menu />
          </div>
          <div>
            <Prompt
              prompt={promptArr[0]?.assignment?.prompt}
              assignmentNo={promptArr[0]?.assignment?.day}
            />
            <ReturnButton year={year} />
          </div>
          <div className="mb-12">
            <Assignments cadetAssignments={cadetAssignments} teams={teams} />
          </div>
          <div>
            {width && width > 768 && winner.length > 0 && (
              <WinnerBanner winner={winner} />
            )}
            {width && width < 768 && winner.length === 1 && (
              <WinnerBanner winner={winner} />
            )}
            {width &&
              width < 768 &&
              winner.length > 1 &&
              winner.map((winner: CadetAssignment, i: number) => (
                <SmallWinnerBanner key={i} winner={winner} />
              ))}
            {strike.length > 0 &&
              strike.map((strike: CadetAssignment, i: number) => (
                <StrikeBanner strike={strike} key={i} />
              ))}
            {width &&
              width > 768 &&
              (eliminated.length > 0 || dropout.length > 0) && (
                <EliminatedBanner eliminated={eliminated} dropout={dropout} />
              )}
            {width &&
              width < 768 &&
              (eliminated.length || dropout.length) === 1 && (
                <EliminatedBanner eliminated={eliminated} dropout={dropout} />
              )}
            {width &&
              width < 768 &&
              eliminated.length > 1 &&
              eliminated.map((eliminated: CadetAssignment, i: number) => (
                <SmallElimBanner key={i} eliminated={eliminated} />
              ))}
            {width &&
              width < 768 &&
              dropout.length > 1 &&
              dropout.map((dropout: CadetAssignment, i: number) => (
                <SmallElimBanner key={i} dropout={dropout} />
              ))}
          </div>
          <div className="h-[20vh] w-screen relative items-center z-50 bg-black">
            {+assignmentDay > 1 && (
              <PrevAssButton year={year} day={+assignmentDay} />
            )}
            {+assignmentDay < 31 && (
              <NextAssButton year={year} day={+assignmentDay} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentClient;
