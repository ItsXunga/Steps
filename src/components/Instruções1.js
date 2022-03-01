import React from "react";
import instruções1Img from "../assets/img/instruções1.svg";
import instruçõesbg from "../assets/img/instruções_bg.svg";
import intro1_dots from "../assets/img/intro1_dots.svg";
import { Link } from "react-router-dom";
import "../style/OnBoarding.css";

const Instruções1 = () => {
  return (
    <div
      className="introdiv"
      style={{
        backgroundImage: `url(${instruçõesbg})`,
        backgroundPosition: "100% 100%",
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
          }}
          src={instruções1Img}
        ></img>
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "ManropeBold",
          }}
        >
          Descobre rotas
        </h3>
        <div>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            Explora rotas
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            categorizadas por temas
          </p>
        </div>
      </div>
      <div>
        <img src={intro1_dots}></img>
        <h1
          style={{
            fontFamily: "ManropeBold",
            fontSize: "19px",
            display: "inline-block",
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
