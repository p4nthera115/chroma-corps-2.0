export type Cadet = {
  name: any;
  originalSubmission: string;
  teamColor: any;
  teamColorHover: string;
  teamColorOpacity?: string;
  teamColorHoverOpacity?: string;
  cardImg: string;
  cardPos: string;
  gradient?: string;
  centreGradient?: string;
  palette?: string;
  bannerImg: string[];
  bannerPos: string;
  cameraPos: string;
  strikeBannerPos?: any;
  bgLines?: string;
  borderColor?: any;
  textColor?: any;
  socials: {
    instagram?: string;
    twitter?: string;
    artstation?: string;
    website?: string;
  };
  assignments?: Assignment[];
};

export type Assignment = {
  prompt: string;
  note?: string;
  day: number;
  img: string;
  vid?: string;
  strike?: boolean;
  strikes: number;
  eliminated?: boolean;
  dropout?: boolean;
  winner?: boolean;
};

export type Team2023 = {
  [key: string]: CadetAssignment[];
  noTeam: CadetAssignment[];
};
export type Teams2022 = {
  [key: string]: CadetAssignment[];
  teamBlue: CadetAssignment[];
  teamYellow: CadetAssignment[];
  teamPink: CadetAssignment[];
};
export type Teams2021 = {
  [key: string]: CadetAssignment[];
  teamCyan: CadetAssignment[];
  teamRed: CadetAssignment[];
};
export type Team2020 = {
  [key: string]: CadetAssignment[];
  noTeam: CadetAssignment[];
};

export type CadetAssignment = {
  cadet: Cadet;
  assignment: Assignment | undefined;
};
