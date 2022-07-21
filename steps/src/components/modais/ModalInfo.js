import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import { closeModal } from "../redux/modalState";

function ModalInfo() {
  const openModalInfo = useSelector((state) => state.modalState.modalInfo);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        isOpen={openModalInfo}
        onRequestClose={() => dispatch(closeModal())}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex" }}>
          <div>
            <img src={require("../../assets/img/pin.png")} alt="pin" />
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
              <button
                onClick={() => dispatch(closeModal())}
                className="orangeButton"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalInfo;
