"use client";
import { useContext } from "react";
import React, { createContext, useState } from "react";

export const CardContext = createContext(null);

export default function CardContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleCardChange = (item) => {
    console.log(item);
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleCardDelete = (item) => {
    if (item.amount != 1) {
      const ind = cart.indexOf(item);
      let arr = cart;
      arr[ind].amount = 1;
    }
    const result = cart.filter((product) => product.id !== item.id);
    setCart(result);
  };

  const increasePrice = (item) => {
    const ind = cart.findIndex((cartItem) => cartItem.id === item.id);
    let arr = [...cart];
    arr[ind].amount = item.amount + 1;
    setCart(arr);
  };

  const decreasePrice = (item) => {
    const ind = cart.findIndex((cartItem) => cartItem.id === item.id);
    let arr = [...cart];
    if (arr[ind].amount > 1) arr[ind].amount = item.amount - 1;
    setCart(arr);
  };

  return (
    <CardContext.Provider
      value={{
        handleCardChange,
        cart,
        setCart,
        handleCardDelete,
        increasePrice,
        decreasePrice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
}
