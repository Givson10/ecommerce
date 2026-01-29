import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <h1>Ecommerce</h1>
        <Link to='/'>Home</Link>
        <Link to='/products'>products</Link>
    </nav>
  )
}

export default Navbar