import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'

function App() {
  return (
    <Routes>
      <Route path='/' 
      element={<MainLayout/>}>

        <Route 
        index 
        element={<Homepage/>}/>

      </Route>
      <Route path='*'
      element={<Notfound/>}/>
    </Routes>
  )
}

export default App