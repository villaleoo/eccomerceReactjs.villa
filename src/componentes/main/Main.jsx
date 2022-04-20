import React from 'react'
import { Card } from '../cards/Card'
import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import NavBar from '../navbar/NavBar'
import { Sidebar } from '../sidebar/Sidebar'


export const Main = () => {
  return (
    <>
        <NavBar/>
        <div className='d-flex'>
            <Sidebar/>
        <Content>
            <Card
                imagen={'https://http2.mlstatic.com/D_NQ_NP_976200-MLA48068020264_102021-W.jpg'}
                nombre={'Air Vapor 7'}
                precio={'$10700'}
            />
            <Card
                nombre={'eseentials adidas'}       //a esto de las cards lo haria desde el content.jsx para que el main no quede cargado pero por ahora lo deje asi para demostrar que comprendi el uso
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
        </Content>
        </div>
        <Footer/>
    </>
  )
}
