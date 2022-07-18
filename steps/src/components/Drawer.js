import React, { useState, useRef } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../style/drawer_styles.css";
import { useSelector, useDispatch } from "react-redux";
import { openModalEliminar } from "./redux/modalState";
import ModalEliminar from "./modaleliminar";

const Drawertest = () => {
  const dispatch = useDispatch();
  const { pinStorage } = useSelector((state) => state.pinStorage);

  //Get pin storage elements
  const storage = useRef();
  storage.current = pinStorage;

  // Converting object from redux store to array to then map.
  const pinsArray = Object.entries(pinStorage).map((obj) => ({ ...obj }));

  const [isOpen, setIsOpen] = useState(false)
  const [idToBeDeleted, setIdToBeDeleted] = useState()

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="drawerstyle"
      >
        <div onClick={toggleDrawer} className="uparrow">
          <svg
            width="60"
            height="4"
            viewBox="0 0 60 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="4" rx="2" fill="#E3E4E5" />
          </svg>
        </div>

        {/* pontos*/}
        {pinsArray.map((value, index) => {
          return (
          <ul className="ul" key={index + 1}>
          <div className="pincard">
            <div style={{ display: "grid" }}>
              <div className="title">
                <h1
                  style={{
                    lineHeight: "1.5rem",
                    alignSelf: "center",
                    padding: "5px 0",
                    fontSize: "20px",
                    fontFamily: "manropeBold",
                  }}
                >
                  {value[1].name}
                </h1>
                <button className="buttonx">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.04671 18C0.754256 17.9995 0.475458 17.8827 0.278342 17.6779C0.0775912 17.4749 -0.0221627 17.2003 0.00414713 16.9231L0.259576 14.2615L12.0593 3.08372L15.7469 6.57716L3.95026 17.754L1.14159 17.996C1.10927 17.999 1.07695 18 1.04671 18ZM16.4829 5.87867L12.7964 2.38523L15.0077 0.289757C15.2033 0.10424 15.4686 0 15.7453 0C16.022 0 16.2874 0.10424 16.4829 0.289757L18.6942 2.38523C18.89 2.57054 19 2.822 19 3.08421C19 3.34643 18.89 3.59789 18.6942 3.7832L16.484 5.87768L16.4829 5.87867Z"
                      fill="#393C6A"
                    />
                  </svg>
                </button>
              </div>

              <p
                style={{
                  alignSelf: "center",
                  fontSize: "13px",
                  padding: "10px 0",
                }}
                onClick={toggleDrawer}
              >
                {value[1].desc}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button className="buttonx" onClick={() => {
                toggleDrawer();
                dispatch(openModalEliminar());
                setIdToBeDeleted(value[1].id)
                }}>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4527 0.875L9.99935 8.56125L2.54602 0.875L0.666016 2.81375L8.11935 10.5L0.666016 18.1863L2.54602 20.125L9.99935 12.4387L17.4527 20.125L19.3327 18.1863L11.8793 10.5L19.3327 2.81375L17.4527 0.875Z"
                    fill="#393C6A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ul>
        )})}
      </Drawer>

      <ModalEliminar id={idToBeDeleted}/>

      </>
  )
}

export default Drawertest
