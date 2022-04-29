import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList/ItemList'



export const ItemListContainer = () => {

    const [producto, setProducto] = useState([])

    const productos = [
        {nombre:'Airmax evo 3', marca:'nike', precio:10800, genero: 'unisex',stock:10,img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4773435f/products/NI_CD6864-110/NI_CD6864-110-1.JPG'},
        {nombre:'Grand Court Base',marca:'adidas', precio:13000,genero:'unisex',stock:8,img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw31fa82c5/products/AD_EF0103/AD_EF0103-1.JPG'},
        {nombre:'Vans old skol', marca:'vans', precio:14000,genero:'unisex',stock:5,img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff03ddbe/products/VA_VN000D3HNVY/VA_VN000D3HNVY-1.JPG'},
        {nombre:'X-ray Lite', marca:'puma',precio:13000,genero:'unisex',stock:7,img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42fbda1c/products/PU_374122-10/PU_374122-10-1.JPG'}
    ]

    
    
    useEffect(()=>{
        const obtenerProductos = new Promise ((resolve,reject)=>{
            setTimeout(() => {
               resolve(productos) 
            }, 2000);
        })
        obtenerProductos.then ((res)=>{setProducto(res)})
        .catch((err)=> console.log(err))
    },[])
    console.log(producto)

  return (
        <div className='d-flex w-100'>
            <ItemList producto={producto}/>
        </div>
  )
}
