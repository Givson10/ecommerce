import React from 'react'
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const isCart = isInCart(product.id);

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      {isCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="remove-button"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="add-button"
        >
          Add To Cart
        </button>
      )}
    </Link>
  );
}

export default ProductCard