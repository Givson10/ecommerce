import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'
import CartProvider from './Context/CartContext'
import CartPage from './pages/CartPage'

function App() {
  return (
    <CartProvider>
   
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </CartProvider>
    
  )
}

export default App