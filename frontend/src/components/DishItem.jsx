import React from "react";
import { Link } from "react-router-dom";

function DishItem({ dish }) {
  return (
    <div className="dishItem-container">
      <Link to={`/dishesinfos/${dish.id}`}>
        <img
          src={dish.dishimage}
          alt={dish.dishname}
          className="dishItem-img"
        />
      </Link>
      <div>
        <p>{dish.dishname}</p>
        <p>
          à {dish.userschatid} mètres de moi par {dish.userfirstname}
          {dish.userlastname}
        </p>
      </div>
    </div>
  );
}

export default DishItem;
