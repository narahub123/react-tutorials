import { useRef, useState } from "react";

// a variable that will shared across all component instances that are based on the component function
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  // every component instance of the TimerChallenge component will get its own timer ref that works totally independent
  const timer = useRef();

  const [timeStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  // a function that stop timer
  // need the timer access stop function
  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timeStarted ? handleStop : handleStart}>
        {timeStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
} // TimerChallenge() ends
