import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartState, cartItems, totalPrice } = useContext(CartContext);

  const sneakersElements = cartItems.map((item, index) => (
    <CartItem key={index} {...item} />
  ));

  return (
    <div
      className={`absolute w-96 h-96 top-8 -left-40 z-10 bg-white border-2 border-gray-600 filter drop-shadow-md  transition-all duration-300  
          ${
            cartState ? "opacity-100 visible" : "opacity-0 invisible"
          } no-scrollbar overflow-y-scroll 
          `}
    >
      <div className="h-12 border-b-2 border-gray-600 flex items-center pl-4">
        <h1 className="font-bold">Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex justify-center mt-8">
          <h1>Your Cart is Empty</h1>
        </div>
      ) : null}

      {cartItems.length > 0 ? sneakersElements : null}

      {cartItems.length > 0 ? (
        <div className="flex px-4 py-4 justify-between items-center">
          <div>
            <h1 className="text-sm">
              Total Price: <span className="font-semibold">${totalPrice}</span>
            </h1>
          </div>
          <button
            onClick={() => alert("Thank you for testing the website!")}
            className="bg-primary px-4 py-2 rounded-full text-sm text-white transition-all hover:bg-orange-300 active:scale-110"
          >
            Checkout
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
