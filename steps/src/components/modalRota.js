import React, { useState } from "react"
import Modal from "react-modal"
import { modalRota } from "../style/modal_styles"
import "../style/categoria_details.css"
import "../style/modais_styles.css"

function ModalRota(params) {
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
        style={modalRota}
        contentLabel="Modal Rota"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "6fr 1fr",
            gridColumnGap: "10px",
            overflow: "scroll",
          }}
        >
          <div className="textmodal">
            <h1
              style={{
                lineHeight: "2rem",
                alignSelf: "center",
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "manropeBold",
              }}
            >
              Nome da rota
            </h1>
            <p
              style={{
                alignSelf: "center",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Descriçao da rota Lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
            <div>
              <div className="pontomodal">
                <button className="buttonnumberpin">22</button>
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
          <div style={{ display: "grid" }}>
            <div className="">
              <svg
                width="25"
                height="26"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4527 0.875L9.99935 8.56125L2.54602 0.875L0.666016 2.81375L8.11935 10.5L0.666016 18.1863L2.54602 20.125L9.99935 12.4387L17.4527 20.125L19.3327 18.1863L11.8793 10.5L19.3327 2.81375L17.4527 0.875Z"
                  fill="#393C6A"
                />
              </svg>
            </div>
            <button className="buttonroute">
              <svg
                style={{ display: "block", margin: "auto" }}
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.94084 11.8392L0.960938 9.85925L7.06893 3.75126L1.95089 3.74136L1.95089 0.949708L11.8504 0.949707V10.8492L9.05872 10.8492L9.04883 5.73116L2.94084 11.8392Z"
                  fill="#393C6A"
                />
              </svg>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalRota
