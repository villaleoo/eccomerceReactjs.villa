import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarSegundo = ({marca1,marca2,marca3}) => {
  return (
    <>
        <div className="card w-100">
            <article className="card-group-item">
                <header className="card-header">
                    <h6 className="title">Rango de precio </h6>
                </header>
                <div className="filter-content">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Min</label>
                                <input type="number" className="form-control" id="inputEmail4" placeholder="$0"/>
                            </div>
                            <div className="form-group col-md-6 text-right">
                                <label>Max</label>
                                <input type="number" className="form-control" placeholder="$30.000"/>
                            </div>
                        </div>
                    </div> 
                </div>
            </article>
            <article className="card-group-item">
                <header className="card-header">
                    <h6 className="title">Marcas </h6>
                </header>
                <div className="filter-content">
                    <div className="card-body">
                        <div className="custom-control">
                            <Link to="/category/adidas" className="" >{marca1}</Link>
                        </div>
                        <div className="custom-control">
                            <Link to="/category/nike" className="" >{marca2}</Link>
                        </div>
                        <div className="custom-control">
                            <Link to="/category/puma"className="">{marca3}</Link>
                        </div>
                    </div> 
                </div>
            </article> 
        </div> 
    </>
  )
}
