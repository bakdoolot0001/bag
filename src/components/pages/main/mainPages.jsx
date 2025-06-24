import React from "react";
import Welcome from "./welcome/Welcome";
import Our from "../our/our";
import Category from "./categories/Category";
import Creative from "./creative/Creative";
import Contact from "./contact/Contact";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Category />
      <Creative />
      <Our />
      <Contact />
    </div>
  );
};

export default MainPages;
