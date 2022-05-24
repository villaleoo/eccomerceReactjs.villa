import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')


const GlobalStateContext = ({children}) => {

    const [cart, setCart] = useState([])

    
    function addToCart (product)  {
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

    function totalPrice(){
     return cart.reduce((acc,el)=> acc + (el.price * el.quantity),0)
    }
    function totalItems(){
      return cart.reduce((acc,el)=>acc + el.quantity,0)
    }
    
   

   


  return (
    <GlobalContext.Provider value={{cart,addToCart, isInCart,removeItem, clear,totalPrice,totalItems}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext