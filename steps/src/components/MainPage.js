import React from "react";
import Nav from "./nav";
import Map from "./Map";
import ModalInfo from "./ModalInfo";

import ModalAddRota from "./ModalAddRota";

const SecondPage = () => {
  return (
    <div>
      <Nav />
      <Map />

      {/* modais */}
      <ModalAddRota />
      <ModalInfo />
    </div>
  );
};

export default SecondPage;
