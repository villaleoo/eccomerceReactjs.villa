import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetail/itemDetail.scss'
import { ItemError } from '../ItemListContainer/itemError/ItemError'
import { useFirebase } from '../../../hooks/useFirebase'
import { Spinner } from '../spinner/Spinner'
import './itemDetailContainer.scss'


const ItemDetailContainer = () => {
    const params = useParams()
    const {fetchGetIndividualProduct,productDoc}= useFirebase()
    
    useEffect(() => {
      fetchGetIndividualProduct(params.id)
      
      return () => {
      }
    },[])
    
   
  return (
    <div className="containerDetailProduct">
      {productDoc ?

        <ItemDetail item={productDoc}/> 

      :
      productDoc === null ?

      <div className='spinner'>
        <Spinner/>
      </div>
      
      : 
      
        <ItemError/>
      
      }
    </div>
  )
}


export default ItemDetailContainer