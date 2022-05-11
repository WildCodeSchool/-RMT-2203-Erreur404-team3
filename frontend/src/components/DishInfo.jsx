import React from "react";
import "../css/DishInfo.css";
import Button from "./Button";

function DishInfo({ dish }) {
  return (
    <div className="dishInfo-container">
      <article className="DI-back">
        <img src={dish.image.src} alt={dish.image.alt} />
      </article>
      <article className="DI-front">
        <h2>{dish.itemName}</h2>

        <article className="DI-allergenes">
          <h3>Ingredients</h3>
          <div>
            <p>{dish.dishingredient1}</p>
            <p>{dish.dishingredient2}</p>
            <p>{dish.dishingredient3}</p>
          </div>
        </article>
        <article className="DI-description">
          <h3>Quantité</h3>
          <p>{dish.dishnumber}</p>
        </article>
        <article className="DI-description">
          <h3>Description</h3>
          <p>{dish.dishcomment}</p>
        </article>
        <Button link="/chat" text="Choisir ce plat" />
      </article>
    </div>
  );
}

export default DishInfo;
