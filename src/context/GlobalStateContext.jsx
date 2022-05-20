import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')


const GlobalStateContext = ({children}) => {

    const [cart, setCart] = useState([])

    
    function addToCart (product)  {
      console.log(product);
      setCart([...cart,product])
    }


    function isInCart(id){
      return cart.some(q=> q.id == id)
     
    }

    function removeItem(itemId){
      setCart(cart.filter(r => r.id != itemId)) //retorna un array con todos los items que sean distintos al del id seleccionado
     
    }
    function clear(){
      setCart([])
    }

    
    
   

   


  return (
    <GlobalContext.Provider value={{cart,addToCart, isInCart,removeItem, clear}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext