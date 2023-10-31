import { NOT_APPLICABLE, UNKNOWN_CANDIDATE, labelForPosition } from "../utils/labels";
import { Candidate } from "../utils/types";
import { totalVotes, votePercent, votePercentMessage } from "../utils/votes";

import CandidateSquare from "./common/CandidateSquare";
import TeamNameWithDot from "./common/TeamNameWithDot";
import VoteShareBar from "./common/VoteShareBar";

interface CouncilMemberProps {
  positionID: string;
  candidates: Candidate[];
  finalCount?: Candidate[];
}

export default function CouncilMember({ positionID, candidates, finalCount }: CouncilMemberProps) {
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
  const votesCast = totalVotes(candidates);
  const finalCountVotes = totalVotes(finalCount ?? []);

  return (
    <div className="flex flex-col">
      <h3>{labelForPosition(positionID)}</h3>
      <div className="flex grow flex-col rounded-lg bg-neutral-200 p-2">
        {/* Candidate square(s) */}
        <div className="inline">
          {Array(winner.names.length)
            .fill(null)
            .map(() => (
              <CandidateSquare teamID={winner.team} />
            ))}
        </div>
        {/* Results table */}
        <div className="grow">
          <table className="mb-4 w-full">
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
                  <td className="py-2">
                    {names.map((name) => <p>{name}</p>) ?? UNKNOWN_CANDIDATE}
                  </td>
                  <td className="p-2">
                    <TeamNameWithDot teamID={team} />
                  </td>
                  <td className="p-2">{votes ?? NOT_APPLICABLE}</td>
                  <td className="p-2">{votePercentMessage(votes, votesCast)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <VoteShareBar
          teamVotes={candidates.map(({ team, votes }) => ({
            teamID: team,
            voteShare: votes !== undefined ? votePercent(votes, votesCast) : 100,
          }))}
        />
        {finalCount && (
          <>
            <p className="mt-2">After distributing preferences, the final result was:</p>
            <p>
              {finalCount
                .map(
                  (candidate) =>
                    `${candidate.names} ${votePercentMessage(candidate.votes, finalCountVotes)}% (${
                      candidate.votes
                    } votes)`
                )
                .join(", ")}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
