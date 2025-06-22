import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--content">
            <h1>Bag</h1>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipiscing <br />
              sed do eiusmod.
            </p>
          </div>
          <div className="footer--content">
            <h2>special catagories</h2>
            <NavLink>water resistant</NavLink>
            <NavLink>charging system</NavLink>
            <NavLink>artificial leather</NavLink>
          </div>
          <div className="footer--content">
            <h2>contact us</h2>
            <a href="tel:+996779007909">(808) 555-0111</a>
            <a href="mailto:michelle.rivera@example.com">
              michelle.rivera@example.com
            </a>
            <a href="http://www.codehow.com">http://www.codehow.com</a>
          </div>
          <div className="footer--subscribe">
            <h2>news latter</h2>
            <input type="text" placeholder="enter your email" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
