import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Footer.scss";
import { toast, Slide } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const chat_id = "-1002597947748";
  const token = "7931060770:AAEdgGi4MAjnFVqMltVdmXXg4WjloZAsNqA";
  const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

  const postData = async () => {
    if (!email) {
      toast.error("Please enter your email", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }

    const message = `<b>🆕 New Subscription:</b>\n<b>📧 Email:</b> ${email
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}`;

    const userData = {
      chat_id: chat_id,
      text: message,
      parse_mode: "HTML",
    };

    const res = await axios.post(api_url, userData);
    toast.success("Email sent successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    setEmail("");
  };

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
            <h2>special categories</h2>
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
            <h2>newsletter</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={postData}>subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
