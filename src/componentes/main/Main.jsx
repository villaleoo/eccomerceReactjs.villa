import React from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'

export const Main = ({greeting}) => {

  return (
    <>
        <h4 className='text-center'>{greeting}</h4>
        <div className="padreContenido d-flex">
        <Sidebar/>
        <ItemListContainer/>
        </div>
    </>
  )
}
