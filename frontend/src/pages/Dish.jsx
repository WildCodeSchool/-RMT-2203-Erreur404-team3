import React, { useState } from "react";
import axios from "axios";

function Dish() {
  const [dishName, setDishName] = useState([]);
  const [dish, setDish] = useState([]);

  const getDish = () => {
    if (dishName.length > 0) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
        .then((res) => {
          console.warn(res.data);
          setDish(res.data[0]);
        });
    }
  };

  console.warn(`dish = ${dish}`);
  return (
    <div className="PageDish">
      <form action="">
        <label htmlFor="a">
          <input
            type="text"
            id="a"
            value={dishName}
            onChange={(event) => setDishName(event.target.value)}
          />
        </label>
      </form>

      <button type="button" onClick={getDish}>
        GET DISH
      </button>

      <p>{dish}</p>
    </div>
  );
}

export default Dish;
// www.themealdb.com/api/json/v1/1/categories.php
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
