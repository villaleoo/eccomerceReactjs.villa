import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const ItemCount = ({onAdd, stock}) => {
    const [cantidad, setCantidad] = useState(1)


    const restar=()=>{
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
    }                                  //en el futuro no voy a sumar numeros sino objetos a añadir a un array de carrito

    const sumar=()=>{
        if(stock != cantidad){               
            setCantidad(cantidad+1)
        }
    }

   
  return (
    <div className='d-flex py-5 px-4'>
        <button onClick={restar}>-</button>
        <h5  className='mx-2'>Unidades: {cantidad}</h5>
        <button id="sumar" onClick={sumar}>+</button>
        <Link to="/cart" onClick={onAdd({cantidad})} className="buy--btn">AÑADIR AL CARRITO</Link>
    </div>
  )
}
