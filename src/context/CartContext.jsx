import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, setCartState] = useState(false);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotalPrice(0);
      return;
    }

    let total = 0;
    cartItems.forEach((item, index) => {
      console.log(`${item.quantity} ${item.price}`);
      total += cartItems[index].price * cartItems[index].quantity;
    });

    setTotalPrice(total);
  }, [cartItems]);

  const cartClick = () => {
    setCartState((oldState) => !oldState);
  };

  const addToCart = (name, price, img, quantity) => {
    if (quantity === 0) return;

    const sameItem = cartItems.some(
      (item) => item.name === name && item.price === price && item.img === img
    );

    if (sameItem) {
      if (quantity > 1) {
        setCartItems((prevItems) =>
          prevItems.map((item) => {
            if (
              item.name === name &&
              item.price === price &&
              item.img === img
            ) {
              return { ...item, quantity: item.quantity + quantity };
            } else {
              return { ...item };
            }
          })
        );
        return;
      }

      addQuantity(name, price, img);
      return;
    }

    setCartItems((prevItems) => [
      ...prevItems,
      { name: name, price: price, img: img, quantity: quantity },
    ]);
  };

  const deleteToCart = (name, price, img) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.name !== name && item.price !== price && item.img !== img
      )
    );
  };

  const addQuantity = (name, price, img) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === name && item.price === price && item.img === img) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      })
    );
  };

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    if (count === 0) return;

    setCount((prevCount) => prevCount - 1);
  };

  const minusQuanity = (name, price, img) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === name && item.price === price && item.img === img) {
          if (item.quantity === 1) {
            return { ...item };
          }
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartItems,
        totalPrice,
        count,
        cartClick,
        addToCart,
        deleteToCart,
        addQuantity,
        minusQuanity,
        addCount,
        minusCount,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
