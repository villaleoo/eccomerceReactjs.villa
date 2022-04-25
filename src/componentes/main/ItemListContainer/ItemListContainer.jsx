import React from 'react'
import { Card } from './cards/Card'
import { ItemCount } from './cards/itemCount/ItemCount'


export const ItemListContainer = ({greeting}) => {
  return (
      <div className='d-flex flex-column'>
      <h4 className='text-center'>{greeting}</h4>
      <div className='d-flex w-100 h-100 bg-warning justify-content-around flex-wrap align-items-center'>
        <Card
            imagen={'https://http2.mlstatic.com/D_NQ_NP_976200-MLA48068020264_102021-W.jpg'}
            nombre={'Air Vapor 7'}
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={8}
                />
            }
        />
    
        <Card
            nombre={'eseentials adidas'}      
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={16}
                />
            }
        />
        <Card
            nombre={'nike tanju'}
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={10}
                />
            }
        />
       <Card
            nombre={'puma pride'}
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={2}
                />
            }
            />
        <Card
            nombre={'airmax'}
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={4}
                />
            }
            />
        <Card
            nombre={'camperon adidas'}
            precio={'$10700'}
            btnContador={
                <ItemCount
                initial={1}
                stock={6}
                />
            }
            />
    </div>
  </div>
  )
}
