import React, {useContext} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/CartProvider";

const Header = () => {

  const{cartArray} = useContext(cartContext)
  const cartNumber = cartArray.length
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>
            SKY <br />
            DOT
          </h1>
        </div>
        <div className="nav-list">
          <ul>
            <Link style={{ textDecoration: "none" }} to="/">
              <li>Home</li>
            </Link>
            <li>Connect</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav-cart-icon">
          <p className="cart-quantity">{cartNumber}</p>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/cart">
            <i className="cart-icon fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;



