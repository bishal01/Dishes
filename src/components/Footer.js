import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div class="fixed bottom-0 w-full bg-white border-t border-gray-200">
  <div class="flex justify-around items-center py-2">
    <Link to="entree" class="flex flex-col items-center space-y-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-7 9 7-9 7-9-7z" />
      </svg>
      <span class="text-xs text-gray-600">Home</span>
    </Link>

    <Link to="/" class="flex flex-col items-center space-y-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6H4l8 8 8-8zM4 18h16l-8-8-8 8z" />
      </svg>
      <span class="text-xs text-gray-600">Main Course</span>
    </Link>

    <Link to="desert" class="flex flex-col items-center space-y-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21c-1.3 0-2.4-.9-2.8-2.1L4 14c-.6-.6-.6-1.4 0-2l7.2-7.2C11.6 4.4 12.3 4 13 4s1.4.4 1.8 1L22 12c.6.6.6 1.4 0 2l-5.2 5.2c-.4 1.2-1.5 2.1-2.8 2.1h-2z" />
      </svg>
      <span class="text-xs text-gray-600">Dessert</span>
    </Link>

    <Link to="cart" class="flex flex-col items-center space-y-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-3 13H6L3 3zM9 20a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
      <span class="text-xs text-gray-600">Cart</span>
    </Link>
  </div>
</div>

    </div>
  )
}

export default Footer
