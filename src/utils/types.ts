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

export interface Referendum {
  topic: string;
  question: string;
  options: Array<{
    option: string;
    votes: number;
  }>;
}

export interface ResultsFile {
  overallCount: TeamCount[];
  officers: Array<{
    position: string;
    candidates: Candidate[];
    finalCount?: Candidate[];
  }>;
  generalReps: GeneralRepCandidate[];
  catalystEditor?: Candidate[];
  referendums?: Referendum[];
}

export interface NamedResultsFile {
  name: string;
  file: ResultsFile;
}
