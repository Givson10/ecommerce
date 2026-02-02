import React, { useEffect, useState } from 'react'
import ProductCard from '../compoents/Products/ProductCard'
import { useCart } from '../hooks/useCart'

export default function Productpage() {
  
  const {items, loading} = useCart();

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-8 text-center tracking-tight">Products</h2>
      {loading ? (
        <div className="text-center text-gray-400 py-16 text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  )}