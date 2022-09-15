import React from "react";

const Main = () => {
  return (
    <div className="main">
      <h2>Hard workers</h2>
      <button className="clickHere">Click here</button>
      <h3>
        Clicks: <span className="amountOfClicks"></span>
      </h3>
    </div>
  );
};

export default Main;
