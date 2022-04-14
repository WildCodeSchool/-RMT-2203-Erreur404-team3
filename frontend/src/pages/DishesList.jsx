import React from "react";
import DishItem from "../components/DishItem";
import dishes from "../datas/Dishes";

function DishesList() {
  return (
    <div className="dishesList-container">
      <h2>Liste des plats</h2>
      <div>
        {dishes.map((dish) => (
          <DishItem key={dish.index} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default DishesList;
