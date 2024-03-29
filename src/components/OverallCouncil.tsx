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
    <div className="mb-4">
      <h3>Overall Council</h3>
      <p className="mb-2 italic">Does not include NUS delegates</p>
      <div className="flex flex-wrap gap-2 rounded-lg bg-neutral-200 p-2">
        {seatColours.map((bgColour, idx) => (
          <div className={`aspect-square h-16 rounded-lg ${bgColour}`} key={idx}></div>
        ))}
      </div>
    </div>
  );
}
