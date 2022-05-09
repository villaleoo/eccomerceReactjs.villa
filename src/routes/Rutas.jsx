import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "../componentes/contenido/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../componentes/contenido/ItemListContainer/ItemListContainer"
import { Error } from "../componentes/contenido/ItemListContainer/notFound/Error.jsx"

import Layout from "../componentes/contenido/Layout"

export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
