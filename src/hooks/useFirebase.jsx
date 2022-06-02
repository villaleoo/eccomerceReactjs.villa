import React, { useState } from 'react'
import {collection,addDoc,getDocs,getDoc,doc} from 'firebase/firestore'
import db from '../service/firebase'
import { useParams } from 'react-router-dom'


export const useFirebase = () => {
    
    const [productsCollection, setProductsCollection] = useState([])
    const [productDoc, setProductDoc] = useState(null)
   
   
    
    const fetchGetProducts= async()=>{
        const col = collection(db, 'products')
        try {
            const data = await getDocs(col)
            setTimeout(() => {
                const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
                setProductsCollection(result)
            }, 2000);
            
        } catch (error) {
            console.log(error);
        }
    }
   

    const fetchGetIndividualProduct =  async (id) => {
        const getItemsPromise = collection(db,'products')
      try {
         const data = await getDocs(getItemsPromise)
         setTimeout(() => {
           const result = data.docs.map(doc=> doc = {id:doc.id, ...doc.data()}) 
           setProductDoc(result.find(item=>item.id == id)) //opté por traer TODOS los productos y filtrar el item seleccionado
         }, 1000);
        } catch (error) {
          console.log(error);
        }
      };





    const fetchGenerateTicket = async ({dataBuyer})=>{
        console.log(dataBuyer);
        try {
            const col = collection(db,"orders")
            const order =  await addDoc(col,dataBuyer)
            alert(`Su compra fue procesada con exito. codigo de compra: ${order.id}`)
        } catch (error) {
            console.log(error)
        }
    }
    
    

  return {
      fetchGenerateTicket,
      fetchGetProducts,
      fetchGetIndividualProduct,
      productsCollection,
      productDoc
  }
}
