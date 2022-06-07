import React from 'react'
import { Item } from './Items/Item'
import  './itemList.scss'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../spinner/Spinner'


export const ItemList = ({product}) => {
    const params = useParams()
    
    
  return (
    <div className='productListContainer'>
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
           <Spinner/>
        )
        }
    </div>
  )
}




