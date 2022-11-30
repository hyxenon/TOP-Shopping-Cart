import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cartState, count } = useContext(CartContext);

  return (
    <div
      className={`absolute w-96 h-64 top-8 -left-40 z-10 bg-white border-2 border-gray-600 filter drop-shadow-md  transition-all duration-300  
          ${
            cartState ? "opacity-100 visible" : "opacity-0 invisible"
          } no-scrollbar overflow-y-scroll 
          `}
    >
      <div className="h-12 border-b-2 border-gray-600 flex items-center pl-4">
        <h1 className="font-bold">Cart</h1>
      </div>

      <div className="flex justify-center mt-4">
        {count === 0 ? <h1>Your Cart is Empty</h1> : ""}
      </div>
    </div>
  );
};

export default Cart;
