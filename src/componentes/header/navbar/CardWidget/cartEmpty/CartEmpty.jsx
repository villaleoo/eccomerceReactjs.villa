import React from 'react'
import emptyCart from '../../../../assets/carritoVacio.png'
import { Link } from 'react-router-dom';
import './cartEmpty.scss'

export const CartEmpty = () => {
  return (
    <div>
         <div className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 emptyCartContainer'>
            <div className='emptyCartImg'>
              <img src={emptyCart} alt="carrito vacio" />
            </div>
            <h2 className='text-center my-4'>¡Carrito vacio, añada productos!</h2>
            <Link to='/' className='btn btn-info'>Ir al catalogo de productos</Link>
          </div>
    </div>
  )
}
