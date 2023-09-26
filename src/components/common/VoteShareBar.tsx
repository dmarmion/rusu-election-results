import { teamColourOf } from "../../utils/teams";

interface VoteShareBarProps {
  teamVotes: Array<{
    teamID: string;
    voteShare: number;
  }>;
}

export default function VoteShareBar({ teamVotes }: VoteShareBarProps) {
  return (
    <div className="h-8 w-full overflow-hidden rounded-lg">
      {teamVotes.map(({ teamID, voteShare }) => (
        <div
          className={`inline-block h-full ${teamColourOf(teamID)}`}
          style={{
            width: `${voteShare.toFixed(2)}%`,
          }}
        ></div>
      ))}
    </div>
  );
}
