import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetail/itemDetail.scss'
import { ItemError } from '../ItemListContainer/itemError/ItemError'
import db from '../../../service/firebase'
import {getDocs,collection} from 'firebase/firestore'




const ItemDetailContainer = () => {
    const location = useLocation()
    const {id} = useParams()
    const [item, setItem] = useState(null)
    

   
    
    
    const getItems = async()=>{
      const getItemsPromise = collection(db,'products')
      try {
         const data = await getDocs(getItemsPromise)
         setTimeout(() => {
           const result = data.docs.map(doc=> doc = {id:doc.id, ...doc.data()}) 
           setItem(result.find(item=>item.id == id)) //opté por traer TODOS los productos y filtrar el item seleccionado
         }, 1000);
        } catch (error) {
          console.log(error);
        }
      }


    
    
    useEffect(() => {
      getItems()
      
      return () => {
      }
    },[])
    
   
   
  
  return (
    <div className="d-flex w-100">
      {item ? 
        <ItemDetail item={item}/> 
      :
      item === null ? 
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