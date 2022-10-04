import React from "react";

const Main = ({ clicks, click, cash }) => {
  // Generating a save file
  const generateSave = () => {
    let saveState = { clicks };
    console.log(saveState);
    return saveState;
  };

  const loadSave = () => {};

  return (
    <div className="main">
      <h2>Hard workers</h2>
      <button className="clickHere" onClick={click}>
        Click here
      </button>
      <h3>
        Clicks: <span className="amountOfClicks">{clicks}</span>
      </h3>
      <h3>
        Cash: <span className="amountOfCash">{cash}</span>
      </h3>
      <div className="options">
        <button onClick={generateSave}>Save</button>
        <button onClick={loadSave}>Load</button>
      </div>
    </div>
  );
};

export default Main;
