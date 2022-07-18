import React from "react"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import { modalStyles } from "../style/modal_styles"
import { closeModal } from "./redux/modalState"

function ModalCancelar() {
  // const openModalInfo = useSelector((state) => state.modalState.modalInfo);
  // const dispatch = useDispatch();

  return (
    <div>
      <div
        // isOpen={openModalInfo}
        // onRequestClose={() => dispatch(closeModal())}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex" }}>
          <div>
            <p
              style={{
                padding: "1rem 2rem",
                fontSize: "18px",
                fontFamily: "ManropeRegular",
              }}
            >
              Deseja eliminar este ponto?
            </p>

            <div style={{ margin: "1rem 0" }}>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="orangeButton"
                  // onClick={handleData}
                >
                  Eliminar
                </button>
              </div>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="blueButton"
                  // onClick={handleReturn}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCancelar
