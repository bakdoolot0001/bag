import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.dark);

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Bag</h1>
          <div className="header--nav">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/favorite"}>Favorite</NavLink>
            <NavLink to={"/cart"}>Cart</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <button onClick={() => navigate("/admin")}>Admin</button>
            <button
              className="dark"
              onClick={() => dispatch({ type: "DARK_MODE" })}
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
