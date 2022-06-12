import React, { useContext } from "react";
import { LogoSite } from "./LogoSite/LogoSite";
import {NavLink, useLocation} from 'react-router-dom'
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalStateContext";
import { SearchBar } from "./searchBar/SearchBar";
import Cart from '../../assets/carrito-de-compras.png'
import './navbar.scss'

const NavBar =()=>{
    const {cart,totalItems}= useContext(GlobalContext)
    const location = useLocation()
   
    let verification = location.pathname.includes('/item')
   
    //DOS TIPOS DE VISTA PARA LA NAV DEPENDIENDO DE SI ESTÁ EN VISTA EL DETALLE DEL PRODUCTO
    return (
        <>
        {verification ? 
            <nav className="navbar position-relative  navbar-expand-lg navDetail">
                <LogoSite/>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                        </svg>
                    </span>   
                </button>
                <div className="collapse navbar-collapse  navbarContainerDetail" id="navbarTogglerDemo02">
                    <ul className="navbar-nav  listNavDetail">
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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                        </svg>
                    </span>
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