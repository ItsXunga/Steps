import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_categorias from "../assets/img/menu_categorias.svg";
import menu_add_route from "../assets/img/menu_add_route.svg";
import menu_perfil from "../assets/img/menu_perfil.svg";
import menuClosed from "../assets/img/menu/hamburguerClosed.svg";
import menuOpened from "../assets/img/menu/hamburguerOpened.svg";
import { motion } from "framer-motion";

const Nav = (props) => {
  const [modoRota, setModoRota] = useState(false);
  const [menuImage, setMenuImg] = useState(menuClosed);

  props.checkModo(modoRota);

  function openMenu() {
    if (menuImage === menuClosed) {
      setMenuImg(menuOpened);
    } else {
      setMenuImg(menuClosed);
    }
  }

  const changeModoRota = () => {
    if (modoRota === false) {
      setModoRota(true);
    } else {
      setModoRota(false);
    }
  };

  return (
    <>
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
            onClick={() => changeModoRota()}
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
            onClick={() => changeModoRota()}
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
    </>
  );
};

export default Nav;
