import React from 'react'
import {collection,addDoc,} from 'firebase/firestore'
import db from '../service/firebase'


export const useFirebase = () => {
    

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
      fetchGenerateTicket
  }
}
