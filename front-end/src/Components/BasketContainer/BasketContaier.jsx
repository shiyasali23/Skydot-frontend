import React, { useState, useContext } from "react";
import "./BasketContaier.css";
import { cartContext } from "../../Contexts/CartProvider";



const BasketContainer = ({ id, size }) => {
  const { cartArray, setCartArray } = useContext(cartContext);
  const selectedProduct = cartArray.find((item) => item.id === id);
  const availableQuantity = selectedProduct.stocks[size].availableStock
  const  stocksArray = Array.from({ length: availableQuantity }, (_, index) => index + 1);
  const userNeedQuantity = selectedProduct.stocks[size].userNeeds

  const [updatedQuantity, setQuantity] = useState(userNeedQuantity);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);

    setCartArray((prevCartArray) => {
      const updatedCartArray = prevCartArray.map((items) => {
        if (items.id === id) {
          const updatedItem = {
            ...items,
            stocks: {
              ...items.stocks,
              [size]: {
                ...items.stocks[size],
                userNeeds: parseInt(newQuantity,10),
              },
            },
          };
          return updatedItem;
        }
        return items;
      });
      return updatedCartArray;
    });
  };

  const resetUserNeeds = () => {
    setCartArray((prevCartArray) => {
      const updatedCartArray = prevCartArray.map((items) => {
        if (items.id === id) {
          const updatedItem = {
            ...items,
            stocks: {
              ...items.stocks,
              [size]: {
                ...items.stocks[size],
                userNeeds: 0,
              },
            },
          };
          return updatedItem;
        }
        return items;
      });
      return updatedCartArray;
    });
  };

  const calculateSubtotal = () => {
    return selectedProduct.price * updatedQuantity;
  };

  return (
    <div className="basket-container">
      <div className="basket-image">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div className="basket-name">
        <p>{selectedProduct.name}</p>
      </div>
      <div className="basket-size">
        <p>{size}</p>
      </div>
      <div className="basket-quantity">
      <select onChange={handleQuantityChange} value={updatedQuantity}>
        {stocksArray.map((items, index)=>(
          <option key={index} value={items}>{items}</option>
        ))}
      </select>
      </div>
      <div className="basket-subtotal">
        <p>{calculateSubtotal()}</p>
      </div>
      <div className="basket-trash">
        <i className="fa-solid fa-trash deleticon" onClick={resetUserNeeds}></i>
      </div>
    </div>
  );
};

export default BasketContainer;

