import React, { useEffect, useState } from "react";
import ProductCard from "../../ui/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios, { all } from "axios";
import "./Product.scss";
import { useLocation } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.products);
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  async function getProduct() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/3dfd0-c7d76-08e1f/bag`
    );
    const { data } = res.data;
    setAllProducts(data);
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section id="product">
      <div className="container">
        <div className="product">
          {products?.map((el, idx) => (
            <ProductCard key={idx} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Product;
