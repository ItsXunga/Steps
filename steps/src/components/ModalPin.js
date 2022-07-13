import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../style/modal_styles";
import "../style/modais_styles.css";
import { closeModal } from "./redux/modalState";
import { addPinInfo, delPin } from "./redux/pinStorage";
import { incrementRefresh } from "./redux/RefreshState";

function ModalPin() {
  const dispatch = useDispatch();
  const storageId = useSelector((state) => state.pinStorage.pinStorage);
  const openModalPin = useSelector((state) => state.modalState.modalPin);

  const Id = useRef();
  Id.current = storageId;

  //Get last element's id in pins object
  const PinId = Object.keys(storageId).pop();

  const [textArea, setTextArea] = useState("");
  const [nameArea, setNameArea] = useState("");

  const textAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  const nameAreaChange = (e) => {
    setNameArea(e.target.value);
  };

  const handleData = () => {
    dispatch(
      addPinInfo({
        //send Id to add to correct obect element
        id: PinId,
        name: nameArea,
        desc: textArea,
      })
    );

    // ask the app to refresh when a point is added
    dispatch(incrementRefresh());

    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  };

  const handlePinDelete = () => {
    dispatch(delPin(PinId));
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal isOpen={openModalPin} style={modalStyles} contentLabel="Modal Pin">
        <div>
          <h2
            style={{
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            Novo Ponto
          </h2>

          <label className="label" for="password">
            Nome
          </label>
          <input className="inputpin" type="text" onChange={nameAreaChange} />
          <label className="label" for="password">
            Descrição
          </label>
          <textarea
            type="text"
            className="inputdescription"
            onChange={textAreaChange}
          />

          <div style={{ margin: "1rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="orangeButton" onClick={handleData}>
                Adicionar
              </button>
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="blueButton" onClick={handlePinDelete}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPin;
