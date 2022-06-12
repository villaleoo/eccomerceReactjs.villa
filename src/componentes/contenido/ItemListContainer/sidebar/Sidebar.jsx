import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import './sidebar.scss'
import filter from '../../../assets/filtrar.png'

export const Sidebar = () => {
  let productType=['Gorra', 'Remera', 'Short', 'Zapatillas', 'Botines'];
  let sports =['Futbol', 'Basquet'];
  let marks = ['Adidas', 'Nike', 'Puma']
  const [filterPriceMin, setFilterPriceMin] = useState('')
  const [filterPriceMax, setFilterPriceMax] = useState('')
  
  const handleChangePriceMin=(e)=>{
    setFilterPriceMin(e.target.value)
    
    
 };
 const handleChangePriceMax=(e)=>{
   setFilterPriceMax(e.target.value)
   
 }
 



  return (
    <aside className='navbar-expand-lg containerAside'>
      <button data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className='navbar-toggler btnFilter'><img src={filter} alt="filter"/></button>
      <div className='collapse navbar-collapse containerFilters' id='navbarSupportedContent'>
        <div className='containerAllFilters'>

          <div className='containerFilter'>

            <div className='filterTitle'>
                <h4>Producto</h4>
            </div>

            <div className='listFilter'>
              <ul>
                {
                  productType.map((type,index)=>
                    <NavLink  to={`/category/${type.toLowerCase()}`} key={index}>
                      
                      {type}
                      
                    
                    </NavLink>
                  )
                }         
              </ul>
            </div>
              
          </div>
          <div className='containerFilter'>
              
            <div className='filterTitle'>
              <h4>Deporte</h4>
            </div>
              
            <div className='listFilter'>
              <ul>
                {
                  sports.map((sport,index)=>
                  <Link  to={`/category/${sport.toLowerCase()}`} key={index}>
                    
                    {sport}
                    
                  </Link>
                  )
                }
              </ul>
            </div>
              
          </div>
          <div className='containerFilter'>
              
            <div className='filterTitle'>
              <h4>Marcas</h4>
            </div>
              
            <div className='listFilter'>
              <ul>
                {
                  marks.map((mark,index)=>
                  <Link  to={`/category/${mark.toLowerCase()}`} key={index}>
                    
                    {mark}
                  </Link>
                  )
                }
              </ul>
            </div>
              
          </div>
          <div className='containerFilterPrice'>
            <div className='filterTitle'>
              <h4>Precio</h4>
            </div>
            <div className='filterPrice'>
                <div className="filter-content">
                    <div className="card-body">
                        <div className="form-row ">
                            <div className="form-group col-lg-6">
                                <label>Min</label>
                                <input
                                type="number"
                                maxLength='6'
                                min='1'
                                max='20000'
                                value={filterPriceMin}
                                onChange={handleChangePriceMin}
                                className="form-control"
                                id="inputEmail4"
                                placeholder="$0"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label>Max</label>
                                <input
                                type="number"
                                onChange={handleChangePriceMax}
                                className="form-control"
                                placeholder="$30.000"/>
                            </div>
                            <Link to={`/price/${filterPriceMin}/${filterPriceMax}`} className='btn btn-info '>Aplicar</Link>
                        </div>
                    </div> 
                </div>
            </div>
          </div>
          <div className='viewAllProducts'>
            <Link className='btn btn-warning' to='/'>Ver todos los productos</Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
