import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remaingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("TIMER SET");

    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("Cleaning up timer ");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  // onconfirm is a function and return value is a function might create infinite loop

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* re-render the progress bar frequently */}
      <progress value={remaingTime} max={TIMER} />
    </div>
  );
}
