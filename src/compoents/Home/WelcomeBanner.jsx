import React from 'react'

function WelcomeBanner({user}) {
  return (
    <div className="flex items-center justify-center h-48 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white">
        Welcome, {user}
      </h1>
    </div>
  )
}

export default WelcomeBanner