import React, { useEffect, useState } from "react";
import "./CartCard.scss";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartCard = ({ el }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: el,
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: el,
    });
  };

  const decrementQuantity = () => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: el,
    });
  };

  const quantity = el.quantity ?? 1;
  const price = el?.price || 0;
  const total = price * quantity;

  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    let current = 0;

    const step = () => {
      current += (total - current) * 0.2;
      if (Math.abs(total - current) < 1) {
        setAnimatedTotal(total);
        return;
      }
      setAnimatedTotal(current);
      requestAnimationFrame(step);
    };

    step();
  }, [total]);

  return (
    <div className="cartCard">
      <img src={el?.url} alt={el?.name || "product image"} />
      <h2>{el?.name.length > 50 ? el.name.slice(0, 54) + "..." : el.name}</h2>
      <div className="cartCard--quantity">
        {quantity > 1 ? (
          <button onClick={decrementQuantity}>-</button>
        ) : (
          <button onClick={removeFromCart}>
            <FaTrash />
          </button>
        )}
        <h2>{quantity}</h2>
        <button onClick={incrementQuantity}>+</button>
      </div>

      <h3>${animatedTotal.toFixed(0)}</h3>
    </div>
  );
};

export default CartCard;
