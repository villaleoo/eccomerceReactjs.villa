import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetail/itemDetail.scss'
import { ItemError } from '../ItemListContainer/itemError/ItemError'
import { useFirebase } from '../../../hooks/useFirebase'


const ItemDetailContainer = () => {
    const params = useParams()
    
    const {fetchGetIndividualProduct,productDoc}= useFirebase()
    
    
    
    useEffect(() => {
      fetchGetIndividualProduct(params.id)
      
      return () => {
      }
    },[])
    
    console.log(productDoc);
    
    
   
  return (
    <div className="d-flex w-100">
      {productDoc ? 
        <ItemDetail item={productDoc}/> 
      :
      productDoc === null ?
        <div className='d-flex justify-content-center align-items-center w-100 p-3'>
          <div className="lds-hourglass"></div>
        </div>
      : 
      <ItemError/>
      }
     
    </div>
  )
}


export default ItemDetailContainer