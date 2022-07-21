import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import "../style/modais_styles.css";
import { closeModal, openModalAddRota } from "../redux/modalState";
import Select from "react-select";
import AuthService from "../../services/auth.service";
import mongoose from 'mongoose';
import axios from "axios";

const ModalConfirmarRota = (props) => {
  //Current user 
  const retrievedObject = AuthService.getCurrentUser();
  const currentUser = JSON.parse(retrievedObject).user._id;


  const dispatch = useDispatch();
  const openModalConfirmarRota = useSelector((state) => state.modalState.modalConfirmarRota);
  const { pinStorage } = useSelector((state) => state.pinStorage);

  //Get pin storage elements
  const storage = useRef();
  storage.current = pinStorage;

  // input data
  const [textArea, setTextArea] = useState();
  const [nameArea, setNameArea] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null)

  // update state based on user input
  const textAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  const nameAreaChange = (e) => {
    setNameArea(e.target.value);
  };

  const pinsArray = Object.entries(pinStorage).map((obj) => ({ ...obj }));

  const handleData = () => {
    if (textArea !== undefined && nameArea !== undefined) {
      axios.post("https://steps-ua.herokuapp.com/circuits/", {
        name: nameArea,
        userID: currentUser,
        categoryID: selectedCategory.id,
        desc: textArea,
        pins: pinsArray.map((value) => ({
          pinName: value[1].name,
          pinDesc: value[1].desc,
          lat: JSON.stringify(value[1].lat),
          long: JSON.stringify(value[1].lng)
    }))
      })
    }

    setTimeout(() => {
      dispatch(closeModal());
    }, 100);

    setTimeout(() => {
      dispatch(openModalAddRota())
    }, 500);
  };

  const handleReturn = () => {
    dispatch(closeModal());
  };

  const options = props.categorias.map((val) => (
    {value: val.category, label: val.category, id: val._id}
  ))

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
            Completa a criação da tua rota
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
          <Select placeholder={<div>Seleciona uma categoria</div>} className="inputselection" options={options} onChange={setSelectedCategory} defaultValue={selectedCategory}/>
          <div style={{ margin: "1rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>
              <button className="orangeButton" onClick={handleData}>
                Finalizar
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
