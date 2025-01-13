import { useEffect, useState } from "react";

export default function Clock({ gameId }: { gameId: string }) {
  const [paused, setPaused] = useState(true);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [ballTimeInSeconds, setBallTimeInSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (paused) return;
      setTimeInSeconds(timeInSeconds + 1);
      setBallTimeInSeconds(ballTimeInSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h1>Tempo de posse de bola: {ballTimeInSeconds}</h1>
      <div>
        {!paused && (
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setPaused(!paused)}
          >
            Pausar
          </button>
        )}
        {paused && (
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setPaused(!paused)}
          >
            Despausar
          </button>
        )}
      </div>
      <div>
        <button
          className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setBallTimeInSeconds(0)}
        >
          Resetar
        </button>
      </div>
    </>
  );
}
