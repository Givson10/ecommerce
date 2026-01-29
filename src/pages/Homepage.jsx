import React from 'react'
import WelcomeBanner from '../compoents/Home/WelcomeBanner'
import ProductCard from '../compoents/Products/ProductCard'
import { products } from '../data/ProductData'

const Homepage = () => {
  return (
    <div>
        <WelcomeBanner user='Givson'/>

        <div>
            <h1>Highlighted Products</h1>
                <div>
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}/>
                    ) 
                    )}
                </div>
                    
                    </div>
    </div>
  )
}

export default Homepage