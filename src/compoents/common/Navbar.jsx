import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';

function Navbar () {
  const{cartCount}=useCart();
  return (
    <nav className="bg-indigo-700 px-6 py-3 flex items-center justify-between shadow">
      <h1 className="text-xl font-semibold text-white tracking-tight">Ecommerce</h1>
      <div className="space-x-4">
        <Link to='/' className="text-white hover:text-indigo-300 transition-colors duration-150 font-medium">Home</Link>
        <Link to='/products' className="text-white hover:text-indigo-300 transition-colors duration-150 font-medium">Products</Link>
        <Link to='/cart' className="text-white hover:text-indigo-300 transition-colors duration-150 font-medium">Cart{cartCount}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar