import { useState } from "react";

import CouncilMember from "./components/CouncilMember";
import GeneralRepresentatives from "./components/GeneralRepresentatives";
import OverallCouncil from "./components/OverallCouncil";
import Referendums from "./components/Referendums";
import YearPicker from "./components/YearPicker";

import { resultsFiles } from "./utils/resultsFiles";
import { NamedResultsFile } from "./utils/types";

function App() {
  // Current set of results being displayed, defaulting to the most recent
  const [{ name, file: results }, setResultsFile] = useState<NamedResultsFile>(
    resultsFiles[resultsFiles.length - 1]
  );

  return (
    <div className="container mx-auto px-4">
      <h1>RUSU Annual Election Results</h1>
      <YearPicker currentFileName={name} setResultsFile={setResultsFile} />
      <hr className="my-4 border-t-4 border-rusupurple" />

      <h2>{name}</h2>

      <OverallCouncil teamCounts={results.overallCount} />
      <GeneralRepresentatives candidates={results.generalReps} />

      {/* Referendum results, if any for that year */}
      {results.referendums && <Referendums referendums={results.referendums} />}

      {/* Council position result boxes */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {results.officers.map((position) => (
          <CouncilMember positionID={position.position} candidates={position.candidates} />
        ))}
      </div>
    </div>
  );
}

export default App;
