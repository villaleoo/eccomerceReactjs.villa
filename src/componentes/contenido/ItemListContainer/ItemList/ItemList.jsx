import React from 'react'
import { Item } from './Items/Item'
import  './itemList.scss'
import { useParams } from 'react-router-dom'


export const ItemList = ({product}) => {
    const params = useParams()
    
    
  return (
    <div className='w-75 d-flex flex-wrap justify-content-around productListContainer'>
        {params.id!= undefined &&
            <h2 className='col-12'>Mostrando categoria/s: {params.id.toUpperCase()}.</h2>
        }
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




