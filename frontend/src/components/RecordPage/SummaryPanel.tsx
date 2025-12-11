/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FC } from "react";

interface SummaryPanelProps {
  transcript: string;
}
export const SummaryPanel: FC<SummaryPanelProps> = ({ transcript }) => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const summarizeText = async (transcript: string) => {
    setLoading(true);
    setSummary("");
    setError("");

    try {
      console.log(transcript);
      // Save summary here
    } catch (error) {
      setError((error as any).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center flex-col gap-2">
      <div className="bg-blue-400 rounded-2xl text-2xl font-bold p-5">
        {transcript}
      </div>
      <button
        className="font-bold"
        onClick={async () => await summarizeText(transcript)}
      >
        Summarize
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error</div>
      ) : (
        summary && <div>{summary}</div>
      )}
    </div>
  );
};
