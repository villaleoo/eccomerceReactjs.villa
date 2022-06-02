import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { HeaderDetail } from '../header/HeaderDetail'



export const LayoutDetail = () => {
  return (
    <>
        <HeaderDetail/>
        <Outlet/>
        <Footer/>
    </>
  )
}
