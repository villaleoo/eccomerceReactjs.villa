import React from 'react'
import Logo from '../../../assets/obey.png'
import {Link} from 'react-router-dom'
import './logoSite.scss'

export const LogoSite = () => {
  
   

  return (
    <div className="w-25 d-flex justify-content-center logoContainer">
         <Link to="/"><img src={Logo} className="d-flex justify-content-center"  alt="logo sitio" /></Link>
    </div>
  )
}
