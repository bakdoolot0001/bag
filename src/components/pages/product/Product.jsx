import React, { useEffect, useState } from "react";
import ProductCard from "../../ui/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Product.scss";

const Product = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [find, setFind] = useState([]);

  async function getProduct() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/3dfd0-c7d76-08e1f/bag`
    );
    const { data } = res.data;
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
    setFind(data);
  }

  function getFind(el) {
    if (el === "expensive") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setFind(sorted);
    } else if (el === "cheap") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setFind(sorted);
    } else {
      setFind(products); 
    }
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="product">
      <div className="container">
        <select onChange={(e) => getFind(e.target.value)} defaultValue="">
          <option value="">All</option>
          <option value="expensive">Expensive</option>
          <option value="cheap">Cheap</option>
        </select>
        <div className="product">
          {find?.map((el, idx) => (
            <ProductCard key={idx} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
