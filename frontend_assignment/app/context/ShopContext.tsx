import React, { createContext, useState } from "react";
// Creating a new context
export const CartContext = createContext(null);
// A utility function to get the default cart object
const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i <= 20; i++) {
    cart[i] = 0;
  }
  return cart;
};
// The CartContextProvider component

const CartContextProvider = (props: any) => {
  // State to hold the cart items using useState hook

  const [cartItems, setCartItems]: any = useState(getDefaultCart());

  // Function to add an item to the cart

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // The context value that will be provided to the consuming components

  const contextvalue: any = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  // Rendering the provider with the provided context value and children components

  return (
    <CartContext.Provider value={contextvalue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
