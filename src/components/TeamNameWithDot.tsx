import { teamColourOf, teamNameOf } from "../utils/teams";

interface TeamNameWithDotProps {
  teamID: string;
}

export default function TeamNameWithDot({ teamID }: TeamNameWithDotProps) {
  return (
    <>
      <div
        className={`mr-2 inline-flex h-3 w-3 rounded-md align-middle ${teamColourOf(teamID)}`}
      ></div>
      {teamNameOf(teamID)}
    </>
  );
}
