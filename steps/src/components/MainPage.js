import React from "react";
import Nav from "./nav";
import Map from "./Map";
import ModalInfo from "./ModalInfo";
import ModalAddRota from "./ModalAddRota";
import ModalCancelar from "./modalcancelar";

const SecondPage = () => {
  return (
    <div>
      <Nav />
      <Map />

      {/* modais */}
      <ModalAddRota />
      <ModalInfo />
      <ModalCancelar />
    </div>
  );
};

export default SecondPage;
