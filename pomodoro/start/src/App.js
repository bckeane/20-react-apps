import React, { useState } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2,'0');
}

export default function App() {

  //Defs
  const [title, setTitle] = useState('Let the countdown begin');
  const [timeLeft, setTimeLeft] = useState( 10 /*25 * 60*/ );

  //funcs
  function startTimer(){
    setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        
        //reset the timeer
        return 0;
      });
    },1000)
  };

  //Computed Vars
  const minutes =  padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - (minutes * 60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
