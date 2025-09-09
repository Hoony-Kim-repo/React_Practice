import { useEffect, useState } from "react";

export default function QuestionTimer({ time, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(time * 1000);

  useEffect(() => {
    const timer = setTimeout(onTimeout, time * 1000);

    return () => clearTimeout(timer);
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      className={mode}
      max={time * 1000}
      value={remainingTime}
    />
  );
}
