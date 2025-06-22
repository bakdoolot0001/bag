import React from "react";
import "./Creative.scss";
import Bag from "../../../../assets/images/bags.svg";

const Creative = () => {
  return (
    <section id="creative">
      <div className="container">
        <div className="creative">
          <img src={Bag} alt="img" />
          <div className="creative--content">
            <h2>Creative bag only for you.</h2>
            <h1>
              Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit{" "}
              <br /> sed do eiusmod.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              sed do eiusmod tempor incididunt ut labore et dolore <br /> magna
              aliqua. Ut enim ad minim veniam.
            </p>
            <button>see more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
