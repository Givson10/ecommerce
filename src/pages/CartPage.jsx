
import React from 'react'
import { useCart } from '../hooks/useCart'
import ProductCard from '../compoents/Products/ProductCard'
import './CartPage.css'


function CartPage() {
  const { cartItems, cartCount, cartTotal} = useCart()

  return (
    
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">
          Cart {cartCount > 0 && <span className="cart-count-text">({cartCount} items)</span>}
        </h2>
        <p className="cart-total">Cart Total: ${cartTotal}</p>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty.</div>
      ) : (
        <div className="cart-grid">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CartPage