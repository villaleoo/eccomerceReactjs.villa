import React from 'react'
import { SidebarPrimero } from './SideCards/SidebarPrimero'
import { SidebarSegundo } from './SideCards/SidebarSegundo'

export const Sidebar = () => {
  return (
    <aside className='w-25'>
        <SidebarPrimero
                tipoProducto1={'Zapatillas'}
                tipoProducto2={'Remeras'}
                tipoProducto3={'Shorts'}
                tipoProducto4={'Botines'}
                tipoProducto5={'Gorras'}
            />
            <SidebarSegundo
                marca1={'Adidas'}
                marca2={'Nike'}
                marca3={'Puma'}
            />
    </aside>
  )
}
