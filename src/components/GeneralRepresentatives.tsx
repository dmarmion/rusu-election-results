import { NOT_APPLICABLE, UNKNOWN_CANDIDATE } from "../utils/labels";
import { teamColourOf, teamNameOf } from "../utils/teams";
import { GeneralRepCandidate } from "../utils/types";
import { droopQuotas, votePercent, wasElected, wasElectedMessage } from "../utils/votes";

interface GeneralRepresentativesProps {
  candidates: GeneralRepCandidate[];
}

export default function GeneralRepresentatives({ candidates }: GeneralRepresentativesProps) {
  const POSITIONS_AVAILABLE = 7;
  const votesCast = candidates.reduce((prevTotal, candidate) => prevTotal + candidate.votes, 0);

  return (
    <>
      <h3>General Representatives</h3>
      <div className="mb-4 rounded-lg bg-neutral-200 p-2">
        {/* TODO: Team totals */}
        {/* Results table */}
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
                  <div
                    className={`mr-1 inline-flex h-3 w-3 rounded-md align-middle ${teamColourOf(
                      team
                    )}`}
                  ></div>
                  {teamNameOf(team)}
                </td>
                <td className="p-2">{votes ?? NOT_APPLICABLE}</td>
                <td className="p-2">{droopQuotas(votes, votesCast, POSITIONS_AVAILABLE)}</td>
                <td className="p-2">{votePercent(votes, votesCast)}</td>
                <td className="p-2">{wasElectedMessage(elected)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
