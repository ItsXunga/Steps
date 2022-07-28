import React from "react"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { modalStyles } from "../../style/modal_styles"
import { exitCreation } from "../redux/creationState"
import { closeModal } from "../redux/modalState"
import routeID from "../redux/routeID"
import { exitSingleRoute } from "../redux/singleRouteState"

const ModalSairNavegar = (props) => {
  const openModalSairNavegar = useSelector((state) => state.modalState.modalSairNavegar)
  const dispatch = useDispatch()

  return (
    <div>
      <Modal
        isOpen={openModalSairNavegar}
        style={modalStyles}
        contentLabel="Modal"
      >
        <div style={{ display: "flex", alignSelf: "center" }}>
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
                  className="orangeButton"
                  onClick={() => {dispatch(closeModal())}}
                >
                  Continuar
                </button>
              </div>
              <div style={{ padding: "0.5rem 1rem" }}>
              <Link
                to={"/main"}
                onClick={() => {
                  dispatch(exitSingleRoute());
                  dispatch(exitCreation());
                  dispatch(routeID(null));
                  dispatch(closeModal());

                  const removeInstructions = document.getElementById("instructions");
                  removeInstructions.classList.remove("instructions");
                }}
              >
                <button
                  className="blueButton"
                >
                  Terminar
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalSairNavegar;
