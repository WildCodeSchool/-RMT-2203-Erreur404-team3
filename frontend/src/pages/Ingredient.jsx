import React from "react";
import GetRecipes from "../components/GetRecipe";
import Button from "../components/Button";

function Ingredient() {
  return (
    <div className="ingredient">
      <GetRecipes />
      <div className="ingredient-button-div">
        <Button link="/geo" text="J'offre !" />
      </div>
    </div>
  );
}

export default Ingredient;
