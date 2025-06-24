import React from "react";
import Creative from "../main/creative/Creative";
import Welcome from "./welcome/Welcome";
import Category from "./categories/Category";
import Our from "./our/Our";

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
