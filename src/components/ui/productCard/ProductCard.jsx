import React from "react";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const isInCart = cart.some((item) => item._id === el._id);
  const Dispatch = useDispatch();
  function setCart(item) {
    Dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        quantity: 1,
      },
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
        <h2>${el?.price}</h2>
        <p>{el?.name.length > 43 ? el.name.slice(0, 43) + "..." : el.name}</p>
      </div>
     { !isInCart ? <button onClick={() => setCart(el)}>
        Add to Cart <FaShoppingCart />
      </button> :
      <button onClick={() => navigate("/cart")} style={{ backgroundColor: "green" }}> 
        To Basket
        <FaShoppingCart />
      </button> }
    </div>
  );
};

export default ProductCard;
