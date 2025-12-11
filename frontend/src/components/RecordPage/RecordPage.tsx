import { useState } from "react";
import { RecordingPanel } from "./RecordingPanel";
import { SummaryPanel } from "./SummaryPanel";

export const RecordPage = () => {
  const [transcript, setTranscript] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-5">
      <RecordingPanel setTranscript={setTranscript} />
      {transcript && <SummaryPanel transcript={transcript} />}
    </div>
  );
};
