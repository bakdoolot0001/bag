import React, { useEffect } from "react";
import "./Category.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../../../ui/productCard/ProductCard";
import axios from "axios";
const Category = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  async function getProduct() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/3dfd0-c7d76-08e1f/bag`
    );
    const { data } = res.data;
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  }

  useEffect(() => {
    getProduct();
  }, []);

  const [categories, setCategories] = useState("water resistant");

  const category = [
    "water resistant",
    "charging system",
    "artificial leather",
    "modern clothes",
  ];
  console.log(categories);

  return (
    <div id="category">
      <div className="container">
        <div className="category">
          <div className="category--block">
            {category.map((el) => (
              <a
                onClick={() => setCategories(el)}
                className={classNames("dsjgkoerhkh", {
                  "is-active": categories === el,
                })}
              >
                {el}
              </a>
            ))}
          </div>
          <div className="category--products">
            {products.map((el, id) => (
              <ProductCard el={el} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
