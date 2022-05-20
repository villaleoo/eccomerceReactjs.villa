import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../../context/GlobalStateContext'



export const ItemCount = ({stock, item}) => {
    const [quantity, setQuantity] = useState(item.cantidad)
    
    const {addItem,addToCart,isInCart} =useContext(GlobalContext)
   

    const restar=()=>{
        if(quantity > 1){
            setQuantity(quantity-1)
            
        }
    }                                                                          

    const sumar=()=>{
        if(stock != quantity){               
            setQuantity(quantity+1)
        }
    }
    console.log(quantity);

    console.log(item);
   
    
   

//     function onAdd (q){
//         item.cantidad = q
//    }
//     onAdd(quantity);


    
    
    
   
  return (
    <div className='my-4 flex-column d-flex justify-content-between' id="itemCount">
        <div className='d-flex justify-content-center'>
            <button className='mx-1' onClick={restar}>-</button>
            <h5 className='px-2'>Unidades: {quantity}</h5>
            {quantity < stock &&
                <button onClick={sumar} className="mx-1">+</button>
            }
        </div>
        {/* {
            quantity == stock &&
            <p className=''>No hay mas stock disponible!</p>
        } */}
        {
            !isInCart(item.id) &&
        <Link to='/cart' onClick={()=> addToCart({...item,cantidad:quantity })} className="buy--btn">AÑADIR AL CARRITO</Link>
        }
    </div>
  )
}
