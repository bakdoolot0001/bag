import React, { useState } from "react";
import bg from "../../../../assets/images/ContactBg.svg";
import "./Contact.scss";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const chat_id = "-1002597947748";
  const token = "7931060770:AAEdgGi4MAjnFVqMltVdmXXg4WjloZAsNqA";
  const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

  const postData = async () => {
    if (!name || !address || !email) {
      toast.error("Please fill in all fields", {
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

    if (!agreed) {
      toast.warn("You must agree to the terms before submitting", {
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

    const message = `
<b>🆕 New Contact Form Submission:</b>\n
<b>👤 Name:</b> ${name
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}\n
<b>🏠 Address:</b> ${address
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}\n
<b>📧 Email:</b> ${email
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}
`;

    await axios.post(api_key, {
      chat_id,
      text: message,
      parse_mode: "HTML",
    });
    toast.success("Data successfully submitted and sent to Telegram!", {
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
    setName("");
    setAddress("");
    setEmail("");
    setAgreed(false);
  };

  return (
    <section id="contact">
      <div className="container">
        <div
          className="contact"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <div className="contact--info">
            <h1>Lorem ipsum dolor sit amet adipiscing elit.</h1>
            <div className="contact--info__inputs">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="contact--info__confirm">
              <div className="contact--info__confirm--config">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <h2>I agree to the terms and conditions</h2>
              </div>
              <button onClick={postData}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
