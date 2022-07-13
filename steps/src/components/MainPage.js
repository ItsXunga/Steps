import React from "react";
import Nav from "./nav";
import Map from "./Map";
import ModalAddRota from "./ModalAddRota";
import ModalInfo from "./ModalInfo";
import ModalPin from "./ModalPin";

const SecondPage = () => {
  return (
    <div>
      <Nav />
      <Map />

      {/* modais */}
      <ModalPin />
      <ModalAddRota />
      <ModalInfo />
    </div>
  );
};

export default SecondPage;
