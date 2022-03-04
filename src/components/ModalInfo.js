import React, { useState } from "react";
import Modal from "react-modal";
import { modalStyles } from "../style/modal_styles";

function ModalInfo(params) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex" }}>
          <div>
            <img src={require("../assets/img/pin.png")} alt="pin" />
            <p
              style={{
                padding: "1rem 2rem",
                fontSize: "18px",
                fontFamily: "ManropeRegular",
              }}
            >
              Pressiona no mapa para marcares o teu ponto
            </p>

            <div style={{ padding: "1rem 2rem" }}>
              <button onClick={closeModal} className="orangeButton">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalInfo;
