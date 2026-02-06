import React from 'react'
import './SearchProduct.css'

function SearchProduct({setSearch}) {
    function onType(event){
        setSearch(event.target.value)

    }
  return (
    <form className="search-form">
        <input 
          type='text' 
          placeholder='Enter Product Name'
          onChange={onType}
          className="search-input"
        />
    </form>
  )
}

export default SearchProduct