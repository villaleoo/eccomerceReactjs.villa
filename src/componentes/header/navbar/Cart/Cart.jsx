import React, { useContext } from 'react'

import { GlobalContext } from '../../../../context/GlobalStateContext'
import { Link } from 'react-router-dom';
import './cartStyle.scss'
import { CartEmpty } from './cartEmpty/CartEmpty';


export const Cart = () => {
    const {cart,removeItem,clear,totalPrice} = useContext(GlobalContext)
  return (
    <div className='cartContainer'>
    {
      cart.length > 0 ? (
        <div className='cartWithProductsContainer col-12 col-sm-12 col-lg-12 col-xl-12 p-0'>
            <ul className='px-0 w-100'>
              {cart.map((items,index)=>(
              <li key={index} className='my-2 containerProduct'>
                  <div className='imgProduct'>
                    <img  src={items.img[0]} alt='products'/>
                  </div>
                  <div className='itemName'>
                    <h5>{items.name}</h5>
                  </div>
                  <div className="itemPrice">
                    <h3>${items.price}</h3>
                  </div>
                  <div className='itemQuantity'>
                    <h6>Cantidad: {items.quantity}</h6>
                  </div>
                  <div className="itemEdit">
                    <Link className='btn btn-info' title='❗❗Al editar,si no se modifican las cantidades se eliminará el producto.' to={`/item/${items.id}`} onClick={()=> removeItem(items.id)}>Editar<span> *</span></Link>
                  </div>
                  <div className="itemDelete">
                    <button className='btn btn-dark'onClick={()=> removeItem(items.id)}>Eliminar</button>
                  </div>
              </li>))
              }
            </ul>
            <div className='totalPurchase'>
              <h2>Total: $ {totalPrice()}</h2>
            </div>
            <div className='py-4 buttonsCart'>
              <button onClick={clear}  className='btn btn-dark width-min-content'>Vaciar carrito</button>
              <Link to='/' className='btn btn-info'>Añadir mas productos</Link>
              <Link to='/checkout' className='btn btn-success'>Finalizar compra</Link>
            </div>
        </div>
      )
      :
      (
         <CartEmpty/>
      )
    }
  </div>
  )
}
