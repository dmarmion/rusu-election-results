import CouncilMember from "./components/CouncilMember";
import OverallCouncil from "./components/OverallCouncil";

import results2022 from "../data/2022.json";

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1>RUSU Annual Election Results</h1>
      <hr className="my-4 border-t-4" />

      <h2>2022 Elections</h2>

      <OverallCouncil teamCounts={results2022.overallCount} />

      {/* Council position result boxes */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {results2022.officers.map((position) => (
          <CouncilMember positionID={position.position} candidates={position.candidates} />
        ))}
      </div>
    </div>
  );
}

export default App;
