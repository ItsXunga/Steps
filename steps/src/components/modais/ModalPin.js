import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalStyles } from "../../style/modal_styles";
import { closeModal } from "../redux/modalState";
import { addPin, delPin } from "../redux/pinStorage";

const ModalPin = (props) => {
  const dispatch = useDispatch()
  const openModalPin = useSelector((state) => state.modalState.modalPin)

  // input data
  const [textArea, setTextArea] = useState("")
  const [nameArea, setNameArea] = useState("")

  // update state based on user input
  const textAreaChange = (e) => {
    setTextArea(e.target.value)
  }

  const nameAreaChange = (e) => {
    setNameArea(e.target.value)
  }

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
      
    setTimeout(() => {
      dispatch(closeModal())
    }, 100)
  }

  const handleReturn = () => {
    dispatch(closeModal())
  }

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
              <button className="blueButton" onClick={handleReturn}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalPin
