import React from "react";
import { themeInstruções } from "../assets/gradient";
import instruções1Img from "../assets/img/instruções1.svg";
import instruçõesbg from "../assets/img/instruções_bg.svg";
import instruções_dot_selected from "../assets/img/instruções_dot_selected.png";
import instruções_dot from "../assets/img/instruções_dot.png";
import { Link } from "react-router-dom";

const Instruções1 = () => {
  return (
    <div style={themeInstruções}>
      <img
        style={{ position: "absolute", top: "20%", left: "10%" }}
        src={instruções1Img}
      ></img>
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "55%",
          left: "30%",
          fontSize: "25px",
          fontFamily: "ManropeBold",
        }}
      >
        Descobre rotas
      </h3>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "62.5%",
          left: "25%",
          fontSize: "18px",
          fontFamily: "ManropeRegular",
          width: "50%",
        }}
      >
        Explora rotas categorizadas por temas
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
          src={instruções_dot_selected}
        ></img>
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot}
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
          <Link to={"/intro2"} style={{textDecoration: "none", color: "#393C6A"}}>Next</Link>
        </h1>
      </div>
    </div>
  );
};

export default Instruções1;
