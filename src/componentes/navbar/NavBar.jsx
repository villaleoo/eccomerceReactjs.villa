import React from "react";
import Logo from '../assets/obey.png'
import Carrito from '../assets/carrito.png'

const NavBar =()=>{

    let formato ={
        width:"100px",
        height:"100px"
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="w-25 d-flex justify-content-center">
                    <img src={Logo} className="d-flex justify-content-center bg-warning" style={formato} alt="logo sitio" />
                </div>
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
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                </ul>
                <div className="carrito">
                    <img src={Carrito} alt="carrito" />
                </div>
            </div>
      </nav>
    )
}

export default NavBar