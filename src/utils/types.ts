export interface Candidate {
  names: string[];
  team: string;
  votes?: number;
}

export interface GeneralRepCandidate {
  name: string;
  team: string;
  votes: number;
  elected: string;
}

export interface TeamCount {
  team: string;
  count: number;
}
