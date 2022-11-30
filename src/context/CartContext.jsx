import { createContext, useState , useEffect } from "react";

const CartContext = createContext()

export function CartProvider({ children }){
    
    const [cartState, setCartState] = useState(false)

    const [count, setCount] = useState(localStorage.getItem('count') || 0)

    useEffect(()=> {
        localStorage.setItem('count', count)
    },[count])

    const cartClick = () => {
        setCartState(oldState=> !oldState)
    }

    const addToCart = () => {
        setCount(oldCount => Number(oldCount) + 1)
    }
    return(
        <CartContext.Provider value={{cartState, count ,cartClick,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext