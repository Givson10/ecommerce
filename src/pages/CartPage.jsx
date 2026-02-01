import React from 'react'
import { useCart } from '../hooks/useCart';
import ProductCard from '../compoents/Products/ProductCard';

function CartPage() {
    const {items,cartCount} = useCart();

    console.log("items in cart", items);
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4 text-indigo-700">Highlighted Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
  )
}

export default CartPage