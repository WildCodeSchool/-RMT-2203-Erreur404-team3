/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from "axios";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FloattingTitle from "./FloattingTitle";

function DisplayRecipe() {
  const [mealData, setMealData] = React.useState([]);
  const { recipe } = useParams();
  useEffect(() => {
    const getMealData = async () => {
      const getMealResult = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
      );
      setMealData(getMealResult.data.meals);
      console.warn("Le plat :", mealData);
    };
    getMealData();
  }, []);

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
            <p className="title-ingredient-input">
              Choisissez la quantité à offir :
            </p>
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
        <button type="input" className="dish-match-after">
          <Link to="/ingredient">Revenir au choix du plat</Link>
        </button>
      </div>
    </div>
  );
}

export default DisplayRecipe;
