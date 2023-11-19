import React, { useState, createContext } from "react";

export const subTotalContext = createContext();

export const SubTotalProvider = ({ children }) => {
  const [subTotal, setsubTotal] = useState("");

  return (
    <subTotalContext.Provider value={{ subTotal, setsubTotal }}>
      {children}
    </subTotalContext.Provider>
  );
};
