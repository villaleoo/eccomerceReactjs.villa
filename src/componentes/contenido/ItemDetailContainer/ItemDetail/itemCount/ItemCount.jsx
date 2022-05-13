import React, { useState } from 'react'

export const ItemCount = ({carrito, setCarrito, stock}) => {

   

    const restar=()=>{
        if(carrito > 1){
            setCarrito(carrito-1)
        }
    }                                  //en el futuro no voy a sumar numeros sino objetos a añadir a un array de carrito

    const sumar=()=>{
        if(stock!=carrito){               
            setCarrito(carrito+1)
        }
    }

   
  return (
    <div className='d-flex py-5 px-4'>
        <button onClick={restar}>-</button>
        <h5 className='mx-2'>Unidades: {carrito}</h5>
        <button id="sumar" onClick={sumar}>+</button>
    </div>
  )
}
