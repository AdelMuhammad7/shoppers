import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'
import NavBar from './assets/components/NavBar/NavBar'
import ToTop from './assets/components/ToTop/ToTop'


function Layout() {
  return (
    <>
        <NavBar />
        <Outlet />
        <ToTop />
        <Footer />
    </>
  )
}

export default Layout