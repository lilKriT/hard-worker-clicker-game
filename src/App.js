// const { default: Main } = require("./components/Main");  // what is this?
import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [clicks, setClicks] = useState(0);
  const [cash, setCash] = useState(0);
  const [playerState, setPlayerState] = useState({});
  const [playerStats, setPlayersStats] = useState({});

  const click = () => {
    console.log("Player clicked");
    setClicks(clicks + 1);
  };

  useEffect(() => {
    console.log("Starting autosave");
    setInterval(() => {
      console.log("Autosave");
    }, 3 * 1000);

    localStorage.setItem("Player State", {});
  }, []);

  return <Main clicks={clicks} click={click} cash={cash} />;
}

export default App;
