import OverallCouncil from "./components/OverallCouncil";

import results2022 from "../data/2022.json";

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1>RUSU Annual Election Results</h1>
      <hr className="my-4 border-t-4" />

      <h2>2022 Elections</h2>

      <OverallCouncil teamCounts={results2022.overallCount} />

      <h3>General Secretary</h3>
      {/* Square goes here */}

      <h3>Education Officer</h3>
      {/* Square goes here */}

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
