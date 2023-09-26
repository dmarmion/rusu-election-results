import {
  ELECTED_PREFIX,
  NOT_APPLICABLE,
  NOT_ELECTED_IDENTIFIER,
  NOT_ELECTED_MESSAGE,
} from "./labels";

// Calculates the percentage of totalVotes a number of votes represents.
// Returns 100 if votes or totalVotes are invalid.
export const votePercent = (votes: number, totalVotes: number): number => {
  return votes >= 0 && totalVotes > 0 ? (votes / totalVotes) * 100 : 100;
};

// Get a string containing the percentage of total votes a number of votes represents, rounded to
// two decimal places, or a placeholder message if there are no votes
export const votePercentMessage = (votes: number | undefined, totalVotes: number): string => {
  return votes !== undefined && totalVotes > 0
    ? votePercent(votes, totalVotes).toFixed(2)
    : NOT_APPLICABLE;
};

// Get the number of Droop quotas a number of votes represents, roudned to two decimal places.
export const droopQuotas = (votes: number, totalVotes: number, positionsOpen: number): string => {
  if (positionsOpen <= 0) {
    return NOT_APPLICABLE;
  }

  const quota = Math.floor(totalVotes / (positionsOpen + 1)) + 1;
  return (votes / quota).toFixed(2);
};

// Determines whether a candidate was elected based on elected status in data file format
export const wasElected = (electedStatus: string): boolean =>
  electedStatus !== NOT_ELECTED_IDENTIFIER;

// Converts elected status of multiple-vacancy candidates from data file format to a displayable message
export const wasElectedMessage = (electedStatus: string): string => {
  return electedStatus === NOT_ELECTED_IDENTIFIER
    ? NOT_ELECTED_MESSAGE
    : `${ELECTED_PREFIX} ${electedStatus}`;
};
