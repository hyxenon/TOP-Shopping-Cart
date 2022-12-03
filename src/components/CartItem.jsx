import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ name, price, img, quantity }) => {
  const { deleteToCart, addQuantity, minusQuanity } = useContext(CartContext);

  return (
    <div className="w-full px-4 py-1 grid grid-cols-[30%_auto]">
      <div className="">
        <img className="" src={img} alt="" />
      </div>
      <div className="px-3">
        <h1 className="text-sm font-semibold">{name}</h1>
        <h2 className="text-xs">${price}</h2>

        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <h1 className="text-sm">Quantity: {quantity}</h1>
            <div className="flex items-center gap-4 bg-blue-100 px-2 ">
              <i
                onClick={() => minusQuanity(name, price, img)}
                className="fa-solid fa-minus cursor-pointer text-xs text-primary hover:text-orange-600 active:scale-150 transition-all"
              ></i>
              <i
                onClick={() => addQuantity(name, price, img)}
                className="fa-solid fa-plus cursor-pointer text-xs text-primary hover:text-orange-600 active:scale-150 transition-all"
              ></i>
            </div>
          </div>
          <i
            className="fa-solid fa-trash  text-red-600  cursor-pointer transition-all hover:text-red-400"
            onClick={() => deleteToCart(name, price, img)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
