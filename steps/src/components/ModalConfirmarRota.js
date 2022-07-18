import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../style/modal_styles";
import "../style/modais_styles.css";
import { closeModal } from "./redux/modalState";
import { addPin, delPin } from "./redux/pinStorage";
import { incrementRefresh } from "./redux/RefreshState";
import Select from "react-select";

const ModalConfirmarRota = (props) => {
  const dispatch = useDispatch();
  //const openModalConfirmarRota = useSelector((state) => state.modalState.modalPin);
  const openModalConfirmarRota = true;
  // input data
  const [textArea, setTextArea] = useState("");
  const [nameArea, setNameArea] = useState("");

  // update state based on user input
  const textAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  const nameAreaChange = (e) => {
    setNameArea(e.target.value);
  };

  const handleData = () => {
    dispatch(
      addPin({
        //add information
        id: props.data.id,
        lat: props.data.lat,
        lng: props.data.lng,
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

  const handleReturn = () => {
    dispatch(closeModal());
  };

  const options = [
    { value: "categoria 1", label: "categoria 1" },
    { value: "categoria 2", label: "categoria 2" },
    { value: "categoria 3", label: "categoria 3" },
  ];

  return (
    <div>
      <Modal
        isOpen={openModalConfirmarRota}
        style={modalStyles}
        contentLabel="Modal Confirmar Rota"
      >
        <div>
          <h2
            style={{
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            Completar criação de rota
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
          <label className="label" for="password">
            Categoria
          </label>
          <Select placeholder={<div>Seleciona uma categoria</div>} className="inputselection" options={options} />
          <div style={{ margin: "1rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="orangeButton" onClick={handleData}>
                Adicionar
              </button>
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="blueButton" onClick={handleReturn}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalConfirmarRota;
