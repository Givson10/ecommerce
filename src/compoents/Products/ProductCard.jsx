import React from 'react'
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const isCart = isInCart(product.id);

  return (
    <Link to={`/products/${product.id}`} className="group relative bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-decoration-none border border-white/20 overflow-hidden backdrop-blur-sm hover:-translate-y-2 hover:scale-105">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
      <img
        src={product.image}
        alt={product.name}
        className="relative z-10 w-full h-96 object-cover rounded-xl mb-4 shadow-md group-hover:scale-105 transition-transform duration-300"
      />
      <h3 className="relative z-10 text-lg font-bold mb-2 text-center bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{product.name}</h3>
      <p className="relative z-10 text-2xl font-extrabold mb-6 bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">${product.price}</p>
      {isCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="relative z-10 w-full py-3 px-4 rounded-2xl bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-red-600 hover:to-pink-600 overflow-hidden group/btn"
        >
          <span className="absolute inset-0 bg-linear-to-r from-white/20 to-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></span>
          <span className="relative">Remove From Cart</span>
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="relative z-10 w-full py-3 px-4 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 overflow-hidden group/btn"
        >
          <span className="absolute inset-0 bg-linear-to-r from-white/20 to-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></span>
          <span className="relative">Add To Cart</span>
        </button>
      )}
    </Link>
  );
}

export default ProductCard