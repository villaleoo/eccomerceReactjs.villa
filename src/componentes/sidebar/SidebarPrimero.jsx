import React from 'react'

export const SidebarPrimero = ({tipoProducto1, tipoProducto2,tipoProducto3,tipoProducto4,unidades1,unidades2,unidades3,unidades4}) => {
    return (
        <aside>
            <div className="card w-100">
                <article className="card-group-item">
                    <header className="card-header"><h6 className="title">Tipo de producto </h6></header>
                <div className="filter-content">
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item">{tipoProducto1}<span className="float-right badge badge-light round">{unidades1}</span> </a>
                            <a href="#" className="list-group-item">{tipoProducto2}<span className="float-right badge badge-light round">{unidades2}</span>  </a>
                            <a href="#" className="list-group-item">{tipoProducto3}<span className="float-right badge badge-light round">{unidades3}</span>  </a>
                            <a href="#" className="list-group-item">{tipoProducto4}<span className="float-right badge badge-light round">{unidades4}</span>  </a>
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
        </aside>
    )
}
    