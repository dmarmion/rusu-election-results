import CouncilMember from "./components/CouncilMember";
import OverallCouncil from "./components/OverallCouncil";

import results2022 from "../data/2022.json";

import {
  ACTIVITIES_OFFICER,
  BRUNSWICK_COORDINATOR,
  BRUNSWICK_REPRESENTATIVE,
  BUNDOORA_COORDINATOR,
  BUNDOORA_EAST_REPRESENTATIVE,
  BUNDOORA_WEST_REPRESENTATIVE,
  CITY_COORDINATOR,
  CITY_REPRESENTATIVE,
  CLUBS_SOCIETIES_OFFICER,
  DISABILITIES_CARERS_OFFICER,
  EDUCATION_OFFICER,
  GENERAL_SECRETARY,
  INDIGENOUS_OFFICER,
  INTERNATIONAL_OFFICER,
  POSTGRADUATE_OFFICER,
  QUEER_OFFICER,
  SUSTAINABILITY_OFFICER,
  VOCATIONAL_EDUCATION_OFFICER,
  WELFARE_OFFICER,
  WOMENS_OFFICER,
} from "./utils/labels";

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1>RUSU Annual Election Results</h1>
      <hr className="my-4 border-t-4" />

      <h2>2022 Elections</h2>

      <OverallCouncil teamCounts={results2022.overallCount} />

      <CouncilMember title={GENERAL_SECRETARY} candidates={results2022.generalSecretary} />
      <CouncilMember title={EDUCATION_OFFICER} candidates={results2022.educationOfficer} />
      <CouncilMember title={WELFARE_OFFICER} candidates={results2022.welfareOfficer} />
      <CouncilMember title={INTERNATIONAL_OFFICER} candidates={results2022.internationalOfficer} />
      <CouncilMember title={POSTGRADUATE_OFFICER} candidates={results2022.postgraduateOfficer} />
      <CouncilMember title={WOMENS_OFFICER} candidates={results2022.womensOfficer} />
      <CouncilMember title={QUEER_OFFICER} candidates={results2022.queerOfficer} />
      <CouncilMember title={INDIGENOUS_OFFICER} candidates={results2022.indigenousOfficer} />
      <CouncilMember
        title={DISABILITIES_CARERS_OFFICER}
        candidates={results2022.disabilitiesCarersOfficer}
      />
      <CouncilMember title={ACTIVITIES_OFFICER} candidates={results2022.activitiesOfficer} />
      <CouncilMember
        title={SUSTAINABILITY_OFFICER}
        candidates={results2022.sustainabilityOfficer}
      />
      <CouncilMember
        title={CLUBS_SOCIETIES_OFFICER}
        candidates={results2022.clubsSocietiesOfficer}
      />
      <CouncilMember
        title={VOCATIONAL_EDUCATION_OFFICER}
        candidates={results2022.vocationalEducationOfficer}
      />
      <CouncilMember title={BRUNSWICK_COORDINATOR} candidates={results2022.brunswickCoordinator} />
      <CouncilMember title={BUNDOORA_COORDINATOR} candidates={results2022.bundooraCoordinator} />
      <CouncilMember title={CITY_COORDINATOR} candidates={results2022.cityCoordinator} />
      <CouncilMember title={BRUNSWICK_REPRESENTATIVE} candidates={results2022.brunswickRep} />
      <CouncilMember
        title={BUNDOORA_EAST_REPRESENTATIVE}
        candidates={results2022.bundooraEastRep}
      />
      <CouncilMember
        title={BUNDOORA_WEST_REPRESENTATIVE}
        candidates={results2022.bundooraWestRep}
      />
      <CouncilMember title={CITY_REPRESENTATIVE} candidates={results2022.cityRep} />
    </div>
  );
}

export default App;
