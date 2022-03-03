import React from "react"
import intro2_dots from "../assets/img/intro2_dots.svg"
import { Link } from "react-router-dom"
import "../style/OnBoarding.css"

const Instruções2 = () => {
  return (
    <div className="introdiv">
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          height: "65vh",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src={require("../assets/img/instrucoes/instrucoes2.png")}
          alt="grafismo"
        />
        <div style={{ marginTop: "3rem" }}>
          <h3
            style={{
              fontSize: "25px",
              fontFamily: "ManropeBold",
            }}
          >
            Cria as tuas rotas
          </h3>
          <div style={{ marginTop: "1.5rem" }}>
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
      </div>
      <img
        style={{
          width: "100vw",
          height: "auto",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        src={require("../assets/img/instrucoes/instrucoesBG.png")}
        alt="background shape"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15vh",
        }}
      >
        <h1
          style={{
            fontFamily: "ManropeBold",
            fontSize: "19px",
            display: "inline-block",
          }}
        >
          Next
        </h1>
        <img style={{ zIndex: 1 }} src={intro2_dots} alt="asset" />
        <div style={{ display: "flex" }}>
          <h1
            style={{
              fontFamily: "ManropeBold",
              fontSize: "19px",
              display: "inline-block",
              zIndex: 1,
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
    </div>
  )
}

export default Instruções2
