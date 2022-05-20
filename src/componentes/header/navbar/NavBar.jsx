import React, { useContext } from "react";
import { CardWidget } from './CardWidget/CardWidget';
import { LogoSite } from "./LogoSite/LogoSite";
import {NavLink} from 'react-router-dom'
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalStateContext";

const NavBar =()=>{
    const {cart,totalItems}= useContext(GlobalContext)
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <LogoSite/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <form className="form-inline my-2 my-lg-0 w-100 d-flex justify-content-end">
                    <input className="form-control mr-sm-2 w-75" type="search" placeholder="Buscar..."/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav mr-auto w-100 d-flex justify-content-around mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                </ul>
                {cart.length >0 &&
                    <div className="d-flex">
                        <p className="px-2 text-warning ">({totalItems()})</p>
                        <Link to="/cart">Carrito</Link>
                    </div>
                }
            </div>
      </nav>
    )
}

export default NavBar