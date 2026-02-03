import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(product) {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) return;

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }

  function isInCart(productId) {
    return cartItems.some((item) => item.id === productId);
  }

  function removeFromCart(productId) {
    const currentItems = cartItems;
    const updatedItems = currentItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }

  const cartCount = cartItems.length;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setitems(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, cartCount, isInCart, removeFromCart, loading, cartItems, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;