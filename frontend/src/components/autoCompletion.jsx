/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function AutoComplete() {
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");
  const [, setSuggestions] = useState("");
  const loadMeals = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    setMeals(response.data.meals);
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const onSuggestionHandler = (textSuggestion) => {
    setText(textSuggestion);
    setSuggestions([]);
  };

  return (
    <div className="inputt">
      <h2>Auto-completion exemple :</h2>
      <input
        type="text"
        className="searchInput"
        onChange={(event) => setText(event.target.value)}
        value={text}
        onBlur={() => {
          // cacher suggestions
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      {text === ""
        ? ""
        : meals
            .filter((meal) =>
              meal.strMeal.toUpperCase().includes(text.toUpperCase())
            )
            .map((suggestions) => (
              <div
                key={suggestions.i}
                className="suggestion"
                onClick={() => onSuggestionHandler(suggestions.strMeal)}
              >
                {suggestions.strMeal}
              </div>
            ))}
    </div>
  );
}

export default AutoComplete;
