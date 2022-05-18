import React, { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalStateContext'
import { ItemCount } from '../../../contenido/ItemDetailContainer/ItemDetail/itemCount/ItemCount';


export const CardWidget = () => {
  const {cart,addToCart,removeItem,clear} = useContext(GlobalContext)

  console.log(cart);
  
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
            <li key={index} className='bg-danger d-flex align-items-center justify-content-around w-100'>
                <img style={imgSizing} src={items.img} alt="" />
                <h4>{items.nombre}</h4>
                <h5>${items.precio}</h5>
                <ItemCount
                item={items}
                stock={items.stock}
                />
                <button className='btn btn-dark'onClick={()=> removeItem(items.id)}>Eliminar</button>
            </li>))
            }
          </ul>
            <button onClick={clear} style={btnSizing} className='btn btn-dark width-min-content'>Vaciar carrito</button>
          </div>
        )
        :
        (
          <h2 className='text-center'>Carrito vacio, añada productos!</h2>
        )
      }
    </div>
  )
}
