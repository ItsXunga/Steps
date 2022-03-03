import React, { useState } from "react"
import Modal from "react-modal"
import { modalStyles, modalPinInfo } from "../style/modal_styles"
import "../style/modais_styles.css"

function ModalPin(params) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalPinInfo}
        contentLabel="Example Modal"
      >
        <div>
          <input className="inputpin" />
          <input className="inputdescription" />
          <div style={{ margin: "1.5rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button onClick={closeModal} className="orangeButton">
                Adicionar
              </button>
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button onClick={closeModal} className="blueButton">
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
