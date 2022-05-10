import React from 'react'
import imgDefault from '../../../../assets/imgDefault.jpg'
import {Link} from 'react-router-dom'




export const Item = ({imagen,nombre,precio, id}) => {

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
        <Link to={`/item/${id}`} className="card d-flex flex-column justify-content-between align-items-center" style={estilos}>
            <img src={imagen || imgDefault} className="card-img-top" style={estiloImg} alt="..."/>
            <div className="card-body w-100 d-flex flex-column justify-content-around align-items-center">
              <h5 className="card-title">{nombre}</h5>
              <h4 className="card-text">$ {precio}</h4>
            </div>
        </Link>
    </>
  )
}
