import React, { useContext } from 'react'
import cart from '../assets/cart.svg'
import CartContext from '../context/CartContext'

const Card = ({name,price,img}) => {
  
  const { cardClick } = useContext(CartContext)

 

  return (
    <div className='flex flex-col items-center justify-center border filter shadow-md py-4 cursor-pointer hover:scale-105 parent' onClick={()=> cardClick(name,price,img)}>
        <img className='w-36' src={img} alt="img" />
        <h1 className='font-semibold text-center w-3/6 '>{name}</h1>

        <div className='mt-3 mb-5 flex gap-3'>
        <h1 className='font-bold'>${price}</h1>
        <img className='hover:scale-110' src={cart} alt="" />
        </div>
        
    </div>
  )
}

export default Card