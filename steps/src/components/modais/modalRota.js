import React, { useState } from "react"
import Modal from "react-modal"
import "../style/categoria_details.css"
import "../style/modais_styles.css"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../redux/modalState";
import { routeID } from "../redux/routeID"
import { enterSingleRoute } from "../redux/singleRouteState"

function ModalRota(props) {
  const dispatch = useDispatch()
  const openModalRota = useSelector((state) => state.modalState.modalRota)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        isOpen={openModalRota}
        style={{
          content: {
            inset: "30px",
            background: "white",
            boxShadow: "2px 2px 7px 0px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            padding: "2rem",
            maxHeight: "90%",
            height: "fit-content",
            margin: "auto",
            textAlign: "center",
            overflow: "auto",
            border: "1px solid",
            borderColor: props.clicked.color
          },
        }}
        contentLabel="Modal Rota"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "6fr 1fr",
            gridColumnGap: "10px",
            overflow: "scroll",
          }}
        >
          <div className="textmodal">
          <p
              style={{
                alignSelf: "center",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
             <b>{props.clicked.creator}</b>
            </p>
            <h1
              style={{
                lineHeight: "1.5rem",
                alignSelf: "center",
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "manropeBold",
              }}
            >
              {props.clicked.RouteName}
            </h1>
            <p
              style={{
                alignSelf: "center",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
             {props.clicked.RouteDesc}
            </p>

            {props.clicked.pins[0].map((value, index) => {
              return (
            <div key={index + 1}>
              <div className="pontomodal">
                <button style={{
                    width: '2.2rem',
                    height: '2.2rem',
                    margin: '5px',
                    borderRadius: '50%',
                    justifySelf: 'center',
                    border: '0.20px solid',
                    borderColor: props.clicked.color,
                    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
                    backgroundColor: 'transparent',
                    alignSelf: 'start',
                    cursor: 'pointer',
                }}>{index + 1}</button>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.5rem"
                    }}
                  >
                    {value.pinName}
                  </p>

                  <p
                    style={{
                      lineHeight: "1.5rem",
                      fontSize: "14px",
                    }}
                  >
                    {value.pinDesc}
                  </p>
                </div>
              </div>
            </div>
              )
            })}
            
          </div>
          <div style={{ display: "grid" }}>
            <div onClick={handleClose}>
              <svg
                width="25"
                height="26"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4527 0.875L9.99935 8.56125L2.54602 0.875L0.666016 2.81375L8.11935 10.5L0.666016 18.1863L2.54602 20.125L9.99935 12.4387L17.4527 20.125L19.3327 18.1863L11.8793 10.5L19.3327 2.81375L17.4527 0.875Z"
                  fill="#393C6A"
                />
              </svg>
            </div>

            <button className="buttonroute" onClick={() => {
              dispatch(routeID(props.clicked.id))
              dispatch(closeModal())
              dispatch(enterSingleRoute());
              }}>
              <svg
                style={{ display: "block", margin: "auto" }}
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.94084 11.8392L0.960938 9.85925L7.06893 3.75126L1.95089 3.74136L1.95089 0.949708L11.8504 0.949707V10.8492L9.05872 10.8492L9.04883 5.73116L2.94084 11.8392Z"
                  fill="#393C6A"
                />
              </svg>
            </button>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalRota
