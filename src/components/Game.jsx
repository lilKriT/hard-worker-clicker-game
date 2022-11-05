import { useState, useEffect } from "react";

const Game = () => {
  const tick = () => {
    console.log("tick");
  };

  const showCurrentTime = () => {
    let timer = document.querySelector(".time");
  };

  useEffect(() => {
    console.log("starting timer");
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  let date = new Date().toLocaleDateString();
  console.log(date);

  return (
    <div className="game bg-slate-400 min-h-screen">
      Game
      <p className="timer">{date}</p>
    </div>
  );
};

export default Game;
