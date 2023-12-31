import React, { useContext, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BasketContaier from "../BasketContainer/BasketContaier";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { cartContext } from "../../Contexts/CartProvider";

const Cart = () => {
  const { cartArray } = useContext(cartContext);
  const [selectedShipping, setSelectedShipping] = useState("standard");

  const subtotalsArray = cartArray.map((items) => {
    const totalUserNeeds = Object.values(items.stocks).reduce(
      (total, size) => total + size.userNeeds,
      0
    );
    return items.price * totalUserNeeds;
  });
 
  const subtotal = subtotalsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const shippingFee = selectedShipping === "express" ? 40 : 0;
  console.log(cartArray);
  return (
    <div className="cart">
      <div className="cart-header">
        <div className="header-logo">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1>SKYDOT</h1>
        </Link>
        </div>
        <div className="store-section">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <i className="store-icon fa-solid fa-store"></i>
          </Link>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-left">
          {cartArray.map((item) =>
            Object.keys(item.stocks).map((size) =>
              item.stocks[size].userNeeds >= 1 ? (
                <BasketContaier
                  key={`${item.id}-${size}`}
                  id={item.id}
                  size={size}
                />
              ) : null
            )
          )}
        </div>

        <div className="cart-right">
          <div className="subtotal">
            <h5>Subtotal</h5>
            <p>${subtotal}</p>
          </div>

          <div className="shipping">
            <div className="shipping-selector">
              <div>
                <input
                  type="radio"
                  id="standard-shipping"
                  name="shipping"
                  checked={selectedShipping === "standard"}
                  onChange={() => setSelectedShipping("standard")}
                />
                <label htmlFor="standard-shipping">Standard </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="express-shipping"
                  name="shipping"
                  checked={selectedShipping === "express"}
                  onChange={() => setSelectedShipping("express")}
                />
                <label htmlFor="express-shipping">Express </label>
              </div>
            </div>
            <div className="shipping-fee">
              <p>
                {selectedShipping === "standard" ? "Free" : `+${shippingFee}`}
              </p>
            </div>
          </div>

          <div className="total">
            <h5>Total</h5>
            <p>${subtotal + shippingFee}</p>
          </div>
          <div className="chechkout">
            <CheckoutButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
