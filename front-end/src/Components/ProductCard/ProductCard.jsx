import React from "react";
import "./ProductCard.css";
import BagIcon from "../BagIcon/BagIcon";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <div className="product-card" key={id}>
      <div className="product-img">
        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="product-details">
        <Link style={{ textDecoration: "none", color:"black"}} to={`/product/${id}`}>
          <p className="product-name">{name}</p>
        </Link>

        <div className="product-price-bag">
          <p className="product-price">${price}</p>
          <BagIcon id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
