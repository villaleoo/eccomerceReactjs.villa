import React from 'react'
import imgDefault from '../../../../assets/imgDefault.jpg'
import {Link} from 'react-router-dom'




export const Item = ({img,name,price, id}) => {

    let styleDiv={
        width:'350px',
        height:'400px',
    }
    let styleImg={
        width:'200px',
        height:'200px',
    }

  return (

    <>
        <Link to={`/item/${id}`} className="card d-flex flex-column justify-content-between align-items-center" style={styleDiv}>
            <img src={img || imgDefault} className="card-img-top" style={styleImg} alt="..."/>
            <div className="card-body w-100 d-flex flex-column justify-content-around align-items-center">
              <h5 className="card-title">{name}</h5>
              <h4 className="card-text">$ {price}</h4>
            </div>
        </Link>
    </>
  )
}
