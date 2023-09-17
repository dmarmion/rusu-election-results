import { NOT_APPLICABLE, UNKNOWN_CANDIDATE, labelForPosition } from "../utils/labels";
import { Candidate } from "../utils/types";
import { votePercent } from "../utils/votes";

import TeamNameWithDot from "./TeamNameWithDot";
import CandidateSquare from "./common/CandidateSquare";

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

  // Calculate total number of votes cast
  const votesCast = candidates.reduce((prevTotal, candidate) => {
    return prevTotal + (candidate.votes ?? 0);
  }, 0);

  return (
    <div className="flex flex-col">
      <h3>{labelForPosition(positionID)}</h3>
      <div className="grow rounded-lg bg-neutral-200 p-2">
        {/* Candidate square(s) */}
        {Array(winner.names.length)
          .fill(null)
          .map(() => (
            <CandidateSquare teamID={winner.team} />
          ))}

        {/* Results table */}
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-700 text-left">
              <th>Candidate</th>
              <th className="px-2">Team</th>
              <th className="px-2">Votes</th>
              <th className="px-2">%</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(({ names, team, votes }, idx) => (
              <tr
                className="border-b border-gray-400 data-[winner=true]:font-bold"
                data-winner={winnerIndex === idx}
              >
                <td className="py-2">{names.map((name) => <p>{name}</p>) ?? UNKNOWN_CANDIDATE}</td>
                <td className="p-2">
                  <TeamNameWithDot teamID={team} />
                </td>
                <td className="p-2">{votes ?? NOT_APPLICABLE}</td>
                <td className="p-2">{votePercent(votes, votesCast)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
