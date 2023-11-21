import React, { useState, createContext } from 'react';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const filteredCartArray = cartArray.filter(item => {
    return Object.values(item.stocks).some(size => size.userNeeds > 0);
  });

  return (
    <cartContext.Provider value={{ cartArray:filteredCartArray, setCartArray }}>
      {children}
    </cartContext.Provider>
  );
};
