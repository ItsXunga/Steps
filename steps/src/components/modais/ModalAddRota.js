import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import { exitCreation } from "../redux/creationState";
import { closeModal } from "../redux/modalState";
import { clearStorage } from "../redux/pinStorage";
import routeID from "../redux/routeID";
import { exitSingleRoute } from "../redux/singleRouteState";

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
            <img src={require("../../assets/img/pin.png")} alt="pin" />
            <p
              style={{
                padding: "1rem 2rem",
                fontSize: "18px",
                fontFamily: "ManropeRegular",
              }}
            >
              A tua rota foi adicionada com sucesso!
            </p>

            <div style={{ padding: "1rem 2rem" }}>
              <button
                onClick={() => {
                  dispatch(clearStorage());
                  dispatch(closeModal())
                  dispatch(exitSingleRoute());
                  dispatch(exitCreation());
                  dispatch(routeID(null));

                }}
                className="orangeButton"
              >
                Prosseguir
              </button>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalAddRota
