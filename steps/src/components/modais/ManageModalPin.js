import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import "../../style/modais_styles.css";
import { closeModal } from "../redux/modalState";
import {addPin, delPin } from "../redux/pinStorage";

const ManageModalPin = (props)  => {
  const dispatch = useDispatch();
  const openManageModalPin = useSelector((state) => state.modalState.manageModalPin);

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
   if (nameArea === '' && textArea !== '') {
        dispatch(
            addPin({
                id: props.clicked.id,
                lat: props.clicked.lat,
                lng: props.clicked.lng,
                name: props.clicked.name,
                desc: textArea
            })
        )
        setTextArea('')
   }

   if (nameArea !== '' && textArea === '') {
        dispatch(
            addPin({
                id: props.clicked.id,
                lat: props.clicked.lat,
                lng: props.clicked.lng,
                name: nameArea,
                desc: props.clicked.desc
            })
        )
        setNameArea('')
   }

    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  };

  // const handlePinDelete = () => {
  //   dispatch(delPin(PinId));
  //   dispatch(closeModal());
  // };

  const handleReturn = () => {
    dispatch(closeModal())
  }


  return (
    <div>
      <Modal isOpen={openManageModalPin} style={modalStyles} contentLabel="Modal Pin">
        <div>
          <h2
            style={{
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            {props.clicked.name}
          </h2>
          <label className="label" for="password">
            Nome
          </label>
                <input
                    placeholder={props.clicked.name} 
                    className="inputpin" 
                    type="text" 
                    onChange={nameAreaChange} />   
          <label className="label" for="password">
            Descrição
          </label>
                <textarea
                placeholder={props.clicked.desc}
                type="text"
                className="inputdescription"
                onChange={textAreaChange}
              />
          <div style={{ margin: "1rem 0" }}>
            <div style={{ padding: "0.5rem 1rem" }}>

              <button className="orangeButton" onClick={handleData}>
                Atualizar
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
}

export default ManageModalPin;