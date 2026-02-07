import React from 'react'
import './SearchProduct.css'

function SearchProduct({setSearch}) {
    function onType(event){
        setSearch(event.target.value)

    
    }

    function onSubmit(e){
      e.preventDefault();



    }


  return (
    <form onSubmit={onSubmit} className="flex justify-center items-center w-full mb-8">
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