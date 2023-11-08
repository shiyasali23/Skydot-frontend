import React from "react";
import "./Introduction.css";
import intro_image from "../Resorces/Banner-images/Skating.jpg";
import { Link } from "react-router-dom";


const Introduction = () => {
  return (
    <div className="introduction">
        <div className="introduction-logo">
            <h1>SKY <br />DOT</h1>
        </div>
      <div className="introduction-container">
        <div className="introduction-left">
          <p className="introduction-text">
            <span style={{fontWeight: 900}}>Welcome</span> to urban style redefined. Unleash your inner
            fashion icon on the city's canvas. Discover. Express. Elevate. Explore the urban landscape as your fashion playground, where each corner of the city becomes an opportunity to express your unparalleled style
          </p>
          <Link to="/store">
          <button className="store">Store</button></Link>
        </div>
        <div className="introduction-right">
            <div className="introduction-image"> 
            <img  src={intro_image} alt="" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Introduction;
