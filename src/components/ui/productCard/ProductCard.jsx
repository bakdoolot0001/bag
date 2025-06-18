import React from "react";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ el }) => {
  const { basket } = useSelector((state) => state);
  const Dispatch = useDispatch();
  function setCart(item) {
    Dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    toast.success("🛒 Товар успешно добавлен в Корзину", {
      position: "top-right",
      theme: "colored",
      closeOnClick: true,
    });
  }
  return (
    <div className="productCard">
      <img src={el?.url} alt="img" />
      <div className="productCard--content">
        <h2>{el?.name.length > 43 ? el.name.slice(0, 43) + "..." : el.name}</h2>
        <p>${el?.price}</p>
      </div>
      <button onClick={() => setCart(el)}>
        Add to Cart <FaShoppingCart />
      </button>
    </div>
  );
};

export default ProductCard;
