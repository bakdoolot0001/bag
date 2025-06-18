import React, { useState } from "react";
import "./CartCard.scss";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartCard = ({ el, cart }) => {
  const [count, setCount] = useState(1);
  const Dispatch = useDispatch();
  const removeFromCart = () => {
    Dispatch({
      type: "REMOVE_FROM_CART",
      payload: el,
    });
  }
  console.log(cart);
  
  return (
    <div className="cartCard">
      <img src={el?.url} alt="img" />
      <div className="cartCard--content">
        <h2>{el?.name.length > 50 ? el.name.slice(0, 54) + "..." : el.name}</h2>
        <h3>${el?.price}</h3>
      </div>
      <div className="cartCard--quantity">
        {count > 1 ? (
          <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        ) : (
          <button onClick={removeFromCart}><a><FaTrash /></a></button>
        )}
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default CartCard;
