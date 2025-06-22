import React from "react";
import Welcome from "./welcome/Welcome";
import Creative from "../creative/Creative";
import Our from "../main/our/Our";
import Category from "./categories/Category";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Creative />
      <Category />
      <Our />
    </div>
  );
};

export default MainPages;
