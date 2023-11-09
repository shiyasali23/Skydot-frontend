import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BasketContaier from "../BasketContainer/BasketContaier";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1>SkyDot</h1>
        </Link>

        <div className="cart-section">
          <p className="cart-quantity"></p>
          <Link style={{ textDecoration: "none", color: "black" }} to="/store">
          <i className="store-icon fa-solid fa-store"></i>
          </Link>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-left">
          <BasketContaier />
        </div>

        <div className="cart-right">
          <div className="subtotal">
            <h5>Subtotal</h5>
            <p>800</p>
          </div>

          <div className="shipping">
            <div className="shipping-selector">
              <div>
                <input type="radio" id="standard-shipping" name="shipping" />
                <label htmlFor="standard-shipping">Standard </label>
              </div>
              <div>
                <input type="radio" id="express-shipping" name="shipping" />
                <label htmlFor="express-shipping">Express </label>
              </div>
            </div>
            <div className="shipping-fee">
              <p>Free</p>
            </div>
          </div>

          <div className="total">
            <h5>Total</h5>
            <p>800</p>
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
