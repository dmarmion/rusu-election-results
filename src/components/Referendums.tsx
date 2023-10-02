import { Referendum } from "../utils/types";
import { votePercentMessage } from "../utils/votes";

interface ReferendumsProps {
  referendums: Referendum[];
}

export default function Referendums({ referendums }: ReferendumsProps) {
  return (
    <div className="mb-4">
      <h3>Referendums</h3>
      <div className="flex flex-col rounded-lg bg-neutral-200 p-2">
        {referendums.map(({ topic, question, options }) => {
          // Total number of votes cast in this referendum
          const votesCast = options.reduce((prevTotal, { votes }) => {
            return prevTotal + votes;
          }, 0);

          // Calculate index of most popular option
          let winnerIndex = 0;
          let highestVoteCount = options[0].votes ?? 0;
          options.forEach(({ votes }, idx) => {
            if (votes > highestVoteCount) {
              highestVoteCount = votes;
              winnerIndex = idx;
            }
          });

          return (
            <>
              <h4 className="text-xl">{topic}</h4>
              <p className="mb-2 italic">{question}</p>
              {/* Results table */}
              <table className="mb-4 w-full">
                <thead>
                  <tr className="border-b-2 border-gray-700 text-left">
                    <th>Option</th>
                    <th className="px-2">Votes</th>
                    <th className="px-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  {options.map(({ option, votes }, idx) => (
                    <tr
                      className="border-b border-gray-400 data-[winner=true]:font-bold"
                      data-winner={winnerIndex === idx}
                    >
                      <td>{option}</td>
                      <td className="p-2">{votes}</td>
                      <td className="p-2">{votePercentMessage(votes, votesCast)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
        })}
      </div>
    </div>
  );
}
