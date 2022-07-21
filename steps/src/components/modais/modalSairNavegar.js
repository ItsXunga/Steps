import React from "react"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import { modalStyles } from "../../style/modal_styles"
import { closeModal } from "../redux/modalState"
import { delPin } from "../redux/pinStorage"

const ModalSairNavegar = (props) => {
  // const openModalEliminar = useSelector(
  //(state) => state.modalState.modalEliminar)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(delPin(props.id))
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        isOpen={openModalEliminar}
        style={modalStyles}
        contentLabel="Modal"
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
              Pretende terminar a navegação?
            </p>

            <div style={{ margin: "1rem 0" }}>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="orangeButton" //onClick={handleDelete}
                >
                  Continuar
                </button>
              </div>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="blueButton"
                  onClick={() => {
                    dispatch(closeModal())
                  }}
                >
                  Terminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalSairNavegar
