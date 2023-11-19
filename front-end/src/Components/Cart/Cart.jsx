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

  const subtotalsArray = cartArray.map((items)=>items.price * items.quantity)
  const subtotal = subtotalsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const shippingFee = selectedShipping === "express" ? 40 : 0;
 
  return (
    <div className="cart">
      <div className="cart-header">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1>SkyDot</h1>
        </Link>

        <div className="cart-section">
          <p className="cart-quantity"></p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/"
          >
            <i className="store-icon fa-solid fa-store"></i>
          </Link>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-left">
          {cartArray.map((items) => (
            <BasketContaier
              key={items.id}
              id={items.id}
              name={items.name}
              image={items.image}
              price={items.price}
            />
          ))}
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
            <p>${subtotal+shippingFee}</p>
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
