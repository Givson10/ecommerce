import React from 'react'

function WelcomeBanner({ user = "Explorer" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      
      <div className="flex flex-col items-center justify-center h-56 px-8 
                      bg-linear-to-br from-blue-600 via-indigo-600 to-violet-700 
                      border border-white/10">
        
        <p className="text-blue-100 text-sm font-medium uppercase tracking-widest mb-2 opacity-80">
        Pablo Emilio Escobar Gaviria
        </p>
        
        <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-md">
          Welcome, <span className="text-transparent bg-clip-text bg-linear-to-t from-blue-200 to-white">
            {user}
          </span>
        </h1>
        
        <div className="mt-4 h-1 w-12 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}

export default WelcomeBanner