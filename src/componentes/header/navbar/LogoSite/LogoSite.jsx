import React from 'react'
import Logo from '../../../assets/obey.png'
import {Link} from 'react-router-dom'

export const LogoSite = () => {
  
    let formato ={
        width:"100px",
        height:"100px"
    }

  return (
    <div className="w-25 d-flex justify-content-center">
         <Link to="/"><img src={Logo} className="d-flex justify-content-center bg-warning" style={formato} alt="logo sitio" /></Link>
    </div>
  )
}
