import React, { useState,useContext } from "react";
import "./BasketContaier.css";
import { cartContext } from "../../Contexts/CartProvider";

const BasketContaier = ({ id, name, image, price}) => {
  const [updatedQuantity, setQuantity] = useState(1);
  const { cartArray,setCartArray } = useContext(cartContext);

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, Math.floor(Number(event.target.value)));
    setQuantity(newQuantity);
  
    const updatedCartArray = cartArray.map((items) => {
      if (items.id === id) {
        return { ...items, quantity: newQuantity };
      }
      return items;
    });
    setCartArray(updatedCartArray); 
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
          value={updatedQuantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="basket-subtotal">
        <p>{price * updatedQuantity}</p>
      </div>
      <div className="basket-trash">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default BasketContaier;
