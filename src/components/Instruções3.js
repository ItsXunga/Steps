import React from "react";
import { Link } from "react-router-dom";
import intro3_dots from "../assets/img/intro3_dots.svg";
import "../style/OnBoarding.css";

const Instruções3 = () => {
  return (
    <div
      className="introdiv3"
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          height: "20vh",
        }}
      >
        <img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
          }}
         src={require('../assets/img/instrucoes/instrucoes3BG.png')}
         alt='ilustracao'
        />
        <div>
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "ManropeBold",
          }}
        >
          Partilha as tuas rotas
        </h3>
        <div style={{marginTop: '3rem'}}>
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
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '13vh', marginBottom: '1.25rem'}}>
           <h1
            style={{
              fontFamily: "ManropeBold",
              fontSize: "19px",
              display: "inline-block",
              color: 'white'
            }}
          >
            Next
          </h1>
          <img style={{zIndex: 1}} src={intro3_dots}  alt='asset'/>
          <div style={{display: 'flex'}}>
          <h1
            style={{
              fontFamily: "ManropeBold",
              fontSize: "19px",
              display: "inline-block",
              zIndex: 1,
              
            }}
          >
            <Link
              to={"/main"}
              style={{ textDecoration: "none", color: "#393C6A" }}
            >
              Next
            </Link>
          </h1>
          </div>
          </div>
    </div>
  );
};

export default Instruções3;
