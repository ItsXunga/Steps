import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const CategoriaInfo = (props) => {
    const [loading, setLoading] = useState(false);
    const [rotas, setRotas] = useState()

    useEffect(() => {
        const rotasRequest = async() => {
          setLoading(true);
          await axios.get("https://steps-ua.herokuapp.com/circuits/").then((response) =>{
            setRotas(response.data)
            setLoading(false);
          })
        }
        rotasRequest()
      },[])

  return (
    <>
    {props.categorias.map((props) => (
        <Link
          to={"/categoriaDetails"}
          state={{ 
            category: props.category,
            rotas: rotas
         }}
          style={{ textDecoration: "none" }}
        >
          <div className="categoria">
            <img
              src={require(`../../assets/img/img_categorias/${props.img}`)}
              alt={props.category}
            />
            <p style={{ color: props.color }}>{props.category}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CategoriaInfo;