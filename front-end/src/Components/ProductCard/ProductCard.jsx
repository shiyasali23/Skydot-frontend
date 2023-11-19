import React from "react";
import "./ProductCard.css";
import BagIcon from "../BagIcon/BagIcon";

const ProductCard = ({ image, name, price, id}) => {


  return (
    <div className="product-card" key={id}>
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <div className="product-price-bag">
          <p className="product-price">${price}</p>
          <BagIcon id={id}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
