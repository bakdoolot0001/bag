import React, { useEffect } from "react";
import "./Creative.scss";
import Bag from "../../../../assets/images/bags.svg";
import { useSelector } from "react-redux";

const Creative = () => {
  const { products } = useSelector((s) => s);
  const pop = products.pop();
  console.log(products);
  useEffect(() => {
    pop;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  return (
    <section id="creative">
      <div className="container">
        <h1 className="title">New Items</h1>
        <div className="creative">
          <img src={pop?.url} alt="img" />
          <div className="creative--content">
            <h2>{pop?.name}</h2>
            <h1>{pop?.price}</h1>
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
