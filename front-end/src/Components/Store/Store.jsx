import React from "react";
import Header from "../Header/Header";
import offer_banner from "../../Resorces/Banner-images/offer-banner.jpg";
import "./Store.css";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";

import all_products from "../../products.js"

const Store = () => {

  return (
    <div>
      <Header />
      <div className="offer-banner">
        <img src={offer_banner} alt="#" />
      </div>
      <div className="shop-heading">
        <h1>Shop Now</h1>
      </div>

      <div className="store-container">
        {all_products.map((items)=>(
          <ProductCard key={items.id} image={items.image} name={items.name} price={items.price} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Store;
