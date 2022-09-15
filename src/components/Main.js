import React from "react";

const Main = ({ clicks, click }) => {
  return (
    <div className="main">
      <h2>Hard workers</h2>
      <button className="clickHere" onClick={click}>
        Click here
      </button>
      <h3>
        Clicks: <span className="amountOfClicks">{clicks}</span>
      </h3>
    </div>
  );
};

export default Main;
