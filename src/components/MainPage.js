import React from "react";
import Nav from "./nav";
import Map from "./Map";

const SecondPage = () => {
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
        <Nav />
      </div>
      <Map />
    </div>
  );
};

export default SecondPage;
