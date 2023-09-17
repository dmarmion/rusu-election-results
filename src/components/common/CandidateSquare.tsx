import { teamColourOf } from "../../utils/teams";

interface CandidateSquareProps {
  teamID: string;
}

export default function CandidateSquare({ teamID }: CandidateSquareProps) {
  return <div className={`mr-2 inline-flex h-20 w-20 rounded-lg ${teamColourOf(teamID)}`}></div>;
}
