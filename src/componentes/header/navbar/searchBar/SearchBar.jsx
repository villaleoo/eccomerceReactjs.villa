import React, { useEffect, useState } from 'react';
import { useFirebase } from '../../../../hooks/useFirebase';
import styles from './searchBar.scss'
import {Link} from 'react-router-dom'
import { ItemList } from '../../../contenido/ItemListContainer/ItemList/ItemList'

export const SearchBar = () => {
    const {fetchGetProducts,productsCollection}= useFirebase();

    const [search, setSearch]=useState([]);
    const [searching, setSearching]=useState('');
    
    let styleImgList={
      width:'150px',
      heigth:'150px'
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
   
    console.log(search);
   
  return (
    <div className='bg-danger w-100'>

            <div className=" position-absolute containerForm">
                <div className="row d-flex  rowForm">
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
                           <div className="list border-bottom bg-white">
                             <div className="d-flex flex-column px-4 listProducts overflow-auto">
                             {
                                   search.map((items, index)=>
                                    <Link to={`/item/${items.id}`} className='d-flex bg-danger justify-content-between align-items-center my-2' key={index}>
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
