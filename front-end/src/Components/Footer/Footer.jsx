import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       
        <div className="footer-left">
          <h1>
            Sky <br /> Dot.
          </h1>
          <p>Subscibe for early updates</p>
          <form>
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </form>
        </div>
        
        <div className="footer-right">
          <p>Connect</p>
          <div className="social-icons">
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-regular fa-envelope"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      
      </div>
      <div className="footer-bottom">
        <p>
          <i className="fa-solid fa-copyright"></i>Shiyas Ali 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
