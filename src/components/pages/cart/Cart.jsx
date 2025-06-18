import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../ui/cartCard/CartCard";
import { useLocation } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const location = useLocation();
  const totalPrice = cart.reduce((acc, el) => acc + Math.round(+el.price), 0);

  return (
    <section id="cart">
      <div className="container">
        <h1>{location.pathname}</h1>
        <div className="cart">
          <div className="cart--products">
            {cart?.map((el, idx) => (
              <CartCard key={idx} el={el} cart={cart} />
            ))}
          </div>
          <div className="cart--total">
            <h1>Total Price:</h1>
            <h2>{totalPrice}$</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
