import React, { useState } from 'react';

const BagIcon = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the value of 'clicked'
  };

  const iconColor = clicked ? 'red' : 'black'; 

  return (
    <i
      className={`bag-icon fa-solid fa-bag-shopping`}
      style={{ fontSize: '17px', cursor: 'pointer', color: iconColor }}
      onClick={handleClick}
    >
    </i>
  );
};

export default BagIcon;
