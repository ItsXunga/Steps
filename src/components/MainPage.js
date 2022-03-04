import React, { useState } from "react";
import Nav from "./nav";
import Map from "./Map";

const SecondPage = () => {
  const [mode, setMode] = useState();
  const [singleRoute, setSingleRoute] = useState();

  const pull_modo = (value) => {
    setMode(value);
  };

  const pull_singleRoute = (value) => {
    setSingleRoute(value);
  };

  return (
    <div>
      <Nav checkModo={pull_modo} singleRoute={singleRoute} />
      <Map modo={mode} checkSingleRoute={pull_singleRoute} />
    </div>
  );
};

export default SecondPage;
