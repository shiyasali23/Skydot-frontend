import React from "react";
import "./BasketContaier.css";


const BasketContaier = ({id, name, image, price}) => {
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
        <input type="number" id="quantity" name="quantity" min="1" />
      </div>
      <div className="basket-subtotal">
        <p>{price}</p>
      </div>
      <div className="basket-trash">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default BasketContaier;
