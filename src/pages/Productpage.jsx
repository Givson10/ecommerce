import React, { useEffect, useState } from 'react'
import ProductCard from '../compoents/Products/ProductCard'
import { useCart } from '../hooks/useCart'

import categorydata from '../data/Categories';
import CategoryTab from '../compoents/Products/CategoryTab';
import SearchProduct from '../compoents/Products/SearchProduct';
  


export default function Productpage() {
  
  const {items, loading} = useCart();
  const [selectedCategory,setSelectedCategory] = useState("");
  const [search,setSearch]=useState("")
  console.log("search",search);
  console.log("selectedCategory",selectedCategory);
  const filterItems = selectedCategory === "" ? items : items.filter((product)=> product.category === selectedCategory);
  console.log("filterItems",filterItems);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-blue-600 to-pink-600 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-white text-center mb-12 drop-shadow-lg">
          Products
        </h2>
        
        <SearchProduct setSearch={setSearch}/>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <CategoryTab
            categoryName="All"
            setSelectedCategory={setSelectedCategory}
            key="all"
            isSelected={selectedCategory === ""}
          />
          
          {categorydata.map((category) => (
            <CategoryTab
              categoryName={category}
              setSelectedCategory={setSelectedCategory}
              key={category}
              isSelected={selectedCategory === category}
            />
          ))}
        </div>
        
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white text-2xl font-semibold bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl">
              Loading...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterItems.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}