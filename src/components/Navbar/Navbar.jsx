import React from 'react'
import logo from '../../assets/logo.svg'
import cart from "../../assets/cart.svg"
import { Link } from 'react-router-dom'
import anonymous from "../../assets/anonymous.png";

const Navbar = ({ isLogIn, userName , logOut }) => {

  const loginElement = <h1 className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-110 '><Link to="/login">Login</Link></h1>
  
  const userElement = (
    <div className='flex items-center -my-7 gap-3'>
      <div className='flex flex-col items-center'>
        <img className='w-14 h-14 cursor-pointer' src={anonymous} alt="anonymous" />
        <h1 className='text-sm'>{userName}</h1>
      </div>
      <button onClick={logOut} className='text-xs bg-primary py-2 px-4 rounded-xl cursor-pointer text-white hover:bg-orange-400 active:scale-110 transition-all'>Log Out</button>
    </div>
  )

  return (
    <nav className='pl-[175px] pr-[213px] py-[50px] border-b border-gray-500 shadow drop-shadow-sm flex items-center'>

        <div className='flex items-center gap-12'>
            <img src={logo} alt="../../assets/logo.svg" />
            <ul className='flex justify-around items-center gap-10 filter '>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105 '><Link to="/">Collections</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/men">Men</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/women">Women</Link></li>
              <li className='font-kumbh font-semibold text-semiGray cursor-pointer transition-all hover:text-gray-800 active:scale-105'><Link to="/about">About</Link></li>
            </ul>
        </div>

        <div className='ml-auto flex gap-7'>
          <img className='cursor-pointer active:scale-110' src={cart} alt="../../assets/cart.svg" />
          {isLogIn ? userElement : loginElement }
        </div>
    </nav>
  )
}

export default Navbar