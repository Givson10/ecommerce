import React from 'react'

const Footer = () => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-width="2"/></svg>
            <span class="text-xs text-gray-500 group-hover:text-black">Home</span>
        </button>
        <button class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="2"/></svg>
            <span class="text-xs text-gray-500 group-hover:text-black">Search</span>
        </button>
        <button class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-width="2"/></svg>
            <span class="text-xs text-gray-500 group-hover:text-black">Cart</span>
        </button>
        <button class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-width="2"/></svg>
            <span class="text-xs text-gray-500 group-hover:text-black">Profile</span>
        </button>
    </div>
</div>
   
  )
}

export default Footer