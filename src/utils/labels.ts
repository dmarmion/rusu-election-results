// Labels for each council position
export const GENERAL_SECRETARY = "General Secretary";
export const EDUCATION_OFFICER = "Education Officer";
export const WELFARE_OFFICER = "Welfare Officer";
export const INTERNATIONAL_OFFICER = "International Officer";
export const POSTGRADUATE_OFFICER = "Postgraduate Officer";
export const WOMENS_OFFICER = "Women's Officer";
export const QUEER_OFFICER = "Queer Officer";
export const INDIGENOUS_OFFICER = "Indigenous Officer";
export const DISABILITIES_CARERS_OFFICER = "Disabilities & Carers Officer";
export const ACTIVITIES_OFFICER = "Activities Officer";
export const SUSTAINABILITY_OFFICER = "Sustainability Officer";
export const CLUBS_SOCIETIES_OFFICER = "Clubs & Societies Officer";
export const VOCATIONAL_EDUCATION_OFFICER = "Vocational Education Officer";
export const BRUNSWICK_COORDINATOR = "Brunswick Coordinator";
export const BUNDOORA_COORDINATOR = "Bundoora Coordinator";
export const CITY_COORDINATOR = "City Coordinator";
export const BRUNSWICK_REPRESENTATIVE = "Brunswick Representative";
export const BUNDOORA_EAST_REPRESENTATIVE = "Bundoora East Representative";
export const BUNDOORA_WEST_REPRESENTATIVE = "Bundoora West Representative";
export const CITY_REPRESENTATIVE = "City Representative";
export const GENERAL_REPRESENTATIVES = "General Representatives";

// Data file identifiers for each position
const POSITION_ID_GENERAL_SECRETARY = "generalSecretary";
const POSITION_ID_EDUCATION_OFFICER = "educationOfficer";
const POSITION_ID_WELFARE_OFFICER = "welfareOfficer";
const POSITION_ID_INTERNATIONAL_OFFICER = "internationalOfficer";
const POSITION_ID_POSTGRADUATE_OFFICER = "postgraduateOfficer";
const POSITION_ID_WOMENS_OFFICER = "womensOfficer";
const POSITION_ID_QUEER_OFFICER = "queerOfficer";
const POSITION_ID_INDIGENOUS_OFFICER = "indigenousOfficer";
const POSITION_ID_DISABILITIES_CARERS_OFFICER = "disabilitiesCarersOfficer";
const POSITION_ID_ACTIVITIES_OFFICER = "activitiesOfficer";
const POSITION_ID_SUSTAINABILITY_OFFICER = "sustainabilityOfficer";
const POSITION_ID_CLUBS_SOCIETIES_OFFICER = "clubsSocietiesOfficer";
const POSITION_ID_VOCATIONAL_EDUCATION_OFFICER = "vocationalEducationOfficer";
const POSITION_ID_BRUNSWICK_COORDINATOR = "brunswickCoordinator";
const POSITION_ID_BUNDOORA_COORDINATOR = "bundooraCoordinator";
const POSITION_ID_CITY_COORDINATOR = "cityCoordinator";
const POSITION_ID_BRUNSWICK_REPRESENTATIVE = "brunswickRep";
const POSITION_ID_BUNDOORA_EAST_REPRESENTATIVE = "bundooraEastRep";
const POSITION_ID_BUNDOORA_WEST_REPRESENTATIVE = "bundooraWestRep";
const POSITION_ID_CITY_REPRESENTATIVE = "cityRep";

// Stores the label associated with each position identifier
const POSITION_LABELS = new Map([
  [POSITION_ID_GENERAL_SECRETARY, GENERAL_SECRETARY],
  [POSITION_ID_EDUCATION_OFFICER, EDUCATION_OFFICER],
  [POSITION_ID_WELFARE_OFFICER, WELFARE_OFFICER],
  [POSITION_ID_INTERNATIONAL_OFFICER, INTERNATIONAL_OFFICER],
  [POSITION_ID_POSTGRADUATE_OFFICER, POSTGRADUATE_OFFICER],
  [POSITION_ID_WOMENS_OFFICER, WOMENS_OFFICER],
  [POSITION_ID_QUEER_OFFICER, QUEER_OFFICER],
  [POSITION_ID_INDIGENOUS_OFFICER, INDIGENOUS_OFFICER],
  [POSITION_ID_DISABILITIES_CARERS_OFFICER, DISABILITIES_CARERS_OFFICER],
  [POSITION_ID_ACTIVITIES_OFFICER, ACTIVITIES_OFFICER],
  [POSITION_ID_SUSTAINABILITY_OFFICER, SUSTAINABILITY_OFFICER],
  [POSITION_ID_CLUBS_SOCIETIES_OFFICER, CLUBS_SOCIETIES_OFFICER],
  [POSITION_ID_VOCATIONAL_EDUCATION_OFFICER, VOCATIONAL_EDUCATION_OFFICER],
  [POSITION_ID_BRUNSWICK_COORDINATOR, BRUNSWICK_COORDINATOR],
  [POSITION_ID_BUNDOORA_COORDINATOR, BUNDOORA_COORDINATOR],
  [POSITION_ID_CITY_COORDINATOR, CITY_COORDINATOR],
  [POSITION_ID_BRUNSWICK_REPRESENTATIVE, BRUNSWICK_REPRESENTATIVE],
  [POSITION_ID_BUNDOORA_EAST_REPRESENTATIVE, BUNDOORA_EAST_REPRESENTATIVE],
  [POSITION_ID_BUNDOORA_WEST_REPRESENTATIVE, BUNDOORA_WEST_REPRESENTATIVE],
  [POSITION_ID_CITY_REPRESENTATIVE, CITY_REPRESENTATIVE],
]);

// Labels for each team name
export const TEAM_NAME_TOGETHER = "Together";
export const TEAM_NAME_SOCIAL_JUSTICE = "Social Justice";
export const TEAM_NAME_STUDENT_VOICE = "Student Voice";
export const TEAM_NAME_STUDENT_FIGHTBACK = "Student Fightback - Stop Fee Hikes!";
export const TEAM_NAME_MOMENTUM = "Momentum";
export const TEAM_NAME_UNKNOWN = "Unknown team";

export const UNKNOWN_CANDIDATE = "Unknown candidate";

// Get the label corresponding to the data file position identifier
export const labelForPosition = (positionID: string): string =>
  POSITION_LABELS.get(positionID) ?? positionID;
