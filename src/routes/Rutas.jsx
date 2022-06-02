import { BrowserRouter, Routes, Route } from "react-router-dom"


import ItemDetailContainer from "../componentes/contenido/ItemDetailContainer/ItemDetailContainer"
import { ItemError } from "../componentes/contenido/ItemListContainer/itemError/ItemError"
import { ItemListContainer } from "../componentes/contenido/ItemListContainer/ItemListContainer"

import Layout from "../componentes/contenido/Layout"
import { LayoutDetail } from "../componentes/contenido/LayoutDetail"
import { CardWidget } from "../componentes/header/navbar/CardWidget/CardWidget"
import { Checkout } from "../componentes/header/navbar/CardWidget/checkout/Checkout"


export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/cart" element={<CardWidget/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path="*" element={<ItemError/>}/>
                </Route>
                <Route path="/item/:id" element={<LayoutDetail/>}>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
