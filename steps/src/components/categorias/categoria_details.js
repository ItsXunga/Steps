import React, { useState } from "react";
import { allcolors } from "../../style/global_styles";
import "../../style/categoria_details.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { enterSingleRoute } from "../redux/singleRouteState";
import { routeID } from "../redux/routeID";
import { useDispatch } from "react-redux";

export default function CategoriaDetails() {
  const name = useLocation();
  const { category } = name.state;
  const { rotas } = name.state;

  let filterFavorites = [];

  //Rotas favoritas do currentUser
  const { rotasFavoritas } = name.state;

  console.log(rotasFavoritas.favorite_routes);

  //Filtro de categorias
  const routeArray = rotas.filter(function (value) {
    return value.category.category === category;
  });

  console.log(routeArray, "categorias");

  const filterDisplay = routeArray.filter(function (value) {
    return routeArray._id === rotasFavoritas.favorite_routes;
  });
  

  console.log(filterDisplay);

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
        <motion.ul className="ul" layout initial={{ borderRadius: 25 }}>
          {routeArray.map((item) => (
            <Item content={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item(props) {
  const name = useLocation();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [isFavorite, setIsFavorite] = useState();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleFav = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.li
      className="li"
      layout
      style={{ boxShadow: "0 2px 7px 0px #00000033" }}
      initial={{ borderRadius: 25 }}
      id="#motionDiv"
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
          <p style={{ alignSelf: "center", fontSize: "12px" }}>
            {props.content.desc}
          </p>
          <p style={{ alignSelf: "center", fontSize: "12px" }}>
            {" "}
            <span style={{ fontFamily: "ManropeBold" }}>Criador:</span>{" "}
            {props.content.creator.name}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <button className="buttonfav" onClick={toggleFav}>
            <svg
              style={{ display: "block", margin: "auto" }}
              width="16"
              height="16"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  !isFavorite
                    ? "M12 21C11.355 20.428 10.626 19.833 9.85502 19.2H9.84502C7.13002 16.98 4.05302 14.468 2.69402 11.458C2.24754 10.4997 2.01093 9.45712 2.00001 8.4C1.99703 6.94948 2.57879 5.55898 3.61383 4.54276C4.64887 3.52654 6.04981 2.97039 7.50002 3C8.68065 3.00186 9.83586 3.34308 10.828 3.983C11.264 4.26596 11.6584 4.60825 12 5C12.3435 4.60979 12.7381 4.2677 13.173 3.983C14.1648 3.34295 15.3197 3.00171 16.5 3C17.9502 2.97039 19.3512 3.52654 20.3862 4.54276C21.4213 5.55898 22.003 6.94948 22 8.4C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.50002 5C6.56853 4.98834 5.6701 5.34484 5.00002 5.992C4.35441 6.62616 3.99358 7.49504 3.99994 8.4C4.01135 9.1705 4.18585 9.92985 4.51202 10.628C5.15353 11.9267 6.01913 13.102 7.06902 14.1C8.06002 15.1 9.20002 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.039H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.9741 13.1236 18.8397 11.9485 19.481 10.65C19.8131 9.9458 19.9901 9.1785 20.0001 8.4C20.0042 7.49783 19.6435 6.63229 19 6C18.3312 5.34992 17.4326 4.99048 16.5 5C15.3619 4.99032 14.274 5.46736 13.51 6.311L12 8.051L10.49 6.311C9.72609 5.46736 8.6381 4.99032 7.50002 5Z"
                    : "M2 8.40001C1.99975 6.95035 2.58239 5.56146 3.61681 4.54584C4.65124 3.53022 6.05058 2.97317 7.5 3.00001C9.21732 2.99089 10.856 3.71919 12 5.00001C13.144 3.71919 14.7827 2.99089 16.5 3.00001C17.9494 2.97317 19.3488 3.53022 20.3832 4.54584C21.4176 5.56146 22.0002 6.95035 22 8.40001C22 13.756 15.621 17.8 12 21C8.387 17.773 2 13.76 2 8.40001Z"
                }
                fill="#393C6A"
              />
            </svg>
          </button>
          <Link to={"/main"} state={{ id: props.content._id }}>
            <button
              className="buttonroute"
              onClick={() => {
                dispatch(enterSingleRoute());
                dispatch(routeID(props.content._id));
              }}
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
            </button>
          </Link>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content content={props.content} />}
      </AnimatePresence>
    </motion.li>
  );
}

function Content(props) {
  const CheckPin = (name, index) => {
    return (
      <div
        style={{
          marginTop: "0",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            width: "2.2rem",
            height: "2.2rem",
            margin: "5px",
            borderRadius: "50%",
            justifySelf: "center",
            border: "0.20px solid",
            borderColor: props.content.category.color,
            boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "transparent",
            alignSelf: "start",
            cursor: "pointer",
          }}
        >
          {index}
        </button>
        <p>{name}</p>
      </div>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="categoriacardopen"
    >
      {props.content.pins.map((pin, index) => CheckPin(pin.pinName, index + 1))}
    </motion.div>
  );
}
