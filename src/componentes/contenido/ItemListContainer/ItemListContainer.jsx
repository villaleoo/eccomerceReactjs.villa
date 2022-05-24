import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList/ItemList'
import { Sidebar } from './sidebar/Sidebar'
import { useLocation, useParams } from 'react-router-dom'
import db from '../../../service/firebase'
import {getDocs,collection} from 'firebase/firestore'





export const ItemListContainer = () => {
    const location = useLocation()
    const params= useParams()
    const [products, setProducts] = useState([])

    
    
    
    const getProducts= async()=>{
        const col = collection(db, 'products')
        try {
            const data = await getDocs(col)
            setTimeout(() => {
                const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
                setProducts(result)
            }, 2000);
            
        } catch (error) {
            console.log(error);
        }
    }

  
    
    let filterProducts= products.filter(item=> item.mark == params.id || item.productType == params.id)
    //falta filtrar por precio y deporte
    
    
    useEffect(()=>{

        getProducts()

    },[])
    
  return (
        <div className='d-flex w-100'>
            <Sidebar/>
            <ItemList product={filterProducts.length !== 0 ? (
                filterProducts
            )
            :
            (
                products
            )


            }/>
        </div>
  )
}
