import React, { Children } from 'react'
import imgDefault from '../../../assets/imgDefault.jpg'




export const Card = ({imagen,nombre,precio,btnContador}) => {

    let estilos={
        width:'350px',
        height:'400px',
    }
    let estiloImg={
        width:'200px',
        height:'200px',
    }

  return (

    <>
        <div className="card" style={estilos}>
            <img src={imagen || imgDefault} className="card-img-top" style={estiloImg} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{precio}</p>
              {btnContador}
              <a href="#" className="btn btn-success">Comprar</a>
            </div>
        </div>
    </>
  )
}
