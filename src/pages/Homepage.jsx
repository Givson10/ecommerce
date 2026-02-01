import React from 'react'
import WelcomeBanner from '../compoents/Home/WelcomeBanner'
import ProductCard from '../compoents/Products/ProductCard'
import { products } from '../data/ProductData'
import Practicestate from '../compoents/common/Practicestate'

const Homepage = () => {
  return (
    <div className="space-y-8">
      <WelcomeBanner user='Givson'/>

      <div>
        <h1 className="text-2xl font-bold mb-4 text-indigo-700">Highlighted Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
      <Practicestate/>
    </div>
  )
}

export default Homepage