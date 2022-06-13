import React, { useContext } from 'react'
import cartWidget from '../../../assets/carrito-de-compras.png'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalStateContext'

export const CartWidget = () => {
    const {totalItems}= useContext(GlobalContext)
  return (
    <>
        <li className="nav-item d-flex cart cartDetail">
            <span className='text-center'>{totalItems()}</span>
            <Link className="text-decoration-none" to="/cart"><img src={cartWidget} alt='carrito'/></Link>
        </li>
    </>
  )
}
