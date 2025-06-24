import React from "react";
import "./Welcome.scss";
import welImg from "../../../../assets/images/welcome.png";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();

  return (
    <div id="welcome">
      <div className="container">
        <div className="welcome">
          <div className="welcome--content">
            <div className="welcome--content__desing">
              <Typewriter
                options={{
                  strings: [
                    "Crafted with by Kubanych Chyngyz & Bakdoolot",
                    "React • Redux • SCSS • Vite",
                    "Fast, Modern and Stylish Web Apps",
                    "Typewriter Effect in Actiaon",
                    "Join the Future with Asman Studio!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <h1>
              Look Stylish <br /> Be <span>Stylish.</span>
            </h1>
            <p>
              Before starting this business you should have ideas <br /> about
              the market and products to Compete with the <br /> Existing
              Businesses.
            </p>
            <button onClick={() => nav("/product")}>Join Shop</button>
          </div>
          <img src={welImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
