import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetail/itemDetail.scss'
import { ItemError } from '../ItemListContainer/itemError/ItemError'

const ItemDetailContainer = () => {
    const location = useLocation()
    const {id} = useParams()
    const [producto, setProducto] = useState(null)
    

    const productos = [
        {id:1,nombre:'Airmax evo 3',descripcion:'Una nueva generacion de zapatillas',producto:'zapatilla', marca:'nike', precio:10800, genero: 'unisex',stock:10,img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4773435f/products/NI_CD6864-110/NI_CD6864-110-1.JPG'},
        {id:2,nombre:'Grand Court Base',descripcion:'Una nueva generacion de zapatillas',producto:'zapatilla',marca:'adidas', precio:13000,genero:'unisex',stock:8,img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw31fa82c5/products/AD_EF0103/AD_EF0103-1.JPG'},
        {id:3,nombre:'Vans old skol',descripcion:'Una nueva generacion de zapatillas',producto:'zapatilla', marca:'vans', precio:14000,genero:'unisex',stock:5,img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff03ddbe/products/VA_VN000D3HNVY/VA_VN000D3HNVY-1.JPG'},
        {id:4,nombre:'X-ray Lite',descripcion:'Una nueva generacion de zapatillas',producto:'zapatilla', marca:'puma',precio:13000,genero:'unisex',stock:7,img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42fbda1c/products/PU_374122-10/PU_374122-10-1.JPG'}
    ]
    
    const obtenerProducto = productos.find(item=> item.id == id)

    const getItem = ()=>{
        const getItemPromise = new Promise ((resolve, reject)=>{
          resolve (obtenerProducto)
        })
        getItemPromise.then((res)=>{setProducto(res)})
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
      getItem()
    
      return () => {
      }
    },[])
    
   
  
  return (
    <div className="d-flex w-100">
      {producto ? <ItemDetail item={producto}/> : <ItemError/> }
       
    </div>
  )
}

export default ItemDetailContainer