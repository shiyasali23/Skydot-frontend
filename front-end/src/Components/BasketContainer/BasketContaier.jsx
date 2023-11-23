import React, { useState, useContext } from "react";
import "./BasketContaier.css";
import { cartContext } from "../../Contexts/CartProvider";

// ... (imports)

const BasketContainer = ({ id, size }) => {
  const { cartArray, setCartArray } = useContext(cartContext);
  const selectedProduct = cartArray.find((item) => item.id === id);
  const availableQuantity = selectedProduct.stocks[size].availableStock
  const  stocksArray = Array.from({ length: availableQuantity }, (_, index) => index + 1);

  const [updatedQuantity, setQuantity] = useState(1);

  console.log(stocksArray);
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, Math.floor(Number(event.target.value)));
    setQuantity(newQuantity);

    setCartArray((prevCartArray) => {
      const updatedCartArray = prevCartArray.map((items) => {
        if (items.id === id) {
          const updatedItem = {
            ...items,
            quantity: newQuantity,
            stocks: {
              ...items.stocks,
              [size]: {
                ...items.stocks[size],
                userNeeds: newQuantity,
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
      <div className="product-size">
        <p>{size}</p>
      </div>
      <div className="basket-quantity">
      <select name="quantity" id="" onChange={handleQuantityChange}>
        {stocksArray.map((items, index)=>(
          <option value={items} key={index}>{items}</option>
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
