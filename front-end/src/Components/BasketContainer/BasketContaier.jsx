import React from "react";
import "./BasketContaier.css";
import product_img from "../../Resorces/MensShirt-images/Shirt-03.jpg";


const BasketContaier = () => {
  return (
    <div className="basket-container">
      <div className="basket-image">
        <img src={product_img} alt="" />
      </div>
      <div className="basket-name">
        <p>MANDARIN COLLAR SHIRT</p>
      </div>
      <div className="basket-quantity">
        <label htmlFor="quantity">Qnt</label>
        <input type="number" id="quantity" name="quantity" min="1" />
      </div>
      <div className="basket-subtotal">
        <p>700</p>
      </div>
      <div className="basket-trash">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default BasketContaier;
