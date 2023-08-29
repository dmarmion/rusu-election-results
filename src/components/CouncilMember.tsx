import { UNKNOWN_CANDIDATE, labelForPosition } from "../utils/labels";
import { teamColourOf, teamNameOf } from "../utils/teams";
import { Candidate } from "../utils/types";

interface CouncilMemberProps {
  positionID: string;
  candidates: Candidate[];
}

export default function CouncilMember({ positionID, candidates }: CouncilMemberProps) {
  // There must be at least one candidate for the position
  if (candidates.length === 0) {
    return null;
  }

  // Determine winning candidate
  let winnerIndex = 0;
  if (candidates.length > 1) {
    let highestVoteCount = candidates[0].votes ?? 0;
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (candidate.votes !== undefined && candidate.votes > highestVoteCount) {
        winnerIndex = i;
        highestVoteCount = candidate.votes;
      }
    }
  }

  const winner = candidates[winnerIndex];

  return (
    <>
      <h3>{labelForPosition(positionID)}</h3>
      <div className="rounded-lg bg-neutral-200 p-2">
        {/* Candidate square(s) */}
        {Array(winner.names.length)
          .fill(null)
          .map(() => (
            <div
              className={`mr-2 inline-flex h-20 w-20 rounded-lg ${teamColourOf(winner.team)}`}
            ></div>
          ))}

        {/* Results table */}
        <table>
          <thead>
            <tr className="border-b-2 border-gray-700 text-left">
              <th>Candidate</th>
              <th>Team</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(({ names, team, votes }) => (
              <tr className="border-b border-gray-400">
                <td>{names.join(", ") ?? UNKNOWN_CANDIDATE}</td>
                <td>
                  <div
                    className={`mr-1 inline-flex h-3 w-3 rounded-md align-middle ${teamColourOf(
                      team
                    )}`}
                  ></div>
                  {teamNameOf(team)}
                </td>
                <td>{votes ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
