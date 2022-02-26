import React from "react";
import instruções1Img from "../assets/img/instruções1.svg";
import instruçõesbg from "../assets/img/instruções_bg.svg";
import instruções_dot_selected from "../assets/img/instruções_dot_selected.png";
import instruções_dot from "../assets/img/instruções_dot.png";
import { Link } from "react-router-dom";

const Instruções1 = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        width: "100vw",
        height: "100vh",
        color: "#393C6A",
        textAlign: "center",
      }}
    >
      <img
        style={{
          width: "auto",
          maxHeight: "25%",
          margin: "auto",
          paddingTop: "40%",
        }}
        src={instruções1Img}
      ></img>
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "25px",
          fontFamily: "ManropeBold",
          paddingTop: "15%",
        }}
      >
        Descobre rotas
      </h3>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "18px",
          fontFamily: "ManropeRegular",
          width: "50%",
          paddingTop: "5%",
        }}
      >
        Explora rotas<br></br>categorizadas por temas
      </p>
      <img
        src={instruçõesbg}
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "auto",
          zIndex: "1",
        }}
      ></img>
      <div
        style={{
          zIndex: "2",
          width: "100vw",
          textAlign: "center",
          position: "absolute",
          bottom: "5%",
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
            paddingLeft: "20%",
          }}
        >
          <Link
            to={"/intro2"}
            style={{ textDecoration: "none", color: "#393C6A" }}
          >
            Next
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Instruções1;
