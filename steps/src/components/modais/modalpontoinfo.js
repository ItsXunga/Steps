import React from "react"
import Modal from "react-modal"
import "../../style/categoria_details.css"
import "../../style/modais_styles.css"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../redux/modalState"

function ModalPontoInfo(props) {
  const dispatch = useDispatch()
  const openModalPontoInfo = useSelector((state) => state.modalState.modalPontoInfo)

  const filterColor = props.rotas.filter(function (val) {
    return val._id === props.info.id
  })



  return (
    <div>
      <Modal
        isOpen={openModalPontoInfo}
        onRequestClose={() => {dispatch(closeModal())}}
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
            borderColor: filterColor[0].category.color
        }
      }}
        contentLabel="Modal Rota"
      >
        <div
          style={{
            display: "grid",
            overflow: "scroll",
          }}
        >
          <div>
            <div className="pontomodal">
              <button style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  margin: '5px',
                  borderRadius: '50%',
                  justifySelf: 'center',
                  border: '0.20px solid',
                  borderColor: filterColor[0].category.color,
                  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
                  backgroundColor: 'transparent',
                  alignSelf: 'start',
                  cursor: 'pointer',
              }}>info</button>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {props.info.pinName}
                </p>

                <p
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  {props.info.pinDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalPontoInfo
