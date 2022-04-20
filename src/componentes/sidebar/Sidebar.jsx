import React from 'react'
import { SidebarPrimero } from '../sidebar/SidebarPrimero'
import { SidebarSegundo } from '../sidebar/SidebarSegundo'

export const Sidebar = () => {
  return (
    <aside className='w-20'>
        <SidebarPrimero
                tipoProducto1={'Zapatillas'}
                unidades1={20}
                tipoProducto2={'Remeras'}
                unidades2={50}
                tipoProducto3={'Pantalones'}
                unidades3={15}
                tipoProducto4={'Camperas'}
                unidades4={12}
            />
            <SidebarSegundo
                marca1={'Adidas'}
                unidades1={20}
                marca2={'Nike'}
                unidades2={23}
                marca3={'Vans'}
                unidades3={18}
                marca4={'Puma'}
                unidades4={21}
            />
    </aside>
  )
}
