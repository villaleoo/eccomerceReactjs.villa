import React from 'react'
import { Card } from './cards/Card'

export const ItemListContainer = () => {
  return (
    <div className='d-flex w-100 bg-warning justify-content-around flex-wrap align-items-center'>
        <Card
            imagen={'https://http2.mlstatic.com/D_NQ_NP_976200-MLA48068020264_102021-W.jpg'}
            nombre={'Air Vapor 7'}
            precio={'$10700'}
        />
        <Card
            nombre={'eseentials adidas'}      
            precio={'$10700'}
        />
        <Card
            nombre={'nike tanju'}
            precio={'$10700'}
        />
       <Card
            nombre={'puma pride'}
            precio={'$10700'}
        />
        <Card
            nombre={'airmax'}
            precio={'$10700'}
        />
        <Card
            nombre={'camperon adidas'}
            precio={'$10700'}
        />
    </div>
  )
}
