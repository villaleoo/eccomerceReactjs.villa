import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import sidebarStyle from './sidebar.scss'

export const Sidebar = () => {
  let productType=['Gorra', 'Remera', 'Short', 'Zapatillas', 'Botines'];
  let sports =['Futbol', 'Basquet'];
  let marks = ['Adidas', 'Nike', 'Puma']
  console.log(productType);


  return (
    <aside className='w-25'>
      <button>Filtro</button>
      <div>

        <div>
            <h4>Producto</h4>
        </div>

        <div>
          <ul>
            {
              productType.map((type,index)=>
                <NavLink to={`/category/${type.toLowerCase()}`} key={index}>{type}</NavLink>
              )
            }         
          </ul>
        </div>

      </div>
      <div>

        <div>
          <h4>Deporte</h4>
        </div>

        <div>
          <ul>
            {
              sports.map((sport,index)=>
              <Link to={`/category/${sport.toLowerCase()}`} key={index}>{sport}</Link>
              )
            }
          </ul>
        </div>

      </div>
      <div>

        <div>
          <h4>Marcas</h4>
        </div>

        <div>
          <ul>
            {
              marks.map((mark,index)=>
              <Link to={`/category/${mark.toLowerCase()}`} key={index}>{mark}</Link>
              )
            }
          </ul>
        </div>

      </div>
      <div>

        <div>
          <h4>Precio</h4>
        </div>
        <div>
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
        </div>
      </div>
      <div>
        <Link to='/'>Ver todos los productos</Link>
      </div>
    </aside>
  )
}
