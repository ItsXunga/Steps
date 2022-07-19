import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterCreation, exitCreation } from "./redux/creationState";
import { Link } from "react-router-dom";
import menu_categorias from "../assets/img/menu_categorias.svg";
import menu_add_route from "../assets/img/menu_add_route.svg";
import menu_perfil from "../assets/img/menu_perfil.svg";
import menuClosed from "../assets/img/menu/hamburguerClosed.svg";
import menuOpened from "../assets/img/menu/hamburguerOpened.svg";
import { motion } from "framer-motion";
import { exitSingleRoute } from "./redux/singleRouteState";
import { routeID } from "./redux/routeID";
import { closeModal, openModalCancelar, openModalInfo } from "./redux/modalState";


const Nav = () => {
  const [menuImage, setMenuImg] = useState(menuClosed);

  const ManageModalState  = useSelector((state) => state.modalState.manageModalPin)
  const ManageModal = useRef()
  ManageModal.current = ManageModalState

  const ModalPinState = useSelector((state) => state.modalState.modalPin)
  const ModalPin = useRef()
  ModalPin.current = ModalPinState

  const ModalCancelarState = useSelector((state) => state.modalState.modalCancelar)
  const ModalCancelar = useRef()
  ModalCancelar.current = ModalCancelarState

  const ModalConfirmarRota = useSelector((state) => state.modalState.modalConfirmarRota)
  const ModalConfirmar = useRef()
  ModalConfirmar.current = ModalConfirmarRota

  const { mapState } = useSelector((state) => state.mapState);
  const { singleRouteState } = useSelector((state) => state.singleRouteState);
  const dispatch = useDispatch();

  function openMenu() {
    if (menuImage === menuClosed) {
      setMenuImg(menuOpened);
    } else {
      setMenuImg(menuClosed);
    }
  }

  return (
    <>
      {mapState ? (
        ManageModalState || ModalPinState || ModalCancelarState || ModalConfirmarRota  ? (
          ''
        ) : (
        <div
          className="backarrow"
          onClick={() => {
            dispatch(openModalCancelar())
          }}
        >
            <svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z"
                fill="#393C6A"
              />
            </svg>
        </div> )
      ) : (
        ""
      )}

      {/* quando vimos para a main page apos clicar numa rota especifica */}

      {singleRouteState === true ? (
        <div className="backarrow">
          <Link
            to={"/main"}
            onClick={() => {
              dispatch(exitSingleRoute());
              dispatch(exitCreation());
              dispatch(routeID(null));
              dispatch(closeModal());
            }}
          >
            <svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z"
                fill="#393C6A"
              />
            </svg>
          </Link>
        </div>
      ) : (
        ""
      )}

      {mapState === true ? (
        ""
      ) : (
        <div
          id="menu_bar"
          style={{
            position: "fixed",
            zIndex: "1",
            bottom: "0",
            width: "100vw",
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
          }}
        >
          <Link to="/categorias">
            {menuImage !== menuClosed ? (
              <motion.img
                animate={{
                  x: -200,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 2,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="categorias"
                src={menu_categorias}
              />
            ) : (
              <motion.img
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 2,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="categorias"
                src={menu_categorias}
              />
            )}
          </Link>

          <Link to="/main">
            {menuImage !== menuClosed ? (
              <motion.img
                animate={{
                  x: -135,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 3,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="nova rota"
                src={menu_add_route}
                onClick={() => {
                  dispatch(enterCreation());
                  setTimeout(() => {
                    dispatch(openModalInfo());
                  }, 2000);
                }}
                className="testeCursor"
              />
            ) : (
              <motion.img
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 3,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="nova rota"
                src={menu_add_route}
                onClick={() => {
                  dispatch(enterCreation());
                  dispatch(openModalInfo());
                }}
              />
            )}
          </Link>

          <Link to="/profile">
            {menuImage !== menuClosed ? (
              <motion.img
                animate={{
                  x: -70,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 4,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="perfil"
                src={menu_perfil}
              />
            ) : (
              <motion.img
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{
                  margin: "0rem .2rem",
                  zIndex: 4,
                  position: "fixed",
                  bottom: "0.8rem",
                }}
                alt="perfil"
                src={menu_perfil}
              />
            )}
          </Link>

          {menuImage !== menuClosed ? (
            <img
              style={{
                margin: "0rem .2rem",
                zIndex: 5,
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={openMenu}
              alt="menu"
              src={menuImage}
            />
          ) : (
            <img
              style={{
                margin: "0rem .2rem",
                zIndex: 5,
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={openMenu}
              alt="menu"
              src={menuImage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Nav;
