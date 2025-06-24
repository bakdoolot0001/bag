import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { favorite } = useSelector((state) => state);
  return (
    <section id="favorite">
      <div className="container">
        <div className="favorite">
          {
            <div className="productCard">
              <img src={el?.url} alt="img" />
              <div className="productCard--content">
                <h2>${el?.price}</h2>
                <p>
                  {el?.name.length > 43
                    ? el.name.slice(0, 43) + "..."
                    : el.name}
                </p>
              </div>
              {!isInFavorite ? (
                <a onClick={() => setFavorite(el)}>
                  <FaRegHeart />
                </a>
              ) : (
                <a onClick={() => delFavorite(el)}>
                  <FaHeart />
                </a>
              )}
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Favorite;
