import React from 'react'
import imgDefault from '../../../../assets/imgDefault.jpg'
import {Link} from 'react-router-dom'
import './item.scss'


export const Item = ({img,name,price, id}) => {
  return (
    <>
        <Link to={`/item/${id}`} className="card cardsProducts">
            <img src={img || imgDefault} />
            <div className="card-body cardsText">
              <h6 className="card-title">{name}</h6>
              <h5 className="card-text">$ {price}</h5>
            </div>
        </Link>
    </>
  )
}
