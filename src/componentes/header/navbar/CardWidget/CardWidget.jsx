import React, { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalStateContext'
import { ItemCount } from '../../../contenido/ItemDetailContainer/ItemDetail/itemCount/ItemCount';
import { Link } from 'react-router-dom';

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
    <div className='carrito pb-2'>
      {
        cart.length > 0 ? (
          <div className='d-flex flex-column justify-content-center align-items-center w-100'>
          <ul className='px-0 w-100'>
            {cart.map((items,index)=>(
            <li key={index} className='bg-danger my-2 d-flex align-items-center justify-content-around w-100'>
                <img style={imgSizing} src={items.img[0]}/>
                <h4>{items.name}</h4>
                <h5>${items.price}</h5>
                
                <ItemCount
                item={items}
                stock={items.stock}
                />
                <button className='btn btn-dark'onClick={()=> removeItem(items.id)}>Eliminar</button>
            </li>))
            }
          </ul>
              <h2>Total: $ {totalPrice()}</h2>
              <div className='d-flex w-50 py-4 justify-content-between'>
                <button onClick={clear} style={btnSizing} className='btn btn-dark width-min-content'>Vaciar carrito</button>
                <Link to='/' className='btn btn-info'>Añadir mas productos</Link>
                <Link to='/checkout' className='btn btn-success'>Finalizar compra</Link>
              </div>
          </div>
        )
        :
        (
          <div className='vh-50 d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center'>Carrito vacio, añada productos!</h2>
            <Link to='/' className='btn btn-info'>Ir al catalogo de productos</Link>
          </div>
        )
      }
    </div>
  )
}
