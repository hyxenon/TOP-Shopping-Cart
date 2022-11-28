import React from 'react'
import cart from '../assets/cart.svg'

const Card = ({name,price,img}) => {
  return (
    <div className='flex flex-col items-center justify-center border filter shadow-md py-4'>
        <img className='w-36' src={img} alt="img" />
        <h1 className='font-semibold text-center w-3/6 '>{name}</h1>

        <div className='mt-3 mb-5 flex gap-3'>
        <h1 className='font-bold'>${price}</h1>
        <img className='' src={cart} alt="" />
        </div>
        
    </div>
  )
}

export default Card