import React from 'react'
import { useCart } from '../../hooks/useCart';

function ProductCard({ product }) {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const isCart = isInCart(product.id);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border border-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-bold mb-1 text-gray-900">{product.name}</h3>
      <p className="text-indigo-600 font-extrabold mb-4">${product.price}</p>
      {isCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="w-full py-2 rounded-lg bg-red-100 text-red-700 font-semibold border border-red-200 hover:bg-red-200 transition-colors duration-200"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard