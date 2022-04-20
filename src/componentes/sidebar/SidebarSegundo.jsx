import React from 'react'

export const SidebarSegundo = ({marca1,marca2,marca3,marca4,unidades1,unidades2,unidades3,unidades4}) => {
  return (
    <aside>
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
                        <div className="custom-control custom-checkbox">
                            <span className="float-right badge badge-light round">{unidades1}</span>
                            <input type="checkbox" className="custom-control-input" id="Check1"/>
                            <label className="custom-control-label" >{marca1}</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <span className="float-right badge badge-light round">{unidades2}</span>
                            <input type="checkbox" className="custom-control-input" id="Check2"/>
                            <label className="custom-control-label" >{marca2}</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <span className="float-right badge badge-light round">{unidades3}</span>
                            <input type="checkbox" className="custom-control-input" id="Check3"/>
                            <label className="custom-control-label">{marca3}</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <span className="float-right badge badge-light round">{unidades4}</span>
                            <input type="checkbox" className="custom-control-input" id="Check4"/>
                            <label className="custom-control-label">{marca4}</label>
                        </div>
                    </div> 
                </div>
            </article> 
        </div> 
    </aside>
  )
}
