/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
// import Image from "@components/Image";

function DishItem({ dish }) {
  return (
    <div className="dishItem-container">
      <Link to="/dishesinfos">
        <img
          src={dish.image.src}
          alt={dish.image.alt}
          className="dishItem-img"
        />
      </Link>
      <div>
        <p>{dish.itemName}</p>
        <p>à {dish.distance} mètres de moi</p>
      </div>
    </div>
  );
}

export default DishItem;
