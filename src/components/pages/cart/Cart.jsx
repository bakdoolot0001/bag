import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../ui/cartCard/CartCard";
import "./Cart.scss";
import EmptyCart from "../../../assets/images/empty-cart.webp";
import Breadcrumbs from "../../../components/ui/breadCrumbs/BreadCrumbs";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const targetTotalPrice = cart.reduce(
    (acc, el) => acc + Number(el.price) * (el.quantity ?? 1),
    0
  );

  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let current = animatedTotal;

    const animate = () => {
      const diff = targetTotalPrice - current;
      if (Math.abs(diff) < 1) {
        setAnimatedTotal(targetTotalPrice);
        return;
      }
      current += diff * 0.2; // 20% жакындоо
      setAnimatedTotal(current);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetTotalPrice]);

  return (
    <section id="cart">
      <div className="container">
        <Breadcrumbs />
        <div className="cart">
          <div className="cart--products">
            {cart.length ? (
              cart.map((el, idx) => <CartCard key={idx} el={el} />)
            ) : (
              <center>
                <img
                  src={EmptyCart}
                  alt="Empty Cart"
                  width={500}
                  height={400}
                />
              </center>
            )}
          </div>
          <div className="cart--total">
            <h1>
              Products, {cart.length} шт.{" "}
              <span>${animatedTotal.toFixed(0)}</span>
            </h1>
            <h1>
              Discount <span>0$</span>
            </h1>
            <h2>
              Total Price <span>${animatedTotal.toFixed(0)}</span>
            </h2>
            <button>Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
