import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Map from "./Map";
import ModalInfo from "./ModalInfo";
import ModalAddRota from "./ModalAddRota";
import ModalCancelar from "./modalcancelar";
import { useSelector } from "react-redux";
const axios = require("axios");


const SecondPage = () => {

  const [loading, setLoading] = useState(false);
  const [rotas, setRotas] = useState()
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

  return (
    <div>
      <Nav />
      {rotas !== undefined ? (
        <Map rotas={rotas} loading={loading} />
      ) : (
        ''
      )}
      
      {/* modais */}
      <ModalAddRota />
      <ModalInfo />
      <ModalCancelar />
    </div>
  );
};

export default SecondPage;
