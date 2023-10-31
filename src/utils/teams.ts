import {
  TEAM_NAME_CLIMATE_ACTION,
  TEAM_NAME_MOMENTUM,
  TEAM_NAME_NO_TEAM,
  TEAM_NAME_REVIVE,
  TEAM_NAME_SOCIAL_JUSTICE,
  TEAM_NAME_STALLIONZ,
  TEAM_NAME_STUDENT_FIGHTBACK,
  TEAM_NAME_STUDENT_VOICE,
  TEAM_NAME_TOGETHER,
  TEAM_NAME_UNKNOWN,
} from "./labels";

// Identifiers for each team
export const TEAM_ID_NO_TEAM = "group_not";
export const TEAM_ID_TOGETHER = "group_tog";
export const TEAM_ID_REVIVE = "group_rev";
export const TEAM_ID_STALLIONZ = "group_sta";
export const TEAM_ID_CLIMATE_ACTION = "group_cla";
export const TEAM_ID_SOCIAL_JUSTICE = "group_soj";
export const TEAM_ID_STUDENT_VOICE = "group_stv";
export const TEAM_ID_STUDENT_FIGHTBACK = "group_stf";
export const TEAM_ID_MOMENTUM = "group_mom";

// Referendum option prefix
export const OPTION_PREFIX = "option-";

// Stores the tailwind background colour associated with each team
const TEAM_COLOURS = new Map([
  [TEAM_ID_TOGETHER, "bg-[#15aefc]"],
  [TEAM_ID_REVIVE, "bg-[#f48000]"],
  [TEAM_ID_STALLIONZ, "bg-amber-900"],
  [TEAM_ID_CLIMATE_ACTION, "bg-black"],
  [TEAM_ID_SOCIAL_JUSTICE, "bg-[#010101]"],
  [TEAM_ID_STUDENT_VOICE, "bg-[#f25a45]"],
  [TEAM_ID_STUDENT_FIGHTBACK, "bg-[#6664fd]"],
  [TEAM_ID_MOMENTUM, "bg-[#d089e5]"],

  // Referendum options
  [`${OPTION_PREFIX}yes`, "bg-green-500"],
  [`${OPTION_PREFIX}no`, "bg-red-500"],
]);

// Stores the team name associated with each team identifier
const TEAM_NAME_LABELS = new Map([
  [TEAM_ID_NO_TEAM, TEAM_NAME_NO_TEAM],
  [TEAM_ID_TOGETHER, TEAM_NAME_TOGETHER],
  [TEAM_ID_REVIVE, TEAM_NAME_REVIVE],
  [TEAM_ID_STALLIONZ, TEAM_NAME_STALLIONZ],
  [TEAM_ID_CLIMATE_ACTION, TEAM_NAME_CLIMATE_ACTION],
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
