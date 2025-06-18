import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Bag</h1>
          <div className="header--nav">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/feature"}>feature</NavLink>
            <NavLink to={"/cart"}>Cart</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <button onClick={() => navigate("/admin")}>Admin</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
