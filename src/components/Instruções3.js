import React from "react";
import instruções3Img from "../assets/img/instruções3.svg";
import instruçõesbg from "../assets/img/intruções_top_bg.png";
import instruções_dot_selected from "../assets/img/instruções_dot_selected.png";
import instruções_dot_unselected from "../assets/img/instruções_dot_unselected.png";

const Instruções3 = () => {
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
          width: "100%",
          maxHeight: "25%",
          margin: "auto",
          paddingTop: "48.5%",
          position: "relative",
          zIndex: "2",
        }}
        src={instruções3Img}
      ></img>
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "25px",
          fontFamily: "ManropeBold",
          paddingTop: "6.5%",
        }}
      >
        Partilha as tuas rotas
      </h3>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "18px",
          fontFamily: "ManropeRegular",
          width: "70%",
          paddingTop: "5%",
        }}
      >
        Interage com outros utilizadores para partilhares a tua experiência
      </p>
      <img
        src={instruçõesbg}
        style={{
          position: "absolute",
          top: "0",
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
          src={instruções_dot_unselected}
        ></img>
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot_unselected}
        ></img>
        <img
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
          src={instruções_dot_selected}
        ></img>
        <h1
          style={{
            fontFamily: "ManropeBold",
            fontSize: "19px",
            display: "inline-block",
            paddingLeft: "20%",
          }}
        >
          Next
        </h1>
      </div>
    </div>
  );
};

export default Instruções3;
