import React, { createContext, useState } from 'react'
import Toastify from 'toastify-js'

export const GlobalContext = createContext('')


const GlobalStateContext = ({children}) => {

    const [cart, setCart] = useState([])

    
    function addToCart (product)  {
      Toastify({
        text: `"${product.name}" fue añadido con éxito. 🛒`,
        duration: 2700,
        style:{
            background: "#28a745"
        },
        gravity: "top"
        }).showToast();            
      setCart([...cart,product]);
    };


    function isInCart(id){
      return cart.some(q=> q.id == id);
     
    };

    function removeItem(itemId){
      setCart(cart.filter(r => r.id != itemId)); 
     
    };

    function clear(){
      setCart([]);
    };

    function totalItems(){
      return cart.reduce((acc,el)=>acc + el.quantity,0);
    };
   
    function totalPrice(){
     return cart.reduce((acc,el)=> acc + (el.price * el.quantity),0);
    };
   
    function verificationFormCompleted (date){
      return date.some((ver)=> ver === '');
    };

   


  return (
    <GlobalContext.Provider value={{cart,addToCart, isInCart,removeItem, clear,totalPrice,totalItems, verificationFormCompleted}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext