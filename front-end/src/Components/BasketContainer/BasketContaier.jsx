import React, { useState } from "react";
import "./BasketContaier.css";

const BasketContaier = ({ id, name, image, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, Math.floor(event.target.value));
    setQuantity(newQuantity);
  };

  return (
    <div className="basket-container" key={id}>
      <div className="basket-image">
        <img src={image} alt="" />
      </div>
      <div className="basket-name">
        <p>{name}</p>
      </div>
      <div className="basket-quantity">
        <label htmlFor="quantity">Qnt</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="basket-subtotal">
        <p>{price * quantity}</p>
      </div>
      <div className="basket-trash">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default BasketContaier;