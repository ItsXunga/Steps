import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../style/modal_styles";
import "../style/modais_styles.css";
import { closeModal } from "./redux/modalState";

function ModalPin() {

  const dispatch = useDispatch();
  const openModalPin = useSelector((state) => state.modalState.modalPin)

  return (
    <div>

      <Modal
        isOpen={openModalPin}
        onRequestClose={() => dispatch(closeModal())}
        style={modalStyles}
        contentLabel="Modal Pin"
      >
        <div>
          <h2
            style={{
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            Ponto 1
          </h2>

          <label className="label" for="password">
            Nome
          </label>
          <input className="inputpin" />
          <label className="label" for="password">
            Descrição
          </label>
          <textarea className="inputdescription" />

          <div style={{ margin: "1rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="orangeButton">
                Adicionar
              </button>
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="blueButton">
                Remover
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalPin
