import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../Contexts/CartProvider";
import all_products from "../products";

const BagIcon = ({ index, id }) => {
  const [clicked, setClicked] = useState(() => {
    // Retrieve the clicked state from localStorage on component mount
    const storedClicked = localStorage.getItem(`bagIconClicked_${id}`);
    return storedClicked ? JSON.parse(storedClicked) : false;
  });
  const { cartArray, setCartArray } = useContext(cartContext);

  useEffect(() => {
    // Save the clicked state to localStorage whenever it changes
    localStorage.setItem(`bagIconClicked_${id}`, JSON.stringify(clicked));
  }, [clicked, id]);

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
