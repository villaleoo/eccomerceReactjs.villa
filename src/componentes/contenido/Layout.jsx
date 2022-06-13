import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import NavBar from '../header/navbar/NavBar'
import '../../css/layout.scss'


const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout