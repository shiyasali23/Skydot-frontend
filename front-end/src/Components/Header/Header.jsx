import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/CartProvider";

const Header = () => {
  const { cartArray } = useContext(cartContext);
  const cartLenght = cartArray.length;
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/blog" style={{textDecoration: "none"}}>
            <h1>SKYDOT</h1>
          </Link>
        </div>
        <div className="nav-list">
          <ul>
            <Link style={{ textDecoration: "none" }} to="/">
              <li>Shirts</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/tshirts">
              <li>T-Shirts</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/pants">
              <li>Pants</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="nav-cart-icon">
          <p className="cart-quantity" style={{display: cartLenght > 0? "inline" : "none"}}>{cartLenght}</p>
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <i className="cart-icon fa-solid fa-cart-shopping" style={{display: cartLenght > 0? "inline" : "none"}}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
