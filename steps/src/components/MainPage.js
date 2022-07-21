import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Map from "./Map";
import ModalInfo from "./modais/ModalInfo";
import ModalAddRota from "./modais/ModalAddRota";
import ModalCancelar from "./modais/modalcancelar";
import ModalSairNavegar from "./modais/modalSairNavegar";
import { useSelector } from "react-redux";
const axios = require("axios");


const SecondPage = () => {

  const [loading, setLoading] = useState(false);
  const [rotas, setRotas] = useState()
  const [categorias, setCategorias] = useState();
  const { routeID } = useSelector((state) => state.routeID);
  const { mapState } = useSelector((state) => state.mapState);

  useEffect(() => {
    const request = async() => {
      setLoading(true);
      await axios.get("https://steps-ua.herokuapp.com/circuits/").then((response) =>{
        setRotas(response.data)
        setLoading(false)
      })

    }
    request()
  },[routeID, mapState])

  useEffect(() => {
    const request = async() => {
      setLoading(true);
      await axios.get("https://steps-ua.herokuapp.com/categories/").then((response) =>{
        setCategorias(response.data)
        setLoading(false)
      })
    }
    request()
  },[])


  return (
    <div>
      <Nav />
      {rotas !== undefined ? (
        <Map rotas={rotas} loading={loading} categorias={categorias} />
      ) : (
        ''
      )}

      <div id="instructions"></div>
      
      {/* modais */}
      <ModalAddRota />
      <ModalInfo />
      <ModalCancelar />
      <ModalSairNavegar />
    </div>
  );
};

export default SecondPage;
