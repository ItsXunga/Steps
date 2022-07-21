import React, { useEffect, useRef, useState } from "react";
import { allcolors } from "../../style/global_styles";
import "../../style/categorias.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import CategoriaInfo from "./categoria_info";
import authService from "../../services/auth.service";

const Categorias = () => {
  const retrievedObject = authService.getCurrentUser();
  const currentUser = JSON.parse(retrievedObject).user._id;

  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState();
  const [rotasFavoritas, setRotasFavoritas] = useState();

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      await axios
        .get("https://steps-ua.herokuapp.com/categories/")
        .then((response) => {
          setCategorias(response.data);
          setLoading(false);
        });
    };
    request();
  }, []);

  useEffect(() => {
    const rotasFavoritasRequest = async () => {
      await axios
        .get(`https://steps-ua.herokuapp.com/users/${currentUser}`)
        .then((response) => {
          setRotasFavoritas(response.data);
          setLoading(false);
        });
    };
    rotasFavoritasRequest();
  }, []);

  return (
    <div className="background">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <Link to={"/main"}>
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
          Categorias
        </h1>
      </div>
      <div className="container">
        <div className="grid">
          {categorias !== undefined && rotasFavoritas !== undefined ? (
            <CategoriaInfo
              categorias={categorias}
              rotasFavoritas={rotasFavoritas}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
