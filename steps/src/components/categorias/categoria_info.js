import React from 'react'
import { Link } from 'react-router-dom';

const CategoriaInfo = (props) => {
  return (
    <>
    {props.categorias.map((props) => (
        <Link
          to={"/categoriaDetails"}
          state={{ category: props.category }}
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