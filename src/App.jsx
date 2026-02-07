import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'
import CartProvider from './Context/CartContext'
import CartPage from './pages/CartPage'
import Productpage from './pages/Productpage'
import SingleProductPage from './pages/SingleProductPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './Context/AuthContext'
import ProtectedRoutes from './compoents/common/ProtectedRoutes'

function App() {
  return (
    <AuthProvider>
    <CartProvider>
   
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="/products" element={<Productpage/>}/>
          <Route path="products/:id" element={<ProtectedRoutes>
            <SingleProductPage/>
          </ProtectedRoutes>}/> 
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
        
      </Routes>
      </CartProvider>
      </AuthProvider>
    
  )
}

export default App