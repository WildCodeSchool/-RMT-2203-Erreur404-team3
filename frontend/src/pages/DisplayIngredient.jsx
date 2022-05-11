import React from "react";
import DisplayRecipe from "../components/DisplayRecipe";
import Button from "../components/Button";

function DisplayIngredient() {
  return (
    <section className="displayIngredient">
      <DisplayRecipe />
      <div className="ingredient-button-div">
        <Button link="/Chat" text="J'offre !" />
      </div>
    </section>
  );
}

export default DisplayIngredient;
