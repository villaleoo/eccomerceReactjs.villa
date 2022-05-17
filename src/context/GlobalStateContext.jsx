import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')


const GlobalStateContext = ({children}) => {

    const [cart, setCart] = useState([])


    function addToCart (product)  {
        
        
        console.log('probando22');
        
    }


  return (
    <GlobalContext.Provider value={{cart,addToCart}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext