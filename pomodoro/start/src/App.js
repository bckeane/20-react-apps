import React, { useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  //Defs
  const [title, setTitle] = useState("Let the countdown begin");
  const [timeLeft, setTimeLeft] = useState(3 /*25 * 60*/);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  //funcs
  function startTimer() {
    if (intervalRef.current != null) return;
    setTitle("You're doing great!");
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        //reset the timeer
        resetTimer()
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current == null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep It Up');
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    setTitle('Read to Go Again');
    setTimeLeft(25*60)
    setIsRunning(false);
  }

  //Computed Vars
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button> }
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
