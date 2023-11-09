import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
      <div className="footer-left">
      <h1>Sky <br /> Dot.</h1>
        <p>Subscibe for early updates</p>
        <form>
            <input type="email" placeholder='Email' />
            <button>Subscribe</button>
        </form>
      </div>
      <div className="footer-right">
        <p>Connect</p>
        <div className="social-icons">
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-regular fa-envelope"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <p><i class="fa-solid fa-copyright"></i>Shiyas Ali 2023</p>
      </div>
    </div>
  )
}

export default Footer
