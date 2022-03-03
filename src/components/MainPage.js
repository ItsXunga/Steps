import React, { useState } from "react";
import Nav from "./nav";
import Map from "./Map";

const SecondPage = () => {
  const [mode, setMode] = useState();

  const pull_modo = (value) => {
    setMode(value);
  };

  return (
    <div>
      <div
        id="menu_bar"
        style={{
          position: "fixed",
          zIndex: "1",
          bottom: "0",
          width: "100vw",
          padding: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
        }}
      >
        <Nav checkModo={pull_modo} />
      </div>
      <Map modo={mode} />
    </div>
  );
};

export default SecondPage;
