import React from "react";
import Welcome from "./welcome/Welcome";
import Creative from "../creative/Creative";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <h1>Category</h1>
      <Creative/>
    </div>
  );
};

export default MainPages;
