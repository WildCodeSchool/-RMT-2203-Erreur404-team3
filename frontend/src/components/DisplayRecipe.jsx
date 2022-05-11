import axios from "axios";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FloattingTitle from "./FloattingTitle";

function DisplayRecipe() {
  const [mealData, setMealData] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  const [dishNumber, setDishNumber] = React.useState("");
  const [dishComment, setDishComment] = React.useState("");
  const [usersChatId, setUsersChatId] = React.useState("");

  const { recipe } = useParams();
  useEffect(() => {
    const getMealData = async () => {
      const getMealResult = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
      );
      setMealData(getMealResult.data.meals);
    };
    getMealData();
  }, []);

  axios
    .get(`http://localhost:5000/dishlistf`)
    .then((res) => {
      const getId = res.data.id;
      setUserId(getId);
    })
    .then(() => {
      console.warn("Yes yes !");
    })
    .catch(() => {
      console.warn("No no!");
    });

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    setUsersChatId(randomNumber);
    console.warn("d", usersChatId);
  }, []);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:5000/dishlist/${userId}`, {
        dishname: mealData[0].strMeal,
        dishimage: mealData[0].strMealThumb,
        dishnumber: dishNumber,
        dishcomment: dishComment,
        dishingredient1: mealData[0].strIngredient1,
        dishingredient2: mealData[0].strIngredient2,
        dishingredient3: mealData[0].strIngredient3,
        userschatid: usersChatId,
        id: userId,
      })
      .then(() => {
        console.warn("OK!");
        console.warn(dishNumber);
      })
      .catch(() => {
        console.warn("PAS OK!");
      });
  };

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
                onChange={(e) => setDishNumber(e.target.value)}
              />
              <datalist id="defaultNumbers" value="">
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
                onChange={(e) => setDishComment(e.target.value)}
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
          className="dish-match-after"
          type="submit"
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          Confirmer
        </button>
        <button type="input" className="dish-match-after">
          <Link to="/ingredient">Revenir au choix du plat</Link>
        </button>
      </div>
    </div>
  );
}

export default DisplayRecipe;
