import React from "react";
import instruções3Img from "../assets/img/instruções3.svg";
import instruçõesbg from "../assets/img/intruções_top_bg.png";
import intro3_dots from "../assets/img/intro3_dots.svg";
import "../style/OnBoarding.css";

const Instruções3 = () => {
  return (
    <div
      className="introdiv"
      style={{
        backgroundImage: `url(${instruçõesbg})`,
        backgroundPosition: "100% 0%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          height: "60vh",
          justifyContent: "space-evenly",
          padding: "2.75rem",
        }}
      >
        <img
          style={{
            width: "-webkit-fill-available",
            height: "auto",
          }}
          src={instruções3Img}
        ></img>
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "ManropeBold",
          }}
        >
          Partilha as tuas rotas
        </h3>
        <div>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            Interage com outros utilizadores
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            para partilhares a tua experiência
          </p>
        </div>
      </div>
      <div
        style={{
          zIndex: "2",
          width: "100vw",
          textAlign: "center",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <img src={intro3_dots}></img>
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
