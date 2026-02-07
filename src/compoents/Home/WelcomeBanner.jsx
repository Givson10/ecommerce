import React from 'react'

function WelcomeBanner({ user = "Explorer" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl my-8">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
      
      <div className="relative flex flex-col items-center justify-center h-72 px-8 bg-linear-to-br from-purple-600 via-indigo-600 to-violet-700 border border-white/10">
        
        <p className="text-yellow-200 text-sm font-semibold uppercase tracking-widest mb-4 opacity-90 animate-pulse">
        Pablo Emilio Escobar Gaviria
        </p>
        
        <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg text-center leading-tight">
          Welcome, <span className="bg-linear-to-r from-pink-300 via-yellow-200 to-pink-300 bg-clip-text text-transparent animate-pulse">
            {user}
          </span>
        </h1>
        
        <div className="mt-6 h-1 w-20 bg-linear-to-r from-pink-400 to-yellow-300 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export default WelcomeBanner