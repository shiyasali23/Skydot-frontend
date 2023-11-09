import React from "react";
import "./ProductCard.css"
import product_img from "../Resorces/MensShirt-images/Shirt-1.jpg";


const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product_img} alt="" />
      </div>
      <div className="product-details">
        <p className="product-name">MANDARIN COLLAR SHIRT</p>
        <div className="product-price-bag">
          <p className="product-price">$600</p>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
