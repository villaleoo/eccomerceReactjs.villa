import React, { useContext } from "react";
import { LogoSite } from "./LogoSite/LogoSite";
import {NavLink, useLocation} from 'react-router-dom'
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalStateContext";
import { SearchBar } from "./searchBar/SearchBar";
import Cart from '../../assets/carrito-de-compras.png'
import theStyle from './navbar.scss'

const NavBar =()=>{
    const {cart,totalItems}= useContext(GlobalContext)
    const location = useLocation()
   
    let verification = location.pathname.includes('/item')
   
    //DOS TIPOS DE VISTA PARA LA NAV DEPENDIENDO DE SI ESTÁ EN VISTA EL DETALLE DEL PRODUCTO
    return (
        <>
        {verification ? 
            <nav className="navbar position-relative d-flex flex-column  navbar-expand-lg navDetail">
                <LogoSite/>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  navbarContainerDetail" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto listNavDetail">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Ofertas</NavLink>
                        </li>
                        {cart.length >0 &&
                        <li className="nav-item d-flex cartDetail">
                            <span className='text-center'>{totalItems()}</span>
                            <Link className="text-decoration-none" to="/cart"><img src={Cart} /></Link>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        :
            <nav className="navbar navbar-expand-lg ">
                <LogoSite/>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <SearchBar/>
                <div className="collapse navbar-collapse navbarContainer" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto listNavContainer">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" >Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Ofertas</NavLink>
                        </li>
                        {cart.length >0 &&
                        <li className="nav-item d-flex cart">
                            <span className='text-center'>{totalItems()}</span>
                            <Link className="text-decoration-none" to="/cart"><img src={Cart}/></Link>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        }
        </>
    )
}

export default NavBar