import React from "react";
import "./Our.scss";
import bag1 from "../../../assets/images/bag1.svg";
import bag2 from "../../../assets/images/bag2.svg";
import bag3 from "../../../assets/images/bag3.svg";
import bag4 from "../../../assets/images/bag4.svg";
import bag5 from "../../../assets/images/bag5.svg";
import bag6 from "../../../assets/images/bag6.svg";
import bag7 from "../../../assets/images/bag7.svg";
import bag8 from "../../../assets/images/bag8.svg";
import { BsArrowRight } from "react-icons/bs";

const Our = () => {
  return (
    <section id="our">
      <div className="container">
        <div className="our">
          <div className="our--top">
            <h1>our available product</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="our--content">
            <div className="our--content__block1">
              <img src={bag1} alt="img" />
            </div>
            <div className="our--content__block2">
              <img src={bag2} alt="img" />
            </div>
            <div className="our--content__block3">
              <img src={bag3} alt="img" />
            </div>
            <div className="our--content__block4">
              <img src={bag4} alt="img" />
            </div>
            <div className="our--content__block5">
              <img src={bag5} alt="img" />
            </div>
            <div className="our--content__block6">
              <img src={bag6} alt="img" />
            </div>
            <div className="our--content__block7">
              <img src={bag7} alt="img" />
            </div>
            <div className="our--content__block8">
              <img src={bag8} alt="img" />
            </div>
          </div>
          <button>see more <BsArrowRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Our;
