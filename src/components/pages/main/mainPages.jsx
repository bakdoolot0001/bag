import React from "react";
import Welcome from "./welcome/Welcome";
import Our from "../our/our";
import Category from "./categories/Category";
import Creative from "./creative/Creative";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Category />
      <Creative />
      <Our />
    </div>
  );
};
