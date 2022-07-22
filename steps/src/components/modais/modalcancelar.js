import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import { closeModal } from "../redux/modalState";
import { clearStorage } from "../redux/pinStorage";
import { routeID } from "../redux/routeID";
import { exitCreation } from "../redux/creationState";
import { exitSingleRoute } from "../redux/singleRouteState";

function ModalCancelar() {
  const openModalCancelar = useSelector((state) => state.modalState.modalCancelar);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        isOpen={openModalCancelar}
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
              Desejas sair? Irás perder todas as alterações.
            </p>

            <div style={{ margin: "1rem 0" }}>
              <div style={{ padding: "0.5rem 1rem" }}>
              <Link to={"/main"}>
                <button
                  className="orangeButton"
                  onClick={() => {
                    dispatch(clearStorage());
                    dispatch(exitCreation());
                    dispatch(routeID(null));
                    dispatch(closeModal());
                    dispatch(exitSingleRoute());
                  }}
                >
                  Sair
                </button>
              </Link>
              </div>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button
                  className="blueButton"
                  onClick={() => dispatch(closeModal())}
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

export default ModalCancelar
