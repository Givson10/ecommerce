
import React from 'react'
import { useCart } from '../hooks/useCart'
import ProductCard from '../compoents/Products/ProductCard'


function CartPage() {
  const { cartItems, cartCount, cartTotal} = useCart()

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p>Cart Total :${cartTotal}</p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Cart {cartCount > 0 && <span className="text-base text-gray-500">({cartCount} items)</span>}
      </h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CartPage