import React from 'react'
import imgDefault from '../assets/imgDefault.jpg'

export const Card = ({imagen,nombre,precio}) => {

    let estilos={
        width:'300px',
        height:'350px',
    }
    let estiloImg={
        width:'200px',
        height:'200px',
    }

  return (

    <div>
        <div className="card d-flex" style={estilos}>
            <img src={imagen || imgDefault} className="card-img-top" style={estiloImg} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{precio}</p>
              <a href="#" className="btn btn-success">Comprar</a>
            </div>
        </div>
    </div>
  )
}
