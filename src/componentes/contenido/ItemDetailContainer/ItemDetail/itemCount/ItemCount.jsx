import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../../context/GlobalStateContext'



export const ItemCount = ({stock, item}) => {
    const [q, setQ] = useState(item.quantity)
    console.log(stock);
    const {addItem,addToCart,isInCart} =useContext(GlobalContext)
   

    const restar=()=>{
        if(q > 1){
            setQ(q-1)
            
        }
    }                                                                          

    const sumar=()=>{
        if(stock != q){               
            setQ(q+1)
        }
    }
   
   
    
   
    
   //se buguean las cantidades porque a la cantidad que figura en panalla la saco de aqui y no del context
  return (
    <div className='my-4 flex-column d-flex justify-content-between' id="itemCount">
        <div className='d-flex justify-content-center'>
            <button className='mx-1' onClick={restar}>-</button>
            <h5 className='px-2'>Unidades: {q}</h5> 
            {q < stock &&
                <button onClick={sumar} className="mx-1">+</button>
            }
        </div>
        {
            !isInCart(item.id) &&
        <Link to='/cart' onClick={()=> addToCart({...item,quantity:q })} className="buy--btn">AÑADIR AL CARRITO</Link>
        }
    </div>
  )
}
