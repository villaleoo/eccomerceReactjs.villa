import React from 'react'
import imgDefault from '../../../../assets/imgDefault.jpg'




export const Item = ({imagen,nombre,precio}) => {

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
        <div className="card d-flex flex-column justify-content-between align-items-center" style={estilos}>
            <img src={imagen || imgDefault} className="card-img-top" style={estiloImg} alt="..."/>
            <div className="card-body w-100 d-flex flex-column justify-content-between align-items-center">
              <h5 className="card-title">{nombre}</h5>
              <h4 className="card-text">$ {precio}</h4>
              <a href="#" className="btn btn-success w-100">Ver detalle</a>
            </div>
        </div>
    </>
  )
}
