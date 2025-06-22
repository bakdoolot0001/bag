import React, { useEffect } from "react";
import ProductCard from "../../ui/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Product.scss";
import Breadcrumbs from "../../ui/breadCrumbs/BreadCrumbs";

const Product = () => {
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

  return (
    <section id="product">
      <Breadcrumbs />
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
