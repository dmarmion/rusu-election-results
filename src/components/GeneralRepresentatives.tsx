import { useState } from "react";

import { NOT_APPLICABLE, UNKNOWN_CANDIDATE } from "../utils/labels";
import { teamColourOf } from "../utils/teams";
import { GeneralRepCandidate } from "../utils/types";
import { droopQuotas, votePercent, wasElected, wasElectedMessage } from "../utils/votes";

import TeamNameWithDot from "./TeamNameWithDot";

interface GeneralRepresentativesProps {
  candidates: GeneralRepCandidate[];
}

interface TeamStats {
  votes: number;
  elected: number;
}

export default function GeneralRepresentatives({ candidates }: GeneralRepresentativesProps) {
  const [showFullResults, setShowFullResults] = useState<boolean>(false);

  const POSITIONS_AVAILABLE = 7;
  const votesCast = candidates.reduce((prevTotal, candidate) => prevTotal + candidate.votes, 0);

  // Calculate total number of votes and candidates elected for each team
  const teamStats: Map<string, TeamStats> = new Map();
  candidates.forEach(({ team, votes, elected }) => {
    const currentTeamVotes = teamStats.get(team)?.votes ?? 0;
    const currentTeamElected = teamStats.get(team)?.elected ?? 0;
    teamStats.set(team, {
      votes: currentTeamVotes + votes,
      elected: currentTeamElected + (wasElected(elected) ? 1 : 0),
    });
  });

  const sortedTeamStats = [...teamStats.entries()].sort(sortByNumberElected);

  return (
    <>
      <h3>General Representatives</h3>
      <div className="mb-4 rounded-lg bg-neutral-200 p-2">
        {/* Candidate squares */}
        {sortedTeamStats.map(([team, { elected }]) =>
          Array(elected)
            .fill(null)
            .map(() => (
              <div className={`mr-2 inline-flex h-20 w-20 rounded-lg ${teamColourOf(team)}`}></div>
            ))
        )}
        {/* Team total results table */}
        <table className="mb-4 w-full">
          <thead>
            <tr className="border-b-2 border-gray-700 text-left">
              <th>Team</th>
              <th className="px-2">Votes</th>
              <th className="px-2">Quotas</th>
              <th className="px-2">%</th>
              <th className="px-2">Candiates Elected</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeamStats.map(([team, { votes, elected }]) => (
              <tr
                className="border-b border-gray-400 data-[winner=true]:font-bold"
                data-winner={elected > 0}
              >
                <td className="py-2">
                  <TeamNameWithDot teamID={team} />
                </td>
                <td className="p-2">{votes ?? NOT_APPLICABLE}</td>
                <td className="p-2">{droopQuotas(votes, votesCast, POSITIONS_AVAILABLE)}</td>
                <td className="p-2">{votePercent(votes, votesCast)}</td>
                <td className="p-2">{elected}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Button to toggle the full results table */}
        <button
          className="mb-2 rounded-lg bg-rusupurple px-4 py-2 text-white"
          onClick={() => setShowFullResults(!showFullResults)}
        >
          {showFullResults ? "Hide" : "Show"} Full Results
        </button>
        {showFullResults && (
          /* Individual candidate results table */
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-700 text-left">
                <th>Candidate</th>
                <th className="px-2">Team</th>
                <th className="px-2">Votes</th>
                <th className="px-2">Quotas</th>
                <th className="px-2">%</th>
                <th className="px-2">Elected?</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map(({ name, team, votes, elected }) => (
                <tr
                  className="border-b border-gray-400 data-[winner=true]:font-bold"
                  data-winner={wasElected(elected)}
                >
                  <td className="py-2">{name ?? UNKNOWN_CANDIDATE}</td>
                  <td className="p-2">
                    <TeamNameWithDot teamID={team} />
                  </td>
                  <td className="p-2">{votes ?? NOT_APPLICABLE}</td>
                  <td className="p-2">{droopQuotas(votes, votesCast, POSITIONS_AVAILABLE)}</td>
                  <td className="p-2">{votePercent(votes, votesCast)}</td>
                  <td className="p-2">{wasElectedMessage(elected)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

// Sort teams by the number of elected candidates, largest-to-smallest
const sortByNumberElected = (
  [, teamStatsA]: [string, TeamStats],
  [, teamStatsB]: [string, TeamStats]
): number => {
  let sortOrder = teamStatsB.elected - teamStatsA.elected;
  sortOrder = sortOrder === 0 ? teamStatsB.votes - teamStatsA.votes : sortOrder;
  return sortOrder;
};
