import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList/ItemList'
import { Sidebar } from './sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../../../hooks/useFirebase'
import './itemListContainer.scss'
import { ItemError } from './itemError/ItemError'





export const ItemListContainer = () => {
    const params= useParams()
    const {productsCollection,fetchGetProducts}= useFirebase()
  
    useEffect(()=>{
        
        fetchGetProducts()
        
    },[])
    
    let filterProducts= productsCollection.filter(item=> item.mark == params.id || item.productType == params.id || (item.price >= params.min & item.price <= params.max) || item.sport === params.id)
  
  return (
    <div className='containerContent'>
            {
                filterProducts.length > 0 ? (
                    <>
                        <Sidebar/>
                        <ItemList product={filterProducts}/>
                    </>
                )
                :
                params.id === undefined ? (
                    <>
                        <Sidebar/>
                        <ItemList product={productsCollection}/>
                    </>  
                )
                :
                (
                    <ItemError/>
                ) 
            }
    </div>
        
  )
}
