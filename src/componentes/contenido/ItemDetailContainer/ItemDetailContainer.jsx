import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetail/itemDetail.scss'
import { ItemError } from '../ItemListContainer/itemError/ItemError'
import { useFirebase } from '../../../hooks/useFirebase'
import { Spinner } from '../spinner/Spinner'
import detailContainerStyle from './itemDetailContainer.scss'


const ItemDetailContainer = () => {
    const params = useParams()
    const {fetchGetIndividualProduct,productDoc}= useFirebase()
    
    useEffect(() => {
      fetchGetIndividualProduct(params.id)
      
      return () => {
      }
    },[])
    
   
  return (
    <div className="d-flex w-100 containerDetailProduct">
      {productDoc ? 
        <ItemDetail item={productDoc}/> 
      :
      productDoc === null ?
        <Spinner/>
      : 
      <ItemError/>
      }
    </div>
  )
}


export default ItemDetailContainer