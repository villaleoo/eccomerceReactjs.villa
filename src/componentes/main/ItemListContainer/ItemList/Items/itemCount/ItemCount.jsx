import React, { useState } from 'react'

export const ItemCount = ({initial, stock}) => {

    const [contador, setContador] = useState(initial)

    const restar=()=>{
        if(initial != contador){
            setContador(contador-1)
        }
    }                                  //las condiciones del IF estan pensados para que no pueda restar por debajo del minimo permitido, ni por encima del stock disponible

    const sumar=()=>{
        if(stock!=contador){               
            setContador(contador+1)
        }
    }

  return (
    <div className='d-flex p-2'>
        <button onClick={restar}>-</button>
        <h5 className='mx-2'>Unidades: {contador}</h5>
        <button onClick={sumar}>+</button>

    </div>
  )
}
