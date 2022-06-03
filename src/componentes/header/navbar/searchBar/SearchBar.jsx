import React, { useEffect, useState } from 'react';
import { useFirebase } from '../../../../hooks/useFirebase';
import styles from './searchBar.scss'
import {Link} from 'react-router-dom'


export const SearchBar = () => {
    const {fetchGetProducts,productsCollection}= useFirebase();

    const [search, setSearch]=useState([]);
    const [searching, setSearching]=useState('');
    
    let styleImgList={
      width:'140px',
      heigth:'140px'
    };

    const handleChange=(e)=>{
       setSearching(e.target.value);
       filterSearch(e.target.value);
    };

    const filterSearch = (termOfSearch)=>{

      let resultOfSearch = productsCollection.filter(element =>{

        if(element.name.toString().toLowerCase().includes(termOfSearch.toLowerCase()) || element.mark.toString().toLowerCase().includes(termOfSearch.toLowerCase()) || element.productType.toString().toLowerCase().includes(termOfSearch.toLowerCase())
        ){

          return element;

        }
      });

      setSearch(resultOfSearch);

    };

    useEffect(() => {
      fetchGetProducts();
    
      return () => {
      }
    }, []);
   
  return (
    <div className='containerSearch'>
      <div className="containerForm">
        <div className="row rowForm">
          <div className="containerInput">
            <div className="card-search">
              <div className="input-box ">
                <input
                type="text"
                className="form-control mr-sm-2 inputSearch"
                 onChange={handleChange} 
                placeholder="Buscar marcas o productos.."
                aria-expanded="false"
                />                
              </div>
            </div>
              {
                search.length!== 0 && search.length!== productsCollection.length &&
                <div className="list border-bottom ">
                  <div className="px-4 listProducts overflow-auto">
                    {
                      search.map((items, index)=>
                      <Link to={`/item/${items.id}`} className='my-2 productItem' key={index}>
                        <p>{items.name}</p>
                        <img src={items.img[0]} style={styleImgList} />
                      </Link>
                      )
                    }
                  </div>                   
                </div>
              }
          </div>
        </div> 
      </div>  
    </div>
  )
}
