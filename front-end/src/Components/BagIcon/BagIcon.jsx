import React, { useState, useContext } from 'react';
import all_products from '../products';
import { cartContext } from '../../Contexts/CartProvider';

const BagIcon = ({ index }) => {
  const [clicked, setClicked] = useState(false);
  const { cartArray, setCartArray } = useContext(cartContext);

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked);
    if (!clicked) {
      setCartArray([...cartArray, all_products[index]]);
    }
  };

  let iconColor = clicked ? 'red' : 'black';

  return (
    <i
      className={`bag-icon fa-solid fa-bag-shopping`}
      style={{ fontSize: '17px', cursor: 'pointer', color: iconColor }}
      onClick={handleClick}
    ></i>
  );
};

export default BagIcon;


