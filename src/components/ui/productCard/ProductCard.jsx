import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ el }) => {
  console.log(el);

  return (
    <div className="productCard">
      <img src={el?.url} alt="img" />
      <div className="productCard--content">
        <h2>{el?.name}</h2>
        <p>${el?.price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
