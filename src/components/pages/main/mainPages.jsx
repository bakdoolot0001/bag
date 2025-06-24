import React from "react";
import Welcome from "./welcome/Welcome";
<<<<<<< HEAD
import Creative from "../creative/Creative";
import Our from "../main/our/Our";
=======
import Our from "../our/our";
>>>>>>> 1918bb725b7533de37bde2d0ccd51e20af711623
import Category from "./categories/Category";
import Creative from "./creative/Creative";

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
