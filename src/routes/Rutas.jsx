import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "../componentes/contenido/ItemDetailContainer/ItemDetailContainer"
import { ItemError } from "../componentes/contenido/ItemListContainer/itemError/ItemError"
import { ItemListContainer } from "../componentes/contenido/ItemListContainer/ItemListContainer"
import Layout from "../componentes/contenido/Layout"
import { Checkout } from "../componentes/header/navbar/Cart/checkout/Checkout"
import { Cart } from "../componentes/header/navbar/Cart/Cart"


export const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path='/price/:min/:max' element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path="*" element={<ItemError/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
