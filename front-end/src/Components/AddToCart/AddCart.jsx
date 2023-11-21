import React, { useState, useContext } from "react";
import "./AddCart.css";
import { cartContext } from "../../Contexts/CartProvider";
import all_products from "../products";

const AddCart = ({ id }) => {
  const { cartArray, setCartArray } = useContext(cartContext);
  const selectedProduct = all_products.find((item) => item.id === id);
  const [sizesArray] = useState(
    Object.keys(selectedProduct.stocks).filter(
      (size) => selectedProduct.stocks[size].availableStock > 0
    ),
  );
  
  const [selectedSizes, setSelectedSizes] = useState([]);
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
    <div className="addCart-container">
      <div className="sizes-container">
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

      <div className="bag-container">
      <i className="fa-solid fa-bag-shopping" onClick={AddToCart}></i>
      </div>
    </div>
  );
};

export default AddCart;
