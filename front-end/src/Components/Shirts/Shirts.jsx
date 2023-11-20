import React from "react";
import Header from "../Header/Header.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Footer from "../Footer/Footer.jsx";
import all_products from "../products.js";
import "./Shirts.css";
import Gender from "../Gender/Gender.jsx";

const Shirts = () => {
  return (
    <div>
      <Header />
      <Gender />
      <div className="store-container">
      {all_products.map((items) =>
          items.category === "shirt" ? (
            <ProductCard
              key={items.id}
              id={items.id}
              name={items.name}
              image={items.image}
              price={items.price}
              stocks = {items.stocks}
            />
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shirts;
