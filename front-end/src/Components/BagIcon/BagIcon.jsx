import React, { useState, useContext } from "react";
import { cartContext } from "../../Contexts/CartProvider";
import all_products from "../products";

const BagIcon = ({ index, id }) => {
  const [clicked, setClicked] = useState(false);
  const { cartArray, setCartArray } = useContext(cartContext);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
    if (!clicked) {
      setCartArray([...cartArray, all_products.find((item) => item.id === id)]);
    } else {
      setCartArray(cartArray.filter((item) => item.id !== id));
    }
  };

  let iconColor = clicked ? "red" : "black";

  return (
    <i
      className={`bag-icon fa-solid fa-bag-shopping`}
      style={{ fontSize: "17px", cursor: "pointer", color: iconColor }}
      onClick={handleClick}
    ></i>
  );
};

export default BagIcon;