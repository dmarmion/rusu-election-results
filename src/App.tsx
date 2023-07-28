import OverallCouncil from "./components/OverallCouncil";

import results2022 from "../data/2022.json";
import CouncilMember from "./components/CouncilMember";
import {
  EDUCATION_OFFICER,
  GENERAL_SECRETARY,
  INDIGENOUS_OFFICER,
  QUEER_OFFICER,
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

      <CouncilMember title={WOMENS_OFFICER} candidates={results2022.womensOfficer} />
      <CouncilMember title={QUEER_OFFICER} candidates={results2022.queerOfficer} />
      <CouncilMember title={INDIGENOUS_OFFICER} candidates={results2022.indigenousOfficer} />

      {/*
        Make a component for this part; roles:
        - General Secretary
        - Education Officer
        - Welfare Officer
        - International Officer
        - Postgraduate Officer
        - Women's Officer
        - Queer Officer
        - Indigenous Officer
        - Disabilities & Carers Officer
        - Activities Officer
        - Sustainability Officer
        - Clubs and Societies Officer
        - Vocational Education Officer
        - Brunswick Coordinator
        - Bundoora Coordinator
        - City Coordinator
        - Brunswick Representative
        - Bundoora East Representative
        - Bundoora West Representative
        - City Representative
        - General Representative (x7)

        - Catalyst Editor
        - NUS Delegates (x7)?
      */}
    </div>
  );
}

export default App;
