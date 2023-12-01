import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import './layout.scss'
const Layout = () => {
  return (
    <div id='layout'>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
    <Footer/>
    </div>
  )
}

export default Layout