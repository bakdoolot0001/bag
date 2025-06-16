import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useDispatch } from "react-redux";
import axios from "axios";

const Admin = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const addProduct = () => {
    if (!url.trim() || !name.trim() || !price.trim()) {
      alert("Please fill in all fields");
    } else {
      const newProduct = {
        id: Date.now(),
        url: url,
        name: name,
        price: price,
      };
      dispatch({
        type: "ADD_PRODUCT",
        payload: newProduct,
      });
      axios.post(
        `https://api-crud.elcho.dev/api/v1/3dfd0-c7d76-08e1f/bag`,
        newProduct
      );
      alert("Product added successfully");
      setUrl("");
      setName("");
      setPrice("");
    }
  };

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Product Url"
            value={url}
          />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            value={name}
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product Price"
            value={price}
          />
          <button onClick={addProduct}>Add Product</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
