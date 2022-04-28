/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import axios from "axios";
import React, { useEffect } from "react";
import FloattingTitle from "./FloattingTitle";
import FloattingText from "./FloattingText";
import Logos from "./Logos";

function GetRecipes() {
  const [data, setData] = React.useState([]);
  const [dishMatch, setDishMatch] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [getButtonData, setGetButtonData] = React.useState("");
  const [mealData, setMealData] = React.useState([]);

  useEffect(() => {
    if (search.length > 0) {
      const getData = async () => {
        const getResult = await axios(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        setData(getResult.data.meals);
      };
      getData();
    }
  }, [search]);

  useEffect(() => {
    const searchDish = (text) => {
      const matches = data.filter((dish) => {
        const regex = new RegExp(`^${text}`, "gi");
        return dish.strMeal.match(regex);
      });
      setDishMatch(matches);
    };
    searchDish(search);
  }, [data]);
  console.warn(getButtonData);

  useEffect(() => {
    if (getButtonData !== "") {
      const getMealData = async () => {
        const getMealResult = await axios(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${getButtonData}`
        );
        setMealData(getMealResult.data.meals);
        console.warn("Le plat :", mealData);
      };
      getMealData();
    }
  }, [getButtonData]);

  if (getButtonData === "") {
    return (
      <div>
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
                    <button
                      checked={isButtonClicked}
                      name="button-choice"
                      type="button"
                      id={index}
                      value={dish.strMeal}
                      className="dish-match"
                      onClick={(e) => setGetButtonData(e.target.value)}
                    >
                      {dish.strMeal}
                    </button>
                  </div>
                ))}
            </label>
          </form>
          <Logos />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-ingredient">
        <FloattingTitle title="Que voilà un beau reste !" />
        {mealData.map((meal, index) => (
          <>
            <div className="dish-info-ingredient" key={index}>
              <p className="dish-info-ingredient-title">{meal.strMeal}</p>
              <img
                className="dish-info-ingredient-img"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
            <FloattingText text="Choisissez la quantité à offir :" />
            <div className="div-ingredient-input">
              <input
                className="ingredient-input"
                list="defaultNumbers"
                placeholder="En portion, soit en moyenne 250g"
              />
              <datalist id="defaultNumbers">
                <option value="1 portion" />
                <option value="2 portions" />
                <option value="3 portions" />
                <option value="4 portions" />
                <option value="5 portions" />
                <option value="6 portions" />
                <option value="7 portions" />
                <option value="8 portions" />
                <option value="9 portions" />
                <option value="10 portions" />
              </datalist>
            </div>
            <div className="comment-ingredient-input">
              <textarea
                cols="1"
                rows="1"
                spellCheck="true"
                className="comment-ingredient-input"
                placeholder="Ajouter votre commentaire ici"
              />
            </div>
          </>
        ))}
        <button
          type="input"
          className="dish-match-after"
          onClick={() => setGetButtonData("")}
        >
          Revenir au choix du plat
        </button>
      </div>
    </div>
  );
}

export default GetRecipes;
