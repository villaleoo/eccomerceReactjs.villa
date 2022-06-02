import React from 'react'
import { Item } from './Items/Item'
import  './itemList.css'


export const ItemList = ({product}) => {
    console.log(product);
    
  return (
    <div className='bg-warning w-75 d-flex flex-wrap justify-content-around'>
        {product.length > 0 ? (
            product.map((item, index)=>(
                <div key={index} className='p-3'>
                    <Item
                    img={item.img[0]}
                    name={item.name}
                    price={item.price}
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




