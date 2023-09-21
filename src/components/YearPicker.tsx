import { resultsFiles } from "../utils/resultsFiles";
import { NamedResultsFile } from "../utils/types";

interface YearPickerProps {
  currentFileName: string;
  setResultsFile: (resultsFile: NamedResultsFile) => void;
}

export default function YearPicker({ currentFileName, setResultsFile }: YearPickerProps) {
  return (
    <>
      {resultsFiles.map((file, i) => {
        console.log(file.name);
        return (
          <button
            className={`mr-2 rounded-lg px-4 py-2 ${
              file.name === currentFileName ? "bg-rusupurple text-white" : "bg-neutral-200"
            }`}
            onClick={() => setResultsFile(file)}
            key={i}
          >
            {file.name}
          </button>
        );
      })}
    </>
  );
}
