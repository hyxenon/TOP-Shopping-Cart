import React from 'react'
import logo from '../../assets/logo.svg'
import cart from "../../assets/cart.svg"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='pl-[175px] pr-[213px] py-[50px] shadow drop-shadow-sm flex items-center'>

        <div className='flex items-center gap-12'>
            <img src={logo} alt="../../assets/logo.svg" />
            <ul className='flex justify-around items-center gap-10 filter '>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105 '><Link to="/">Collections</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/men">Men</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/women">Women</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/about">About</Link></li>
            </ul>
        </div>

        <div className='ml-auto flex items-center gap-7'>
          <img className='cursor-pointer active:scale-110' src={cart} alt="../../assets/cart.svg" />
          <h1 className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-110 '><Link to="/login">Login</Link></h1>
        </div>
    </nav>
  )
}

export default Navbar