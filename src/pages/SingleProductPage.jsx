import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProductPage.css'

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
        return <div className="loading">Loading...</div>
      }


    return (
        <div className="product-container">
            <div className="product-content">
                <div className="product-image">
                    <img src={item.image}
                    height={400}
                    width={400}
                    alt={item.title}
                    />
                </div>
                <div className="product-details">
                    <h1 className="product-title">{item.title}</h1>
                    <p className="product-category">Category: {item.category}</p>
                    <p className="product-price">${item.price}</p>
                    <p className="product-rating">⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
                    <p className="product-description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage