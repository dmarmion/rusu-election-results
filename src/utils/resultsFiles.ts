import results2018 from "../../data/2018.json";
import results2019 from "../../data/2019.json";
import results2020 from "../../data/2020.json";
import results2021 from "../../data/2021.json";
import results2022 from "../../data/2022.json";
import results2023 from "../../data/2023.json";
import { NamedResultsFile } from "./types";

export const resultsFiles: NamedResultsFile[] = [
  { name: "2018 Election", file: results2018 },
  { name: "2019 Election", file: results2019 },
  { name: "2020 Election", file: results2020 },
  { name: "2021 Election", file: results2021 },
  { name: "2022 Election", file: results2022 },
  { name: "2023 Election", file: results2023 },
];
