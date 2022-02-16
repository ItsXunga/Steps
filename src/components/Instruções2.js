import React from "react";
import { themeInstruções } from "../assets/gradient";
import instruções2Img from "../assets/img/instruções2.svg";
import instruçõesbg from "../assets/img/instruções_bg.svg";
import instruções_dot_selected from "../assets/img/instruções_dot_selected.png";
import instruções_dot from "../assets/img/instruções_dot.png";
import { Link } from "react-router-dom";

const Instruções2 = () => {
  return (
    <div style={themeInstruções}>
      <img
        style={{ position: "absolute", top: "20%", left: "10%" }}
        src={instruções2Img}
      ></img>
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "55%",
          left: "25%",
          fontSize: "25px",
          fontFamily: "ManropeBold",
        }}
      >
        Cria as tuas rotas
      </h3>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "62.5%",
          left: "10%",
          fontSize: "18px",
          fontFamily: "ManropeRegular",
          width: "80%",
        }}
      >
        Rotas personalizadas para dar a conhecer os teus locais favoritos
      </p>
      <img
        src={instruçõesbg}
        style={{
          position: "absolute",
          bottom: "0%",
          width: "100vw",
          zIndex: "1",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          zIndex: "2",
          bottom: "5%",
          left: "5%",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot}
        ></img>
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot_selected}
        ></img>
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot}
        ></img>
        <h1
          style={{
            fontFamily: "ManropeBold",
            fontSize: "19px",
            display: "inline-block",
            position: "relative",
            left: "20%",
          }}
        >
          <Link
            to={"/intro3"}
            style={{ textDecoration: "none", color: "#393C6A" }}
          >
            Next
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Instruções2;
