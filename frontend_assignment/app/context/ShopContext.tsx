import React, { createContext, useState } from "react";
import { useQuery } from "react-query";
import { ProductsFetch } from "@/lib/ProductsFetch";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i <= 20; i++) {
    cart[i] = 0;
  }
  return cart;
};

const CartContextProvider = (props: any) => {
  const [cartItems, setCartItems]: any = useState(getDefaultCart());
  const { data } = useQuery("data", ProductsFetch);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product: any) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return Math.floor(totalAmount);
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextvalue: any = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };

  console.log(cartItems);
  return (
    <CartContext.Provider value={contextvalue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
