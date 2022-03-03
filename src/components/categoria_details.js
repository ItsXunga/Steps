import React, { useState } from "react";
import { allcolors } from "../style/global_styles";
import "../style/categoria_details.css";
import { PinColor } from "../assets/img/profile/pin";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Rotas from "../components/data/routes.json";
import { Link, useLocation } from "react-router-dom";

export default function CategoriaDetails() {
  const name = useLocation();
  const { category } = name.state;
  const routeArray = Rotas.filter(function (value) {
    return value.category === category;
  });

   return (
    <div className="background">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <Link to={"/categorias"}>
          <div className="backarrow">
            <svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z"
                fill="#393C6A"
              />
            </svg>
          </div>
        </Link>
        <h1
          style={{
            color: allcolors.colors.darkblue,
            fontSize: "24px",
          }}
        >
          {category}
        </h1>
      </div>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {routeArray.map((item) => (
            <Item content={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.li
      layout
      style={{ boxShadow: "0 2px 7px 0px #00000033" }}
      initial={{ borderRadius: 25 }}
      id='#motionDiv'
    >
      <motion.div layout className="categoriacard">
        <div style={{ display: "grid" }} onClick={toggleOpen}>
          <h1
            style={{
              lineHeight: "1.5rem",
              alignSelf: "center",
              fontSize: "20px",
              fontFamily: "manropeBold",
            }}
          >
            {props.content.name}
          </h1>
          <p style={{ alignSelf: "center", fontSize: "12px" }}>{props.content.desc}</p>
          <p style={{ alignSelf: "center", fontSize: "12px"}}> <span style={{fontFamily: 'ManropeBold'}}>Criador:</span> {props.content.creator}</p>
        </div>
        <div style={{ display: "grid" }}>
          <button className="buttonfav">
            <svg
              style={{ display: "block", margin: "auto" }}
              width="16"
              height="16"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99871 12.125C6.56871 11.7675 6.08271 11.3956 5.56871 11H5.56205C3.75205 9.61247 1.70071 8.04247 0.794713 6.16122C0.497058 5.5623 0.339316 4.91068 0.332039 4.24997C0.330051 3.3434 0.717894 2.47434 1.40792 1.8392C2.09794 1.20406 3.0319 0.856467 3.99871 0.87497C4.7858 0.876136 5.55594 1.0894 6.21738 1.48935C6.50803 1.6662 6.77099 1.88013 6.99871 2.12497C7.2277 1.88109 7.49074 1.66729 7.78071 1.48935C8.44187 1.08932 9.21182 0.876044 9.99871 0.87497C10.9655 0.856467 11.8995 1.20406 12.5895 1.8392C13.2795 2.47434 13.6674 3.3434 13.6654 4.24997C13.6586 4.91173 13.5008 5.56447 13.2027 6.16435C12.2967 8.0456 10.246 9.61497 8.43605 11L8.42938 11.005C7.91471 11.3981 7.42938 11.77 6.99938 12.13L6.99871 12.125ZM3.99871 2.12497C3.37772 2.11768 2.77876 2.3405 2.33205 2.74497C1.90164 3.14132 1.66108 3.68437 1.66532 4.24997C1.67293 4.73153 1.78926 5.20613 2.00671 5.64247C2.43439 6.45416 3.01145 7.18875 3.71138 7.81247C4.37205 8.43747 5.13205 9.04247 5.78938 9.55122C5.97138 9.69185 6.15671 9.83372 6.34205 9.9756L6.45871 10.065C6.63671 10.2012 6.82071 10.3425 6.99871 10.4812L7.00738 10.4737L7.01138 10.4706H7.01538L7.02138 10.4662H7.02471H7.02805L7.04005 10.4568L7.06738 10.4362L7.07205 10.4325L7.07938 10.4275H7.08338L7.08938 10.4225L7.53205 10.0818L7.64805 9.99247C7.83538 9.84935 8.02071 9.70747 8.20271 9.56685C8.86005 9.0581 9.62071 8.45372 10.2814 7.8256C10.9814 7.2022 11.5585 6.46779 11.986 5.65622C12.2074 5.2161 12.3254 4.73654 12.3321 4.24997C12.3348 3.68612 12.0944 3.14515 11.6654 2.74997C11.2195 2.34367 10.6205 2.11902 9.99871 2.12497C9.23999 2.11893 8.51467 2.41708 8.00538 2.94435L6.99871 4.03185L5.99205 2.94435C5.48276 2.41708 4.75743 2.11893 3.99871 2.12497Z"
                fill="#393C6A"
              />
            </svg>
          </button>
          {isOpen === true ? (
            <motion.button
              animate={{
                y: 125,
                transition: {
                  ease: "easeInOut",
                  duration: 0.35,
                },
              }}
              className="buttonroute"
            >
              <svg
                style={{ display: "block", margin: "auto" }}
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.94084 11.8392L0.960938 9.85925L7.06893 3.75126L1.95089 3.74136L1.95089 0.949708L11.8504 0.949707V10.8492L9.05872 10.8492L9.04883 5.73116L2.94084 11.8392Z"
                  fill="#393C6A"
                />
              </svg>
            </motion.button>
          ) : (
            <motion.button
              animate={{
                y: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 0.85,
                },
              }}
              className="buttonroute"
            >
              <svg
                style={{ display: "block", margin: "auto" }}
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.94084 11.8392L0.960938 9.85925L7.06893 3.75126L1.95089 3.74136L1.95089 0.949708L11.8504 0.949707V10.8492L9.05872 10.8492L9.04883 5.73116L2.94084 11.8392Z"
                  fill="#393C6A"
                />
              </svg>
            </motion.button>
          )}
        </div>
      </motion.div>
      <AnimatePresence>{isOpen && <Content content={props.content} />}</AnimatePresence>
    </motion.li>
  );
}

function Content(props) {

  const CheckPin = (start, end, name) => {
    if (start === true && end === false) {
      return (
        <div
          style={{
            marginTop: "0",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#5F61F3" />
          <p>{name}</p>
        </div>
      );
    } else if (start === false && end === false) {
      return (
        <div
          style={{
            marginLeft: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#8283F5" />
          <p>{name}</p>
        </div>
      );
    } else {
      return (
        <div
          style={{
            marginLeft: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#A5A6F6" />
          <p>{name}</p>
        </div>
      );
    }
  };

  console.log(props.content);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="categoriacardopen"
    >
         {props.content.pins.map((pin) => (
            CheckPin(pin.start, pin.end, pin.pinName)
         ))}
        
    </motion.div>
  );
}
