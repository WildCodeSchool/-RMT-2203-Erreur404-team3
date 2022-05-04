/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import FloattingTitle from "./FloattingTitle";
import Logos from "./Logos";

function GetRecipes() {
  const [dishMatch, setDishMatch] = React.useState("");
  const [search, setSearch] = React.useState("");

  const searchDish = (text, data) => {
    const matches = data.filter((dish) => {
      const regex = new RegExp(`^${text}`, "gi");
      return dish.strMeal.match(regex);
    });
    setDishMatch(matches);
  };

  const getData = async () => {
    const getResult = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    searchDish(search, getResult.data.meals);
  };

  useEffect(() => {
    if (search.length > 0) {
      getData();
    }
  }, [search]);

  return (
    <div>
      <div className="logo-get-recipte">
        <Logos />
      </div>
      <FloattingTitle title="Que souhaites-tu offrir ?" />
      <div className="container-ingredient">
        <form className="form-ingredient">
          <label htmlFor="a">
            <input
              className="input-ingredient"
              type="text"
              id="a"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {dishMatch &&
              dishMatch.map((dish, index) => (
                <div key={index}>
                  <Link
                    className="dish-match"
                    to={`/displayingredient/${dish.strMeal}`}
                  >
                    {dish.strMeal}
                  </Link>
                </div>
              ))}
          </label>
        </form>
      </div>
    </div>
  );
}

export default GetRecipes;
