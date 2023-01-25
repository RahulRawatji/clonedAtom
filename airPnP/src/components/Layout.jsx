import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen p-4'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout