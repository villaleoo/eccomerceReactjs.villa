import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../../context/GlobalStateContext'



export const ItemCount = ({stock, item}) => {
    const [q, setQ] = useState(item.quantity)
    
    const {addToCart,isInCart} =useContext(GlobalContext)
   

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
   
 
    

 
    
  
  return (
    <div className='my-4 flex-column d-flex justify-content-between' id="itemCount">  
        <div className='d-flex justify-content-center'>
            {isInCart(item.id) ?
                <>
                    
                    <h5 className='px-2'>Unidades: {item.quantity}</h5>
                    
                    
                </>
                :
                <>
                    <button onClick={restar}>-</button>
                    <h5 className='px-2'>Unidades: {q}</h5>
                    {q < stock &&
                        <button onClick={sumar} className="mx-1">+</button>
                    }
                    <Link to='/cart' onClick={()=> addToCart({...item,quantity:q })} className="buy--btn">AÑADIR AL CARRITO</Link>
                </>
            }
        </div>
    </div>
  )
}
