import { useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaMicrophone,
  FaPause,
  FaPlay,
  FaSquare,
} from "react-icons/fa";
import { useReactMediaRecorder } from "react-media-recorder";

export const RecordPage = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true, video: false });

  const start = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    setIsPaused(false);

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const pause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };

  const stop = () => {
    setIsRunning(false);
    pause();
    setSeconds(0);
  };

  const format = (seconds: number) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="rounded-full bg-element w-90 h-90 flex flex-col justify-evenly items-center">
      <FaClock className="text-3xl" />
      <div className="text-5xl">{format(seconds)}</div>
      <div className="text-3xl flex gap-25">
        {!isRunning ? (
          <FaMicrophone
            className="interactive-icon"
            onClick={() => {
              startRecording();
              start();
            }}
          />
        ) : (
          <>
            <FaSquare
              className="interactive-icon"
              onClick={() => {
                stopRecording();
                stop();
              }}
            />
            {!isPaused ? (
              <FaPause
                className="interactive-icon"
                onClick={() => {
                  pauseRecording();
                  pause();
                }}
              />
            ) : (
              <FaPlay
                className="interactive-icon"
                onClick={() => {
                  resumeRecording();
                  start();
                }}
              />
            )}
          </>
        )}
      </div>
      {mediaBlobUrl && (
        <button className="text-2xl font-bold">Summarize</button>
      )}
    </div>
  );
};
