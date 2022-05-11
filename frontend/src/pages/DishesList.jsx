import React from "react";
import DishItem from "../components/DishItem";
import dishes from "../datas/Dishes";

function DishesList() {
  return (
    <section className="dishesList-container">
      <h2>Liste des plats</h2>
      {dishes.map((dish) => (
        <DishItem key={dish.index} dish={dish} />
      ))}
    </section>
  );
}

export default DishesList;
