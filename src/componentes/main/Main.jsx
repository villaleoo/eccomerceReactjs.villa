import React from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'


export const Main = () => {

  return (
    <>
        <div className="padreContenido d-flex">
        <Sidebar/>
        <ItemListContainer/>
        </div>
    </>
  )
}
