import React from 'react'

function CategoryTab({categoryName, setSelectedCategory, isSelected}) {

    function handleClick() {
        if (categoryName === "All") {
            setSelectedCategory("");
        } else {
            setSelectedCategory(categoryName);
        }
    }
    
  return (
    <button 
      onClick={handleClick} 
      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
        isSelected 
          ? 'bg-white text-purple-600 shadow-xl' 
          : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
      }`}
    >
        {categoryName}
    </button>
  )
}

export default CategoryTab