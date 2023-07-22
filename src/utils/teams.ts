// Identifiers for each team
export const TEAM_ID_TOGETHER = "group_tog";
export const TEAM_ID_SOCIAL_JUSTICE = "group_soj";
export const TEAM_ID_STUDENT_VOICE = "group_stv";
export const TEAM_ID_STUDENT_FIGHTBACK = "group_stf";
export const TEAM_ID_MOMENTUM = "group_mom";

// Stores the tailwind background colour associated with each team
const TEAM_COLOURS = new Map([
  [TEAM_ID_TOGETHER, "bg-sky-500"],
  [TEAM_ID_SOCIAL_JUSTICE, "bg-neutral-800"],
  [TEAM_ID_STUDENT_VOICE, "bg-red-500"],
  [TEAM_ID_STUDENT_FIGHTBACK, "bg-indigo-500"],
  [TEAM_ID_MOMENTUM, "bg-fuchsia-400"],
]);

// Returns the tailwind background colour for a team based on its identifier, or white if there is
// no colour associated with that team.
export const teamColourOf = (team: string): string => TEAM_COLOURS.get(team) ?? "bg-white";
