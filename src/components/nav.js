import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_categorias from "../assets/img/menu_categorias.svg";
import menu_add_route from "../assets/img/menu_add_route.svg";
import menu_perfil from "../assets/img/menu_perfil.svg";
import menuClosed from "../assets/img/menu/hamburguerClosed.svg";
import menuOpened from "../assets/img/menu/hamburguerOpened.svg";

const Nav = (props) => {
  const [modoRota, setModoRota] = useState(false)

    props.checkModo(modoRota);

  const changeModoRota = () => {
      if (modoRota === false) {
          setModoRota(true);
      } else {
          setModoRota(false)
      }
  }

  return (
    <>
      <Link to="/categorias">
        <img
          style={{ margin: "0rem .2rem" }}
          alt="categorias"
          src={menu_categorias}
        />
      </Link>
      
        <img
          style={{ margin: "0rem .2rem" }}
          alt="nova rota"
          src={menu_add_route}
          onClick={() => changeModoRota()}
        />
      
      <Link to="/profile">
        <img style={{ margin: "0rem .2rem" }} alt="perfil" src={menu_perfil} />
      </Link>
      <img style={{ margin: "0rem .2rem" }} alt="menu" src={menuOpened} />
    </>
  );
};

export default Nav;
