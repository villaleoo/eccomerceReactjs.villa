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
    <div className='my-4 ' id="itemCount">  
        <div className=' '>
            {isInCart(item.id) ?
                <div>
                    
                    <h5 className='px-2'>Unidades: {item.quantity}</h5>
                    
                    
                </div>
                :
                <div className='d-flex flex-column align-items-center'>
                    <div className='d-flex py-4'>
                        <button onClick={restar} className='mx-1'>-</button>
                        <h5 className='px-2'>Unidades: {q}</h5>
                        {q < stock &&
                            <button onClick={sumar} className="mx-1">+</button>
                        }
                    </div>
                    <Link to='/cart' onClick={()=> addToCart({...item,quantity:q })} className="btn btn-danger w-50">AÑADIR AL CARRITO</Link>
                </div>
            }
        </div>
    </div>
  )
}
