import React from 'react'
import Logo from '../../../assets/obey.png'

export const LogoSite = () => {
  
    let formato ={
        width:"100px",
        height:"100px"
    }

  return (
    <div className="w-25 d-flex justify-content-center">
         <img src={Logo} className="d-flex justify-content-center bg-warning" style={formato} alt="logo sitio" />
    </div>
  )
}
