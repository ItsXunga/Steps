import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../style/modal_styles";
import { closeModal } from "./redux/modalState";

function ModalAddRota() {
  const dispatch = useDispatch();
  const openModalAddRota = useSelector(
    (state) => state.modalState.modalAddRota
  );

  return (
    <div>
      <Modal
        isOpen={openModalAddRota}
        style={modalStyles}
        onRequestClose={() => dispatch(closeModal())}
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
              A tua rota foi adicionada com sucesso!
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalAddRota
