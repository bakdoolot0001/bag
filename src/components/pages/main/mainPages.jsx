import React from "react";
import Creative from "../main/creative/Creative";
import Welcome from "./welcome/Welcome";
import Our from "./our/our";
import Category from "./categories/Category";
import Contact from "./contact/Contact";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Creative />
      <Category />
      <Our />
      <Contact />
    </div>
  );
};

export default MainPages;
