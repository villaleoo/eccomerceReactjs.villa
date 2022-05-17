import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import GlobalStateContext from '../../../../../context/GlobalStateContext'


export const ItemCount = ({onAdd, stock}) => {
    const [quantity, setQuantity] = useState(1)
    
    // const {}= useContext(GlobalStateContext)

    const restar=()=>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }                                  //en el futuro no voy a sumar numeros sino objetos a añadir a un array de carrito

    const sumar=()=>{
        if(stock != quantity){               
            setQuantity(quantity+1)
            
        }
    }
    
    onAdd(quantity);
    
    
   
  return (
    <div className='d-flex flex-column justify-content-between  w-100 ' id="itemCount">
        <div className='d-flex'>
        <button onClick={restar}>-</button>
        <h5  className='mx-2'>Unidades: {quantity}</h5>
        <button onClick={sumar} id="sumar">+</button>
        </div>
        <p className="py-2"id="noStock"></p> 
    </div>
  )
}
