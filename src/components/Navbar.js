import React from 'react'
import logo from '../image/logo.png'


const Navbar = () => {
  return (
    <>
      

<nav className="border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-bold text-red-900 whitespace-nowrap ">Gourmet Bites</span>
    </a>
    <img src={logo} alt="Gourmet Bites Logo" className="rounded-full object-cover h-10 w-10" />
  </div>
</nav>


    </>
  )
}

export default Navbar
