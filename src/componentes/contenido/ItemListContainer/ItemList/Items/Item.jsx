import React from 'react'
import imgDefault from '../../../../assets/imgDefault.jpg'
import {Link} from 'react-router-dom'
import cardsStyle from './item.scss'




export const Item = ({img,name,price, id}) => {
    let styleImg={
        width:'200px',
        height:'200px',
    }

  return (

    <>
        <Link to={`/item/${id}`} className="card cardsProducts">
            <img src={img || imgDefault} style={styleImg} />
            <div className="card-body cardsText">
              <h6 className="card-title">{name}</h6>
              <h5 className="card-text">$ {price}</h5>
            </div>
        </Link>
    </>
  )
}
