import { createContext, useState , useEffect } from "react";

const CartContext = createContext()

export function CartProvider({ children }){
    
    const cardClick = (name,price,img) => {
        console.log(`Name: ${name} Price: ${price} image: ${img}`)
    }

    return(
        <CartContext.Provider value={{cardClick}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext