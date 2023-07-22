import { teamColourOf } from "../utils/teams";
import { TeamCount } from "../utils/types";

interface OverallCouncilProps {
  teamCounts: TeamCount[];
}

export default function OverallCouncil({ teamCounts = [] }: OverallCouncilProps) {
  const seatColours: string[] = [];

  teamCounts.forEach((tc) => {
    for (let i = 0; i < tc.count; i++) {
      seatColours.push(teamColourOf(tc.team));
    }
  });

  return (
    <>
      <h3>Overall Council</h3>
      <p className="mb-2 italic">Does not include NUS delegates</p>

      <div className="grid grid-cols-7 gap-2 rounded-lg bg-neutral-200 px-2 py-2">
        {seatColours.map((bgColour, idx) => (
          <div className={`${bgColour} w-fill h-10 rounded-lg`} key={idx}></div>
        ))}
      </div>
    </>
  );
}
