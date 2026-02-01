import React from 'react'
import { useCart } from '../../hooks/useCart';

function ProductCard({product}) {

  const {addToCart} = useCart();
  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3"/>
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-indigo-700 font-bold">${product.price}</p>
        <button onClick={() => addToCart(product)} className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          Add to Cart
        </button>
    </div>
  )
}
export default ProductCard