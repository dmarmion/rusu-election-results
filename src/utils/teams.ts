import {
  TEAM_NAME_MOMENTUM,
  TEAM_NAME_SOCIAL_JUSTICE,
  TEAM_NAME_STUDENT_FIGHTBACK,
  TEAM_NAME_STUDENT_VOICE,
  TEAM_NAME_TOGETHER,
  TEAM_NAME_UNKNOWN,
} from "./labels";

// Identifiers for each team
export const TEAM_ID_TOGETHER = "group_tog";
export const TEAM_ID_SOCIAL_JUSTICE = "group_soj";
export const TEAM_ID_STUDENT_VOICE = "group_stv";
export const TEAM_ID_STUDENT_FIGHTBACK = "group_stf";
export const TEAM_ID_MOMENTUM = "group_mom";

// Stores the tailwind background colour associated with each team
const TEAM_COLOURS = new Map([
  [TEAM_ID_TOGETHER, "bg-[#15aefc]"],
  [TEAM_ID_SOCIAL_JUSTICE, "bg-[#010101]"],
  [TEAM_ID_STUDENT_VOICE, "bg-[#f25a45]"],
  [TEAM_ID_STUDENT_FIGHTBACK, "bg-[#6664fd]"],
  [TEAM_ID_MOMENTUM, "bg-[#d089e5]"],
]);

// Stores the team name associated with each team identifier
const TEAM_NAME_LABELS = new Map([
  [TEAM_ID_TOGETHER, TEAM_NAME_TOGETHER],
  [TEAM_ID_SOCIAL_JUSTICE, TEAM_NAME_SOCIAL_JUSTICE],
  [TEAM_ID_STUDENT_VOICE, TEAM_NAME_STUDENT_VOICE],
  [TEAM_ID_STUDENT_FIGHTBACK, TEAM_NAME_STUDENT_FIGHTBACK],
  [TEAM_ID_MOMENTUM, TEAM_NAME_MOMENTUM],
]);

// Returns the tailwind background colour for a team based on its identifier, or white if there is
// no colour associated with that team.
export const teamColourOf = (team: string): string => TEAM_COLOURS.get(team) ?? "bg-white";

// Returns the team name corresponding to the provided team identifier
export const teamNameOf = (team: string): string => TEAM_NAME_LABELS.get(team) ?? TEAM_NAME_UNKNOWN;
