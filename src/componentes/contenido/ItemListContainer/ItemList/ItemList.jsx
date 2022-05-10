import React from 'react'
import { Item } from './Items/Item'
import  './itemList.css'


export const ItemList = ({producto}) => {
    
  return (
    <div className='bg-warning w-75 d-flex flex-wrap justify-content-around'>
        {producto.length > 0 ? (
            producto.map((item, index)=>(
                <div key={index} className='p-3'>
                    <Item
                    imagen={item.img}
                    nombre={item.nombre}
                    precio={item.precio}
                    id={item.id}
                    />
                </div>
            ))
        )
        :
        (
            <div className='d-flex justify-content-center align-items-center w-100 p-3'>
                <div className="lds-hourglass"></div>
            </div>
        )
        }
    </div>
  )
}




