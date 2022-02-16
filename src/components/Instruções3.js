import React from "react";
import { themeInstruções } from "../assets/gradient";
import instruções3Img from "../assets/img/instruções3.svg";
import instruçõesbg from "../assets/img/intruções_top_bg.png";
import instruções_dot_selected from "../assets/img/instruções_dot_selected.png";
import instruções_dot_unselected from "../assets/img/instruções_dot_unselected.png";

const Instruções3 = () => {
  return (
    <div style={themeInstruções}>
      <img
        style={{ position: "absolute", top: "19%", left: "10%", zIndex: "1"}}
        src={instruções3Img}
      ></img>
      <h3
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "55%",
          left: "20%",
          fontSize: "25px",
          fontFamily: "ManropeBold",
        }}
      >
        Partilha as tuas rotas
      </h3>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          position: "absolute",
          top: "62.5%",
          left: "15%",
          fontSize: "18px",
          fontFamily: "ManropeRegular",
          width: "70%",
        }}
      >
        Interage com outros utilizadores para partilhares a tua experiência
      </p>
      <img
        src={instruçõesbg}
        style={{ position: "absolute", top: "0%", width: "100vw", zIndex: "0"}}
      ></img>
      <div style={{position: "absolute", zIndex: "2", bottom: "5%", left: "5%", width: "100vw", textAlign: "center"}}>
        <img style={{paddingRight: "1%", paddingLeft: "1%"}} src={instruções_dot_unselected}></img>
        <img style={{paddingRight: "1%", paddingLeft: "1%"}}src={instruções_dot_unselected}></img>
        <img style={{paddingRight: "1%", paddingLeft: "1%"}}src={instruções_dot_selected}></img>
        <h1 style={{fontFamily: "ManropeBold", fontSize: "19px", display: "inline-block", position: "relative", left: "20%"}}>Next</h1>
      </div>
    </div>
  );
};

export default Instruções3;
