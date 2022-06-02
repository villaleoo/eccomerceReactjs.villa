import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Link } from 'react-router-dom'
import { LogoSite } from "./navbar/LogoSite/LogoSite";
import {NavLink} from 'react-router-dom'

export const HeaderDetail = () => {
  const {cart,totalItems}= useContext(GlobalContext)

  return (
    <>
         <nav className="navbar d-flex flex-column navbar-expand-lg position-fixed fixed-top navbar-dark bg-dark">
                <LogoSite/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse  w-75 mt-2" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto w-100 d-flex justify-content-around  ">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Ofertas</NavLink>
                    </li>
                {cart.length >0 &&
                    <li className="d-flex pt-2">
                        <span className="px-2 text-warning ">({totalItems()})</span>
                        <Link to="/cart">Carrito</Link>
                    </li>
                }
                </ul>
            </div>
      </nav>
    </>
  )
}
