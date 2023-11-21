import React, { useState,useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./ProductPage.css";
import Footer from "../Footer/Footer";
import all_products from "../products";
import { cartContext } from "../../Contexts/CartProvider";

const ProductPage = () => {
  const { id } = useParams();

  const selectedProduct = all_products.find((item) => item.id === id);
  const [sizesArray] = useState(
    Object.keys(selectedProduct.stocks).filter(
      (size) => selectedProduct.stocks[size].availableStock > 0
    )
  );
  const { cartArray, setCartArray } = useContext(cartContext);

  const [selectedSizes, setSelectedSizes] = useState([]);


  const [imgArray] = useState([
    selectedProduct.image,
    selectedProduct.image,
    selectedProduct.image,
    selectedProduct.image,
  ]);
  const [selectedImg, setSelectedImg] = useState(imgArray[0]);

  const changeImg = (index) => {
    setSelectedImg(imgArray[index]);
  };

  const handleSizeClick = (size) => {
    const isSelected = selectedSizes.includes(size);
    if (isSelected) {
      setSelectedSizes(selectedSizes.filter((selected) => selected !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const createUpdatedProduct = () => {
    return {
      ...selectedProduct,
      stocks: {
        ...selectedProduct.stocks,
        ...Object.fromEntries(
          selectedSizes.map((size) => [
            size,
            { ...selectedProduct.stocks[size], userNeeds: 1 },
          ])
        ),
      },
    };
  };

  const findAndUpdateCart = (updatedProduct) => {
    const existingProductIndex = cartArray.findIndex(
      (item) => item.id === updatedProduct.id
    );
    const newCartArray =
      existingProductIndex !== -1
        ? [
            ...cartArray.slice(0, existingProductIndex),
            updatedProduct,
            ...cartArray.slice(existingProductIndex + 1),
          ]
        : [...cartArray, updatedProduct];

    setCartArray(newCartArray);
  };

  const AddToCart = () => {
    if (selectedSizes.length === 0) return;
    const updatedProduct = createUpdatedProduct();
    findAndUpdateCart(updatedProduct);
  };
  return (
    <div className="product-page">
      <Header />
      <div className="display-container">
        <div className="display-left">
          <div className="display-left-top">
            <div className="main-img">
            <img src={selectedImg} alt="" />
            </div>
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
              {sizesArray.map((size) => (
                <button
                  key={size}
                  style={{
                    background: selectedSizes.includes(size)
                      ? "black"
                      : "transparent",
                    color: selectedSizes.includes(size) ? "white" : "black",
                  }}
                  className="size-button"
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
              </div>
              <button onClick={AddToCart}>Add Cart</button>
            </div>
          </div>

          <div className="display-right-bottom">
            <h1>Product Details</h1>
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
