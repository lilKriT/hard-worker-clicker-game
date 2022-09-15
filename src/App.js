// const { default: Main } = require("./components/Main");  // what is this?
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [clicks, setClicks] = useState(0);

  const click = () => {
    console.log("Player clicked");
    setClicks(clicks + 1);
  };

  return <Main clicks={clicks} click={click} />;
}

export default App;
