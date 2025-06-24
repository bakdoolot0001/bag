import React from "react";
import Welcome from "./welcome/Welcome";
import Our from "./our/Our";
import Category from "./categories/Category";
import Creative from "./creative/Creative"
const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Category />
      <Creative/>
      <Our />
    </div>
  );
};

export default MainPages;
