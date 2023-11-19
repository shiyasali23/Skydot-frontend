import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./ProductPage.css";
import Footer from "../Footer/Footer";
import all_products from "../products";


const ProductPage = () => {
  const { id } = useParams();
  const selectedProduct = all_products.find((item) => item.id === id);

  const [imgArray] = useState([selectedProduct.image, selectedProduct.image, selectedProduct.image, selectedProduct.image]);
  const [selectedImg, setSelectedImg] = useState(imgArray[0]);

  const changeImg = (index) => {
    setSelectedImg(imgArray[index]);
  };

  
  return (
    <div className="product-page">
      <Header />
      <div className="display-container">
        <div className="display-left">
          <div className="display-left-top">
            <img src={selectedImg} alt="" />
          </div>
          <div className="display-left-bottom">
            {imgArray.map((item, index) => (
              <div className="sub-img" key={index}>
                <img src={item} alt="" onClick={() => changeImg(index)} />
              </div>
            ))}
          </div>
        </div>
        {/* ------------------Right--------------- */}
        <div className="display-right">
          <div className="display-right-top">
            <div className="product-name">
              <p>{selectedProduct?.name}</p>
            </div>
            <div className="product-price">
              <p>{selectedProduct?.price}</p>
            </div>
            <div className="sizes">
              <p>Select Size</p>
              <div className="sizes-icons">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className="add-cart">
              <button>
                <i class="fa-solid fa-bag-shopping"></i>Add
              </button>
            </div>
          </div>
          <div className="display-right-bottom">
            <h3>Product Details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              inventore culpa dolores eum voluptatibus, commodi explicabo ut qui
              nostrum quidem voluptatem debitis officiis vitae
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
