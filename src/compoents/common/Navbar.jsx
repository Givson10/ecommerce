import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import './Navbar.css'

function Navbar () {
  const{cartCount}=useCart();
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Ecommerce</h1>
      <div className="navbar-links">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/products' className="nav-link">Products</Link>
        <Link to='/cart' className="nav-link cart-link">Cart<span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar