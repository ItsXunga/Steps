import React from "react";
import instruções2Img from "../assets/img/instruções2.svg";
import instruçõesbg from "../assets/img/instruções_bg.svg";
import intro2_dots from "../assets/img/intro2_dots.svg";
import { Link } from "react-router-dom";
import "../style/OnBoarding.css";

const Instruções2 = () => {
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
          src={instruções2Img}
        ></img>
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "ManropeBold",
          }}
        >
          Cria as tuas rotas
        </h3>
        <div>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            Rotas personalizadas para dar a
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "ManropeRegular",
            }}
          >
            conhecer os teus locais favoritos
          </p>
        </div>
      </div>
      <div>
        <img src={intro2_dots}></img>
        <h1
          style={{
            fontFamily: "ManropeBold",
            fontSize: "19px",
            display: "inline-block",
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
