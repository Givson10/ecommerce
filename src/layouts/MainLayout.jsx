import React from 'react'
import Navbar from '../compoents/common/Navbar'
import Footer from '../compoents/common/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-6">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout