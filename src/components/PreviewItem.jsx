import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import PreviewItemContext from '../context/PreviewItemContext'

const PreviewItem = () => {

  const { item:{name,price,img} } = useContext(PreviewItemContext)
  const { addToCart } = useContext(CartContext)
  return (
    <main className='grow mt-10'>
        <div className='pl-44 pr-52 mt-10 flex gap-32 items-center justify-center'>
          <div><img className='w-[33rem]] h-[33rem] object-contain' src={img} alt="img" /></div>
          <div className='pt-24   w-[40%]'>
            <h1 className='text-lg text-primary font-bold'>Sneaker Company</h1>
            <h2 className='mt-7 text-4xl font-bold capitalize'>{name}</h2>
            <p className='mt-11 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit mollitia ea cupiditate officiis. Esse dicta incidunt optio eaque doloribus velit blanditiis alias minus, sequi inventore, quos aperiam, aut labore libero.</p>

            <div className='flex items-center gap-8 mt-16'>
              <h1 className='font-bold text-lg'>${price}</h1>
              {/* <div className='bg-orange-300 w-11 flex items-center justify-center rounded'>
                <h1 className='text-sm font-bold'>50%</h1>
              </div> */}
            </div>
            {/* <h1 className='mt-2 text-sm line-through text-gray-400'>$125.00</h1> */}

            <div className='flex items-center gap-5 mt-11'>
              <div className='flex items-center gap-8 bg-blue-100 rounded-lg py-2 px-4'>
                  <i className="fa-solid fa-minus cursor-pointer text-primary hover:text-orange-600 active:scale-110 transition-all"></i>
                    <p>0</p>
                  <i className="fa-solid fa-plus cursor-pointer text-primary hover:text-orange-600 active:scale-110 transition-all"></i>
              </div>
              <div onClick={addToCart} className='flex py-4 w-1/2 bg-primary items-center justify-center rounded-xl shadow-md gap-4 cursor-pointer hover:bg-orange-400 active:scale-110 transition-all'>
              <i className="fa-solid fa-cart-shopping text-white"></i>
                <button className='text-white' >Add to cart</button>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default PreviewItem