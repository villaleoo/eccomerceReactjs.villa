import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarPrimero = ({tipoProducto1, tipoProducto2,tipoProducto3,tipoProducto4,tipoProducto5}) => {
    return (
        <>
            <div className="card w-100">
                <article className="card-group-item">
                    <header className="card-header"><h6 className="title">Tipo de producto </h6></header>
                <div className="filter-content">
                        <div className="list-group list-group-flush">
                            <Link to='/category/zapatillas' className="list-group-item">{tipoProducto1} </Link>
                            <Link to='/category/remera' className="list-group-item">{tipoProducto2} </Link>
                            <Link to='/category/short' className="list-group-item">{tipoProducto3} </Link>
                            <Link to='/category/botines' className="list-group-item">{tipoProducto4}  </Link>
                            <Link to='/category/gorra' className="list-group-item">{tipoProducto5}  </Link>
                        </div>  
                    </div>
                </article> 
                <article className="card-group-item">
                    <header className="card-header"><h6 className="title">Generos</h6></header>
                    <div className="filter-content">
                        <div className="d-flex justify-content-around card-body">
                            <label className="btn btn-danger">
                                <input className="" type="radio" name="myradio" value=""/>
                                <span className="form-check-label">Mujer</span>
                            </label>
                            <label className="btn btn-primary">
                                <input className="" type="radio" name="myradio" value=""/>
                                <span className="form-check-label">Hombre</span>
                            </label>
                            <label className="btn btn-success">
                                <input className="" type="radio" name="myradio" value=""/>
                                <span className="form-check-label">Niños</span>
                            </label>
                        </div> 
                    </div>
                </article> 
            </div> 
        </>
    )
}
    