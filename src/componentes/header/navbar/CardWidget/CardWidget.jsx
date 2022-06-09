import React, { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalStateContext'
import { Link } from 'react-router-dom';
import './cartStyle.scss'
import emptyCart from '../../../assets/carritoVacio.png'

export const CardWidget = () => {
  const {cart,removeItem,clear,totalPrice} = useContext(GlobalContext)


  
  let imgSizing={
    heigth:'150px',
    width:'150px'
  }

  
  let btnSizing={
    width: '150px'
  }

 
 


  return (
    <div className='cartContainer'>
      {
        cart.length > 0 ? (
          <div className='cartWithProductsContainer col-12 col-sm-12 col-lg-12 col-xl-12 p-0'>
              <ul className='px-0 w-100'>
                {cart.map((items,index)=>(
                <li key={index} className='my-2 containerProduct'>
                    <div className='imgProduct'>
                      <img style={imgSizing} src={items.img[0]} alt='products'/>
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
                <button onClick={clear} style={btnSizing} className='btn btn-dark width-min-content'>Vaciar carrito</button>
                <Link to='/' className='btn btn-info'>Añadir mas productos</Link>
                <Link to='/checkout' className='btn btn-success'>Finalizar compra</Link>
              </div>
          </div>
        )
        :
        (
          <div className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 emptyCartContainer'>
            <div className='emptyCartImg'>
              <img src={emptyCart} alt="" />
            </div>
            <h2 className='text-center my-4'>¡Carrito vacio, añada productos!</h2>
            <Link to='/' className='btn btn-info'>Ir al catalogo de productos</Link>
          </div>
        )
      }
    </div>
  )
}
