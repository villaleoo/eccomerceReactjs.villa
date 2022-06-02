import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList/ItemList'
import { Sidebar } from './sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../../../hooks/useFirebase'





export const ItemListContainer = () => {
    const params= useParams()
    const {productsCollection,fetchGetProducts}= useFirebase()

    
    // //falta filtrar por precio y deporte
    useEffect(()=>{
        
        fetchGetProducts()
        
    },[])
    let filterProducts= productsCollection.filter(item=> item.mark == params.id || item.productType == params.id)
    
  return (
        <div className='d-flex w-100'>
            <Sidebar/>
            <ItemList product={filterProducts.length !== 0 ? (
                filterProducts
            )
            :
            (
                productsCollection
            )
            }/>
        </div>
  )
}
