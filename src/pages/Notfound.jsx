import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">404 No Page Found</h1>
        <Link to='/' className="text-indigo-600 hover:underline font-medium">Go to Home</Link>
    </div>
  )
}

export default Notfound