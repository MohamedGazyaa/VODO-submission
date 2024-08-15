import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='px-4 py-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
