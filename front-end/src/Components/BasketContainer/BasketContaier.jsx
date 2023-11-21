import React, { useState, useContext } from "react";
import "./BasketContaier.css";
import { cartContext } from "../../Contexts/CartProvider";

// ... (imports)

const BasketContainer = ({ id, size }) => {
  const { cartArray, setCartArray } = useContext(cartContext);
  const selectedProduct = cartArray.find((item) => item.id === id);

  const [updatedQuantity, setQuantity] = useState(1);

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
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={updatedQuantity}
          onChange={handleQuantityChange}
        />
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
