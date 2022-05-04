import React from "react";
import DisplayRecipe from "../components/DisplayRecipe";
import Button from "../components/Button";

function DisplayIngredient() {
  return (
    <div className="ingredient">
      <DisplayRecipe />
      <div className="ingredient-button-div">
        <Button link="/" text="J'offre !" />
      </div>
    </div>
  );
}

export default DisplayIngredient;
