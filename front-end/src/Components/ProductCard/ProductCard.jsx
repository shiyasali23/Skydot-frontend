import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import AddCart from "../AddToCart/AddCart";

const ProductCard = ({ id, name, image, price, stocks }) => {
  return (
    <div className="product-card" key={id}>
      <div className="product-img">
        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="product-details">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${id}`}
        >
          <p className="product-name">{name}</p>
        </Link>

        <p className="product-price">${price}</p>
        <AddCart id={id} stocks={stocks} />
      </div>
    </div>
  );
};

export default ProductCard;
