import { BrowserRouter, Routes, Route } from "react-router-dom"


import ItemDetailContainer from "../componentes/contenido/ItemDetailContainer/ItemDetailContainer"
import { ItemError } from "../componentes/contenido/ItemListContainer/itemError/ItemError"
import { ItemListContainer } from "../componentes/contenido/ItemListContainer/ItemListContainer"


import Layout from "../componentes/contenido/Layout"
import { CardWidget } from "../componentes/header/navbar/CardWidget/CardWidget"

export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<CardWidget/>}/>
                    <Route path="*" element={<ItemError/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
