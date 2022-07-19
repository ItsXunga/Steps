import React from "react"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import { modalStyles } from "../style/modal_styles"
import { closeModal } from "./redux/modalState"
import { delPin } from "./redux/pinStorage"

const ModalEliminar = (props) => {
  const openModalEliminar = useSelector((state) => state.modalState.modalEliminar);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delPin(props.id))
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        isOpen={openModalEliminar}
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
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </div>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="blueButton"
                  onClick={() => {
                    dispatch(closeModal())
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalEliminar
