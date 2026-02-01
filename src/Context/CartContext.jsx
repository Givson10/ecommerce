import React, { createContext, useState } from 'react'

export const CartContext = createContext();


function CartProvider({children}) {
    const [items,setitems] = useState([]);

    function addToCart(product) {

        setitems(prev=>[...prev,product]);
    }

    const cartCount = items.length;

  return (
    <CartContext.Provider value={{ items, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;