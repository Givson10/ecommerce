import React from 'react'

function ProductRange({setMinValue,setMaxValue}) {

    function setMin(event){
        setMinValue(event.target.value);
         
    }

    function setMax(event){
        setMaxValue(event.target.value);

    }

  return (
    <div className="flex justify-center items-center gap-8 mb-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-2">
            <label className="text-white font-semibold text-sm tracking-wide drop-shadow-md">Min price:</label>
            <input 
                type='number'
                onChange={setMin}
                className="px-4 py-3 border-none rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 outline-none text-gray-800 font-medium text-center w-32 hover:shadow-xl hover:-translate-y-0.5 focus:shadow-2xl focus:-translate-y-1 focus:bg-white/95 focus:ring-2 focus:ring-purple-400/50"
            />
        </div>
        <div className="flex flex-col items-center gap-2">
            <label className="text-white font-semibold text-sm tracking-wide drop-shadow-md">Max price:</label>
            <input 
                type='number'
                onChange={setMax}
                className="px-4 py-3 border-none rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 outline-none text-gray-800 font-medium text-center w-32 hover:shadow-xl hover:-translate-y-0.5 focus:shadow-2xl focus:-translate-y-1 focus:bg-white/95 focus:ring-2 focus:ring-purple-400/50"
            />
        </div>
    </div>
  )
}

export default ProductRange