import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProductPage() {
    const params = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(params)

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await response.json()
            setItem(data)
            setLoading(false)
          } catch (error) {
            console.error('Error fetching products:', error)
            setLoading(false)
          }
        }
        fetchProducts()
      }, [])

      console.log("items", item)
      console.log("loading", loading)

      if(loading){
        return <div className="flex justify-center items-center h-screen bg-linear-to-br from-purple-600 to-pink-600">
          <div className="text-white text-2xl font-semibold bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl animate-pulse">
            Loading...
          </div>
        </div>
      }


    return (
        <div className="min-h-screen bg-linear-to-br from-purple-600 via-blue-600 to-pink-600 p-8">
            <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1 flex justify-center items-center bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        <img src={item.image}
                        className="relative z-10 w-96 h-96 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                        alt={item.title}
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl font-black bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">{item.title}</h1>
                        <div className="inline-block bg-linear-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            Category: {item.category}
                        </div>
                        <p className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">${item.price}</p>
                        <div className="flex items-center gap-2 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-2xl font-semibold shadow-lg w-fit">
                            <span className="text-xl">⭐</span>
                            <span>{item.rating.rate} ({item.rating.count} reviews)</span>
                        </div>
                        <p className="text-white text-lg leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-blue-400 shadow-lg">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage