import React, { useState } from "react"
import Modal from "react-modal"
import { modalPonto } from "../style/modal_styles"
import "../style/categoria_details.css"
import "../style/modais_styles.css"

function ModalPontoInfo(params) {
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
        style={modalPonto}
        contentLabel="Modal Rota"
      >
        <div
          style={{
            display: "grid",
            overflow: "scroll",
          }}
        >
          <div>
            <div className="pontomodal">
              <button className="buttonnumberpin">1</button>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  PONontinho
                </p>

                <p
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  descriçao do pontinho içao do pontiniçao do pontin
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalPontoInfo
